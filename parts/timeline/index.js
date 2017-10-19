import styled from 'styled-components'

const Marker = styled.p`
  position: relative;
  margin: 0;
  padding: .75em .5em .85em;
  color: rgba(255, 255, 255, ${props => 1 - props.count * 0.05});

  &:before {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    background-color: pink;
    -webkit-filter: brightness(${props => 100 - props.count * 7}%);
  }

  span {
    margin-right: .25em;
  }
`

export default ({ markers }) => markers.map((marker, i) =>
  <Marker key={`marker-${i}`} count={i+1}><span>{marker.year}</span>{marker.label}</Marker>)
