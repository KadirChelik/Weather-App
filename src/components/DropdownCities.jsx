import {cities} from "../const/Cities.js";
import { useCity } from "../context/CityContext.jsx";
import "../App.css";

function DropdownCities(){
    const {selectedCity, setSelectedCity} = useCity();

    return(
        <div className="dropdown-cities">
            <select
                name="cities"
                style={{padding: "0.5rem", border: "none", borderRadius: "0.25rem", backgroundColor: "white"}}
                onChange={(e) => setSelectedCity(e.target.value)}
                value={selectedCity}
            >
                {
                    cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropdownCities;