//Replace the App.js present in the src folder with this file 
//to run the Form examples as provided in 07_Forms in React deck

import MailForm from "./components-forms/07-Forms in React/ExampleFormClassComponent";
import MailForm1 from "./components-forms/07-Forms in React/ExampleFormFunctionComponent";
import SelectInput from "./components-forms/07-Forms in React/ExampleSelect";
import CheckInputs from "./components-forms/07-Forms in React/ExampleCheckBox";

function App(){
  return(
    <>
      <MailForm />
      <MailForm1 />
      <SelectInput />
      <CheckInputs />
    </>
  )
}

export default App;