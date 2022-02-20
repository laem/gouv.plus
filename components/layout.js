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
        `}
      >
        <header
          css={`
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: wrap;
          `}
        >
          <Link href="/">
            <a>
              <h1>Gouv.plus</h1>
            </a>
          </Link>
          <p>Les services publics numériques dont vous rêvez.</p>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
