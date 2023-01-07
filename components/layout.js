import Link from 'next/link'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div
        css={`
          display: grid;
          grid-template-rows: auto 1fr auto;
          height: 100%;
          margin: 0.6rem;
          text-align: center;
        `}
      >
        <header
          css={`
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: wrap;
            h1 {
              margin: 0;
            }
          `}
        >
          <Link href="/">
            <a>
              <h1>Gouv.plus</h1>
            </a>
          </Link>
          <p>Les services publics numériques citoyens dont vous rêvez.</p>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
