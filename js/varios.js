//const URL_API = "http://localhost:9876/"; 
const URL_API = "https://cristianmaida.pagekite.me/"; 
//const URL_API = "https://129.151.116.191/";
//const URL_API = "https://www.cristianmaida.tech/";
const manejadorFetch = async (url, options) => {
    return await fetch(url, options)
        .then(manejadorError);
};

const manejadorError = (res) => {
    if ( ! res.ok)
    {
        throw new Error(res.statusText);
    } 

    return res;

};



