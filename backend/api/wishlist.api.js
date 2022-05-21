import {randomUUID} from 'crypto';

const wishlists = new Map();

export const save = (ProductName,ProductType,Price) => {
    const wishlist = {id:randomUUID(),ProductName,ProductType,Price, postedDate: new Date()};
    wishlists.set(wishlist.id, wishlist);
    return wishlist;
};

export const get = (id) => {
    const wishlist = wishlists.get(id);
    if (!wishlist) {
        throw new Error(`Not found for id ${id}`);
    }
    return wishlist;
};

export const getAll = () => {
    return [...wishlists.values()];
};

export const update = (id, {ProductName,ProductType,Price,Qty}) => {
    if (!wishlists.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    const wishlist = {id,ProductName,ProductType,Price,Qty, postedDate: new Date()};
    wishlists.set(wishlist.id, wishlist);
    return wishlist;
};

export const deletePost = (id) => {
    if (!wishlists.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    wishlists.delete(id);
};