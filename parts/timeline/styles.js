import { times } from 'lodash';

export default `
  ${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
    return `
      .marker:nth-of-type(${i}):before {
        -webkit-filter: brightness(${100 - i * 8}%);
      }
      .marker:nth-of-type(${i}) {
        color: rgba(255, 255, 255, ${1 - i * 0.05});
      }
    `}).join('')
  }
  .marker {
    position: relative;
    margin: 0;
    padding: .75em .5em .85em;
  }
  .marker:before {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    background-color: pink;
  }
  .marker span {
    margin-right: .25em;
  }
`
