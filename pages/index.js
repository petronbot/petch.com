import Page from "../components/page";
import Timeline from "../components/timeline";

import markerData from "../assets/data.js";

export default function Home() {
  return (
    <Page>
      <p>
        Hacking on the internet since 2000, I'm experienced in{" "}
        <strong>system design & integration</strong>, full-stack{" "}
        <strong>web development</strong>, & <strong>tech leadership</strong>.
        Based in Sydney, Australia I've worked with some of Australia's most
        loved brands across consulting, agency & principal roles.
      </p>
      <p>
        Specialising in human-first technology, values-led product development
        and making complex systems approachable. I can translate tech speak into
        clear and actionable steps for my teams.
      </p>
      <p>Want more buzz-words? I've got you:</p>
      <ul>
        <li>Cloud development for scale</li>
        <li>
          Systems design that strikes a balance between cost, time & quality
        </li>
        <li>TypeScript, Node.js, JavaScript, Python, Go, etc</li>
        <li>Continuous improvement to help teams reach high-performance</li>
        <li>Product development to grow a vision into reality</li>
        <li>Security, governance & data privacy</li>
      </ul>
      <h2>Experience</h2>
      <Timeline markers={markerData} />
    </Page>
  );
}
