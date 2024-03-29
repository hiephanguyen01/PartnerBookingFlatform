import { BaseService } from "./baseService";

class PartnerHubTrendNewsService extends BaseService {
  getPartnerHubTrendNews = (search = "") => {
    return this.get(`/api/partner-hub-trend-news?search=${search}`);
  };
  getPartnerHubTrendNewsById = (id) => {
    return this.get(`/api/partner-hub-trend-news/${id}`);
  };
  getPartnerHubTrendNewsById2 = (id) => {
    return this.get(`/api/partner-hub-trend-news/x/${id}`);
  };
  createPartnerHubTrendNews = (data) => {
    return this.post(`/api/partner-hub-trend-news`, data);
  };
  updatePartnerHubTrendNews = (id, data) => {
    return this.patch(`/api/partner-hub-trend-news/${id}`, data);
  };
  deletePartnerHubTrendNews = (data) => {
    return this.delete(`/api/partner-hub-trend-news`, data);
  };
  like = (id, data) => {
    return this.post(`/api/partner-hub-trend-news/like/${id}`, data);
  };
}

export const partnerHubTrendNewsService = new PartnerHubTrendNewsService();
