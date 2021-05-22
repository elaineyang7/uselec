import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";


class StepperExample extends React.Component {

state = {
  formActivePanel3: 1,
  formActivePanel1Changed: false,
}

swapFormActive = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleNextPrevClick = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleSubmission = () => {
  alert('Form submitted!');
}

calculateAutofocus = (a) => {
  if (this.state['formActivePanel' + a + 'Changed']) {
  return true
  }
}

render() {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBRow className="pt-5 justify-content-center">
            <MDBCol md="2" className="pl-5 pl-md-0 pb-5">
              <MDBStepper icon vertical>
                <MDBStep far icon="folder-open" stepName="Basic Information" onClick={this.swapFormActive(3)(1)} vertical />
                <MDBStep icon="pencil-alt" stepName="Personal Data" onClick={this.swapFormActive(3)(2)} vertical />
                <MDBStep far icon="image" stepName="Terms and Conditions" onClick={this.swapFormActive(3)(3)} vertical />
                <MDBStep icon="check" stepName="Finish" onClick={this.swapFormActive(3)(4)} vertical />
              </MDBStepper>
            </MDBCol>

            <MDBCol md="7">
              {this.state.formActivePanel3 === 1 && (
              <MDBCol md="12">
                <h3 className="font-weight-bold pl-0 my-4">
                  <strong>Basic Information</strong>
                </h3>
                <MDBInput label="Email" className="mt-4" autoFocus={this.calculateAutofocus(3)} />
                <MDBInput label="Username" className="mt-4" />
                <MDBInput label="Password" className="mt-4" />
                <MDBInput label="Repeat Password" className="mt-4" />
                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(2)}>
                  next
                </MDBBtn>
              </MDBCol>
              )}
              {this.state.formActivePanel3 === 2 && (
              <MDBCol md="12">
                <h3 className="font-weight-bold pl-0 my-4">
                  <strong>Personal Data</strong>
                </h3>
                <MDBInput label="First Name" className="mt-3" autoFocus={this.calculateAutofocus(3)} />
                <MDBInput label="Second Name" className="mt-3" />
                <MDBInput label="Surname" className="mt-3" />
                <MDBInput label="Address" type="textarea" rows="2" />
                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(1)}>
                  previous
                </MDBBtn>
                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(3)}>
                  next
                </MDBBtn>
              </MDBCol>
              )}
              {this.state.formActivePanel3 === 3 && (
              <MDBCol md="12">
                <h3 className="font-weight-bold pl-0 my-4">
                  <strong>Terms and conditions</strong>
                </h3>
                <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox3" autoFocus={this.calculateAutofocus(3)} />
                <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox4" />
                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(2)}>
                  previous
                </MDBBtn>
                <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(3)(4)}>
                  next
                </MDBBtn>
              </MDBCol>
              )}
              {this.state.formActivePanel3 === 4 && (
              <MDBCol md="12">
                <h3 className="font-weight-bold pl-0 my-4">
                  <strong>Finish</strong>
                </h3>
                <h2 className="text-center font-weight-bold my-4">
                  Registration completed!
                </h2>
                <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(3)(3)}>
                  previous
                </MDBBtn>
                <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}>
                  submit
                </MDBBtn>
              </MDBCol>
              )}
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    );
  };
}

export default StepperExample;