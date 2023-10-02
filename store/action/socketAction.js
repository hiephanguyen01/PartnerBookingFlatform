import { io } from "socket.io-client";
import { base } from "../../../utils/baseUrl";
import { SET_SOCKET } from "../types/socketType";

export const setupSocket = (user) => (dispatch) => {
  const newSocket = io(base, {
    query: {
      userId: user.id || 0,
    },
  });
  newSocket.on("disconnect", () => {
    dispatch({ type: SET_SOCKET, payload: null });
    setTimeout(setupSocket, 3000);
  });
  newSocket.on("connect", () => {
    dispatch({ type: SET_SOCKET, payload: newSocket });
  });
};
