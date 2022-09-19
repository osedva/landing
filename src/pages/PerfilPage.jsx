import imgCss from "../assets/imgCss.png";
import imgAppScript from "../assets/imgAppScript.png";
import imgHtml from "../assets/imgHtml.png";
import imgVb from "../assets/imgVb.png";
import imgReact from "../assets/imgReact.png";
import imgJs from "../assets/imgJs.png";
import imgPython from "../assets/imgPython.png";

export const PerfilPage = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="bg-white w-full h-[22%] text-center">
          <p className="font-bold text-2xl text-blue-900 py-20">Perfil</p>
        </div>
        <div className="bg-white flex w-full h-[26%] items-center justify-between ">
          <div className="md:w-1/2">
            <img className="rounded-md w-32 h-32 mx-auto" src={imgCss} />
          </div>

          <div className="md:w-1/1">
            <p className="font-bold text-2xl text-blue-900">Desarrollador</p>
            <p className="font-bold text-2xl text-blue-900">web frontend</p>
            <p className="font-bold text-blue-800">Con conocimiento</p>
            <p className="font-bold text-blue-800">de HTML, CSS,</p>
            <p className="font-bold text-blue-800">JavaScript, ReactJS,</p>
            <p className="font-bold text-blue-800">Python, VB de Excel,</p>
            <p className="font-bold text-blue-800">Apps Script.</p>
          </div>

          <div className="md:w-1/2">
            <img className="rounded-md w-32 h-32 mx-auto" src={imgAppScript} />
          </div>
        </div>
        <div className="bg-white flex w-full h-[26%] items-center justify-between ">
          <div className="md:w-1/6">
            <img className="rounded-md w-36 h-32 mx-auto" src={imgHtml} />
          </div>

          <div className="md:w-1/6">
            <img className="rounded-md w-36 h-32 mx-auto" src={imgVb} />
          </div>
        </div>
        <div className="bg-white flex w-full h-[26%] items-center justify-between ">
          <div className="md:w-1/3">
            <img
              className="rounded-md w-32 h-32 mx-auto text-right"
              src={imgReact}
            />
          </div>
          <div className="md:w-1/3">
            <img className="rounded-md w-32 h-32 mx-auto" src={imgJs} />
          </div>
          <div className="md:w-1/3">
            <img className="rounded-md w-32 h-32 mx-auto" src={imgPython} />
          </div>
        </div>
      </div>
    </>
  );
};
