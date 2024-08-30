/** @type {import('next').NextConfig} */


// const withPWA = require('next-pwa')({
//   dest: 'public'
// })



const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  // output: "export",
  // output: process.env.GITHUB_ACTION ? 'export' : undefined,
  trailingSlash: true,

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  // basePath: "",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  // reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  // distDir: 'build'

  reactStrictMode: false,


};



export default nextConfig;

// module.exports = withPWA(nextConfig)