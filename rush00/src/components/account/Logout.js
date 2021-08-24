import axios from 'axios';

const Logout = () => {
  axios
    .get('/account/logout')
    .then((res) => {
      window.location = res.data.redirect;
    })
    .catch(console.log);

  window.location = '/';

};

export default Logout;
