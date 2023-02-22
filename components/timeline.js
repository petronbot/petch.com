import styled from "styled-components";

export default ({ markers }) => (
  <div className="timeline">
    {markers.reverse().map((marker, i) => {
      const rowStyles = {
        color: `rgba(
            72,
            65,
            190, ${i / markers.length / 3 + 0.65})`,
        fontWeight: !!marker.highlight ? "bold" : "normal",
      };
      const backgroundColor = `hsla(0, 0%, ${100 - i * 2}%)`;
      return (
        <div
          className="timeline-row"
          key={`timeline-row-${i}`}
          style={rowStyles}
        >
          <dt
            style={{
              backgroundColor,
            }}
            key={`timeline-dt-${i} `}
          >
            {marker.year}
          </dt>
          <dd
            style={{
              backgroundColor,
            }}
            key={`timeline-dd-${i} `}
          >
            {marker.label}
          </dd>
        </div>
      );
    })}
  </div>
);
