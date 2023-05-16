import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 0;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-size: 28px;
  line-height: 26px;

  @media (max-width:  ${props => props.theme.breakpoints.sm}) {
    font-size: 24px;
  }
`