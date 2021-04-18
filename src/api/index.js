import axios from "axios";

const url = "http://localhost:3333";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${url}/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
