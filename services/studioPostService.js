const { BaseService } = require("./baseService");

class StudioPostService extends BaseService {
  createStudioPost = (category, data) => {
    return this.post(`/api/studio-post/create?category=${category}`, data);
  };
  getAllPostPartner = () => {
    return this.get(`/api/studio-post/allPosts`);
  };
  getDetailPostPartnerById = (id, category) => {
    return this.get(`/api/studio-post/byPartnerId/${id}?category=${category}`);
  };
  updatePostPartner = (id, category, data) => {
    return this.patch(
      `/api/studio-post/byPartnerId/${id}?category=${category}`,
      data
    );
  };
}

export const studioPostService = new StudioPostService();
