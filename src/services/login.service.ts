import axios from 'axios';

export const loginService = async (email: string, password: string) => {
  try {
    const url = 'http://localhost:3000/login';

    const response = await axios.post(url, { email, password });
    console.log('login success::', response.data);

    return response.data;
  } catch (err) {
    console.log('error axios::', err);
  }
};
