import {randomUUID} from 'crypto';

const carts = new Map();

export const save = (ProductName,ProductType,Price) => {
    const cart = {id:randomUUID(),ProductName,ProductType,Price, postedDate: new Date()};
    carts.set(cart.id, cart);
    return cart;
};

export const get = (id) => {
    const cart = carts.get(id);
    if (!cart) {
        throw new Error(`Not found for id ${id}`);
    }
    return cart;
};

export const getAll = () => {
    return [...carts.values()];
};

export const update = (id, {ProductName,ProductType,Price,Qty}) => {
    if (!carts.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    const cart = {id,ProductName,ProductType,Price,Qty, postedDate: new Date()};
    carts.set(cart.id, cart);
    return cart;
};

export const deletePost = (id) => {
    if (!carts.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    carts.delete(id);
};