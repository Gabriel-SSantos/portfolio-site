import { perfil, numeros } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <p className="eyebrow">{perfil.cargo}</p>
        <h1 className="hero__titulo">
          Software que resolve problemas reais, <span className="destaque">da sala de aula à Google Play.</span>
        </h1>
        <p className="hero__resumo">{perfil.resumo}</p>

        <div className="hero__stack">
          {perfil.stack.map((s) => (
            <span key={s} className="chip chip--forte">{s}</span>
          ))}
        </div>

        <div className="hero__acoes">
          <a href="#projetos" className="btn btn--primario">Ver projetos</a>
          <a href={perfil.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <dl className="numeros">
          {numeros.map((n) => (
            <div key={n.rotulo} className="numeros__item">
              <dt>{n.valor}</dt>
              <dd>{n.rotulo}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
