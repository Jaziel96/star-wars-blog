import React from 'react'
import { Outlet } from 'react-router-dom'
import ListFilms from '../../component/films/listFilms'

export default function Films(){
    return (
        <div>
            <h1>Films</h1>
            <ListFilms/>
        </div>
    )
}