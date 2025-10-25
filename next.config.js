const { webpack } = require('next/dist/compiled/webpack/webpack')
const path = require('path')

module.exports = {
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    }
    return config;
  
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
};