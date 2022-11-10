import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/login.png';
import Card from '../../components/ui/card/Card';

import styles from './auth.module.scss';

const Login = () => {
  return (
    // section width: 100% padding: 4rem 0;
    // container max-width: 1000px; margin: 0 auto; padding: 0 20px;
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img
          src={loginImage}
          alt='Login'
          width='380'
        />
      </div>
      {/* wrap in card component */}
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form>
            <input
              type='text'
              placeholder='email'
              required
            />
            <input
              type='password'
              placeholder='password'
              required
            />
            <button className='--btn --btn-primary --btn-block'>Login</button>
            <div className={styles.links}>
              <Link to='/reset'>Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className='--btn --btn-danger --btn-block'>
            <FaGoogle
              color='#fff'
              style={{ marginRight: '8px' }}
            />
            Login with Google
          </button>
          <span className={styles.register}>
            <p>Don't have an account ? </p>
            <Link to='/register'> Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
