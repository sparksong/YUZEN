import { combineReducers } from 'redux';

const dataList = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST':
      return action.payload
    case 'STORE_NEW_DATE':
      return action.payload
    default:
      return state;
  }
};

const therapistPatientGraph = (state = [], action) => {
  switch (action.type) {
    case 'THERAPIST_PATIENT_DATA':
      return action.payload
    case 'STORE_NEW_THERAPIST_DATE':
      return action.payload
    default:
      return state;
  }
};

const showpatientList = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PATIENT_LIST':
      return action.payload
    default:
      return state;
  }
};

const updatedData = (state = {
  id: '',
  depression_rating: 0,
  activity: ''
}, action) => {
  switch (action.type) {
    case 'UPDATE_ID':
      return {
        id: action.payload
      };
    case 'UPDATE_DEPRESSION':
      return {
        ...state,
        depression_rating: action.payload.depression_rating,
        activity: action.payload.activity
      };
    default:
      return state;
  }
};

const therapistName = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_THERAPIST':
      return action.payload
    default:
      return state;
  }
};

const therapistNameRegister = (state = {}, action) => {
  switch (action.type) {
    case 'THERAPIST_NAME_REGISTER':
      return action.payload
    default:
      return state;
  }
};

const therapistPatientId = (state = '', action) => {
  switch (action.type) {
    case 'THERAPIST_PATIENT_DATA_ID':
      return action.payload
    default:
      return state;
  }
};

const findTherapist = (state = [], action) => {
  switch (action.type) {
    case 'THERAPIST_FOUND':
      return action.payload
    case 'REMOVE_UPDATE_THERAPIST':
      return []
    default:
      return state;
  }
};

const store = combineReducers({
  dataList,
  updatedData,
  therapistName,
  findTherapist,
  showpatientList,
  therapistPatientGraph,
  therapistPatientId,
  therapistNameRegister
});

export default store;
