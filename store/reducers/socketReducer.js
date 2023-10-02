import { SET_CHATTING, SET_SOCKET } from "../types/socketType.js";

const initialValue = {
  socket: null,
  chatting: null,
};

const socketReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case SET_CHATTING:
      return {
        ...state,
        chatting: action.payload,
      };

    default:
      return state;
  }
};

export default socketReducer;
