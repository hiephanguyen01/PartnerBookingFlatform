import { SET_AUTH, SET_LOADING, SET_USER } from "../types/userTypes";
import { authService } from "@/services/AuthService";
import { message } from "antd";

export const configureCaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          handleSendOtp();
        },
        defaultCountry: "VN",
      }
    );
  }
};
export const Login = (dataLogin) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const { data } = await authService.login(dataLogin);
    dispatch({ type: SET_USER, payload: data.user });
    localStorage.setItem("token", data.token);
  } catch (error) {
    message.error("Tên đăng nhập hoặc mật khẩu không đúng!");
    console.log(error);
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const register = (registerData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const { data } = await authService.register(registerData);
    dispatch({ type: SET_USER, payload: data.user });
    localStorage.setItem("token", data.token);
    router.push("/verify");
  } catch (error) {
    message.error("Vui lòng thử lại sau!");
    console.log(error);
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const getCurrentUser = (router) => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTH, payload: true });
    const { data } = await authService.me();
    dispatch({ type: SET_USER, payload: data.user });
  } catch (error) {
    router.push("/login-register");
  }
  dispatch({ type: SET_AUTH, payload: false });
};
export const getCurrentUser2 = (router) => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTH, payload: true });
    const { data } = await authService.me();
    dispatch({ type: SET_USER, payload: data.user });
  } catch (error) {}
  dispatch({ type: SET_AUTH, payload: false });
};
export const logOut = (router) => (dispatch) => {
  router.push("/login-register");
  dispatch({ type: SET_USER, payload: null });
  localStorage.removeItem("token");
};
