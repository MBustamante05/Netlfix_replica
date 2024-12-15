type Props = {
  className: string;
  style: StyleSheet;
  onClick: () => void;
};
function SampleArrow({ className, style, onClick }: Props) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#222",
        borderRadius: "9px",
        width: "27px", 
        height: "130px",
        padding: "10px",
        cursor: "pointer",
        zIndex: 2,
      }}
      onClick={onClick}
    >
    </div>
  );
}

export default SampleArrow;
