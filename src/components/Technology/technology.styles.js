import styled from "styled-components";

export const Icon = styled.div`
  cursor: pointer;
  height:8rem;
  width:8rem;
  position: relative;
  :hover{
    transform: scale(1.07);
    transition: all 0.5s ease-out;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height:6rem;
    width:6rem;
}
`