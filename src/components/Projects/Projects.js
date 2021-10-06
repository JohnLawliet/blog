import React from 'react';
import Image from 'next/image'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, ImageContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    {
      projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <ImageContainer>
            <Image 
              src={image}
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
            {
              tags.map((tag, i) => (
                <Tag key={i}>
                  {tag}
                </Tag>
              ))
            }
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))
    }
    </GridContainer>
  </Section>
);

export default Projects;