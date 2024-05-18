import './index.css'

const EventItem = props => {
  const {eventDetails, onToggleEvent, isClickedEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickEvent = () => {
    onToggleEvent(registrationStatus, id)
  }
  const className = isClickedEvent && 'image-border-color'

  return (
    <li className="event-list">
      <button type="button" className={`image-button ${className}`} onClick={onClickEvent}>
        <img className="event-image" src={imageUrl} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
