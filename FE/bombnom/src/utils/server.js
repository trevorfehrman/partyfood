import axios from 'axios';

let user = JSON.parse(localStorage.getItem('user'));
let token;
if (user) {
  token = user.accessToken;
}
const instance = axios.create({
  baseURL: `http://localhost:3400/api/`
});

if (token) {
  instance.defaults.headers.common['Authorization'] = token;
}

export default instance;
