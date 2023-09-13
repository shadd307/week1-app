import React from "react";

// Creation of Forms in Class Component Example
class MailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handlerChange = this.handlerChange.bind(this);
      this.handlerSubmit = this.handlerSubmit.bind(this);
    }
  
    handlerChange(event) {
      this.setState({value: event.target.value});
    }
  
    handlerSubmit(event) {
        alert('User Email: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handlerSubmit}>
            <label>
              Email:
              <input type="email" value={this.state.value} onChange={this.handlerChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

    
export default MailForm;    
  