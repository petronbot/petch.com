import Page from "./../../parts/page";

const talks = [
  {
    url: "/slides/ml-and-ai-in-javascript",
    title: "Machine Learning & AI in JavaScript",
    caption: "SydJS, Tuesday 23rd November"
  }
];

export default () => (
  <Page>
    <h2>Talks &amp; slides</h2>
    <ul>
      {talks.map(talk => (
        <li>
          <a href={talk.url}>{talk.title}</a>
          <br />
          <em>{talk.caption}</em>
        </li>
      ))}
    </ul>
  </Page>
);
