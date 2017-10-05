import styles from './styles.js'

export default ({ markers }) =>
(
  <div>
    <style jsx>{styles}</style>
    {
      markers.map((marker, index) => {
        return <p key={index}>{marker.year}: {marker.label}</p>
      })
    }
  </div>
)
