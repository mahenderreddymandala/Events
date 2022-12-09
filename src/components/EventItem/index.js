// Write your code here

import './index.css'

const EventItem = props => {
  const {eventdetails, updateID} = props
  const {imageUrl, name, location, registrationStatus} = eventdetails

  const imageclicked = () => {
    updateID(registrationStatus)
  }

  return (
    <div className="container12">
      <div className="list-items">
        <img
          src={imageUrl}
          alt={name}
          className="image-style"
          onClick={imageclicked}
        />
        <h1 className="name">{name}</h1>
        <h1 className="location">{location}</h1>
      </div>
    </div>
  )
}

export default EventItem
