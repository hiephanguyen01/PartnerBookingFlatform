import {
  RESET_FORM_DATA,
  UPDATE_FORM_DATA_STUDIO_POST,
  UPDATE_FORM_DATA_STUDIO_ROOM,
} from "../types/studioPostType";

const initialValue = {
  formData: new FormData(),
  formDataStudioRoom: new FormData(),
};

const studioPostReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA_STUDIO_POST: {
      const newState = state.formData;
      newState.set(action.payload.key, action.payload.value);
      return {
        ...state,
        formData: newState,
      };
    }
    case UPDATE_FORM_DATA_STUDIO_ROOM:
      const newState = state.formDataStudioRoom;
      newState.set(action.payload.key, action.payload.value);
      return {
        ...state,
        formDataStudioRoom: newState,
      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formData: new FormData(),
      };

    default:
      return state;
  }
};

export default studioPostReducer;
