type Props = {
  title: string
  titleStyle: string
  content: string
}
function CardInfo({ title, titleStyle, content}: Props) {
  return (
    <div className="cardInfo h-72">
      <h1 className={titleStyle}>{title}</h1>
      <p className="text-gray-300 mt-3 leading-5">{content}</p>
    </div>
  )
}

export default CardInfo