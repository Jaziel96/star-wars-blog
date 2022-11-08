import React, {useContext} from "react";
import "../../styles/home.css";
import ListFilms from "../component/films/listFilms";
import ListPeople from "../component/people/listPeople";
import ListPlanets from "../component/planets/listPlanets";
import ListStarships from "../component/starships/listStarships";
import ListSpecies from '../component/species/listSpecies'
import ListVehicles from '../component/vehicles/listVehicles'

export const Home = () => {
	
	return (
		<div>
			<h1 className="text-center mt-5">APP Star Wars</h1>
			<div className="text-justify mt-5">
				<ListFilms />
				<ListPeople />
				<ListPlanets />
				<ListSpecies />
				<ListStarships />
				<ListVehicles />
			</div>
		</div>
	)
};