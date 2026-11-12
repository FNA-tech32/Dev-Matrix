import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Title, Button, Grid, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="25px"
      paddingBottom="40px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/me.webp"
          alt="Dev Matrix"
          width={120}
          height={120}
          objectFit="cover"
          className={styles.image}
        />
        <Title>Dev Matrix</Title>
        <Title
          fontSize="2rem"
          color="rgba(0, 0, 0, 0.6)"
          fontWeight="500"
          as="h2"
        >
          We build modern cloud software & digital solutions.
        </Title>
      </Container>
      <Container maxWidth="700px" gridGap="3rem">
        <Container>
          <Text textAlign="center">
            Dev Matrix is a full-stack engineering studio specializing in Cloud
            infrastructure, DevOps, backend architectures, modern web
            technologies, and scalable mobile platforms.
          </Text>
        </Container>
        <Link href="/about">
          <Button>More about Dev Matrix &rarr;</Button>
        </Link>
      </Container>
    </Container>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
        <Title fontSize="3rem" as="h3">
          Get in touch
        </Title>
        <Text textAlign="center">
          Whether you have an upcoming project, engineering challenge, or
          collaboration in mind, our inbox is always open. Reach out via our
          primary or alternative contact channels.
        </Text>
        <Grid
          gridGap="2rem"
          marginTop="2rem"
          gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
          justifyItems="stretch"
          alignItems="stretch"
        >
          <Link href="mailto:contact@devmatrix.io">
            <Button width="100%">
              <motion.span
                initial={{ display: 'inline-block' }}
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2.5,
                }}
              >
                👋
              </motion.span>{' '}
              Say hello (Primary)
            </Button>
          </Link>
          <Link href="mailto:hello@devmatrix.io">
            <Button
              width="100%"
              backgroundColor="rgb(226,232,240)"
              color="black"
              variant="secondary"
            >
              Alternative Contact
            </Button>
          </Link>
        </Grid>
        <Text fontSize="0.9rem" color="rgba(0, 0, 0, 0.6)" marginTop="1.5rem">
          Primary: contact@devmatrix.io &nbsp;·&nbsp; Alternative: hello@devmatrix.io
        </Text>
      </Container>
    </Container>
  </Container>
);

export default Home;
