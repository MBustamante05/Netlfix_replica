type Props = {
  data: string[];
  underline: boolean
  marginY: string;
};
function FooterInfo({ data, underline, marginY }: Props) {
  return (
    <div>
      <p className="text-[#B3B3B3] text-[1.05rem]">
        ¿Preguntas? Llama al{" "}
        <a className={`${underline ? 'underline' : 'hover:underline'}`} href="#">
          01 800 917 1564
        </a>
      </p>
      <div className={`grid grid-cols-4 gap-4 ${marginY}`}>
        {data.map((d, i) => (
          <a
            className="text-[#AAAAAA] text-sm underline"
            href="#"
            key={i}
          >
            {d}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterInfo;
