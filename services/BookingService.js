import { BaseService } from "./baseService";

export class BookingPartnerService extends BaseService {
  getAllBookingPartner = (page = 1, limit = 10, filter = {}) => {
    return this.post(
      `/api/booking/partner?page=${page}&limit=${limit}`,
      filter
    );
  };
}

export const bookingPartnerService = new BookingPartnerService();
