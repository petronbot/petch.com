import fetch from 'node-fetch';

import Head from 'next/head'
import Timeline from './../parts/timeline'

const data = [
  {
    year: 2007,
    label: 'Started as Web Editor at the Law Society of New South Wales'
  },
  {
    year: 2015,
    label: 'Joined the Fampany at ustwo'
  },
  {
    year: 2017,
    label: '6 month contract with Scentre Groups\'s website team'
  }
];

const Page = ({ stars }) =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/style.css" />
    </Head>
    <Timeline markers={data} />
    <p>{stars}</p>
  </div>


Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
