import axios from "axios";

export async function getAllProducts(){
    const data = await axios.get(`http://localhost:8080/product`);
    return data.data;
}