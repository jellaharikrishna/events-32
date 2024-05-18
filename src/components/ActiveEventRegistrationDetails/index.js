import {Component} from 'react'
import './index.css'

const statusConstants = {
  initialNoActiveEvent: 'InitialNoActiveEvent',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderInitialNoActiveEvent = () => (
    <div className="registration-heading-container">
      <p className="registration-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegister = () => (
    <div className="registration-container">
      <div className="yet-to-register-container">
        <img
          className="yet-to-register-image"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p className="yet-to-register-descrpition">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button type="button" className="yet-to-register-button">Register Here</button>
      </div>
    </div>
  )

  renderRegistered = () => (
    <div className="registration-container">
      <div className="already-register-container">
        <img
          className="already-register-image"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1 className="already-register-descrpition">
          You have already registered for the event
        </h1>
      </div>
    </div>
  )

  renderRegistrationsClosed = () => (
    <div className="registration-container">
      <div className="registration-closed-container">
        <img
          className="registration-closed-image"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
        <h1 className="registration-closed-title">
          Registrations Are Closed Now!
        </h1>
        <p className="registration-closed-descrpition">
          Stay tuned. We will reopen
          <br /> the registrations soon!
        </p>
      </div>
    </div>
  )

  render() {
    const {activeStatus} = this.props

    switch (activeStatus) {
      case statusConstants.initialNoActiveEvent:
        return this.renderInitialNoActiveEvent()
      case statusConstants.yetToRegister:
        return this.renderYetToRegister()
      case statusConstants.registered:
        return this.renderRegistered()
      case statusConstants.registrationsClosed:
        return this.renderRegistrationsClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails

/*

        


*/
