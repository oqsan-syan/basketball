const initialState = {
  events: [],
  loading: true, 
  error: null
};

const reducer = (state=initialState, action) => {

  switch(action.type) {
    case 'EVENTS_REQUESTED' : 
      return {
        events: [],
        loading: true,
        error: null
      };

    case 'EVENTS_LOADED' :
      return {
        events: action.payload,
        loading: false,
        error: null
      }

    case 'EVENTS_ERROR' : 
      return {
        events: [],
        loading: false,
        error: action.payload
      };
      
    default:
      return state;
  }
};

export default reducer;