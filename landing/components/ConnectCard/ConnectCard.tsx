import React, { useState } from 'react';
import FirestoreManager from '~/util/firestoreManager';
import styles from './ConnectCard.module.css';
import toast, { Toaster } from 'react-hot-toast';
import Icon from '~/components/Icon';

const error = (msg) => toast.error(msg);
const success = () => toast.success('Successfully Waitlisted Email');

const firestoreManager = new FirestoreManager();

const ConnectCard = () => {
  const [email, setEmail] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    firestoreManager.validateEmail(email).then((status) => {
      if (status == 'Success') {
        firestoreManager.setEmail(email);
        success();
      } else {
        error(status);
      }
    });
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Connect with Hydralite.</h2>
      <p className={styles.description}>
        Watch us develop a one of a kind project management and discovery
        platform
      </p>
      <Toaster />
      <div className={styles.connectCard}>
        <div className={styles.waitlistCard}>
          <img
            src="/vectors/waitlist-illustration.svg"
            alt="waitlist"
            className={styles.waitlistCard__vector}
          />
          <div className={styles.waitlistCard__sub}>
            <h3>Join the Waitlist</h3>
            <p>
              Become the first to know when Hydralite releases. Just enter your
              email down below!
            </p>

            <div className={styles.waitlistCard__textbox}>
              <Icon name="at_black" />
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder={'email'.toUpperCase()}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <button type="submit" className={styles.waitlistCard__submit}>
                  Submit
                </button>
              </form>
            </div>

            <span className={styles.waitlistCard__subText}>
              We promise to never spam you.
            </span>
          </div>
        </div>
        <div className={styles.socialCardContainer}>
          <SocialCard
            icon="github"
            heading="Browse Our Github"
            description={`
                            Request a feature, Browse our open source code, 
                            join a discussion, or open an issue
                        `}
            buttonText="Go to Github"
            buttonHref="https://github.com/hydralite/hydralite"
          />
          <SocialCard
            icon="discord"
            heading="Join the Discord"
            description={`
                            Engage with the community, meet our team, apply to work with
                            us, and much more
                        `}
            buttonText="Join our server"
            buttonHref="https://discord.gg/4CUawcXqVD"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;

function SocialCard({ icon, heading, description, buttonText, buttonHref }) {
  return (
    <div className={styles.socialCard}>
      <div>
        <Icon
          name={icon}
          style={{
            height: '3rem',
            marginTop: '0.6rem',
          }}
        />
      </div>
      <div>
        <h3>{heading}</h3>
        <p>{description}</p>
        <SocialCardButton text={buttonText} href={buttonHref} />
      </div>
    </div>
  );
}

function SocialCardButton({ text, href }) {
  return (
    <a href={href} className={styles.socialCard__button}>
      {text}
      <Icon
        name="arrow_right"
        style={{
          height: '1.1rem',
          marginLeft: '1rem',
          marginBottom: '-3px',
        }}
      />
    </a>
  );
}
