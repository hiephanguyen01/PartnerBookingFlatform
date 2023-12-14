const { BaseService } = require("./baseService");

class StudioRoomService extends BaseService {
  createRoom = (category, data) => {
    return this.post(`/api/room/create?category=${category}`, data);
  };
  getAllRoomByPartnerId = (postId, category) => {
    return this.get(`/api/room/allRoomByPostId/${postId}?category=${category}`);
  };
  getDetailRoomById = (id, category) => {
    return this.get(`/api/room/detail/${id}?category=${category}`);
  };
  deleteRoomById = (id, category) => {
    console.log("deleldsa");
    return this.delete(`/api/room/${id}?category=${category}`);
  };
  updateRoomPartnerById = (id, category, data) => {
    return this.patch(`/api/room/detail/${id}?category=${category}`, data);
  };
  getScheduleAndPriceRoom = (roomId,category, tenantId) => {
    return this.get(`/api/studio-post/calendar-price?room=${roomId}&category=${category}&tenantId=${tenantId}`);
  };
 
}

export const studioRoomService = new StudioRoomService();
