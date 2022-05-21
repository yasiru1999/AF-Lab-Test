import Router from '@koa/router';
import {deletePost, get, getAll, save, update} from '../api/items.api.js';

const itemsRouter = new Router({
    prefix: '/items'
});

itemsRouter.post('/',(ctx) => {
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

itemsRouter.get('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

itemsRouter.get('/',(ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

itemsRouter.put('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

itemsRouter.del('/:id',(ctx) => {
    const id = ctx.params.id;
    deletePost(id);
    ctx.status = 204;
});

export default itemsRouter;