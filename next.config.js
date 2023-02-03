/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/beach-resort-application',
        destination: 'https://beach-resort-reservation-react.netlify.app/',
      },
      {
        source: '/beach-resort-application/:slug*',
        destination: 'https://beach-resort-reservation-react.netlify.app/:slug*',
      },
    ]
  },
};

module.exports = nextConfig;
