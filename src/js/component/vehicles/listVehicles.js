import React, { useContext } from 'react'
import {Context} from '../../store/appContext'
import {Link} from 'react-router-dom'

export default function ListVehicles(){
    const {store, actions} = useContext(Context)
    let imgUrl = "https://starwars-visualguide.com/assets/img/vehicles"

    return(
        <div>
            <h1> Vehicles</h1>
            <ul className="list-group list-group-horizontal overflow-auto">
                {store.vehicles.length > 0 ? store.vehicles.map((vehicle, index)=>{
                    return(
                        <li key={index} className="list-group-item" style={{background: "black"}}>
                            <div className="card">
                                <img src={`${imgUrl}/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.name}</h5>                    
                                    <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </li> 
                    )
                }) : <h1>No data available</h1> }
            </ul> 
        </div>
    )
}
