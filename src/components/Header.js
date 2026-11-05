import { useEffect, useState } from 'react'
import { perfil } from '../data'

const links = [
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#competencias', rotulo: 'Competências' },
  { href: '#tecnologias', rotulo: 'Tecnologias' },
  { href: '#projetos', rotulo: 'Projetos' },
  { href: '#contato', rotulo: 'Contato' },
]

function temaInicial() {
  try {
    const salvo = localStorage.getItem('tema')
    if (salvo === 'claro' || salvo === 'escuro') return salvo
  } catch (e) {}
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro'
}

export default function Header() {
  const [tema, setTema] = useState(temaInicial)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = tema === 'escuro' ? 'dark' : 'light'
    try {
      localStorage.setItem('tema', tema)
    } catch (e) {}
  }, [tema])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" aria-label="Início">
          <span className="header__monograma">GS</span>
          <span className="header__nome">{perfil.nome}</span>
        </a>

        <nav className={`header__nav ${menuAberto ? 'is-open' : ''}`} aria-label="Seções">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuAberto(false)}>
              {l.rotulo}
            </a>
          ))}
        </nav>

        <div className="header__acoes">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setTema(tema === 'escuro' ? 'claro' : 'escuro')}
            aria-label={tema === 'escuro' ? 'Usar tema claro' : 'Usar tema escuro'}
            title={tema === 'escuro' ? 'Tema claro' : 'Tema escuro'}
          >
            {tema === 'escuro' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="icon-btn header__burger"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d={menuAberto ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
