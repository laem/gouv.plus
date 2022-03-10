import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { theme } from '../pages/_app'

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
        margin-bottom: 1.6rem;
        > div {
          border: 1px dashed ${theme.colors.primary};
        }
      `}
    >
      <div>
        <p>
          Viens proposer ta fiche "service public numérique" en 3 clics sur{' '}
          <a href="https://github.com/laem/gouv.plus">
            la plateforme contributive Github
          </a>
          .
        </p>
        <p>💡 Ce site n'est pas affilié au gouvernement français.</p>
      </div>
    </footer>
  )
}
