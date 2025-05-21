 import { RevealOnScroll } from "./RevealOnScroll";
import lana from '../assets/lana.jpg'
import { ArrowDown } from "lucide-react";
const Home = () => {
  return (
  <section id="home" className="min-h-screen  py-20  flex bg-gradient-to-b from-cyan-800/40  to-black  column items-center 
  justify-center">

 <RevealOnScroll> 
  <div className=' flex flex-col gap-3 items-center lg:flex-row '>
  <div className=" flex items-center lg:items-start justify-center flex-col lg:gap-5 gap-1 lg:mr-5  z-10 px-3">
    <h1 className="text-5xl lg:text-7xl text-center lg:text-start font-bold  bg-gradient-to-r from-cyan-400 to-cyan-700 leading-right bg-clip-text text-transparent">Hi, <br/>I’m Lana Lezhava<br />
    a frontend dev.</h1>
    <p className="text-gray-400 text-lg  lg:text-start text-center  max-w-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates at, error iste ad cum sunt velit est ut hic tenetur pariatur omnis temporibus maxime dolorem itaque a mollitia nulla</p>
  <div className="flex justify-center space-x-4">
  <a
    href="#projects"
    className="bg-cyan-700 text-white py-3 px-6 rounded font-medium transition  hover:-translate-y-1"
  >
    View Projects
  </a>
  <a
    href="#contact"
    className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200 
    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 246, 0.2)] hover:bg-cyan-500/10"
  >
    Contact Me
  </a>
    </div>
  </div>
  <div className='lg:w-90 lg:h-90 w-50 h-50 mx-3'>
         <img className='object-cover  hover:-translate-y-2 hover:border-cyan-500  transition  rounded ' src={lana} alt="" />

  </div>
   </div>
    </RevealOnScroll>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary text-cyan-400" />
        </div>
  </section>
  )
}

export default Home