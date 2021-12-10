const Router = require('koa-router');
const userContrl = require('../controllers/users/UserController');

const router = new Router({
    prefix: '/api'
});

router
    .post('/user/AddUser', userContrl.addUserData)
    .get('/user/:id', userContrl.getUserData)

module.exports = router;