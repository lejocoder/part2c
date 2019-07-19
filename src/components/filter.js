import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
const Filter = ({countries}) => {
    // we do [0] here because the length is only of 1!
    //console.log(countries[0])
    if (countries.length == 1) {
        const languagesArray = countries[0].languages
        return (
            <div>
                <h1>
                    {countries[0].name}
                </h1>
                <body>
                    <p>
                        capital {countries[0].capital}
                        <br></br>
                        population {countries[0].population}
                        <h2>languages</h2>
                        <ul>
                            {languagesArray.map(language => <li>{language.name}</li>)}
                        </ul>
                        <img src= {countries[0].flag} alt= 'picture of ${countries[0].flag}' width = "250" length = "250" />
                    </p>
                </body>
            </div>
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
            <div>
                {countries.map(country => <li key= {country.alpha2Code}>{country.name}</li>)} 
            </div>
        )
    }
}

export default Filter