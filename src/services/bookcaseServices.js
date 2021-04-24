import axios from 'axios';

const url = 'http://localhost:3001/api/bookcase';
export const addBookcase = async (name) => {
  const header = await createToken();
  const payload = { name }
  try {
    const res = await axios.post(url, payload, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getBookcases = async () => {
  const header = await createToken();
  try {
    const res = await axios.get(url, header);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
