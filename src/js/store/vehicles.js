export const vehiclesStore = {
    vehicles:[],
    vehiclesFavorite:[],
    vehicleDetail: {},
    vehiclesLimit: 10,
    vehiclesCurrentPage: 1,
    vehiclesTotalPage: 0,
    vehiclesTotalRecords: 0
}

export function vehiclesActions( getStore, getActions, setStore){
    return {
        loadVehicles: async() => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/vehicles?page=${store.vehiclesCurrentPage}&limit=${store.vehiclesLimit}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    vehicles: results.results,
                    vehiclesTotalPage: results.total_pages,
                    vehiclesTotalRecords: results.total_records
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        loadVehicleDetail: async(id) => {
            try{
                const store = getStore()
                let results = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
                results = await results.json()
                
                setStore({
                    ...store,
                    vehicleDetail: results.result.properties
                })
                return results
            } 
            catch(err){console.log(err)}
        },
        goToPageVehicle: async(page, limit = 0) => {
            const store = getStore()
            setStore({
                ...store,
                vehiclesCurrentPage: page,
                vehiclesLimit: limit == 0 ? store.vehiclesLimit : limit
            })
            const actions = getActions()
            await actions.loadVehicles()
        }
    }
}