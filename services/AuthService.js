const { BaseService } = require("./baseService");

class AuthService extends BaseService {
  login = (data) => {
    return this.post("/api/register-partner/login", data);
  };
  register = (data) => {
    return this.post("/api/register-partner/register", data);
  };
  checkCode = (email, code) => {
    return this.post("/api/register-partner/code", {
      Email: email,
      VerifyCode: code,
    });
  };
  genCode = (email) => {
    return this.get(`/api/register-partner/code?email=${email}`);
  };
  updateP = (data) => {
    return this.patch("/api/register-partner/pass", data);
  };
  me = () => {
    return this.get("/api/register-partner/me/me");
  };
}

export const authService = new AuthService();
