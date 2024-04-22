import { USEREXPERTISE, USERNAME } from '@/constants';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <section className='home section'>
      <div className='home-container container' id='home-section-anchor'>
        <div className='intro'>
          <Image
            src={'/imgs/profile-photo.jpeg'}
            alt='Profile photo'
            width={200}
            height={100}
            className='shadow-dark profile-photo'
          />
          <h1>{USERNAME}</h1>
          <p>{USEREXPERTISE}</p>
          <div className='social-links'>
            {/* <a href='https://twitter.com/' target='_blank'>
              <i className='fa fa-twitter' />
            </a> */}
            {/* <a href='https://facebook.com/' target='_blank'>
              <i className='fa fa-facebook' />
            </a> */}
            <a href='https://github.com/ummarHamid' target='_blank'>
              <i className='fa fa-github' />
            </a>
            {/* <a href='https://instagram.com/' target='_blank'>
              <i className='fa fa-instagram' />
            </a> */}
            <a href='https://www.linkedin.com/in/ummar34/' target='_blank'>
              <i className='fa fa-linkedin' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
