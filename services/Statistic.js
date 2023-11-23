const { BaseService } = require("./baseService");

class StatisticService extends BaseService {
  getBarChart = (date = "") => {
    return this.get(`/api/statistic/get-partner-statistic?date=${date}`);
  };
}

export const statisticService = new StatisticService();
