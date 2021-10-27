import styles from './index.module.scss';
import Link from 'next/link';

function PolicyContent() {
  return (
    <section className={styles.container}>
      <Link href="/">
        <a className={styles.link_return}>
          <span>Return</span>
        </a>
      </Link>
      <div className={styles.main}>
        <h1>privacy policy</h1>
        <p>This privacy policy document outlines the data we receive and how we manage it.</p>
        <p>This policy is subject to change.</p>
        <p>This document was last updated on October 1, 2021.</p>
        <hr />

        <h2>Log</h2>
        <p>This service uses a log file, which is a file that records information such as requested web page resources, IP addresses, browser types, and time stamps. This information is used by the Service for troubleshooting, trend analysis, and site maintenance. This data cannot be linked to personally identifiable information.</p>
        <hr />

        <h2>Information collected</h2>
        <p>This service receives and saves the information entered on the website. This includes video data such as requested resources, search queries, requested filenames, start time, end time, quality and more. This information is stored for tracking and analyzing user activity and is associated with an IP address. None of this information will be shared with third parties.</p>
        <hr />

        <h2>Cookie</h2>
        <p>Cookies may be stored by Google through our use of Google Analytics. For more information on Google's privacy policy, please see the Google section below.</p>
        <p>This service has no control over cookies set and managed by third parties.</p>
        <p>You can manage and disable cookies by referring to the options of your individual browser.</p>
        <hr />

        <h2>Google</h2>
        <p>This service uses <a href="http://www.google.com/analytics/">Google Analytics</a>. This service is not controlled by this service and has its own privacy policy. Google's privacy policy can be found <a href="https://policies.google.com/privacy">here</a>.</p>
        <hr />

      </div>

      <Link href="/">
        <a className={styles.link_return}>
          <span>Return</span>
        </a>
      </Link>
    </section>
  );
}

export default PolicyContent;
