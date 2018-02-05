const isRequired = (val) => {
    return val.length === 0 ? true : false
}

const isURL = (url) => {
    let re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return !re.test(url);
}

export { isRequired, isURL }