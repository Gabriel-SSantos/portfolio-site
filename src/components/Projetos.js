import { useEffect, useRef, useState } from 'react'
import { projetos, filtros } from '../data'
import { Titulo } from './Secoes'

function ProjetoCard({ projeto, onAbrir }) {
  return (
    <article className="projeto" style={{ '--cor-projeto': projeto.cor }}>
      <div className="projeto__faixa" aria-hidden="true">
        <span className="projeto__inicial">{projeto.nome.charAt(0)}</span>
      </div>
      <div className="projeto__corpo">
        <p className="projeto__plataforma">{projeto.plataforma}</p>
        <h3>{projeto.nome}</h3>
        <p className="projeto__subtitulo">{projeto.subtitulo}</p>
        <p className="projeto__resumo">{projeto.resumo}</p>
        <ul className="chips chips--pequenos">
          {projeto.tecnologias.slice(0, 4).map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
          {projeto.tecnologias.length > 4 && <li className="chip chip--mais">+{projeto.tecnologias.length - 4}</li>}
        </ul>
        <div className="projeto__acoes">
          <button type="button" className="btn btn--pequeno" onClick={() => onAbrir(projeto)}>
            Detalhes
          </button>
          {projeto.link && (
            <a href={projeto.link.url} className="btn btn--pequeno btn--link" target="_blank" rel="noreferrer">
              {projeto.link.rotulo} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjetoDetalhe({ projeto, onFechar }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <dialog
      ref={ref}
      className="detalhe"
      style={{ '--cor-projeto': projeto.cor }}
      onClose={onFechar}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      aria-labelledby="detalhe-titulo"
    >
      <div className="detalhe__conteudo">
        <button type="button" className="icon-btn detalhe__fechar" onClick={() => ref.current.close()} aria-label="Fechar">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <p className="projeto__plataforma">{projeto.plataforma}</p>
        <h3 id="detalhe-titulo">{projeto.nome}</h3>
        <p className="projeto__subtitulo">{projeto.subtitulo}</p>
        <p>{projeto.resumo}</p>

        <h4>Destaques técnicos</h4>
        <ul className="detalhe__lista">
          {projeto.destaques.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <h4>Tecnologias</h4>
        <ul className="chips">
          {projeto.tecnologias.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>

        <h4>Áreas de aplicação</h4>
        <ul className="chips">
          {projeto.aplicacoes.map((a) => (
            <li key={a} className="chip chip--contorno">{a}</li>
          ))}
        </ul>

        {projeto.link && (
          <a href={projeto.link.url} className="btn btn--primario detalhe__link" target="_blank" rel="noreferrer">
            {projeto.link.rotulo} ↗
          </a>
        )}
      </div>
    </dialog>
  )
}

export default function Projetos() {
  const [filtro, setFiltro] = useState('todos')
  const [aberto, setAberto] = useState(null)

  const lista = filtro === 'todos' ? projetos : projetos.filter((p) => p.tipos.includes(filtro))

  return (
    <section id="projetos" className="secao secao--alt">
      <div className="container">
        <Titulo eyebrow="Portfólio" descricao="Clique em Detalhes para ver as decisões técnicas de cada um.">
          Projetos desenvolvidos
        </Titulo>

        <div className="filtros" role="group" aria-label="Filtrar projetos">
          {filtros.map((f) => {
            const qtd = f.id === 'todos' ? projetos.length : projetos.filter((p) => p.tipos.includes(f.id)).length
            return (
              <button
                key={f.id}
                type="button"
                className={`filtro ${filtro === f.id ? 'is-ativo' : ''}`}
                onClick={() => setFiltro(f.id)}
                aria-pressed={filtro === f.id}
              >
                {f.rotulo} <span className="filtro__qtd">{qtd}</span>
              </button>
            )
          })}
        </div>

        <div className="grade-projetos">
          {lista.map((p) => (
            <ProjetoCard key={p.id} projeto={p} onAbrir={setAberto} />
          ))}
        </div>
      </div>

      {aberto && <ProjetoDetalhe projeto={aberto} onFechar={() => setAberto(null)} />}
    </section>
  )
}
