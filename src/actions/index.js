const eventsLoaded = (newEvents) => {
  return {
    type: 'EVENTS_LOADED',
    payload: newEvents
  };
};

const eventsRequested = () => {
  return {
    type: "EVENTS_REQUESTED"
  }
};

const eventsError = (error) => {
  return {
    type: "EVENTS_ERROR",
    payload: error
  }
}

export {
  eventsLoaded,
  eventsRequested,
  eventsError
};