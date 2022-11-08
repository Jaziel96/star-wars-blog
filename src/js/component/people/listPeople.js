import React, { useContext } from 'react'
import {Context} from '../../store/appContext'
import {Link} from 'react-router-dom'

export default function ListPeople(){
    const {store, actions} = useContext(Context)
    let imgUrl = "https://starwars-visualguide.com/assets/img/characters"

    return(
        <div>
            <h1> Characters</h1>
            <ul className="list-group list-group-horizontal overflow-auto">
                {store.people.length > 0 ? store.people.map((person, index)=>{
                    return(
                        <li key={index} className="list-group-item" style={{background: "black"}}>
                            <div className="card">
                                <img src={`${imgUrl}/${person.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>                    
                                    <Link to={`/people/${person.uid}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </li> 
                    )
                }) : <h1>No data available</h1> }
            </ul> 
        </div>
    )
}