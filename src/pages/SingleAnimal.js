import React from "react"
import '../uikit-rtl.min.css'
import {Link, useParams} from "react-router-dom"
import Modal from "../components/modal"
import { useState } from "react"
import '../index.css'

const SingleAnimal = ({animals, edit, deleteZoo}) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)


    // find the particular post the user wants to see based on the param
    const animal = animals.find((a) => a.id === id)
    console.log(animal)

    ////////////////////
    // Style Object
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    
    }

    const [show, setShow] = useState(false)
    const deleteButton = () => <button className="buttonShow" onClick={(event)=> deleteZoo(animal)}>Yes</button>

    return <div style={div}>
         <div className="Singleanimal">
        <h1>{animal?.country}</h1>
        <h2>{animal?.animal}</h2>
        <button className="buttonShow" onClick = {()=> {setShow(true)}}>Delete</button>
        <Modal onClose={()=> setShow(false)} show={show} delButton={deleteButton()}/>
        <button onClick={() => edit(animal)}>Edit</button>
        <Link to="/zoo">
            <button>Go Back</button>
        </Link>
        </div>
    </div>
}

export default SingleAnimal; 