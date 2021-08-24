import Cookies from 'js-cookie';
import useCookies from 'react-cookie';

const isLogin = () => {
  console.log('Cookies');
  return !!Cookies.get('jwt_token');
};

export default isLogin;
