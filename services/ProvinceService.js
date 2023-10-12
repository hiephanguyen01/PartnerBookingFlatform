const { BaseService } = require("./baseService");

class ProvinceService extends BaseService {
  getAllProvince = () => {
    return this.get("/api/provinces");
  };
}

export const provinceService = new ProvinceService();
