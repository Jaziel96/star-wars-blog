import React, { useEffect, useContext } from 'react'
import {Context} from '../../store/appContext'
import { useParams } from 'react-router-dom'

export default function DetailStarships(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    let imgUrl = "https://starwars-visualguide.com/assets/img/starships"

    useEffect(async() => {
        await actions.loadStarshipDetail(params.starshipsId)
    }, [])

    return (<div className="card mb-3" style={{background: "black"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${imgUrl}/${params.starshipsId}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Starship information:</h1><br></br>
                        <p className="card-text"><b>Name: </b>{store.starshipDetail.name}</p>
                        <p className="card-text"><b>Model: </b>{store.starshipDetail.model}</p>
                        <p className="card-text"><b>Starship class: </b>{store.starshipDetail.starship_class}</p>
                        <p className="card-text"><b>Manufacturer: </b>{store.starshipDetail.manufacturer}</p>
                        <p className="card-text"><b>Cargo capacity: </b>{store.starshipDetail.cargo_capacity}</p>
                        <p className="card-text"><b>Length: </b>{store.starshipDetail.length}</p>
                        <p className="card-text"><b>Crew: </b>{store.starshipDetail.crew}</p>
                        <p className="card-text"><b>Passengers: </b>{store.starshipDetail.passengers}</p>
                        <p className="card-text">
                            <b>Specifications: </b> 
                            <a href="${store.starshipDetail.url}">{store.starshipDetail.url}</a>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}