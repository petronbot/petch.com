import fetch from 'node-fetch'

import styles from './styles.js'

import Head from 'next/head'
import Timeline from './../parts/timeline'

const data = [
  {
    year: 2000,
    label: 'Launched first ever website via floppy disk'
  },
  {
    year: 2005,
    label: 'Signed up for an Arts degree at UNSW in Media & Communications'
  },
  {
    year: 2007,
    label: 'Started as Web Editor at the Law Society of New South Wales'
  },
  {
    year: 2011,
    label: 'Joined Tipping Point as Front End Developer'
  },
  {
    year: 2013,
    label: 'Creative Developer at The Monkeys'
  },
  {
    year: 2015,
    label: 'Joined the Fampany at ustwo'
  },
  {
    year: 2016,
    label: 'Spoke about the DTA Design Guide at CSSConf in Melbourne'
  },
  {
    year: 2017,
    label: 'Joined Scentre Groups\'s website team'
  }
]

const Page = ({ stars }) =>
  <div>
    <style jsx global>{styles}</style>
    <Head>
      <title>Petra Gulicher - Web Developer</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <h1 className='title'>Petra Gulicher - Web Developer</h1>
    <p>Full stack web developer from Sydney, Australia. Experience in leading technical teams and scrum coaching. Combining 10 years of professional experience and continuous learning in web technologies.</p>
    <ul className='links'>
      <li><a href='mailto:p.gulicher@gmail.com'><i className="material-icons">perm_identity</i>Email</a></li>
      <li><a href='https://github.com/petronbot'><i className="material-icons">code</i>GitHub</a></li>
      <li><a href='http://twitter.com/petronbot'><i className="material-icons">chat_bubble_outline</i>Twitter</a></li>
    </ul>
    <Timeline markers={data} />
    <footer className='footer'>
      <small>Made with <a href="https://github.com/zeit/next.js/">Next.js</a>.</small>
    </footer>

  </div>

export default Page
