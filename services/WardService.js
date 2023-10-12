const { BaseService } = require("./baseService");

class WardService extends BaseService {
  getAllWards = (code) => {
    return this.get(`/api/wards?DistrictCode=${code}`);
  };
}

export const wardService = new WardService();
