import React, {useState} from 'react'
import View from './view'
const Filter = ({countries, submit}) => {
    // we do [0] here because the length is only of 1!
    //console.log(countries[0])
    // we had to do something weird here
    const [showCountry, setShowCountry] = useState([])
    const showHandler = (props) => {
        setShowCountry(props.country)
    }
    
    if (countries.length === 1) {
        return (
            <View country = {countries[0]}/>
        )
    }
    else if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else {
        return (
            <ul>
                {countries.map(function(country) {

                    return (
                        <div>
                            
                            <li key= {country.name}>{country.name} <button type = "button" onClick = {submit} value={country.name}>show</button></li>
                            
                        </div>
                    )
                })} 
                
                
            </ul>
        )
    }
    
}

export default Filter