import React, { useEffect, useContext } from 'react'
import {Context} from '../../store/appContext'
import { useParams } from 'react-router-dom'

export default function DetailPeople(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    let imgUrl = "https://starwars-visualguide.com/assets/img/characters"

    useEffect(async() => {
        await actions.loadPeopleDetail(params.peopleId)
    }, [])

    return (<div className="card mb-3" style={{background: "black"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${imgUrl}/${params.peopleId}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Character information:</h1><br></br>
                        <p className="card-text"><b>Name: </b>{store.peopleDetail.name}</p>
                        <p className="card-text"><b>Mass: </b>{store.peopleDetail.mass}</p>
                        <p className="card-text"><b>Hair color: </b>{store.peopleDetail.hair_color}</p>
                        <p className="card-text"><b>Skin color: </b>{store.peopleDetail.skin_color}</p>
                        <p className="card-text"><b>Eye color: </b>{store.peopleDetail.eye_color}</p>
                        <p className="card-text"><b>Birth year: </b>{store.peopleDetail.birth_year}</p>
                        <p className="card-text"><b>Gender: </b>{store.peopleDetail.gender}</p>
                        <p className="card-text"><b>Height: </b>{store.peopleDetail.height}</p>
                        <p className="card-text">
                            <b>Homeworld: </b> 
                            <a href="${store.specieDetail.homeworld}">{store.peopleDetail.homeworld}</a>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}