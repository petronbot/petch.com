import Page from "../../components/page";
import YouTubeEmbed from "../../components/youtube-embed";
import StyledQuote from "../../components/quote";

export default () => (
  <Page>
    <h2>A GraphQL Survival Kit</h2>
    <h3>Presented at ReactConfAU 2020</h3>
    <p>
      GraphQL lets us model our business domain as a graph, but what does that
      mean? What are the tools we need to design a model that works for our
      business, products and users both now and into the future? Let's take a
      deep dive into the language, concepts and building blocks of a successful
      domain graph, and learn how to how to shape your React architecture with
      GraphQL for better developer experience, easier scaling and faster
      iterations on your user experience.
    </p>
    <p>
      <a href="https://docs.google.com/presentation/d/e/2PACX-1vTKw-eMefmZabxSkbM3EstuGhJda7JEefwwfZnbvp64KPTjGOnVJLxsX77SHCH7ok2kBwnsUe4R9AEe/pub?start=false&loop=false&delayms=3000">
        View the slides on Google Docs
      </a>
    </p>
    <YouTubeEmbed src="https://www.youtube.com/embed/tF8Bu7HaP0Q" />
    <h3>Inspiration</h3>
    <p>
      This presentation was pulled together off the back of my own learning and
      experience as well as a wealth of knowledge in the community.
    </p>
    <p>
      This list is not exhaustive, but I hope it captures some of the principles
      inspiring my ideas.
    </p>
    <StyledQuote cite="https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55">
      <p>
        The tree is executed breadth-first, meaning user must be resolved before
        its children name and email are executed. If the user resolver is
        asynchronous, the user branch delays until its resolved.
      </p>
      <footer>
        —Mark Stuart,{" "}
        <cite>
          <a href="https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55">
            GraphQL Resolvers: Best Practices
          </a>
        </cite>
      </footer>
    </StyledQuote>
    <StyledQuote cite="http://graphdatamodeling.com/Graph%20Data%20Modeling/GraphQL/GraphQL.html">
      <p>
        This means that the schema is not only a scope contract, but also the
        authoritative source of structure and meaning of the context covered by
        the API.
      </p>
      <footer>
        —Thomas Frisendal,{" "}
        <cite>
          <a href="http://graphdatamodeling.com/Graph%20Data%20Modeling/GraphQL/GraphQL.html">
            GraphQL Design
          </a>
        </cite>
      </footer>
    </StyledQuote>
    <StyledQuote cite="https://graphql.org/learn/thinking-in-graphs/">
      <p>
        To build a good schema, examine the everyday language you use to
        describe your business.
      </p>
      <footer>
        —graphql.org,{" "}
        <cite>
          <a href="https://graphql.org/learn/thinking-in-graphs/">
            Thinking in Graphs
          </a>
        </cite>
      </footer>
    </StyledQuote>
    <StyledQuote cite="https://graphql.org/learn/thinking-in-graphs/">
      <p>
        With GraphQL, you model your business domain as a graph ... to build a
        good schema, examine the everyday language you use to describe your
        business.
      </p>
      <footer>
        —graphql.org,{" "}
        <cite>
          <a href="https://graphql.org/learn/thinking-in-graphs/">
            Thinking in Graphs
          </a>
        </cite>
      </footer>
    </StyledQuote>
    <StyledQuote cite="https://standards.rest/">
      <p>
        Don't reinvent the wheel, use fantastic wheels, hashed out by experts,
        that solve problems you hadn't even considered yet.
      </p>
      <footer>
        —
        <cite>
          <a href="https://standards.rest/">standards.rest</a>
        </cite>
      </footer>
    </StyledQuote>
    <StyledQuote cite="https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_1_5">
      <p>
        The trade-off, though, is that a uniform interface degrades efficiency,
        since information is transferred in a standardized form rather than one
        which is specific to an application's needs. The REST interface is
        designed to be efficient for large-grain hypermedia data transfer,
        optimizing for the common case of the Web, but resulting in an interface
        that is not optimal for other forms of architectural interaction ...
      </p>
      <footer>
        —Roy Thomas Fielding,{" "}
        <cite>
          <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_1_5">
            Representational State Transfer (REST)
          </a>
        </cite>
      </footer>
    </StyledQuote>
  </Page>
);
