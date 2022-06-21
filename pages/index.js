import Head from 'next/head';
import styled from 'styled-components';

const Header = styled.h1`
  color: blue;
`;

export default function Home() {
  return (
    <div className='app'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header data-testid='header'>Hello World</Header>
    </div>
  );
}
