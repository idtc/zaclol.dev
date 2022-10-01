import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const other = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <h1>Join us</h1>
    
    <h2>Contact</h2>
    <p>
    You can use the links below to contact me.
    </p>
    <p>
    To join our team, join our Discord server in the navigation bar and contact me.
    You can create Teams, compete and win various gifts in our community.
    </p>
    
    <h2>Contact</h2>
    <ul>
      <li>
        <a href="https://t.me/zaclol">Telegram</a>
      </li>
      <li>
        <a href="https://discord.com/users/444065079156015104">Discord</a>
      </li>
      <li>
        <a href="https://twitter.com/messages/89918243-89918243">Twitter</a>
      </li>
    </ul>
    <p>
    The website infrastructure belongs to <a href="https://github.com/phineas" target="_blank">Phineas Watson</a> thank him. 
    </p>

  </PageWrapper>
);

export default other;
