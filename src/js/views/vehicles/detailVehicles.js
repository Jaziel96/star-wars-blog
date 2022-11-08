import React, { useEffect, useContext } from 'react'
import {Context} from '../../store/appContext'
import { useParams } from 'react-router-dom'

export default function DetailVehicles(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    let imgUrl = "https://starwars-visualguide.com/assets/img/vehicles"

    useEffect(async() => {
        await actions.loadVehicleDetail(params.vehiclesId)
    }, [])

    return (<div className="card mb-3" style={{background: "black"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${imgUrl}/${params.vehiclesId}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Vehicle information:</h1><br></br>
                        <p className="card-text"><b>Name: </b>{store.vehicleDetail.name}</p>
                        <p className="card-text"><b>Model: </b>{store.vehicleDetail.model}</p>
                        <p className="card-text"><b>Vehicle class: </b>{store.vehicleDetail.vehicle_class}</p>
                        <p className="card-text"><b>Manufacturer: </b>{store.vehicleDetail.manufacturer}</p>
                        <p className="card-text"><b>Cost in credits: </b>{store.vehicleDetail.cost_in_credits}</p>
                        <p className="card-text"><b>Length: </b>{store.vehicleDetail.length}</p>
                        <p className="card-text"><b>Crew: </b>{store.vehicleDetail.crew}</p>
                        <p className="card-text"><b>Max atmosphering speed: </b>{store.vehicleDetail.max_atmosphering_speed}</p>
                        <p className="card-text">
                            <b>Specifications: </b> 
                            <a href="${store.vehicleDetail.url}">{store.vehicleDetail.url}</a>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}