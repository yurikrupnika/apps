module.exports = {
    info: {
        // API informations (required)
        title: 'Hello World', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'A sample API', // Description (optional)
    },
    // host, // Host (optional)
    basePath: '/api', // Base path (optional)
    apis: [
        '../../packages/services/**/src/api/**/index.js', // for lerna paths
    ]
};
