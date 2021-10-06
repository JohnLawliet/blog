import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Icon, IconContainer, List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


import 'react-circular-progressbar/dist/styles.css';
import { technologies } from '../../constants/constants';
import Technology from '../Technology/technology';


const Technologies = () =>  (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range of technologies since the beginning of my web development journey. From design, frontend, backend and Dev Ops.
    </SectionText>
    <IconContainer>
    {
      technologies.map(({percentage, title, stack, image}) => (
        <Technology 
          percentage={percentage}
          title={title}
          stack={stack}
          image={image}
        />
      ))
    }
    </IconContainer>
    
  </Section>
);

export default Technologies;
