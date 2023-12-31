import axios from "axios";

const instance = axios.create({
    baseURL: "https://common-server-ldx7.onrender.com/api/markdown",
  // baseURL: "http://localhost:5002/api/markdown",
});

export const getAllData = async () => {
  try {
    const response = await instance.get(`/all`);

    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const getOneData = async (name:string) => {
    try {
         const response = await instance.get(`/${name}`);

         return response.data;
    } catch (error) {
         return error;
    }
}


export const addDoc = async (data: {}) => {
  try {
    const response = await instance.post("/add", data);

    return response;
  } catch (error) {
    return error;
  }
};

export const deleteDoc = async (name:string) => {
try {
  const response = await instance.delete(`/delete/${name}`)

  return response.data
} catch (error) {
  return error
}
}