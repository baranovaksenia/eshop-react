import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/card/Card';
import registerImage from '../../assets/register.png';
import styles from './auth.module.scss';

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img
          src={registerImage}
          alt='Login'
          width='380'
        />
      </div>
      {/* wrap in card component */}
      {/* TODO: add eye */}
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form>
            <input
              type='text'
              placeholder='Email'
              required
            />
            <input
              type='password'
              placeholder='Password'
              required
            />
            <input
              type='password'
              placeholder='Confirm password'
              required
            />
            <button className='--btn --btn-primary --btn-block'>
              Register
            </button>
          </form>

          <span className={styles.register}>
            <p>Don't have an account ? </p>
            <Link to='/login'> Login</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Register;
