import React from 'react'
import { Outlet } from 'react-router-dom'
import ListSpecies from '../../component/species/listSpecies'

export default function Species(){
    return (
    <div>
        <h1>Species</h1>
        <ListSpecies />
    </div>)
}