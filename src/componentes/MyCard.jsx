import imgTodo from "../assets/imgTodo.png";
import imgAppclima from "../assets/imgAppclima.png";
import imgTrello from "../assets/imgTrello.png";
import imgLanding from "../assets/imgLanding.png";

import { GoMarkGithub } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

export const MyCard = () => {
  return (
    <>
      <div className="m-4 bg-white px-10 py-8 rounded-2xl md:flex shadow-2xl w-[80%] mx-auto">
        <div className="md:w-1/2">
          <img src={imgTodo} className="rounded-2xl mx-auto w-[90%] h-60" />
        </div>

        <div className="md:w-1/2">
          <p className="px-5 py-3 font-bold text-2xl text-blue-900">
            TO DO List
          </p>
          <p className="px-5 py-2 font-bold text-blue-800">
            Aplicación que nos permite realizar CRUD completo crear, leer,
            actualizar y eliminarla
          </p>
          <p className="px-5 py-3 font-bold text-1xl text-blue-900">
            React - JSX - Tailwend - LocalStorage
          </p>
          <div className="mx-auto inline-flex text-center items-center">
          <a
            href={"https://tranquil-tarsier-1c2183.netlify.app/"}
            target="_blank"
            className="px-6 py-1 mt-4 bg-[#000380] hover:bg-blue-700 inline-flex items-center text-white text-1xl rounded-lg font-bold borderr espacio cursor-pointer"
          >
           <p className="mr-2">Vista</p>  <FaExternalLinkAlt />
          </a>
          <a
            href={"https://github.com/osedva/To-do"}
            target="_blank"
            className="px-6 py-1 mt-4 bg-[#fff] hover:bg-blue-100 inline-flex items-center text-[#000380] text-1xl rounded-lg font-bold borderr"
          >
           <p className="mr-2">GitHub</p>  <GoMarkGithub />
          </a>
          </div>
        </div>
      </div>





      <div className="m-28 bg-white px-10 py-8 rounded-2xl md:flex shadow-2xl w-[80%] mx-auto">
        <div className="md:w-1/2">
          <img src={imgAppclima} className="rounded-2xl mx-auto w-[90%] h-60" />
        </div>

        <div className="md:w-1/2">
          <p className="px-5 py-3 font-bold text-2xl text-blue-900">
            App Clima
          </p>
          <p className="px-5 py-2 font-bold text-blue-800">
            Aplicación que permite consultar el estado del tiempo de cualquier ciudad
          </p>
          <p className="px-5 py-3 font-bold text-1xl text-blue-900">
            React - JSX - Tailwend - Consumo Api Clima
          </p>
          <div className="mx-auto inline-flex text-center items-center">
          <a
            href={"https://poetic-cendol-b8959d.netlify.app/"}
            target="_blank"
            className="px-6 py-1 mt-4 bg-[#000380] hover:bg-blue-700 inline-flex items-center text-white text-1xl rounded-lg font-bold borderr espacio cursor-pointer"
          >
           <p className="mr-2">Vista</p>  <FaExternalLinkAlt />
          </a>
          <a
            href={"https://github.com/osedva/App-clima"}
            target="_blank"
            className="px-6 py-1 mt-4 bg-[#fff] hover:bg-blue-100 inline-flex items-center text-[#000380] text-1xl rounded-lg font-bold borderr"
          >
           <p className="mr-2">GitHub</p>  <GoMarkGithub />
          </a>
          </div>
        </div>
      </div>




      <div className="m-28 bg-white px-10 py-8 rounded-2xl md:flex shadow-2xl w-[80%] mx-auto">
        <div className="md:w-1/2">
          <img src={imgTrello} className="rounded-2xl mx-auto w-[90%] h-60" />
        </div>

        <div className="md:w-1/2">
          <p className="px-5 py-3 font-bold text-2xl text-blue-900">
            App Tipo Trello
          </p>
          <p className="px-5 py-2 font-bold text-blue-800">
            Esta Aplicación permite crear registro de tareas utilizando sheets de google para amacenar la informacion
          </p>
          <p className="px-5 py-3 font-bold text-1xl text-blue-900">
            JavaScript - Axios 
          </p>
          <div className="mx-auto inline-flex text-center items-center">
          <a
            href={"https://dreamy-parfait-043520.netlify.app/"}
            target="_blank"
            className="px-6 py-1 mt-4 bg-[#000380] hover:bg-blue-700 inline-flex items-center text-white text-1xl rounded-lg font-bold borderr espacio cursor-pointer"
          >
           <p className="mr-2">Vista</p>  <FaExternalLinkAlt />
          </a>
          <a
            href={"https://github.com/osedva/M3U2TrelloApp-osedva"}
            target="_blank"
            className="px-6 py-1 mt-4 bg-[#fff] hover:bg-blue-100 inline-flex items-center text-[#000380] text-1xl rounded-lg font-bold borderr"
          >
           <p className="mr-2">GitHub</p>  <GoMarkGithub />
          </a>
          </div>
        </div>
      </div>




      <div className="m-28 bg-white px-10 py-8 rounded-2xl md:flex shadow-2xl w-[80%] mx-auto">
        <div className="md:w-1/2">
          <img src={imgLanding} className="rounded-2xl mx-auto w-[90%] h-60" />
        </div>

        <div className="md:w-1/2">
          <p className="px-5 py-3 font-bold text-2xl text-blue-900">
            Landing personal
          </p>
          <p className="px-5 py-2 font-bold text-blue-800">
            Creación de mi Landing.
          </p>
          <p className="px-5 py-3 font-bold text-1xl text-blue-900">
            React - JSX - Tailwend
          </p>
          <div className="mx-auto inline-flex text-center items-center">
          <a
            href={"/"}
            
            className="px-6 py-1 mt-4 bg-[#000380] hover:bg-blue-700 inline-flex items-center text-white text-1xl rounded-lg font-bold borderr espacio cursor-pointer"
          >
           <p className="mr-2">Vista</p>  <FaExternalLinkAlt />
          </a>
          <a
            href={"https://github.com/osedva/landing"}
            target="_blank"
            className="px-6 py-1 mt-4 bg-[#fff] hover:bg-blue-100 inline-flex items-center text-[#000380] text-1xl rounded-lg font-bold borderr"
          >
           <p className="mr-2">GitHub</p>  <GoMarkGithub />
          </a>
          </div>
        </div>
      </div>



    </>
  );
};
