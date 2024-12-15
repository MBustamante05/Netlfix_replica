type Props = {
  id: number
  img: string
}

function Card({id, img}: Props) {
  return (
    <div className="card h-72 w-48 transition-all ease-in delay-75 hover:scale-105 cursor-pointer z-10 relative">
      <img src={img} alt="" className="rounded-lg"/>
      <h1 className="absolute -bottom-2 -left-5 text-[6.5rem] font-extrabold num-card text-black">{id}</h1>
    </div>
  )
}

export default Card