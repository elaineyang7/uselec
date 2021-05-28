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
    }
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
    let formIsValid = true;

    //Name
    if((!fields["name"] || fields["name"] === "") && (field === "name")) {
      formIsValid = false;
      errors["name"] = "This field is required.";
    } else if (fields["name"] && field === "name") {
      formIsValid = true;
      errors["name"] = "";
    }

    //Email
    if((!fields["email"] || fields["email"] === "") && (field === "email")) {
      formIsValid = false;
      errors["email"] = "This email is not valid.";
    }

    //Message
    if((!fields["message"] || fields["message"] === "") && (field === "message")) {
      formIsValid = false;
      errors["message"] = "This field is required.";
    } else if (fields["message"] && field === "message") {
      formIsValid = true;
      errors["message"] = "";
    }

    if(typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "This email is not valid.";
      }
    }

    this.setState({
      errors: errors
    });

    console.log(this.state.errors);
    return formIsValid;
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
        console.log('validation successful')
      }else{
        console.log('validation failed')
      }
}

  render() {
    return ( 
      <div className="contact__container">
        <form 
          className="contact-form"
          onSubmit={this.handleSubmit.bind(this)} 
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
            <SubmitButton />
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