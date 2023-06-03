import React, {useState} from "react";

const PizzaForm = (props) => {

    const { values, submit } = props;
    const { name, size, requests } = props.values;

    const [nameError, setNameError] = useState("");
    const [formValues, setFormValues] = useState({ name });


    const onChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value})

        if (name === "name" && value.length < 2) {
            setNameError("name must be at least 2 characters");
        } else {
            setNameError("")
        }
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (name.length < 2) {
            setNameError("name must be at least 2 characters");
            return;
        } 
        submit ();
    };

    const [topping, setTopping] = useState({
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
    });

    const handleToppingChange = (e) => {
        setTopping({
            ...topping, 
            [e.target.name]: e.target.checked,
        });
    };

    return (
        
        <form id="pizza-form" onSubmit={onSubmit}>
            <h1>PIZZA TIME !!!</h1>
            <label>Name:
                <input 
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={onChange}
                    id="name-input"/>
                {nameError && <div className="error">{nameError}</div>}
            </label>

            <label>Pizza Size:
                <select value={size} 
                    name="size" 
                    onChange={onChange} 
                    id="size-dropdown">
                        <option value="">--- Select your pizza size! ---</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra large">Extra Large</option>
                </select>
            </label>

            <label>Add Toppings:
                <div>
                    <input
                        type="checkbox"
                        name="topping1"
                        checked={topping.topping1}
                        onChange={handleToppingChange}/>
                    Pepperoni
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="topping2"
                        checked={topping.topping2}
                        onChange={handleToppingChange}/>
                    Ham
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="topping3"
                        checked={topping.topping3}
                        onChange={handleToppingChange}/>
                    Mozzerella
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="topping4"
                        checked={topping.topping4}
                        onChange={handleToppingChange}/>
                    Olives
                </div>
            </label>

            <label>Requests:
                <input 
                    type="text"
                    name="requests"
                    value={requests}
                    onChange={onChange}
                    id="special-text"/>
            </label>

            <input type="submit" value="Add to Order" id="order-button"/>
            
        </form>
    )
}

export default PizzaForm;