import axios from 'axios';

export const loginService = async (email: string, password: string) => {
  const url = 'http://localhost:3000/login';

  const response = await axios.post(url, { email, password });
  console.log(response.data);

  return response.data;
};
