import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #2f3542
  }
`

