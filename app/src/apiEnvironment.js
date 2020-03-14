import axios  from 'axios'

const api = axios.create({
    baseURL: 'https://tabloider-api.herokuapp.com/api',
  });

// const api = axios.create({
//     baseURL: 'http://localhost:5000/api/',
//   });

  export {api}