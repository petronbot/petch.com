import Page from "../../components/page";
import YouTubeEmbed from "../../components/youtube-embed";

export default () => (
  <Page>
    <h2>Building a style guide for all Australians</h2>
    <h3>Presented at CSSConf 2017</h3>
    <p>It’s not often you get to build The Nation’s Bootstrap.</p>
    <p>
      It’s easy to see what goes wrong when you build out thousands of websites
      without a style guide. There are over 2,200 Australian Government websites
      and they all have their own… character.
    </p>
    <p>
      But what if someone gave you the job of fixing it? How would you even
      start? What is a style guide anyway? Does it include coding standards or
      just CSS? BEM or Atomic CSS? Does everything have to work in IE8? What
      about screen readers? And what about doing it completely in the open, when
      everyone’s watching intently?
    </p>
    <p>
      Somebody gave me that job - along with a crack team of designers,
      developers, content writers and user researchers. In less than 3 months we
      put a working CSS framework and design guide in the hands of real humans
      building real sites.
    </p>
    <p>This is how we did it.</p>
    <YouTubeEmbed src="https://www.youtube.com/embed/pfwJr-QTREg" />
  </Page>
);
