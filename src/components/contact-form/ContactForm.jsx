import React, { Component } from 'react';

import { informations } from '../../data/contact-info.json';
import Input from '../input/Input';
import TextArea from '../textarea/TextArea';
import SubmitButton from '../submit-button/SubmitButton';
import Info from '../info/Info';

import './ContactForm.scss';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      emailValue: '',
      messageValue: '',
      isInputValid: false,
      nameValid: '',
      emailValid: '',
      messageValid: ''
    }
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.nameValidate = this.nameValidate.bind(this);
  }

  handleNameInput(event) {
    this.setState({
      nameValue: event.target.value
    });
    console.log(this.state.nameValue);
  }

  handleEmailInput(event) {
    this.setState({
      emailValue: event.target.value
    })
  }

  handleMessageInput(event) {
    this.setState({
      messageValue: event.target.value
    })
  }

  nameValidate(event) {
    const name = event.target.value;
    if (name !== "") {
      console.log(this.state.nameValid);
      this.setState({
        nameValid: true
      });
    }
    console.log(this.state.nameValid);
  }

  render() {
    return ( 
      <div className="contact__container">
        <form className="contact-form">
          <div className="contact-form__container">
            <h2>Contact Us</h2>
            <Input 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              value={this.state.nameValue}
              onChange={this.handleNameInput}
              onBlur={this.nameValidate}
            />
            <Input 
              id="email" 
              name="email" 
              placeholder="name@gmail.com" 
              value={this.state.emailValue}
              onChange={this.handleEmailInput}              
            />
            <TextArea
              id="message" 
              name="message" 
              placeholder="Your message..." 
              value={this.state.messageValue}
              onChange={this.handleMessageInput}
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