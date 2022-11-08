import React, { useEffect, useContext } from 'react'
import {Context} from '../../store/appContext'
import { useParams } from 'react-router-dom'

export default function DetailPlanets(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    let imgUrl = "https://starwars-visualguide.com/assets/img/planets"

    useEffect(async() => {
        await actions.loadPlanetDetail(params.planetsId)
    }, [])

    return (<div className="card mb-3" style={{background: "black"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${imgUrl}/${params.planetsId}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Planet information:</h1><br></br>
                        <p className="card-text"><b>Name: </b>{store.planetDetail.name}</p>
                        <p className="card-text"><b>Rotation period: </b>{store.planetDetail.rotation_period}</p>
                        <p className="card-text"><b>Orbital period: </b>{store.planetDetail.orbital_period}</p>
                        <p className="card-text"><b>Gravity: </b>{store.planetDetail.gravity}</p>
                        <p className="card-text"><b>Population: </b>{store.planetDetail.population}</p>
                        <p className="card-text"><b>Climate: </b>{store.planetDetail.climate}</p>
                        <p className="card-text"><b>Terrain: </b>{store.planetDetail.terrain}</p>
                        <p className="card-text"><b>Diameter: </b>{store.planetDetail.diameter}</p>
                        <p className="card-text">
                            <b>Specifications: </b> 
                            <a href="${store.specieDetail.url}">{store.planetDetail.url}</a>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}