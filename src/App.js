import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Filter from './components/filter'
// part 2.12 done
const App = () => {
    const [search, setSearch] = useState("") // this is used to track the inputs
    const [countries, setCountries] = useState([]) // this is to keep track of the countries
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    useEffect(() => {
        console.log('this wokrs')
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            setCountries(response.data)
        })
    }, [])
    const myFilter = countries.filter(country => country.name.includes(search))
    // for the li key i used name, this is kinda bad but it will work as unique identifier for now
    return (
        <div>
            <form>
                find countries <input onChange = {handleInputChange}/>
            </form>
            <ul>
                <Filter countries ={myFilter}/>
            </ul>
        </div>
        
        

    )
}


export default App