import {useState} from "react";
import {useNavigate} from "react-router-dom"
import '../uikit-rtl.min.css'

const Form = ({initialZoo, handleSubmit, buttonLabel}) => {

  const navigate = useNavigate()

  // The Form State
  const [formData, setFormData] = useState(initialZoo)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/zoo")

  }

  return <form onSubmit={handleSubmission}>
    <input
      type="text"
      onChange={handleChange}
      value={formData.country}
      name="country"
      />
    <input
    type="text"
    onChange={handleChange}
    value={formData.animal}
    name="animal"
    />
    <input type="submit" value={buttonLabel} />
  </form>
};

export default Form; 