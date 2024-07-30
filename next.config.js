/** @type {import('next').NextConfig} */
const nextConfig = {}

require('dotenv').config();

module.exports = {
  env: {
    FROM_EMAIL: process.env.FROM_EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
};


module.exports = nextConfig
