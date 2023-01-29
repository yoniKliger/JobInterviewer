const mockData = require('../../mockData.json');

const applications = [];
// const applications = mockData;

let id = 1;

const getApplicationHandler = (req, res) => {
    res.json(applications);
};

const postApplicationHandler = (req, res) => {
    const newApplication = {
        ...req.body,
        id: id++,
        createdAt: new Date().toISOString()
    };

    applications.push(newApplication);

    res.json(newApplication);
};

const routes = {
    get: [{
        path: '/application',
        handler: getApplicationHandler
    }],

    post: [{
        path: '/application',
        handler: postApplicationHandler
    }]
}

module.exports = {
    routes
};