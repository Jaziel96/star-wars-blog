export const speciesStore = {
    species:[],
    speciesFavorite:[],
    specieDetail: {},
    speciesLimit: 10,
    speciesCurrentPage: 1,
    speciesTotalPage: 0,
    speciesTotalRecords: 0
}

export function speciesActions( getStore, getActions, setStore){
    return {
        loadSpecies: async() => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/species?page=${store.speciesCurrentPage}&limit=${store.speciesLimit}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    species: results.results,
                    speciesTotalPage: results.total_pages,
                    speciesTotalRecords: results.total_records
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        loadSpecieDetail: async(id) => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/species/${id}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    specieDetail: results.result.properties
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        goToPageSpecie: async(page, limit = 0) => {
            const store = getStore()
            setStore({
                ...store,
                speciesCurrentPage: page,
                speciesLimit: limit == 0 ? store.speciesLimit : limit
            })
            const actions = getActions()
            await actions.loadSpecies()
        }
    }
}