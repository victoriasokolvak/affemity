export const RightsIcon = ({ width = "20", height = "20" }: { width?: string, height?: string }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 3.85663L10.0038 1.66663L17.5 3.85663V8.34746C17.5 10.649 16.7757 12.8922 15.4298 14.7592C14.084 16.6262 12.1848 18.0224 10.0012 18.75C7.81707 18.0225 5.9172 16.6261 4.57088 14.7587C3.22455 12.8913 2.50003 10.6475 2.5 8.34538V3.85663Z"
        stroke="#666666"
        stroke-linejoin="round"
      />
      <path
        d="M6.25 9.58333L9.16667 12.5L14.1667 7.5"
        stroke="#666666"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
