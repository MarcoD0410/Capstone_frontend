import React from "react"
import Animal from "../components/animal"

const AllAnimals = (props) => {
    // for each post in the array, render a post component

    return props.animals.map((animal) => {
        return <Animal key={animal.id} animal={animal}/>
    })
}

export default AllAnimals; 