import { UPDATE_FORM_DATA_STUDIO_POST } from "../types/studioPostType";

const initialValue = {
  formData: new FormData(),
};

const studioPostReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA_STUDIO_POST:
      const newState = state.formData;
      newState.set(action.payload.key, action.payload.value);
      return {
        ...state,
        formData: newState,
      };

    default:
      return state;
  }
};

export default studioPostReducer;
