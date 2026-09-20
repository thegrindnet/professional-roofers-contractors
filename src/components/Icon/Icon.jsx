import "./Icon.css";
const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  diagonal: "M6 18 18 6M6 6h12v12",
  phone:
    "M8 3H4c-1 0-1 1-1 2 0 9 7 16 16 16 1 0 2 0 2-1v-4l-5-2-2 2c-3-1-5-3-6-6l2-2-2-5Z",
  building: "M4 21V5h11v16M15 11h5v10M2 21h20M8 9h3M8 13h3M8 17h3M17 15h1",
  layers: "m2 8 10-5 10 5-10 5L2 8Zm0 4 10 5 10-5M2 16l10 5 10-5",
  roof: "m2 12 10-8 10 8M5 10v10h14V10M8 15h8M8 18h8",
  grid: "M3 5h18v14H3V5Zm0 5h18M3 14h18M9 5v14M15 5v14",
  shingle: "m2 15 5-9h10l5 9H2Zm4-5h14M9 6l-3 9M14 6l3 9M2 19h20",
  metal: "m3 19 4-14h10l4 14H3ZM10 5 8 19M14 5l2 14",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  close: "m6 6 12 12M6 18 18 6",
  chevron: "m9 5 7 7-7 7",
};
export default function Icon({ name, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
