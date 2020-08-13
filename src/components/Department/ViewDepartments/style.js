import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  background: #ffffff;
  padding: 3em 5em;
`;

export const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3em;
`;

export const H1 = styled.h3`
  font-weight: 550;
  font-size: 2em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;

  .link {
    text-decoration: none;
  }
`;
