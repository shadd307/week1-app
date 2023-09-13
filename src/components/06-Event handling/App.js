//Replace the App.js present in the src folder with this file 
//to run the Event handling and conditional rendering examples as provided in 006_Event Handling and Conditional Rendering in React deck

//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import CountComponent from "./components/06-Event handling/CountComponent";
import ExampleComponent from './components/06-Event handling/Example_&&';
import Example from './components/06-Event handling/Example_If';

function App() {
  return (
    <div className="App">
      <CountComponent />
      <ExampleComponent />
      <Example isLoggedIn = {true}/>
    </div>
  );
}


/////// Slide 5 ///////////////
// Event Handling - Parameter Passing
// function App(){
//   const [product, setProduct] = useState("");
//   const addProduct =(product) => {
//     console.log(product);
//   }
//   return (
//     //Creating an arrow function and passing parameter
//     <>
//       <input value={product} onChange={(e) => setProduct(e.target.value)} ></input>
//       <button onClick={() => addProduct(product)}>Add Product</button>    
//     </>
//   );
// }

// function ExistingUser() {
//   return <h1>Welcome back!</h1>;
// }


/////// Slide 10 ///////////////
// Conditional Rendering Using Ternary Operator
// function NewUser() {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   return isLoggedIn ? <ExistingUser /> : <NewUser />;
// }

// function App(){
//   return <Greeting isLoggedIn = {true}/>;
// }

export default App;
