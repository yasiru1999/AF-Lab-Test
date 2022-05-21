import {randomUUID} from 'crypto';

const items = new Map();

export const save = ({ProductName,ProductType,Price,Qty}) => {
    const item = {id:randomUUID(),ProductName,ProductType,Price,Qty, postedDate: new Date()};
    items.set(item.id, item);
    return item;
};

export const get = (id) => {
    const item = items.get(id);
    if (!item) {
        throw new Error(`Not found for id ${id}`);
    }
    return item;
};

export const getAll = () => {
    return [...items.values()];
};

export const update = (id, {ProductName,ProductType,Price,Qty}) => {
    if (!items.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    const item = {id, ProductName,ProductType,Price,Qty, postedDate: new Date()};
    items.set(item.id, item);
    return item;
};

export const deletePost = (id) => {
    if (!items.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    items.delete(id);
};