import "../App.css";
import Contact from "../components/Landing/Contact";
import { movies, data, questions, frecuentes } from "../data/infoLanding";
import Card from "../components/Landing/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SampleArrow from "../Samples/SampleArrow";
import CardInfo from "../components/Landing/CardInfo";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import Languages from "../components/Landing/Languages";
// import {Button as Btn} from "@mui/material";

function Section1() {
  return (
    <section className="section1 h-screenrelative">
      <nav className="content flex items-center justify-between  px-[150px]">
        <img
          className="w-52"
          src="/Netflix_Logo_RGB.png"
          alt="Logo de Netflix"
        />
        <div className="flex gap-3">
          <Languages/>
          <button className="bg-red-700 hover:bg-red-800 text-white font-medium rounded-[4px] px-4 py-[6px] text-sm">
            Iniciar Sesión
          </button>
        </div>
      </nav>
      <div className="content text-white text-center w-[640px] m-auto my-[120px]">
        <div className="px-5">
          <h1 className="text-6xl font-extrabold mb-4 leading-tight">
            Películas y series ilimitadas y mucho más
          </h1>
          <p className="font-semibold text-[1.2rem] mb-5">
            A partir de $ 18.900. Cancela cuando quieras.
          </p>
          <Contact />
        </div>
      </div>
    </section>
  );
}
function Section2() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    // // Arreglar después estas flechas
    // nextArrow: <SampleArrow />,
    // prevArrow: <SampleArrow />,
  };
  const titleStyle = "font-bold text-2xl";
  return (
    <section className="pt-[70px] pb-[50px]">
      <h1 className={titleStyle}>Tendencias</h1>
      {/* CARD SLIDERS -> Arreglar scale */}
      <div className="mt-3 w-full p-1 m-auto">
        <div>
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <Card key={index} id={movie.id} img={movie.img} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-16">
        <h1 className={titleStyle}>Más motivos para unirte</h1>
        <div className="mt-3 grid grid-cols-4 gap-4">
          {data.map((info, index) => (
            <CardInfo
              key={index}
              title={info.title}
              content={info.content}
              titleStyle={titleStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function Section3() {
  return (
    <section className="pb-[50px]">
      <h1 className="font-bold text-2xl">Preguntas frecuentes</h1>
      <div className="mt-3">
        {questions.map((question, i) => (
          <div className="mb-2" key={i}>
            <Accordion
              className="hover:bg-[#444] "
              sx={{
                backgroundColor: "#2D2D2D",
                color: "#fff",
                borderRadius: "none",
                padding: "10px",
                fontSize: "1.6rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <AddIcon sx={{ color: "#fff", fontSize: "2.7rem" }} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {question.question}
              </AccordionSummary>
              <AccordionDetails>{question.answer}</AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
      <div className="w-2/3 mx-auto mt-20">
        <Contact />
      </div>
    </section>
  );
}
function Footer(){
  return (
    <footer className="mt-5 pb-[80px]">
      <p className="text-[#B3B3B3] text-[1.05rem]">¿Preguntas? Llama al <a className="underline " href="#">01 800 917 1564</a></p>
      <div className="grid grid-cols-4 gap-3 my-12">
          {frecuentes.map((f, i) => (
            <a className="text-[#AAAAAA] text-sm underline" href="#" key={i}>{f}</a>
          ))}
      </div>
      <Languages/>
      <p className="text-[#AAAAAA] mt-10 text-sm">Netflix Colombia</p>
    </footer>
  )
}
function Landing() {
  return (
    <div className="bg-black text-white">
      <Section1 />
      <div className="px-[150px]">
        <Section2 />
        <Section3 />
        <Footer/>
      </div>
    </div>
  );
}

export default Landing;
