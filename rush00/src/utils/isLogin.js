import Cookies from 'js-cookie';
import { useJwt } from 'react-jwt';

const { decodedToken, isExpired } = useJwt(Cookies.get('token'));

const isLogin = () => !!isExpired;

export default isLogin;
