import {filmsStore, filmsActions} from './films'
import { speciesActions, speciesStore } from './species';
import {planetsStore, planetsActions} from './planets'
import { peopleActions, peopleStore } from './people';
import { starshipsActions, starshipsStore } from './starships';
import { vehiclesActions, vehiclesStore } from './vehicles';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/*
			characters: [
			],*/
			...peopleStore,
			...planetsStore,
			...speciesStore,
			...starshipsStore,
			...vehiclesStore,
			...filmsStore
		},
		actions: {
			/*
			fetchGetCharacter: async() => {
				const store = getStore();
				let response = await fetch("https://www.swapi.tech/api/people")
				response = await response.json()
				setStore({
					...store,
					characters: response
				});
			},*/
			...peopleActions(getStore, getActions, setStore),
			...planetsActions(getStore, getActions, setStore),
			...speciesActions(getStore, getActions, setStore),
			...starshipsActions(getStore, getActions, setStore),
			...vehiclesActions(getStore, getActions, setStore),
			...filmsActions(getStore, getActions, setStore)
		}
	};
};

export default getState;
