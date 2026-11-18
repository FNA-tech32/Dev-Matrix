import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const links = [
  {
    url: 'https://github.com/devmatrix',
    icon: SiGithub,
  },
  {
    url: 'https://twitter.com/devmatrix',
    icon: SiTwitter,
  },
  {
    url: 'mailto:contact@devmatrix.io',
    icon: MdMail,
  },
  {
    url: 'mailto:hello@devmatrix.io',
    icon: MdMail,
  },
  {
    url: 'https://linkedin.com/company/devmatrix',
    icon: SiLinkedin,
  },
  {
    url: 'https://instagram.com/devmatrix',
    icon: SiInstagram,
  },
];

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container paddingY="25px">
      <Grid gridGap="30px">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="mailto:contact@devmatrix.io">Contact</Link>
        <Link href="mailto:hello@devmatrix.io">Alternative Contact</Link>
      </Grid>
    </Container>
    <FooterGrid>
      {links.map(({ url, icon: Icon }) => (
        <Link key={url} target="_blank" opacity={0.7} href={url}>
          <Icon size={22} />
        </Link>
      ))}
    </FooterGrid>
    <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
      © Dev Matrix 2018 → {new Date().getFullYear()}
    </Text>
  </StyledFooter>
);

export default Footer;
