const playWaveSvg = 
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="200" height="100" fill="none" />
    <g fill="limegreen">
      <rect x="20" y="80" width="10" height="20">
        <animate
          attributeName="height"
          values="20;60;20"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="80;40;80"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="40" y="80" width="10" height="20">
        <animate
          attributeName="height"
          values="20;50;20"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="80;50;80"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="60" y="80" width="10" height="20">
        <animate
          attributeName="height"
          values="20;70;20"
          dur="0.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="80;30;80"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="80" y="80" width="10" height="20">
        <animate
          attributeName="height"
          values="20;55;20"
          dur="1.1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="80;45;80"
          dur="1.1s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="100" y="80" width="10" height="20">
        <animate
          attributeName="height"
          values="20;65;20"
          dur="1.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="80;35;80"
          dur="1.3s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
  </svg>

  export default playWaveSvg