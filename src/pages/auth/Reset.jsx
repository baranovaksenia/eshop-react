import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/card/Card';
import resetImage from '../../assets/reset.png';

import styles from './auth.module.scss';

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img
          src={resetImage}
          alt='Login'
          width='250'
        />
      </div>
      {/* wrap in card component */}
      {/* TODO: add eye */}
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form>
            <input
              type='text'
              placeholder='Email'
              required
            />

            <button className='--btn --btn-primary --btn-block'>
              Reset Password
            </button>
          </form>

          <span className={styles.register}>
            <p>Already have an account ? </p>
            <Link to='/login'> Login</Link>
          </span>
          <span className={styles.register}>
            <p>Don't have an account ? </p>
            <Link to='/login'> Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
