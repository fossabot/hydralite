const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: [
      "avatars.dicebear.com",
      "github.com",
      "cdn.discordapp.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "media-exp1.licdn.com",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
