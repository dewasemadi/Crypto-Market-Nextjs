import axios from 'axios';
export const getMarket = async (page = 1) => {
  let data;
  try {
    const response = await axios.get(`${process.env.BASE_URL}/markets?vs_currency=idr&per_page=10&page=${page}`);
    data = response.data;
  } catch (err) {
    throw new Error(err);
  }
  return data;
};
