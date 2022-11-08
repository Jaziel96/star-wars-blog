export const starshipsStore={
    starships:[],
    starshipsFavorite:[],
    starshipDetail: {},
    starshipsLimit: 10,
    starshipsCurrentPage: 1,
    starshipsTotalPage: 0,
    starshipsTotalRecords: 0
}

export function starshipsActions( getStore, getActions, setStore){
    return {
        loadStarships: async() => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/starships?page=${store.starshipsCurrentPage}&limit=${store.starshipsLimit}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    starships: results.results,
                    starshipsTotalPage: results.total_pages,
                    starshipsTotalRecords: results.total_records
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        loadStarshipDetail: async(id) => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/starships/${id}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    starshipDetail: results.result.properties
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        goToPageStarship: async(page, limit = 0) => {
            const store = getStore()
            setStore({
                ...store,
                starshipsCurrentPage: page,
                starshipsLimit: limit == 0 ? store.starshipsLimit : limit
            })
            const actions = getActions()
            await actions.loadStarship()
        }
    }
}