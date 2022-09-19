import { InicioPage } from './pages/InicioPage'
import { Navbar } from './componentes/Navbar'
import { PerfilPage } from './pages/PerfilPage'
import { EstudiosPage } from './pages/EstudiosPage'
import { ExperienciaPage } from './pages/ExperienciaPage'
import { PortafolioPage } from './pages/PortafolioPage'
import { ContactoPage } from './pages/ContactoPage'

function App() {
 

  return (
    <>
        <Navbar />
      <section id="Inicio">
        <InicioPage />
      </section>
      <section id="Perfil">
        <PerfilPage />
      </section>
      <section id="Estudios">
        <EstudiosPage />
      </section>
      <section id="Experiencia">
        <ExperienciaPage />
      </section>
      <section id="Portafolio">
        <PortafolioPage />
      </section>
      <section id="Contacto">
        <ContactoPage />
      </section>
    </>
    
  )
}

export default App
