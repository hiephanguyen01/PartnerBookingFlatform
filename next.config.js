/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require("next/constants");
module.exports = (phase, { defaultConfig }) => {
  const isProduction = phase === PHASE_PRODUCTION_BUILD;
  const homePath = process.env.NEXT_PUBLIC_HOME_PATH || "/home";
  return {
    env: {
      BASE_URL: isProduction ? "https://am.bookingstudio.vn" : process.env.BASE_URL,
      BASE_URL_IMAGE: "https://am.bookingstudio.vn/api/image"
    },
    async redirects() {
      return [
        {
          source: "/",
          destination: homePath,
          permanent: false,
        },
      ];
    },
    // Other configuration options go here
  };
};
