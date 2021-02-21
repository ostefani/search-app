import apiGateway from './apiGateway';

const { API } = process.env;

const prefetchOptions = prefix => {
    const url = `${API}/prefetch?prefix=${prefix}`;
    return apiGateway(url);
};

export default prefetchOptions;
