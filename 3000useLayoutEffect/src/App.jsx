import ButtonWithTooltip from "./ButtonWithTooltip.jsx";

export default function App() {
  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip does not fit above the button.</div>}
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </div>
  );
}
