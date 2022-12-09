// Write your code here
import {Component} from 'react'

import './index.css'

const statusOf = {
  registered: 'REGISTERED',
  register: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
  initial: 'initial',
}

class ActiveEventRegistrationDetails extends Component {
  registeredStatus = () => (
    <div className="center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registernow"
      />
      <h1 className="heading2">You have already registered for the event</h1>
    </div>
  )

  registernow = () => (
    <div className="center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registernow"
      />
      <p className="paragraph">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="button-style" type="button">
        Register Here
      </button>
    </div>
  )

  closednow = () => (
    <div className="center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registernow"
      />
      <h1 className="heading2">Registrations Are Closed Now!</h1>
      <p className="paragraph">
        Stay tuned.We will reopen the registrations soon!
      </p>
    </div>
  )

  initialstate = () => (
    <div className="center">
      <p className="paragraph">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  render() {
    const {status} = this.props
    console.log(status)
    switch (status) {
      case statusOf.initial:
        return this.initialstate()
      case statusOf.registered:
        return this.registeredStatus()
      case statusOf.register:
        return this.registernow()
      case statusOf.closed:
        return this.closednow()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
