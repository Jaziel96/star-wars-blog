export const planetsStore={
    planets:[],
    planetsFavorite:[],
    planetDetail: {},
    planetsLimit: 10,
    planetsCurrentPage: 1,
    planetsTotalPage: 0,
    planetsTotalRecords: 0
}

export function planetsActions(getStore, getActions, setStore){
    return {
        loadPlanets: async() => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/planets?page=${store.planetsCurrentPage}&limit=${store.planetsLimit}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    planets: results.results,
                    planetsTotalPage: results.total_pages,
                    planetsTotalRecords: results.total_records
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        loadPlanetDetail: async(id) => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/planets/${id}`)
                results = await results.json()
                console.log(results)
                setStore({
                    ...store,
                    planetDetail: results.result.properties
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        goToPagePlanet: async(page, limit = 0) => {
            const store = getStore()
            setStore({
                ...store,
                planetsCurrentPage: page,
                planetsLimit: limit == 0 ? store.planetsLimit : limit
            })
            const actions = getActions()
            await actions.loadPlanets()
        }
    }
}

 