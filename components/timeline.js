import styled from "styled-components";

export default ({ markers }) => (
  <div className="timeline">
    {markers.map((marker, i) => {
      const color = `rgba(
            72,
            65,
            190, ${i / markers.length / 3 + 0.65}`;
      const backgroundColor = `hsla(0, 0%, ${100 - i * 2}%)`;
      return (
        <div
          className="timeline-row"
          key={`timeline-row-${i}`}
          style={{ color }}
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
