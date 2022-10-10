import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,600&display=swap');

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Nunito-Sans',sans-serif;
    font-size:1.1rem;
    color:#102A43;
    background-color: #f0f4f8;
}

img {
    max-width: 100%;
}
`
