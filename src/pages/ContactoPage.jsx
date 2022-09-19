import  logo  from '../assets/logo.png'
import  imgFace  from '../assets/imgFace.png'
import  imgWasap  from '../assets/imgWasap.png'
import  imgEmail  from '../assets/imgEmail.png'

export const ContactoPage = () => {
  return (
    
    <>
      <div className="imgContacto">
        <div className="w-full h-22 text-center">
          <p className="font-bold text-2xl text-blue-900 py-20">Contacto</p>
        </div>

        <div className="w-full h-40 text-center">
          <div className='mx-auto inline-flex text-center items-center'>
            <a
            className='mr-10'
            href="https://www.facebook.com/people/Valencia-Valencia/100080315672835/"
            target="_blank"
            >
              <img className='h-20 rounded-full' src={imgFace}  />
            </a>

            <a
            className='mr-10'
            href="https://wa.me/+573117847580/?text=¡Hola! Oscar Quiero saber más de tus servicios en programación"
            target="_blank"
            >
              <img className='h-20 rounded-full' src={imgWasap}  />
            </a>

            <a
            href="mailto:excelvalencia75@gmail.com?Subject=Información de tus servicios en programación"
            target="_blank"
            >
              <img className='h-20 rounded-full' src={imgEmail}  />
            </a>

             
                
          </div>
         
        </div>

        <div className="bg-[#000380] w-full h-15 text-center items-center mx-auto ">
          <div className='mx-auto inline-flex text-center items-center'>
            <img className='h-6' src={logo}  />
              <p className="font-bold text-xl text-white py-2">Oscar Eduardo Valencia</p>
            </div>
          </div>
      </div>
    </>


  )
}
