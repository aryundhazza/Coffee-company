// /** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|swf|ogv)$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos/',
              outputPath: 'static/videos/',
              name: '[name].[hash].[ext]',
              esModule: true,
            },
          },
        });
    
        return config;
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "carmudi-journal.icarcdn.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "img4.icarcdn.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "imgv3.fotor.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "encrypted-tbn0.gstatic.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "c.pxhere.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
// next.config.js

