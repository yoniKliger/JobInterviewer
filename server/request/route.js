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

const putApplicationHandler = (req, res) => {

    const index = applications.findIndex(application => application.id === req.body.id);

    if (index === -1) {
        res.status(400);
        res.send(`id ${req.body.id} not found`);
    } else {
        applications[index] = {
            ...req.body,
            createdAt: applications[index].createdAt,
            updatedAt: new Date().toISOString()
        }
    
        res.json(applications[index]);    
    }

};

const routes = {
    get: [{
        path: '/application',
        handler: getApplicationHandler
    }],

    post: [{
        path: '/application',
        handler: postApplicationHandler
    }],

    put: [{
        path: '/application',
        handler: putApplicationHandler
    }]
}

module.exports = {
    routes
};