import { httpPost } from "./axios";

export const register  = async (data) => {
    try{
        let formData = new FormData();        
        Object.keys(data).map((key, index) => {
            formData.append(key, data[key])
        })

        let response = await httpPost('register', formData, false, true);
        return response;
    } catch(error) {
        throw error;
    }
}

export const login = async (username, password) => {
    try {
        let response = await httpPost('login',  {
            email: username,
            password: password
        });
        let token = response.result.token;
        let user = response.result.user;
        let storage_user = {
            name: user.name,
            email: user.email,
            role: user.role,
        }
        localStorage.setItem("stack_8_token", token);
        localStorage.setItem('stack_8_user', JSON.stringify(storage_user));
        return response;
    } catch(error) {
        throw error
    }
}