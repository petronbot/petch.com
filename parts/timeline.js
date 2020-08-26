import styled from 'styled-components'

const TimelineList = styled.dl`
  margin: 0;
  padding: 0;
`

const TimeLineRow = styled.div`
  display: flex;
  margin-top: 0;
  justify-content: flex-starts;
  align-items: stretch;

  dt, dd {
    position: relative;
    margin: 0 0 .25em 0;
    padding: .75em .5em .85em;
    color: rgba(133, 20, 75, ${props => (1 - (0.4 * props.count / props.length))});
    
    

    &: before {
      content: '';
      z-index: -1;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #ddd;
      -webkit-filter: brightness(${props => 100 - props.count * 2}%);
    }
  }

dt {
  flex: 0 0 3em;
  text-align: center;
  margin-right: .25em;
}
`

export default ({ markers }) => (
  <TimelineList>
    {markers.reverse().map((marker, i) => (
      <TimeLineRow count={i + 1} length={markers.length}>
        <dt key={`timeline-dt-${i} `}>{marker.year}</dt>
        <dd key={`timeline-dd-${i} `}>{marker.label}</dd>
      </TimeLineRow>
    ))}
  </TimelineList>
)
