/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true | {
            // Enabled by default in development, disabled in production to reduce file size,
            // setting this will override the default for all environments.
            displayName: false,
            // Enabled by default.
            ssr: true,
            // Enabled by default.
            fileName: true,
            // Empty by default.
            cssProp: true,
            // Empty by default.
            namespace: "",
            // Not supported yet.
            minify: true,
            // Not supported yet.
            transpileTemplateLiterals: true,
            // Not supported yet.
            pure: false,
        },
    }
}

module.exports = nextConfig
