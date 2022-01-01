import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

const fetchLucasNumber = async (n) => {
  try {
    const response = await instance.get(`/lucas/${n}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export { fetchLucasNumber };
