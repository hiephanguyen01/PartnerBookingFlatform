const { BaseService } = require("./baseService");

class DistrictService extends BaseService {
  getAllDistrict = (code) => {
    return this.get(`/api/districts/${code}`);
  };
}

export const districtService = new DistrictService();
