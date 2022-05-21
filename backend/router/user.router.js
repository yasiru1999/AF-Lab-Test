import Router from '@koa/router';
import {deletePost, get, getAll, save, update} from '../api/user.api.js';

const usersRouter = new Router({
    prefix: '/users'
});

usersRouter.post('/',(ctx) => {
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

usersRouter.get('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

usersRouter.get('/',(ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

usersRouter.put('/:id',(ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

usersRouter.del('/:id',(ctx) => {
    const id = ctx.params.id;
    deletePost(id);
    ctx.status = 204;
});

export default usersRouter;