import React from 'react';

const SingUp = () => (
  <div>
    <h1>This is SignUp page.</h1>
    <form>
      <input type="text" placeholder="username" required />
      <br />
      <input
        type="password"
        placeholder="password(6글자이상)"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,50}$"
        required
      />
      <br />
      <input
        type="password"
        placeholder="password-check"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,50}$"
        required
      />
      <br />
      <input
        type="email"
        placeholder="email"
        pattern=".+@globex\.com"
        required
      />
      <br />
      <input
        type="tel"
        placeholder="phone number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
      <small>Format: 123-456-7890</small>
      <br />
      <button type="submit">Signup</button>
    </form>
  </div>
);

export default SingUp;
