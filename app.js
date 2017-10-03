const fs = require('fs');
const _ = require('lodash');

const template = fs.readFileSync('./templates/default.html', 'utf8');
const defaultTemplate = _.template(template);

console.log(process.env.BROWSER_REFRESH_URL);

const data = {
  process,
  assetsPath: './assets',
  timeline: [
    {
      year: 2007,
      label: 'Started as Web Editor at the Law Society of New South Wales'
    },
    {
      year: 2015,
      label: 'Joined the Fampany at ustwo'
    },
    {
      year: 2017,
      label: '6 month contract with Scentre Groups\'s website team'
    }
  ]
};

const output = defaultTemplate(data);

module.exports = output;
