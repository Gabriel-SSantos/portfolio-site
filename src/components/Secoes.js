import { perfil, areas, tecnologias, atuacao } from '../data'

export function Titulo({ eyebrow, children, descricao }) {
  return (
    <div className="secao__cabecalho">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
      {descricao && <p className="secao__descricao">{descricao}</p>}
    </div>
  )
}

export function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="container sobre">
        <Titulo eyebrow="Sobre">Do requisito à publicação</Titulo>
        <div className="sobre__texto">
          <p>{perfil.resumoLongo}</p>
          <h3>Onde já entreguei soluções</h3>
          <ul className="atuacao">
            {atuacao.map((a) => (
              <li key={a.titulo}>
                <strong>{a.titulo}</strong>
                <span>{a.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Competencias() {
  return (
    <section id="competencias" className="secao secao--alt">
      <div className="container">
        <Titulo eyebrow="Competências" descricao="As áreas do conhecimento que aparecem nos projetos.">
          Áreas do conhecimento
        </Titulo>
        <ul className="grade-areas">
          {areas.map((a, i) => (
            <li key={a.titulo} className="area">
              <span className="area__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Tecnologias() {
  return (
    <section id="tecnologias" className="secao">
      <div className="container">
        <Titulo eyebrow="Ferramentas">Tecnologias</Titulo>
        <div className="tecnologias">
          {tecnologias.map((t) => (
            <div key={t.categoria} className="tecnologias__linha">
              <h3>{t.categoria}</h3>
              <ul className="chips">
                {t.itens.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contato() {
  return (
    <footer id="contato" className="contato">
      <div className="container contato__inner">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos conversar sobre o seu projeto?</h2>
          <p className="secao__descricao">O código dos projetos e as novidades estão no meu GitHub.</p>
        </div>
        <a href={perfil.github} className="btn btn--primario" target="_blank" rel="noreferrer">
          github.com/{perfil.githubUser}
        </a>
      </div>
      <div className="container contato__rodape">
        <span>© {new Date().getFullYear()} {perfil.nome}</span>
        <span>Feito com React</span>
      </div>
    </footer>
  )
}
