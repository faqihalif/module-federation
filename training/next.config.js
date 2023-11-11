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
                name: 'training',
                remotes: {
                    host: `host@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                    fellowship: `fellowship@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
                },
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './training': './pages/index.jsx',
                    './training/external': './pages/external/index.jsx',
                    './training/external/[id]': './pages/external/[id].jsx',
                    './training/inhouse': './pages/inhouse',
                }
            })
        )
        return config
    }
}

module.exports = nextConfig
