import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import IzlegalIcon from '../assets/images/project1.jpg';
import { WorldLogo } from '../components/Icons';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const projects = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Project</title>
      </Helmet>
      <h1>Communities and Projects</h1>
      <h3>Comminity</h3>
      <CoWrapper>
        <Co
          url="https://izlegal.org/"
          name="Izlegal"
          iconReference={IzlegalIcon}
          tagline="Security Society"
          role={'Founder & Developer'}
          what={'I established it for cooperation, grouping and competitions on Cyber Security & Software.'}
          popular
        />
      </CoWrapper>

      <h3>Open-Source Projects</h3>
      <Repo
        name={'ForensicTool'}
        url={'https://github.com/izlegal/ForensicTool'}
        primaryLanguage={'Python'}
        description="A Forensic Tool for Cyber Security that you can use in your terminal"
      />

    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;


export default projects;
