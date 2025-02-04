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
        Specialising in <strong>human-first technology</strong>,{" "}
        <strong>values-led product development</strong>, and{" "}
        <strong>making complex systems approachable</strong>. I can translate
        tech speak into clear and actionable steps for my teams.
      </p>
      <p>Want more buzz-words? I've got you:</p>
      <ul>
        <li>Leadership in high-performing, self-organising, cross-functional agile teams</li>
        <li>Cloud development for scale, performance & cost efficiency</li>
        <li>Systems design that meets business and user needs</li>
        <li>TypeScript, Node.js, JavaScript, Python, Go, etc</li>
        <li>Continuous improvement to help teams reach high-performance</li>
        <li>Product development to grow a vision into reality</li>
        <li>Security, governance & data privacy</li>
      </ul>
      <h3>A brief history</h3>
      <Timeline markers={markerData} />
    </Page>
  );
}
