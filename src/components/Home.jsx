 import { RevealOnScroll } from "./RevealOnScroll";
import lana from '../assets/lana.jpg'
const Home = () => {
  return (
  <section id="home" className="min-h-screen flex  column items-center 
  justify-center">
 <RevealOnScroll>
  <div className=' flex flex-col md:flex-row'>
  <div className="text-center  backdrop-blur-md  border-0 rounded-xl shadow-lg  z-10 px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 leading-right bg-clip-text text-transparent">Hi, I'm Lana Lezhava</h1>
    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates at, error iste ad cum sunt velit est ut hic tenetur pariatur omnis temporibus maxime dolorem itaque a mollitia nulla</p>
  <div className="flex justify-center space-x-4">
  <a
    href="#projects"
    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition  hover:-translate-y-1"
  >
    View Projects
  </a>
  <a
    href="#contact"
    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 246, 0.2)] hover:bg-blue-500/10"
  >
    Contact Me
  </a>
    </div>
  </div>
  <div className='w-90 h-90'>
         <img className='object-cover  rounded ' src={lana} alt="" />
  </div>
   </div>
    </RevealOnScroll>
  </section>
  )
}

export default Home