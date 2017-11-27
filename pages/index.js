import Links from "./../parts/links";
import Page from "./../parts/page";
import Timeline from "./../parts/timeline";

import markerData from "./../assets/data.js";

export default () => {
  return (
    <Page>
      <p>
        Full stack web developer from Sydney, Australia. Experience in leading
        technical teams and scrum coaching. Combining 10 years of professional
        experience and continuous learning in web technologies.
      </p>
      <Links />
      <h2>Brief resumé</h2>
      <Timeline markers={markerData} />
    </Page>
  );
};
