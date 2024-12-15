import TranslateIcon from "@mui/icons-material/Translate";
function Languages() {
  const optionStyle = "text-black bg-white";
  return (
    <div className="relative inline-flex items-center">
      <TranslateIcon className="absolute left-3 text-white pointer-events-none " sx={{fontSize: '16px'}}/>
      <select className="bg-blur bg-inherit text-white border border-[#555] rounded-[4px] ps-8 pe-4 py-1">
        <option className={optionStyle} value="español">
          Español
        </option>
        <option className={optionStyle} value="english">
          English
        </option>
      </select>
    </div>
  );
}

export default Languages;
