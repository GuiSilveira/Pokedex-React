import styled from "styled-components";

export const StyledH2 = styled.h2`
  font-size: var(--size-3);
  font-weight: 700;
  color: ${(props) => props.color};
`;

StyledH2.defaultProps = {
  color: "var(--light-grey)",
};
