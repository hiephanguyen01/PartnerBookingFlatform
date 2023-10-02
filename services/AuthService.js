const { BaseService } = require("./baseService");

class AuthService extends BaseService {
  login = (data) => {
    return this.post("/api/register-partner/login", data);
  };
  me = () => {
    return this.get("/api/register-partner/me/me");
  };
}

export const authService = new AuthService();
