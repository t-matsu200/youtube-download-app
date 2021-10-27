import styles from './index.module.scss';
import Link from 'next/link';

function TermsContent() {
  return (
    <section className={styles.container}>
      <Link href="/">
        <a className={styles.link_return}>
          <span>Return</span>
        </a>
      </Link>
      <div className={styles.main}>
        <h1>terms of service</h1>
        <hr />
        <h2>Agree</h2>
        <p>By accessing and using this service, you agree to be bound by the terms of use contained in this document and are responsible for complying with applicable law.</p>
        <p>If you do not agree to these terms of use, you will not be permitted to use this service.</p>
        <p>The operator of the Services reserves the right to modify this document at any time in its sole discretion for any reason and you agree to be bound by the then version of this Terms of Service document. The operator of this service may change or discontinue the service for any reason without prior warning.</p>
        <p>If you violate any of the listed restrictions, this license will terminate automatically. The Services may also terminate this license at any time and for any reason in its sole discretion.</p>
        <p>No partnership, venture, or employment with the Services will result from your acceptance of the terms of use specified in this document.</p>
        <p>This document was last updated on October 1, 2021.</p>
        <hr />

        <h2>content</h2>
        <p>The linked material displayed on this service has not been reviewed and the service is not responsible for the content of such linked material. The links of this service do not endorse the linked materials by this service, and use of such links is at your own risk.</p>
        <p>The content displayed on this service may not be complete or up-to-date in fact and its accuracy is not guaranteed.</p>
        <p>You agree that all content, information and data you send to the Services will be collected and controlled by our Privacy Policy and you have the right to send that content, information or data to the Services.</p>
        <p>You may not use the graphics, designs, logos, icons, codes, or other content of this service without permission.</p>
        <hr />

        <h2>code of conduct</h2>
        <p style={{ margin: 0 }}>You agree not to:</p>
        <ul>
          <li>To provide the data acquired from this service to anyone other than the person who acquired it.</li>
          <li>Violate the law of the jurisdiction.</li>
          <li>Any act that infringes the copyright of others.</li>
          <li>Interrupting other users' activities.</li>
          <li>Abusive behavior against partners or advertisers.</li>
          <li>Engage in activities related to click fraud.</li>
          <li>Access our service using automated means.</li>
          <li>Use this service on behalf of a third party.</li>
          <li>Trying to impersonate a third party.</li>
        </ul>
        <p>You agree to use this service responsibly.</p>
        <hr />

        <h2>Copyright</h2>
        <p>All data and information obtained from this service can be used only for personal use.</p>
        <p>This service does not take any responsibility for the use of this service and the use of acquired data in the jurisdiction, especially in violation of copyright law.</p>
        <hr />

        <h2>compensation</h2>
        <p>You shall indemnify the Service and all partners, customers, employees, and other related entities for liability, expense, damage, or loss due to the use or inability to use the Service or the Service.</p>

      </div>

      <Link href="/">
        <a className={styles.link_return}>
          <span>Return</span>
        </a>
      </Link>
    </section>
  );
}

export default TermsContent;