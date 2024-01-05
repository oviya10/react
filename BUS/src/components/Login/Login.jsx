import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';

const Login = () => {
 const navigate = useNavigate();
 const [data, setData] = React.useState({ email: '', password: '' });
 const [error, setError] = React.useState('');

 const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: data.email,
        password: data.password,
      });
      console.log('Logged in:', response.data);
      navigate('/navbar');
    } catch (error) {
      console.error('Error in login:', error);
    }
 };

 return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <Link to="/navbar">
            <button type="submit" className={styles.green_btn}> 
              Sign In
            </button>
            </Link>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn} onClick={handleChange}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
 );
};

export default Login;