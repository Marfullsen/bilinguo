import React from 'react';

import styles from './WelcomeSite.module.css';

const WelcomeSite = () => {
  return (
    <section className={"container " + styles.vh100}>
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2" className={styles.register}>
          <div class="columns">
            <div class={"column " + styles.left}>
              <h1 class="is-1" className={styles.title}>Super Cool Website</h1>
              <h2 class="subtitle is-4" className={styles.colored}>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex deleniti aliquam tempora libero excepturi vero soluta odio optio sed.</p>
            </div>
            <div class="column has-text-centered" className={styles.right}>
              <h1 class="is-4" className={styles.title}>Sign up today</h1>
              <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <form>
                <div className={styles.field}>
                  <div class="control">
                    <input class="input is-medium" type="text" placeholder="Name"/>
                  </div>
                </div>

                <div className={styles.field}>
                  <div class="control">
                    <input class="input is-medium" type="email" placeholder="Email"/>
                  </div>
                </div>
                <button class="button is-block is-primary is-fullwidth is-medium">Submit</button>
                <br/>
                <small>
                  <em>Lorem ipsum dolor sit amet consectetur.</em>
                </small>
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <br/>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                &emsp;
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span>
                &emsp;
                <span class="icon">
                  <i class="fab fa-instagram"></i>
                </span>
                &emsp;
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                &emsp;
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="level-right">
              <small class="level-item">
                &copy; Super Cool Website. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSite;