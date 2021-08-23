import { useJwt } from 'react-jwt';

const isLogin = () => !!Cookies.get('token');

export default isLogin;
