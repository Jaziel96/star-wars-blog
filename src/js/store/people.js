export const peopleStore={
    people:[],
    peopleFavorite:[],
    peopleDetail: {},
    peopleLimit: 10,
    peopleCurrentPage: 1,
    peopleTotalPage: 0,
    peopleTotalRecords: 0
}

export function peopleActions(getStore, getActions, setStore){
    return {
        loadPeople: async() => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/people?page=${store.peopleCurrentPage}&limit=${store.peopleLimit}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    people: results.results,
                    peopleTotalPage: results.total_pages,
                    peopleTotalRecords: results.total_records
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        loadPeopleDetail: async(id) => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/people/${id}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    peopleDetail: results.result.properties
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        goToPagePeople: async(page, limit = 0) => {
            const store = getStore()
            setStore({
                ...store,
                peopleCurrentPage: page,
                peopleLimit: limit == 0 ? store.peopleLimit : limit
            })
            const actions = getActions()
            await actions.loadPeople()
        }
    }
}