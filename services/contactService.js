const { BaseService } = require("./baseService");

class ContactService extends BaseService {
  createMail = (data) => {
    return this.post("/api/mail", data);
  };
}

export const contactService = new ContactService();
