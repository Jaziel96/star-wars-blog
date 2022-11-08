import React, { useEffect, useContext } from 'react'
import {Context} from '../../store/appContext'
import { useParams } from 'react-router-dom'

export default function DetailSpecies(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    let imgUrl = "https://starwars-visualguide.com/assets/img/species"

    useEffect(async() => {
        await actions.loadSpecieDetail(params.speciesId)
    }, [])

    return (<div className="card mb-3" style={{background: "black"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${imgUrl}/${params.speciesId}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Specie information:</h1><br></br>
                        <p className="card-text"><b>Classification: </b>{store.specieDetail.classification}</p>
                        <p className="card-text"><b>Designation: </b>{store.specieDetail.designation}</p>
                        <p className="card-text"><b>Average height: </b>{store.specieDetail.average_height}</p>
                        <p className="card-text"><b>Average lifespan: </b>{store.specieDetail.average_lifespan}</p>
                        <p className="card-text"><b>Hair colors: </b>{store.specieDetail.hair_colors}</p>
                        <p className="card-text"><b>Skin colors: </b>{store.specieDetail.skin_colors}</p>
                        <p className="card-text"><b>Eye colors: </b>{store.specieDetail.eye_colors}</p>
                        <p className="card-text"><b>Language: </b>{store.specieDetail.language}</p>
                        <p className="card-text">
                            <b>Homeworld: </b> 
                            <a href="${store.specieDetail.homeworld}">{store.specieDetail.homeworld}</a>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}