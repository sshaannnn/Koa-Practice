const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router({
    prefix: '/api'
});
app.use(koaBody());


router.get('/', async (ctx) => {
    ctx.body = "hello";
})

router.get('/about', async (ctx) => {
    ctx.body = "about";
})

router.get('/user', async (ctx) => {
    const firstName = ctx.query.firstName;
    const lastName = ctx.query.lastName;
    ctx.body = `${firstName}-${lastName}`;
});
//http://localhost:3000/api/user?firstName=shan&lastName=Wu
//shan-Wu

router.get('/login', async (ctx) => {
    ctx.body = `
    <form method="POST" action="/api/login">
        <p>UserName</p>
        <input name="user" /><br/>
        <button type="submit">submit</button>
    </form>
`;
});

router.post('/login', async (ctx) => {
    console.log(ctx.request.body);
    const userName = ctx.request.body.user;
    ctx.body = `hi ${userName}`;
});



app.use(router.routes());

app.listen("3000");