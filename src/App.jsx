import './App.css'
import DropdownCities from "./components/DropdownCities.jsx";
import WeatherReport from "./components/WeatherReport.jsx";
import {CityProvider} from "./context/CityContext.jsx";
function App() {
    return (
        <>
            <h1>Weather App</h1>
            <div>
                <CityProvider>
                    <DropdownCities />
                    <WeatherReport />
                </CityProvider>
            </div>
        </>
    )
}

export default App