let index = 0;
let userDataList = [];

class UserController {
    async addUserData(ctx) {
        const { name } = ctx.request.body;
        const { email } = ctx.request.body;
        const { dwp } = ctx.request.body;

        if (name && email && dwp) {
            const userName = name;
            const userEmail = email;
            const userDwp = dwp;
            userDataList.push({
                id: index++,
                name: userName,
                email: userEmail,
                dwp: userDwp,
                createTime: new Date(),
            });
            console.log(userDataList);

            ctx.status = 201;
            ctx.body = {
                stat: 'ok',
                result: index
            }
        }
        else {
            ctx.status = 400;
        }
    }

    async getUserData(ctx) {

    }

}


module.exports = new UserController();