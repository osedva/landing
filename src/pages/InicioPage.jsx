import imguser from "../assets/user.png";
import { GoPerson, GoMarkGithub } from "react-icons/go";
import { Link } from 'react-scroll';

export const InicioPage = () => {
  return (
    <div className="imgInicio mt-8 md:flex items-center">
      <div className="md:w-1/2">
        <img
          src={imguser}
          className="rounded-full w-64 h-64 mx-auto borderimg"
           />
      </div>
      <div className=" px-5 py-5 mt-5 rounded-lg text-center">
        <p className="font-bold mb-2 text-blue-900 text-4xl">
          Oscar Eduardo Valencia
        </p>
        <p className="font-bold mb-3 text-blue-800 text-3xl">
          Bienvenidos
        </p>
        <div className="flex w-full justify-center">
        <Link className="px-9 py-1 mt-28 bg-[#000380] hover:bg-blue-700 inline-flex items-center text-white text-2xl rounded-lg font-bold borderr espacio cursor-pointer" smooth spy to={"Perfil"}><p className="mr-1">Perfil</p> <span><GoPerson size={20} /></span> </Link>
          
          <a href="https://github.com/osedva/"
          target="_blank"
          > 
          <button
            className="px-9 py-1 mt-28 bg-[#fff] hover:bg-blue-100 inline-flex items-center text-[#000380] text-2xl rounded-lg font-bold borderr"
            type="button"
          >
            <p className="mr-1" >GitHub</p>  <span><GoMarkGithub size={20} /></span> 
          </button>
          </a>
          </div>
      </div>
    </div>
  );
};


