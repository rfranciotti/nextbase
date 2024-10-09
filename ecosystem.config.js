module.exports = {
    apps: [
        {
            name: 'personal-frontend',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            cwd: './',
            instances: '1',
            autorestart: true,
            watch: false,
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
            env_local: {
                APP_ENV: 'local' // APP_ENV=local
            },
            env_dev: {
                APP_ENV: 'dev' // APP_ENV=dev
            },
            env_prod: {
                APP_ENV: 'prod' // APP_ENV=prod
            },
            error_file: 'pm2-logs/error.log',
            out_file: 'pm2-logs/output.log',
            log_file: 'pm2-logs/combined.log',
            time: true,
        },
    ],
};
