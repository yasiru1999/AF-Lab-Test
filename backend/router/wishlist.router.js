import Router from '@koa/router';
import {deletePost, get, getAll, save, update} from '../api/wishlist.api.js';

const wishlistRouter = new Router({
    prefix: '/wishlist'
});

wishlistRouter.post('/',(ctx) => {
    const data = ctx.request.body;
    console.log(data);
    ctx.body = save(data.ProductName,data.ProductType,data.Price);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

wishlistRouter.get('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

wishlistRouter.get('/',(ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

wishlistRouter.put('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

wishlistRouter.del('/:id',(ctx) => {
    const id = ctx.params.id;
    deletePost(id);
    ctx.status = 204;
});

export default wishlistRouter;