import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import { Sobre, Competencias, Tecnologias, Contato } from './components/Secoes'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="pular">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Competencias />
        <Tecnologias />
        <Projetos />
      </main>
      <Contato />
    </>
  )
}
