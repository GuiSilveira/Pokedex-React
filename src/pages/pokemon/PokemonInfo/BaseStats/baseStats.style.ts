import styled from "styled-components";

interface StyledStatBarProps {
  widthSize: string;
}

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
  color: ${(props) => props.color};
`;

StyledStatName.defaultProps = {
  color: "var(--dark-grey)",
};

export const StyledStatNumber = styled.p`
  color: var(--dark-grey);
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

export const StyledStatBarContainer = styled.div`
  background-color: rgb(192, 192, 192);
  width: 65vw;
  border-radius: 15px;
  height: 50%;
`;

export const StyledStatBar = styled.div<StyledStatBarProps>`
  background-color: ${(props) => props.color};
  color: white;
  padding: 1%;
  text-align: right;
  font-size: inherit;
  border-radius: 15px;
  height: 100%;
  width: ${(props) => props.widthSize + "%"};
`;
