module.exports = {
    apps: [
        {
            name: 'BikeTag',
            script: 'app.js',
            env: {
                PORT: 80,
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
}
