export const filmsStore = {
    films:[],
    filmsFavorite:[],
    filmDetail: {},
    filmsLimit: 10,
    filmsCurrentPage: 1,
    filmsTotalPage: 0,
    filmsTotalRecords: 0
}

export function filmsActions( getStore, getActions, setStore){
    return {
        loadFilms: async() => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/films?page=${store.filmsCurrentPage}&limit=${store.filmsLimit}`)
                results = await results.json()
                    
                setStore({
                    ...store,
                    films: results.result,
                    filmsTotalPage: results.total_pages,
                    filmsTotalRecords: results.total_records
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        loadFilmDetail: async(id) => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/films/${id}`)
                results = await results.json()
                console.log(results)
                setStore({
                    ...store,
                    filmDetail: results.result.properties
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        goToPageFilm: async(page, limit = 0) => {
            const store = getStore()
            setStore({
                ...store,
                filmsCurrentPage: page,
                filmsLimit: limit == 0 ? store.filmsLimit : limit
            })
            const actions = getActions()
            await actions.loadFilms()
        }
    }
}
