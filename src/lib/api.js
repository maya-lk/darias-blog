import axios from 'axios';

export default axios.create({
  baseURL: `https://mayaprojects.net/darias/blog/wp/wp-json/`
});
