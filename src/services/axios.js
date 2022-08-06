import axios from "axios";

const httpSvc = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server Timed Out",
    headers:{ 
        "content-type": "application/json"
    }
});

const getHeaders = (config={}) => {
    let headers = {
        headers: {
            "content-type": "application/json"
        },
    }
    if(config['form_data']) {
        headers['headers']= {
            "content-type": "multipart/form-data"
        }
    }

    if(config['is_strict']) {
        let token = localStorage.getItem("stack_8_token");
        headers['headers']['authorization'] = "Bearer "+token;
    }

    if(config['params']){
        headers['params'] = config['params']
    }
    return headers;
}

export const httpPost = async (url, data, is_strict = false, form_data=false) => {
    try{
        let headers = getHeaders({
            is_strict: is_strict,
            form_data: form_data
        })
        await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
        let response = await httpSvc.post(url, data, headers);
        return response;
    } catch(error) {
        throw error
    }     
}

export const httpPut = async (url, data, is_form_data=false, is_strict = false) => {
    try{
        let headers = getHeaders({
            is_strict: is_strict,
            form_data: is_form_data
        })
        let response = await httpSvc.put(url, data, headers);
        return response.data;
    } catch(error) {
        throw error
    }  
}

export const httpGet = async (url, params = {}, is_strict= false) => {
    try{
        let headers = getHeaders({
            is_strict: is_strict,
            params: params
        })
        let response = await httpSvc.get(url, headers);
        return response.data;
    } catch(error) {
        throw error
    } 
}

export const httpDelete = async(url, is_strict) =>{
    try{
        let headers = getHeaders({
            is_strict: is_strict
        })
        let response = await httpSvc.delete(url, headers);
        return response.data;
    } catch(error) {
        throw error
    } 
}