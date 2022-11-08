import React, { useEffect, useContext } from 'react'
import {Context} from '../../store/appContext'
import { useParams } from 'react-router-dom'

export default function DetailFilms(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    let imgUrl = "https://starwars-visualguide.com/assets/img/films"

    useEffect(async() => {
        await actions.loadFilmDetail(params.filmsId)
    }, [])

    return (<div className="card mb-3" style={{background: "black"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`${imgUrl}/${params.filmsId}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Film information:</h1><br></br>
                        <p className="card-text"><b>Created: </b>{store.filmDetail.created}</p>
                        <p className="card-text"><b>Edited: </b>{store.filmDetail.edited}</p>
                        <p className="card-text"><b>Producer: </b>{store.filmDetail.producer}</p>
                        <p className="card-text"><b>Title: </b>{store.filmDetail.title}</p>
                        <p className="card-text"><b>Episode No: </b>{store.filmDetail.episode_id}</p>
                        <p className="card-text"><b>Director: </b>{store.filmDetail.director}</p>
                        <p className="card-text"><b>Release date: </b>{store.filmDetail.release_date}</p>
                        <p className="card-text"><b>Opening crawl: </b>{store.filmDetail.opening_crawl}</p>
                        <p className="card-text">
                            <b>URL: </b> 
                            <a href="${store.filmDetail.url}">{store.filmDetail.url}</a>
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}