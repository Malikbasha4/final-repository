import React from 'react';

const LoginForm = ({ onLogin }) => {
  const handleLogin = () => {
    // Implement your login logic here
    // Call onLogin upon successful login
    onLogin();
  };

  return (
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true">Login</label>
        <input type="email" name="email" placeholder="Email" required="" />
        <input type="password" name="pswd" placeholder="Password" required="" />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
