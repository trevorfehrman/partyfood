import axios from 'axios';

let token = localStorage.getItem('accessToken');
console.log({ token });
const instance = axios.create({
  baseURL: `http://localhost:3400/api/`
});

if (token) {
  instance.defaults.headers.common['Authorization'] = token;
}

export default instance;
