import React, { useContext } from 'react'
import {Context} from '../../store/appContext'
import {Link} from 'react-router-dom'

export default function ListPlanets(props){
    const {store, actions} = useContext(Context)
    let imgUrl = "https://starwars-visualguide.com/assets/img/planets"

    return(
        <div>
            <h1> Planets</h1>
            <ul className="list-group list-group-horizontal overflow-auto">
                {store.planets.length > 0 ? store.planets.map((planet, index)=>{
                    return(
                        <li key={index} className="list-group-item" style={{background: "black"}}>
                            <div className="card">
                                <img src={`${imgUrl}/${planet.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.name}</h5>                    
                                    <Link to={`/planets/${planet.uid}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </li> 
                    )
                }) : <h1>No data available</h1> }
            </ul> 
        </div>
    )
}