// module federation
const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['jec.co.id'],
    },
    webpack: (config, options) => {
        const { isServer } = options
        config.experiments = { topLevelAwait: true }
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                remotes: {
                    fellowship: `fellowship@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                    training: `training@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                },
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    // pages
                    './index': './src/pages/index.jsx',
                    './appointment': './src/pages/appointment/index.jsx',

                    // components
                    './BreadCrumb': './src/components/common/BreadCrumb.jsx'
                }
            })
        )
        return config
    }
}

module.exports = nextConfig
