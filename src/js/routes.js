import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import Films from "./views/films/films";
import DetailFilms from "./views/films/detailFilm";
import Species from "./views/species/Species";
import DetailSpecies from "./views/species/detailsSpecies";
import People from "./views/people/people";
import DetailPeople from "./views/people/detailPeople";
import Planets from "./views/planets/planets";
import DetailPlanets from "./views/planets/detailPlanets";
import Starships from "./views/starships/starships";
import DetailStarships from "./views/starships/detailStarships";
import Vehicles from "./views/vehicles/vehicles";
import DetailVehicles from "./views/vehicles/detailVehicles";
import Layout from "./layout";
import injectContext from "./store/appContext";


//create your first component
const AppRoutes = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

    

        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="films" element={<Films />} >
                                <Route path=":filmsId" element={<DetailFilms />} />
                            </Route>
                            <Route path="people" element={<People />} >
                                <Route path=":peopleId" element={<DetailPeople />} />
                            </Route>
                            <Route path="planets" element={<Planets />} >
                                <Route path=":planetsId" element={<DetailPlanets />} />
                            </Route>
                            <Route path="species" element={<Species />} >
                                <Route path=":speciesId" element={<DetailSpecies />} />
                            </Route> 
                            <Route path="starships" element={<Starships />} >
                                <Route path=":starshipsId" element={<DetailStarships />} />
                            </Route>  
                            <Route path="vehicles" element={<Vehicles />} >
                                <Route path=":vehiclesId" element={<DetailVehicles />} />
                            </Route> 
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    };
    
    export default injectContext(AppRoutes);