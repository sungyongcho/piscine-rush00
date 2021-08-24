import Cookies from 'js-cookie';
import useCookies from 'react-cookie';

const getCookie = function (name) {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return value ? value[2] : null;
};

const isLogin = () => {
  console.log('Cookies');
  console.log(getCookie('jwt_token'));
  return !!getCookie('jwt_token');
};

export default isLogin;
