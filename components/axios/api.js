import axios from 'axios';
// const defaultURL = (process.env.NODE_ENV==="production") ? "https://newmasterconnect.herokuapp.com/api" :  "http://localhost:8000/api";
const defaultURL =  "https://newmasterconnect.herokuapp.com/api";

axios.defaults.baseURL = defaultURL;
// axios.defaults.baseURL = "http://localhost:8000/api";
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.xsrfHeaderName = 'Accept';
// axios.defaults.xsrfHeaderName = 'accept-encoding';
// axios.defaults.xsrfHeaderName = 'content-type';
// axios.defaults.xsrfHeaderName = 'origin';
// axios.defaults.xsrfHeaderName = 'dnt';
// axios.defaults.xsrfHeaderName = 'user-agent';

axios.defaults.xsrfHeaderName = 'Access-Control-Allow-Origin';
axios.defaults.xsrfHeaderName = 'Cross-Origin-Opener-Policy';
axios.defaults.xsrfHeaderName = 'Access-Control-Allow-Headers';
axios.defaults.xsrfHeaderName = 'authorization';
axios.defaults.xsrfHeaderName = 'Content-Type';
axios.defaults.xsrfHeaderName = 'X-Frame-Options';
axios.defaults.xsrfHeaderName = 'withCredentials';
axios.defaults.xsrfHeaderName = 'Referrer-Policy';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['X-Frame-Options'] = 'DENY';
axios.defaults.headers.common['X-Content-Type-Options'] = 'nosniff';
axios.defaults.headers.common['Referrer-Policy'] = 'same-origin,strict-origin-when-cross-origin';
axios.defaults.headers.common['Accept'] = '*/*';
axios.defaults.headers.common['Cross-Origin-Opener-Policy'] = 'same-origin';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['withCredentials'] = 'false';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,Authorization';

const api = axios.create({
    headers:{
        "mode":"no-cors",
        "Accept":'*/*',
        'Content-Type':'application/json',
        "Referrer-Policy":"same-origin",
        "Access-Control-Allow-Origin":"origin-list"
        
        
    }
    
    

});

export default api