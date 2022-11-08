import React, { useContext } from 'react'
import {Context} from '../../store/appContext'
import {Link} from 'react-router-dom'

export default function ListStarships(){
    const {store, actions} = useContext(Context)
    let imgUrl = "https://starwars-visualguide.com/assets/img/starships"

    return(
        <div>
            <h1> Starships</h1>
            <ul className="list-group list-group-horizontal overflow-auto">
                {store.starships.length > 0 ? store.starships.map((starship, index)=>{
                    return(
                        <li key={index} className="list-group-item" style={{background: "black"}}>
                            <div className="card">
                                <img src={`${imgUrl}/${starship.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{starship.name}</h5>                    
                                    <Link to={`/starships/${starship.uid}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </li> 
                    )
                }) : <h1>No data available</h1> }
            </ul> 
        </div>
    )
}