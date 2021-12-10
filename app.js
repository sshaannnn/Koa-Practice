const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('koa-router')();
const apiRouter = require('./router/router');

const app = new Koa();

//index
const index = router.get('/', ctx => {
    ctx.response.body = 'hello world';
}).routes();

// router.get('/', async (ctx) => {
//     ctx.body = "hello";
// })

// router.get('/about', async (ctx) => {
//     ctx.body = "about";
// })

// router.get('/user', async (ctx) => {
//     const firstName = ctx.query.firstName;
//     const lastName = ctx.query.lastName;
//     ctx.body = `${firstName}-${lastName}`;
// });
//http://localhost:3000/api/user?firstName=shan&lastName=Wu
//shan-Wu

// router.get('/login', async (ctx) => {
//     ctx.body = `
//     <form method="POST" action="/api/login">
//         <label>UserName</label>
//         <input name="user" /><br/>
//         <button type="submit">submit</button>
//     </form>
// `;
// });

// router.post('/login', async (ctx) => {
//     console.log(ctx.request.body);
//     const userName = ctx.request.body.user;
//     ctx.body = `hi ${userName}`;
// });

app.use(index);
app.use(koaBody());
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
app.listen("3000");