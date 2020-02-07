import Page from "./../../parts/page";
import SlidesEmbed from "./../../parts/slides-embed";

export default () => (
  <Page>
    <h2>Machine Learning and AI in JavaScript</h2>
    <h3>Presented at SydJS on November 23rd, 2017</h3>
    <p>When my Dutch father handed me a stack of scans and digital records of the family history I thought: "How can I use the tools I have (JavaScript, in this case) to parse these documents and pull some data out?".</p>
    <p>This talk describes how I used Natural Language Processing and other tools to translate and find meaning in a bunch of documents.</p>
    <SlidesEmbed src="https://docs.google.com/presentation/d/e/2PACX-1vTfhDN8O-1M_zR75eiz7FaSQMbx23qMqsOp972kMpDfHI4XZy4yjkTm674S6vQTYv8CbFxyhQs-anS3/embed?start=false&loop=false&delayms=3000"></SlidesEmbed>
  </Page>
);
