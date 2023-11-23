const { BaseService } = require("./baseService");

class RatingService extends BaseService {
  getAllRatingPartner = (category) => {
    return this.get(`/api/rating&report/partner?category=${category}`);
  };
  replyComment = (data) => {
    return this.patch(`/api/rating&report/partner/update`, data);
  };
}

export const ratingService = new RatingService();
