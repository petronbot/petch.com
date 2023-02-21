import Page from "./../../components/page";
import SlidesEmbed from "./../../components/slides-embed";

export default () => (
  <Page>
    <h2>Front-end testing: So easy a monkey could do it</h2>
    <h3>Presented at GGD in August 2014</h3>
    <p>
      While working at The Monkeys I had the pleasure of automating my front-end
      tests using{" "}
      <a href="https://github.com/TheMonkeys/MonkeytestJS/">MonkeyTestJS</a>,
      tool developed in-house to make testing easier.
    </p>
    <p>
      I soon learnt the value of a set of simple, global tests that check server
      response, HTML validation, accesibility compliance and more.
    </p>
    <SlidesEmbed src="https://docs.google.com/presentation/d/e/2PACX-1vTfhDN8O-1M_zR75eiz7FaSQMbx23qMqsOp972kMpDfHI4XZy4yjkTm674S6vQTYv8CbFxyhQs-anS3/embed?start=false&loop=false&delayms=3000"></SlidesEmbed>
  </Page>
);
