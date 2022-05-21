import {randomUUID} from 'crypto';

const promos = new Map();

export const save = ({ProductID,ProductName,PromoPrecentage,DiscountPrice,ExpiredDate}) => {
    const promo = {id:randomUUID(),ProductID,ProductName,PromoPrecentage,DiscountPrice,ExpiredDate, postedDate: new Date()};
    promos.set(promo.id, promo);
    return promo;
};

export const get = (id) => {
    const promo = promos.get(id);
    if (!promo) {
        throw new Error(`Not found for id ${id}`);
    }
    return promo;
};

export const getAll = () => {
    return [...promos.values()];
};

export const update = (id, {ProductID,ProductName,PromoPrecentage,DiscountPrice,ExpiredDate}) => {
    if (!promos.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    const promo = {id,ProductID, ProductName,PromoPrecentage,DiscountPrice,ExpiredDate, postedDate: new Date()};
    promos.set(promo.id, promo);
    return promo;
};

export const deletePost = (id) => {
    if (!promos.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    promos.delete(id);
};