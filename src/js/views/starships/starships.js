import React from 'react'
import { Outlet } from 'react-router-dom'
import ListStarships from '../../component/starships/listStarships'

export default function Starships(){
    return (
    <div>
        <h1>Starships</h1>
        <ListStarships />
    </div>)
}