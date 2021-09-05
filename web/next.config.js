const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: [
      "github.com",
      "cdn.discordapp.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
