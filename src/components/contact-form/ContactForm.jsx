import React, { Component } from 'react';

import { informations } from '../../data/contact-info.json';
import Input from '../common/input/Input';
import TextArea from '../common/textarea/TextArea';
import SubmitButton from '../common/submit-button/SubmitButton';
import Info from '../info/Info';

import './ContactForm.scss';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, event){    		
    let fields = this.state.fields;
    fields[field] = event.target.value;        
    this.setState({
      fields
    });
  }

  handleValidation(field, event) {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = this.state.formValid;

    //Name
    if ((!fields["name"] || fields["name"] === "") && (field === "name")) {
      errors["name"] = "This field is required.";
    } else if (fields["name"] && field === "name") {
      errors["name"] = "";
    }

    //Email
    if((!fields["email"] || fields["email"] === "") && (field === "email")) {
      errors["email"] = "This email is not valid.";
    }

    if (typeof fields["email"] !== "undefined") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

      if (!pattern.test(fields["email"])) {
        errors["email"] = "This email is not valid.";
      } else {
        errors["email"] = "";
      }
    }

    //Message
    if ((!fields["message"] || fields["message"] === "") && (field === "message")) {
      errors["message"] = "This field is required.";
    } else if (fields["message"] && field === "message") {
      errors["message"] = "";
    }

    this.setState({
      errors: errors
    });

    console.log(this.state.errors);
    if (errors["name"] === "" && errors["email"] === "" && errors["message"] === "") {
      formIsValid = true;
    }

    this.setState({
      formValid: formIsValid
    });

    return formIsValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      alert('The form is submitted successfully');
      event.target.reset();
    } else {
      alert('The form is is not valid.');
    }
  }

  render() {
    return ( 
      <div className="contact__container">
        <form 
          className={`contact-form ${this.state.formValid ? 'success' : '' }`}
          onSubmit={this.handleSubmit} 
          method="POST"
        >
          <div className="contact-form__container">
            <h2>Contact Us</h2>
            <Input 
              id="name" 
              name="name"
              placeholder="Your Name" 
              value={this.state.fields["name"]}
              className={`${this.state.errors["name"] === 'This field is required.' ? 'error-input' : '' } 
              ${this.state.errors["name"] === '' ? 'success-input' : '' }`}
              onChange={this.handleChange.bind(this, "name")}
              onBlur={this.handleValidation.bind(this, "name")}
              error={this.state.errors["name"]}
            />
            <Input 
              id="email" 
              name="email" 
              placeholder="name@gmail.com" 
              value={this.state.fields["email"]}
              className={`${this.state.errors["email"] === 'This email is not valid.' ? 'error-input' : '' } 
              ${this.state.errors["email"] === '' ? 'success-input' : '' }`}
              onChange={this.handleChange.bind(this, "email")}   
              onBlur={this.handleValidation.bind(this, "email")} 
              error={this.state.errors["email"]}    
            />
            <TextArea
              id="message" 
              name="message" 
              placeholder="Your message..." 
              value={this.state.fields["message"]}
              className={`${this.state.errors["message"] === 'This field is required.' ? 'error-input' : '' } 
              ${this.state.errors["message"] === '' ? 'success-input' : '' }`}
              onChange={this.handleChange.bind(this, "message")}
              onBlur={this.handleValidation.bind(this, "message")}
              error={this.state.errors["message"]}  
            />
            <SubmitButton 
              className="submit-button"
            />
          </div>
        </form>
        <div className="contact-info">
          {informations.map( (information, index) => (
            <Info 
              key={index}
              icon={information.icon}
              info={information.info}
              alt={information.alt}
            />
          ))}
          
        </div>
      </div>
    );
  }
}

export default ContactForm;