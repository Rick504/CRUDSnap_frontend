import axios from 'axios';

export const registerService = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const url = 'http://localhost:3000/register';

    const response = await axios.post(url, { name, email, password });
    console.log('register success::', response.data);

    return response.data;
  } catch (err) {
    console.log('error axios::', err);
  }
};
