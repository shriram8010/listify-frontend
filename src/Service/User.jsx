import axios from "axios";
import config from "../config";

const token="Bearer "+localStorage.getItem("token");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      }
      const id=parseInt(localStorage.getItem("id"))


export async function registerUser(firstName,lastName,email,password,address,phone){
    const body={
        firstName,lastName,email,password,address,phone
    }
    const response=await axios.post(`${config.url}user/register`,body);

    return response.data;
}

export async function loginUser(email,password){
    const body={
        email,password
    }
    
    const response=await axios.post(`${config.url}user/login`,body);
    

    return response.data;
}

export async function updateUser(id,firstName,lastName,email,address,phone){
    
    const body={
        id,firstName,lastName,email,address,phone
    }

    const response=await axios.put(`${config.url}user/update/${id}`,body,{headers:headers});

    return response.data;
}

export async function userDetail() {
    

    const response=await axios.get(`${config.url}user/get/${id}`)
    return response.data;
}

export async function productUser(userId) {
    const response=await axios.get(`${config.url}user/get/${userId}`)
    return response.data;
}