import axios from "axios";
import { baseURL } from "../utils/baseURL";

export class BaseService {
  put = (url, model) => {
    return axios({
      url: `${baseURL}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization:
          typeof window !== "undefined"
            ? "Bearer " + localStorage.getItem("token")
            : "",
      },
    });
  };
  patch = (url, model) => {
    return axios({
      url: `${baseURL}${url}`,
      method: "PATCH",
      data: model,
      headers: {
        Authorization:
          typeof window !== "undefined"
            ? "Bearer " + localStorage.getItem("token")
            : "",
      },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${baseURL}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization:
          typeof window !== "undefined"
            ? "Bearer " + localStorage.getItem("token")
            : "",
      },
    });
  };

  get = (url, params) => {
    return axios({
      url: `${baseURL}${url}`,
      params: { ...params } || null,
      method: "GET",
      headers: {
        Authorization:
          typeof window !== "undefined"
            ? "Bearer " + localStorage.getItem("token")
            : "",
      },
    });
  };

  delete = (url, model = {}) => {
    return axios({
      url: `${baseURL}${url}`,
      method: "DELETE",
      data: model,
      headers: {
        Authorization:
          typeof window !== "undefined"
            ? "Bearer " + localStorage.getItem("token")
            : "",
      },
    });
  };
}
