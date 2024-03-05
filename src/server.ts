import Koa from "koa"
import Router from "@koa/router"
import bodyParser from "@koa/bodyparser"

const app = new Koa()
const router = new Router()
router.get("/login", (ctx) => {
    ctx.body = { url: "test" }
})

app.use(bodyParser({ enableTypes: ["json"], encoding: "utf-8" }))
    .use(async (ctx, next) => {
        try {
            await next()
        } catch (err: any) {
            // if (err instanceof UserDBError || err instanceof InvalidRequestError) {
            //     ctx.status = 400;
            //     ctx.body = {
            //         message: err.message
            //     }
            // } else if (err instanceof EAAccountError) {
            //     console.error(err.message)
            //     ctx.status = 500
            //     ctx.body = {
            //         message: `EA Error: ${err.message}`
            //     }
            // }
            ctx.status = 500;
            ctx.body = {
                message: err.message
            };
        }
    })
    .use(router.routes())
    .use(router.allowedMethods())

export default app
