import React from 'react'
import { Outlet } from 'react-router-dom'
import ListPlanets from '../../component/planets/listPlanets'

export default function Planets(){
    return (
    <div>
        <h1>Planets</h1>
        <ListPlanets />
    </div>)
}