import styled from "styled-components";

export const Container = styled.div`
  padding: 4em 5em;
  background-color: #ffffff;
  border-radius: 0.3em;

  p {
    margin: 0;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`;
export const Div = styled.div`
  margin-right: 3em;
`;
export const DivAvatar = styled.div`
  display: flex;
  margin-bottom: 1em;
`;
export const FlexInvite = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 0.7em;
`;
export const H1 = styled.h1`
  color: #333333;
  font-weight: 540;
  margin-bottom: 0.5em;
`;
export const ImageStyle = styled.div``;
export const PlusSpan = styled.span`
  padding-top: 0.3em;
  padding-right: 3em;
`;
export const PInvite = styled.p`
  font-size: 1.1em;
  cursor: pointer;

  :hover {
    color: #7befb2;
  }
`;
export const PLight = styled.p`
  font-size: 1.2em;
  color: #b3b3b3;
`;
export const PBold = styled.p`
  font-size: 1.1em;
  font-weight: bold;
`;
export const Ul = styled.ul`
  list-style: none;
  margin-top: 3em;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ListProfile = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
export const DivProfile = styled.div`
  width: 100%;
`;
export const ListName = styled.div``;
export const ListDate = styled.div`
  font-size: 0.8em;
`;
export const Flex = styled.div`
  margin-bottom: 1em;
`;
export const ShowMenu = styled.div`
  padding: 1em 0;
  padding-bottom: 2em;
  padding-left: calc(40px + 2em);
  display: none;
  align-items: center;

  &.hide {
    display: none;
  }
  &.show {
    display: flex;
  }
`;
