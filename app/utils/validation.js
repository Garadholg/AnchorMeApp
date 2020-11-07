export const loginValidation = (username, password) => {
    return !((!username || /^\s*$/.test(username)) || (!password || /^\s*$/.test(password)));
};