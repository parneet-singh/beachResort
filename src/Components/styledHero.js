import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const styledHero = styled.header`
min-height: 60vh;
background: url( ${props => props.image}) center/cover;
display: flex;
align-items: center;
justify-content: center;`

export default styledHero;