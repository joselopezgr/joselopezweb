import anime from "animejs";
import React, { useEffect } from "react";

const WavesSVG: React.FC = () => {
  const pathRef = React.useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      anime({
        targets: pathRef.current,
        d: [
          {
            value:
              "M 0 0 L 0 902.17 Q 237.75 609.25 475.5 584.98 T 951 413.48 T 1426.5 249.35 T 1902 62.27 L 1902 0 Z",
          },
          {
            value:
              "M 0 0 L 0 851.924 Q 237.75 607.503 475.5 561.752 T 951 470.72 T 1426.5 250.382 T 1902 -36.7969 L 1902 0 Z",
          },
          {
            value:
              "M 0 0 L 0 872.345 Q 237.75 677.095 475.5 647.655 T 951 430.36 T 1426.5 272.055 T 1902 101.7 L 1902 0 Z",
          },
          {
            value:
              "M 0 0 L 0 754.443 Q 237.75 663.446 475.5 634.592 T 951 445.368 T 1426.5 300.869 T 1902 18.1241 L 1902 0 Z",
          },
        ],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 2500,
      });
    }
  }, []);

  return (
    <div style={{ position: "absolute", bottom: 0, width: "100%", zIndex: 0 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1902 951"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          height: "100%",
          shapeRendering: "auto",
          display: "block",
          backgroundPositionX: "0%",
          backgroundPositionY: "0%",
          backgroundSize: "auto",
          backgroundOrigin: "padding-box",
          backgroundClip: "border-box",
          background: "scroll rgba(0, 0, 0, 0) none repeat",
          animation: "none",
        }}
      >
        <g
          style={{
            transform: "matrix(-1, 0, 0, -1, 1902, 951)",
            animation: "none",
          }}
        >
          <linearGradient id="lg-ftpfaav2aur" x1="0" x2="1" y1="0" y2="0">
            <stop stop-color="#d66853" offset="0"></stop>
            <stop stop-color="#f9dcca" offset="1"></stop>
          </linearGradient>
          <path
            ref={pathRef}
            d="M 0 0 L 0 902.17 Q 237.75 609.25 475.5 584.98 T 951 413.48 T 1426.5 249.35 T 1902 62.27 L 1902 0 Z"
            fill="url(#lg-ftpfaav2aur)"
            opacity={0.4}
            style={{
              fill: "url('#lg-ftpfaav2aur')",
              opacity: 0.4,
              animation: "none",
            }}
          ></path>
          <path
            ref={pathRef}
            d="M 0 0 L 0 851.924 Q 237.75 607.503 475.5 561.752 T 951 470.72 T 1426.5 250.382 T 1902 -36.7969 L 1902 0 Z"
            fill="url(#lg-ftpfaav2aur)"
            opacity="0.4"
            style={{
              fill: "url('#lg-ftpfaav2aur')",
              opacity: 0.4,
              animation: "none",
            }}
          ></path>
          <path
            ref={pathRef}
            d="M 0 0 L 0 872.345 Q 237.75 677.095 475.5 647.655 T 951 430.36 T 1426.5 272.055 T 1902 101.7 L 1902 0 Z"
            fill="url(#lg-ftpfaav2aur)"
            opacity="0.4"
            style={{
              fill: "url('#lg-ftpfaav2aur')",
              opacity: 0.4,
              animation: "none",
            }}
          ></path>
          <path
            ref={pathRef}
            d="M 0 0 L 0 754.443 Q 237.75 663.446 475.5 634.592 T 951 445.368 T 1426.5 300.869 T 1902 18.1241 L 1902 0 Z"
            fill="url(#lg-ftpfaav2aur)"
            opacity={0.4}
            style={{
              fill: "url('#lg-ftpfaav2aur')",
              opacity: 0.4,
              animation: "none",
            }}
          ></path>
          <g></g>
        </g>
      </svg>
    </div>
  );
};

export default WavesSVG;
