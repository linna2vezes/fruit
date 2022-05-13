import styled from 'styled-components'

export const Container =styled.div `
display:flex;
flex-direction: column;
max-width: 800px;
`

export const ContainerFruits =styled.div `
display:flex;
flex-wrap: wrap;
max-width: 800px;
`

export const CardFruit=styled.div `
display:flex;
flex-direction: column;
margin: 10px;
font-size: 14px;
`
export const Title=styled.p`
font-size:18px;
line-height: 18px;
font-weight: 800;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:#F89B1C;
text-Transform: uppercase;
`

export const Bgimage=styled.div`
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif;
background-image: url("./image/background.png"); 
`
export const TitleSecond=styled.p`
font-size:18px;
line-height: 40px;
font-weight: 500;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: black;
`