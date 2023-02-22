import Link from "next/link";
import Page from "../../components/page";

export default function Talks() {
  return (
    <Page>
      <h2>Talks</h2>
      <ul>
        <li>
          <Link href="/talks/rethinking-ugc.html">
            Rethinking UGC at the ABC
          </Link>
          <br />
          <em>UX Australia, August 2021</em>
        </li>
        <li>
          <Link href="/talks/a-graphql-survival-kit.html">
            A GraphQL Survival Kit
          </Link>
          <br />
          <em>ReactConfAU, February 2020</em>
        </li>
        <li>
          <Link href="/talks/styling-in-react-native.html">
            Styling in React Native
          </Link>
          <br />
          <em>React Sydney, August 2019</em>
        </li>
        <li>
          <Link href="/talks/css-custom-properties.html">
            CSS Custom Properties
          </Link>
          <br />
          <em>SydCSS Wheel of Talks, December 2018</em>
        </li>
        <li>
          <Link href="/talks/scaling-design-systems.html">
            Panel: Challenges of scaling a design system
          </Link>
          <br />
          <em>Design Systems Sydney, May 2018</em>
        </li>
        <li>
          <Link href="/talks/ml-and-ai-in-javascript.html">
            Machine Learning & AI in JavaScript
          </Link>
          <br />
          <em>SydJS, November 2017</em>
        </li>
        <li>
          <Link href="/talks/challenges-of-scaling-design-systems.html">
            Panel: Challenges of scaling design system
          </Link>
          <br />
          <em>Design System Meetup, May 2018</em>
        </li>
        <li>
          <Link href="/talks/building-a-style-guide-for-all-australians.html">
            Building a style guide for all Australians
          </Link>
          <br />
          <em>CSSConf, May 2017</em>
        </li>

        <li>
          <Link href="/talks/fe-testing.html">
            Front-end testing: So easy a monkey could do it
          </Link>
          <br />
          <em>GGD, August 2014</em>
        </li>
      </ul>
    </Page>
  );
}
