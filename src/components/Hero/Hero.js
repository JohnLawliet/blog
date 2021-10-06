import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        knowledgeable fullstack web developer seeking jobs and internship to gain more work experience.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>
        Hire me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;