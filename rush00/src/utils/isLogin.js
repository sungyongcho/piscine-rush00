const getCookie = (name) => {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return value ? value[2] : null;
};

const isLogin = () => {
  console.log('Cookies');
  console.log(getCookie('jwt_token'));
  console.log(getCookie('jwt_token') != null);
  return getCookie('jwt_token') != null;
};

export default isLogin;
