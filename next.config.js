/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || 'your_gemini_api_key_here'
  }
}

module.exports = nextConfig 