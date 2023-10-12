import { UPDATE_FORM_DATA_STUDIO_POST } from "../types/studioPostType";

export const updateFormDataStudioPost = (key, value) => (dispatch) => {
  dispatch({ type: UPDATE_FORM_DATA_STUDIO_POST, payload: { key, value } });
};
