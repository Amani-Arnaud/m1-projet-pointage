import axios from 'axios';

// const API_URL = 'http://127.0.0.1/api-pointage/api/v1';
const API_URL = 'http://192.168.193.1/api-pointage/api/v1';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkMatricule = async (data) => {
  return instance.post('/verify.php', data);
};

export const register = async (data) => {
  return instance.post('/register', data);
};

export const login = async (data) => {
  return instance.post('/login', data);
};

export const getUserInfo = async (token) => {
  return instance.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
