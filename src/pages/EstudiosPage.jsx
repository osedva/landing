export const EstudiosPage = () => {
  return (
    <>
      <div className="imgEstudios">
        <div className="w-full h-[22%] text-center">
          <p className="font-bold text-2xl text-blue-900 py-20">Estudios</p>
        </div>

        <div className="mt-8 md:flex items-center">
          <div className="mt-8 h-48 md:w-1/2">
            <div className="bg-white rounded-md w-[70%] h-[100%] mx-auto">
              <p className="px-5 py-3 font-bold text-2xl text-blue-900">
                Diplomado en desarrollo Front-end con React JS
              </p>
              <p className="px-5 py-2 font-bold text-blue-800">Realizado en la:</p>
              <p className="px-5 font-bold text-blue-900">FUNDACIÓN INTERNACIONAL MARIA LUISA de MORENO</p>
             </div>
          </div>


          <div className="mt-8 h-48 md:w-1/2">
            <div className="bg-white rounded-md w-[70%] h-[100%] mx-auto">
              <p className="px-5 py-3 font-bold text-2xl text-blue-900">
                Diplomado habilidades en programación
              </p>
              <p className="px-5 py-2 font-bold text-blue-800">Realizado en la universidad de caldas</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="imgEstudios">
        <div className="w-full h-[22%] text-center">
          <p className="font-bold text-2xl text-blue-900 py-20">Estudios</p>
        </div>

        <div className="md:flex mt-2 w-full h-full">
          
          <div className="w-1/2">
            <div className="bg-white rounded-md w-[80%] h-[30%] mx-auto ">

            </div>
          </div>
          
          <div className="w-1/2">
            <div className="bg-white rounded-md w-[80%] h-[30%] mx-auto ">

            </div>
          </div>
          
        </div>
      </div> */
}
