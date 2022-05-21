import {randomUUID} from 'crypto';

const users = new Map();

export const save = ({fname,lname,uName,Email,Pword,SignAs}) => {
    const user = {id:randomUUID(),fname,lname,uName,Email,Pword,SignAs, postedDate: new Date()};
    users.set(user.id, user);
    return user;
};

export const get = (id) => {
    const user = users.get(id);
    if (!user) {
        throw new Error(`Not found for id ${id}`);
    }
    return user;
};

export const getAll = () => {
    return [...users.values()];
};

export const update = (id, {fname,lname,uName,Email,Pword,SignAs}) => {
    if (!users.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    const user = {id, fname,lname,uName,Email,Pword,SignAs, postedDate: new Date()};
    users.set(user.id, user);
    return user;
};

export const deletePost = (id) => {
    if (!users.has(id)) {
        throw new Error(`Not found for the id ${id}`);
    }
    users.delete(id);
};