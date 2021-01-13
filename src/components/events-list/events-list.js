import React, {Component} from 'react';
import EventsListItem from '../events-list-item/events-list-item';
import {connect} from 'react-redux';
import {compose} from '../../utils/compose';
import {withEventService} from '../hoc/with-event-service';
import {eventsLoaded, eventsRequested, eventsError} from '../../actions';
import Aside from '../aside/aside';
import Spinner from '../spinner/spinner';
import ErrorIndiactor from '../error-indicator/error-indicator'
import './events-list.scss';

class EventsList extends Component {

  componentDidMount() {
    const {eventService, eventsLoaded, eventsRequested, eventsError} = this.props;
    eventsRequested();
    eventService.getEvent()
      .then((data) => eventsLoaded(data))
      .catch((err) => eventsError(err));
  };

  render () {
    const {events, loading, error} = this.props;

    if(loading) {
      return <Spinner />
    }

    if(error) {
      return <ErrorIndiactor />
    }

    return(
      <div className='container' id="main">
        <main className="main events">
          {
          events.map((event) => {
            return(
              <EventsListItem event={event} />
              )
            })
          }
        </main>
        <Aside />
      </div>
    )
  }
}

const mapStateToProps =({events, loading, error}) => {
  return {
    events,
    loading, 
    error
  };
};

const mapDispatchToProps = {
  eventsLoaded,
  eventsRequested, 
  eventsError
};

export default compose(
  withEventService(),
  connect(mapStateToProps, mapDispatchToProps)
)(EventsList)

// export default withEventService()(connect(mapStateToProps, mapDispatchToProps)(EventsList)) ;