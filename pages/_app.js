import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    primary: '#19088e',
  },
}
const GlobalStyle = createGlobalStyle`
html {

          height: 100%;
		  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	height: 100%;
  }
  #__next {

          height: 100%;
		   }
  ul {
  list-style-type: none;
  }

          a {
            text-decoration: none;
			color: ${theme.colors.primary}
          }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
