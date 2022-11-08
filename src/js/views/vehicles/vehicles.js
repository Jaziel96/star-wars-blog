import React from 'react'
import { Outlet } from 'react-router-dom'
import ListVehicles from '../../component/vehicles/listVehicles'

export default function Vehicles(){
    return (
    <div>
        <h1>Vehicles</h1>
        <ListVehicles />
    </div>)
}