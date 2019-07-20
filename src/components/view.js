import React, {useState, useEffect} from 'react'
import axios from 'axios'
const View = ({country}) => {
    const languagesArray = country.languages
    const [weatherArray, setWeatherArray] = useState([])
    const [weatherCondition, setWeatherCondition] = useState([])
    const capitalLink = "http://api.apixu.com/v1/current.json?key=798b3e10933f43edba4203141192007&q=".concat(country.capital)
    //console.log(capitalLink)
    
    useEffect(() => {
        axios
        .get(capitalLink)
        .then(response => {
            setWeatherArray(response.data.current)
            setWeatherCondition(response.data.current.condition)
        })
    }, [])
    //console.log(weatherArray)
        return (
            <div>
                <h1>
                    {country.name}
                </h1>
                <div>

                    capital {country.capital}
                    <br></br>
                    population {country.population}
                    <h2>languages</h2>
                    <ul>
                        {languagesArray.map(language => <li i>{language.name}</li>)}
                    </ul>
                    <img src= {country.flag} alt = "country's flag" width = "250" length = "250" />
                    <h2>Weather in {country.capital}</h2>
                    <p>
                        <strong>temperature:</strong> {weatherArray.temp_c} Celsius
                        <br></br>
                        <img src = {weatherCondition.icon}/>
                        <br></br>
                        <strong>wind:</strong> {weatherArray.wind_kph} kph direction {weatherArray.wind_dir}
                    </p>
                </div>
            </div>
        )
}

export default View

// what did i learn:
// shit is total ass.
// when doing something like weatherArray.condition.icon will not work JS or React doesn't seem liking to traverse the JSON array 2 layers deep
// to avoid this whne you are using USeEffect its better to set up a useState hook to store the array the element you are looking for easy retrieval and less bithcing
// when doing img tag it seems like as long as the link is in string format you should be good.
// abuse console log to check for mistakes. 
// remember USE ONLY ONE TRAVERSAL OF JSON ARRAY OR BITCHING WILL OCCUR