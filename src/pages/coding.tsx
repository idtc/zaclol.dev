import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  ReactLogo,
  TypescriptLogo,
  JavascriptLogo,
  PythonLogo,
} from '../components/Icons';
import { Helmet } from 'react-helmet';

const How = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Coding</title>
      </Helmet>
      <h1>What I do</h1>
      <p>
      The programming languages that I use most frequently are the following.
      </p>


      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />


      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JS Framework"
        useCase={'Types for JS - will save your life when projects expand'}
      />

      <Technology
        color="#ff8b00"
        icon={<JavascriptLogo />}
        name="Javascript"
        type="Dynamic"
        useCase={'JS, Supports background function'}
      />

      <Technology
        color="#111"
        icon={<PythonLogo />}
        name="Python"
        type="Dynamic"
        useCase={'Python'}
      />


    </PageWrapper>
  );
};

export default How;
