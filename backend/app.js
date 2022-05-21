import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors'

import usersRouter from "./router/user.router.js";
import itemsRouter from "./router/items.router.js";
import promoRouter from "./router/promo.router.js";
import cartsRouter from "./router/cart.router.js";
import wishlistRouter from "./router/wishlist.router.js";

const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(usersRouter.routes())
    .use(usersRouter.allowedMethods());
app.use(itemsRouter.routes())
    .use(itemsRouter.allowedMethods());
app.use(promoRouter.routes())
    .use(promoRouter.allowedMethods());
app.use(cartsRouter.routes())
    .use(cartsRouter.allowedMethods());
app.use(wishlistRouter.routes())
    .use(wishlistRouter.allowedMethods());

app.use(ctx => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = '<h3>Not Found</h3>';
    ctx.status = 404;
});

app.listen(3001, () => {
    console.log(`Application running on port 3001`);
});