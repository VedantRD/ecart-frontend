const prod = {
    url: ''
};
const dev = {
    // url: 'http://localhost:5000'
    url: ''
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;