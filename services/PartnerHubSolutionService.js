import { BaseService } from "./baseService";

class PartnerHubSolutionService extends BaseService {
  getPartnerHubSolution = () => {
    return this.get(`/api/partner-hub-solution`);
  };
  getPartnerHubSolutionById = (id) => {
    return this.get(`/api/partner-hub-solution/${id}`);
  };
  getPartnerHubSolutionById2 = (id) => {
    return this.get(`/api/partner-hub-solution/x/${id}`);
  };
  createPartnerHubSolution = (data) => {
    return this.post(`/api/partner-hub-solution`, data);
  };
  updatePartnerHubSolution = (id, data) => {
    return this.patch(`/api/partner-hub-solution/${id}`, data);
  };
  deletePartnerHubSolution = (data) => {
    return this.delete(`/api/partner-hub-solution`, data);
  };
  getPartnerHubHome = () => {
    return this.get(`/api/partner-hub-solution/home`);
  };
  like = (id, data) => {
    return this.post(`/api/partner-hub-solution/like/${id}`, data);
  };
}

export const partnerHubSolutionService = new PartnerHubSolutionService();
