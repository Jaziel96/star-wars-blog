import React from 'react'
import { Outlet } from 'react-router-dom'
import ListPeople from '../../component/people/listPeople'

export default function People(){
    return (
        <div>
            <h1>People</h1>
            <ListPeople />
        </div>)
}