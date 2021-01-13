import React from 'react';
import {EventServiceConsumer} from '../event-service-context/event-service-context';

const withEventService = () => (Wrapped) => {
  return (props) => {
    return (
      <EventServiceConsumer>
        {
          (eventService) => {
            return (<Wrapped {...props} eventService={eventService} />);
          }
        }
      </EventServiceConsumer>
    )
  }
}

export {withEventService};