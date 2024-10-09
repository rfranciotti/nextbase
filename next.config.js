/** @type {import('next').NextConfig} */

const RemovePreloadPlugin = class {
    apply(compiler) {
        compiler.hooks.compilation.tap('RemovePreloadPlugin', (compilation) => {
            const HtmlWebpackPlugin = require('html-webpack-plugin');

            HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
                'RemovePreloadPlugin',
                (data, cb) => {
                    data.assetTags.styles = data.assetTags.styles.filter(tag => {
                        return !(tag.tagName === 'link' && tag.attributes.rel === 'preload');
                    });
                    cb(null, data);
                }
            );
        });
    }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: {
            displayName: process.env.NODE_ENV === 'development',
            ssr: true,
            fileName: true,
            cssProp: true,
            minify: true,
            transpileTemplateLiterals: true,
            pure: false,
        },
    },
    // images: {
    //     domains: ['localhost'], // Adicione o domínio do seu servidor de imagens
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/uploads/**',
            },
        ],
    },
    webpack: (config, { isServer, dev }) => {
        if (!isServer) {
            config.plugins.push(new RemovePreloadPlugin());
        }

        // Configuração do fallback para o pacote "buffer"
        config.resolve.fallback = {
            ...config.resolve.fallback,
            buffer: require.resolve('buffer/'),
        };

        // Configuração do hot-reloading
        if (dev) {
            config.devServer = {
                ...config.devServer,
                hot: true,
            };
        }

        return config;
    },
});




module.exports = nextConfig;