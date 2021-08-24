import axios from 'axios';
import { setJwt } from 'cookie-parser';

const getJwt = async () => {
  const { data } = await axios.get('/jwt');
  setJwt(data.token);
};

export default getJwt;
