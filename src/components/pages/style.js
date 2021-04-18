import styled from "styled-components";

export const Div = styled.div`
  /* display: flex;
  background-color: #f8f8f8;
  flex-flow: row wrap;
  justify-content: center; */
  margin: 5px auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  justify-content: center;
  justify-items: center;
  padding: 0 5px;
`;
