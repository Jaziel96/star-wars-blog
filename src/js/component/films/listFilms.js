import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import {Link} from 'react-router-dom'


export default function ListFilms(){
    const {store, actions}=useContext(Context)
    let imgUrl= "https://starwars-visualguide.com/assets/img/films"
    return (
        <div>
        <h1>Films</h1>
        <ul className='list-group list-group-horizontal overflow-auto'>
            {store.films.length > 0 ? store.films.map((film, index)=>{
                return (
                    <li key={index} className="list-group-item" style={{background: "black"}}>
                        <div className='card'>
                            <img src={`${imgUrl}/${film.uid}.jpg`} className="card-img-top" alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title'>{film.properties.title}</h5>
                                <Link to={`/films/${film.uid}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </li> 
                )
            }) : <h1>No data available</h1> }
        </ul> 
        </div>
    )
}