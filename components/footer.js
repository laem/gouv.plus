import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          max-width: 30rem;
        }
      `}
    >
      <div>
        Viens proposer ta fiche "service public numérique" en 3 clics sur{' '}
        <a href="https://github.com/laem/gouv.plus">
          la plateforme contributive Github
        </a>
        .
      </div>
    </footer>
  )
}
