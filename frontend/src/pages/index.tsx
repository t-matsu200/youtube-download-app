import { useState } from 'react';
import MainLayout from '../layouts';
import Loading from '../component/loading';
import styles from '../styles/Home.module.scss';
import downloadService from '../services/downloadService';
import Advertisement from '../component/advertisement';
import { logo } from '../constants/const';

// https://youtube.com/shorts/isthKlAu1YE


function FormComponent(props) {
  return <>
            <form onSubmit={props.handleSubmit}>
              <div className={styles.contents}>
                <div className={styles.blank}>
                  <div className={styles.main}>
                    <img
                      src={logo}
                      width={240}
                      height={240}
                      alt="This is the logo mark of this site."
                    />
                    <div className={styles.input_group}>
                      <input placeholder="https://www.youtube.com/watch?v=xxxxx" value={props.youtubeId} onChange={props.handleChange} type="text" className={styles.form_control} maxLength={256} />
                      <span className={styles.input_group_btn}>
                          <button className={styles.btn} type="submit">click!</button>
                      </span>
                    </div>
                    <div className={styles.list}>
                      <ul>
                        <li>It&#39;s free as many times as you like.</li>
                        <li>Simple and clear operability.</li>
                        <li>No membership registration is required.</li>
                        <li>Does not collect any user information.</li>
                      </ul>
                      <div className={styles.caution}>※ Videos may not be available due to copyright limitations.</div>
                    </div>
                  </div>
                  <Advertisement />
                </div>
              </div>
            </form>
          </>
}


export default function Home(props) {
  const youtubeDomains = [
    'youtube.com', 'www.youtube.com', 'youtu.be', 'm.youtube.com',
    'youtube-nocookie.com', 'www.youtube-nocookie.com',
  ];
  const [ isLoading, setIsLoading ] = useState(false);
  const [youtubeId, setYoutubeId] = useState('');
  const ds = downloadService(0);

  function handleChange(event: any): void {
    setYoutubeId(event.target.value);
  }

  function handleSubmit(event: any): void {
    event.preventDefault();
    let errMsg = '';
    if (!youtubeId) {
      errMsg = 'Please enter the YouTube URL.';
    } else if (!youtubeId.startsWith('https://')) {
      errMsg = 'Please enter `https` at the beginning of the URL.';
    } else {
      const splitUrl = youtubeId.split('/');
      if (!youtubeDomains.includes(splitUrl[2])) {
        errMsg = 'Please enter your youtube domain.';
      }
    }
    if (errMsg) {
      alert(errMsg);
      return;
    }

    ds.sendText(youtubeId);
    setIsLoading(true);
  }

  return (
    <MainLayout>
      { !isLoading && <FormComponent youtubeId={youtubeId} handleSubmit={handleSubmit} handleChange={handleChange} /> }
      { isLoading &&
        <div style={{ paddingTop: '15%' }}>
          <Loading percent={ds.downloaded} />
        </div>
      }
    </MainLayout>
  );
}

export const getStaticProps = async () => {

  return {
    props: {
    },
    revalidate: 60,
  };
};

