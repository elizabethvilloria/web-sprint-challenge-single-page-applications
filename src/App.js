import './App.css';
import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./HomePage";
import PizzaForm from "./PizzaForm";

const pizzaFormValues = {
  name: '',
  pizzaSize: '',
  toppings: false,
  specialRequest: ''
}

const App = () => {

  const [formValues, setFormValues] = useState(pizzaFormValues);

  const handleChange = (name, value) =>{
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pizza" element={<PizzaForm 
          id="pizza-form"
          values={formValues}
          change={handleChange}/>}/>      
      </Routes>
    </div>
  );
};
export default App;
