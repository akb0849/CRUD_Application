import koaRouter from 'koa-router';

const router = new koaRouter();

router.get('/testing', (ctx: any) => {
    ctx.body = "testing successful"
});

export default router;