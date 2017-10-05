export default ({ markers }) =>
  markers.map((marker, index) =>
    <p key={index}>{marker.year}: {marker.label}</p>
  )
