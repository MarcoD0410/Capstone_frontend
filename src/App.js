import './uikit-rtl.min.css'
import './uikit-rtl.css'
import './App.css';
import './index.css'
import './uikit.css'
// Import Our Components
import AllAnimals from './pages/AllAnimals';
import SingleAnimal from './pages/SingleAnimal';
import Form from './pages/Form';
// Import Hooks from React
import {useState, useEffect} from "react"
// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";


/////////////////////////
// Style Object
/////////////////////////


function App() {

  ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate()

  const url = "https://md-capstone-backend.herokuapp.com/zoo/"

 // state to hold list of todos
 const [animals, setAnimals] = useState([])

   // an empty todo for initializing the create form
  const nullZoo = {
    subject: "",
    details: ""
  }

  const [targetZoo, setTargetZoo] = useState(nullZoo)

  //////////////
  // Functions
  //////////////

 // function to get list of todos from API
 const getZoos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setAnimals(data);
};

 // function to add todos
  const addZoos = async (newZoo) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newZoo)
    });
     //update the list of todos
     getZoos()
    }
      // to select a todo to edit
  const getTargetZoo = (zoo) => {
    setTargetZoo(zoo);
    navigate("/edit");
  };

   
// update todo for our handlesubmit prop
  const updateZoo = async (zoo) => {
    await fetch(url + zoo.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zoo),
    });

    //update our todos
    getZoos();
  };
  
  const deleteZoo = async (zoo) => {
    await fetch(url + zoo.id, {
      method: "delete"
    })

    getZoos()
    navigate("/zoo")
  }

  //////////////
  // useEffects
  //////////////
 useEffect(() => {
    getZoos()
  }, [])
   //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    

    <div className="App">
     <nav>My Zoo</nav>
      <Link to="/new"><button>New Animal</button></Link>
      <Routes>
        <Route path="/zoo" element={<AllAnimals animals={animals}/>}/>
        <Route path="/zoo/:id" element={<SingleAnimal 
        animals={animals} 
        edit={getTargetZoo}
        deleteZoo={deleteZoo}
        />} />
        <Route path="/new" element={<Form 
          initialZoo={nullZoo}
          handleSubmit={addZoos}
          buttonLabel="Add Animal"
        />} />
        <Route path="/edit" element={<Form
          initialZoo={targetZoo}
          handleSubmit={updateZoo}
          buttonLabel="Update Animal"
        />} />
      </Routes>
      
    

    </div>
  
  );
}

export default App; 