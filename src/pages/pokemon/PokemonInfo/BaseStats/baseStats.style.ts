import styled from "styled-components";

export const StyledSection = styled.section`
  text-align: center;
  padding-bottom: var(--size-5);
`;

export const StyledDiv = styled.div`
  margin-top: var(--size-4);
  display: flex;
  justify-content: center;
  gap: var(--size-1);
`;

export const StyledStatDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledStatNameDiv = styled(StyledStatDiv)`
  padding-right: var(--size-1);
  border-right: 1px solid;
  border-color: var(--light-grey);
`;

export const StyledStatName = styled.p`
  font-weight: 700;
  color: coral;
`;

export const StyledStatNumber = styled.p`
  color: var(--dark-grey);
`;

export const StyledStatBar = styled.span`
  height: 0.4rem;
  width: 23.1rem;
  border-radius: 4px;
`;
