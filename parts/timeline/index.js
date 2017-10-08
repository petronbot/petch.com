import styles, { doIt } from './styles'

export default ({ markers }) =>
(
  <div>
    <style jsx>{styles}</style>
    <h2>Brief resumé</h2>
    {
      markers.map((marker, index) => {
        return <p className='marker' key={index}><span>{marker.year}</span>{marker.label}</p>
      })
    }
  </div>
)
