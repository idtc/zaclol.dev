
import PageWrapper from './PageWrapper';

const Home = () => {

  return (
    <PageWrapper forceReadableWidth>
      <h1>Who am I</h1>
      <p>
        ZacLoL.
        developer {'&'} researcher.
      </p>
      <p>
        Investigative journalist, I work on <b>Cyber security</b> and <b>Software</b> projects.{' '}
        I have a community called <a href="https://izlegal.org" target="norel noopen">Izlegal</a>.
      </p>

      <p>
        If I were to talk about <b>Izlegal</b>, it is a community where I have been actively gathering people since 2019, where we have been doing activities, projects and studies.
      </p>

      <h3>Why Security?</h3>

      <p>
        Every day, we see that the developing technology has a bad side. My purpose is to ensure security. Finding vulnerabilities and preventing them before they are exploited by others.
      </p>


    </PageWrapper>
  );
};

export default Home;
