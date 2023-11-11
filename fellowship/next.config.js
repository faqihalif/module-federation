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
                name: 'fellowship',
                remotes: {
                    host: `host@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                },
                filename: 'static/chunks/remoteEntry.js',
            })
        )
        return config
    }
}

module.exports = nextConfig
