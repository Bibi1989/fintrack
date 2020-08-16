import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";

import { progresses, summaryLists, requests, claims } from "./data";

const Request = () => {
  const [toggle, setToggle] = useState(true);
  const menus = (
    <Menu>
      <Menu.Item key='0'>Request</Menu.Item>
      <Menu.Item key='1'>Claims</Menu.Item>
    </Menu>
  );

  return (
    <Container>
      {/* Header row */}
      <RequestStyle>
        <HeaderRow>
          <HeaderTitle>
            <h1>{toggle ? "Request" : "Claims"}</h1>
            <i
              className='fas fa-sliders-h'
              onClick={() => setToggle(!toggle)}
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </HeaderTitle>
          <Dropdown
            overlay={menus}
            placement='bottomRight'
            trigger={["click"]}
            className='menu'
          >
            <a
              className='ant-dropdown-link'
              onClick={(e) => e.preventDefault()}
              href
            >
              <HeaderDropdownMenu>
                <div>
                  <span className='fas fa-plus'></span>
                </div>
                <p>Create</p>
              </HeaderDropdownMenu>
            </a>
          </Dropdown>
        </HeaderRow>

        {toggle ? (
          <ListRow>
            <ListHeader>
              <p className='bold'>Subject and Category</p>
              <p className='bold'>User</p>
              <p className='bold'>Status</p>
              <p className='bold'>Amount</p>
              <p className='bold'>Date created</p>
            </ListHeader>
            {requests.map((request, index) => (
              <ListBody key={index} color={request.color}>
                <p>{request.subject}</p>
                <div className='users'>
                  {request.users.map((user, i) => (
                    <div key={i} className='user'>
                      {user.slice(0, 2)}
                    </div>
                  ))}
                </div>
                <div className='status'>{request.status}</div>
                <p>{request.amount}</p>
                <p>
                  {request.date} at {request.time}
                </p>
              </ListBody>
            ))}
          </ListRow>
        ) : (
          <ListRow>
            <ListHeader>
              <p className='bold'>Subject and Category</p>
              <p className='bold'>User</p>
              <p className='bold'>Status</p>
              <p className='bold'>Amount</p>
              <p className='bold'>Date created</p>
            </ListHeader>
            {claims.map((request, index) => (
              <ListBody key={index} color={request.color}>
                <p>{request.subject}</p>
                <div className='users'>
                  {request.users.map((user, i) => (
                    <div key={i} className='user'>
                      {user.slice(0, 2)}
                    </div>
                  ))}
                </div>
                <div className='status'>{request.status}</div>
                <p>{request.amount}</p>
                <p>
                  {request.date} at {request.time}
                </p>
              </ListBody>
            ))}
          </ListRow>
        )}
      </RequestStyle>
      <Summary>
        <SummaryTitle>short summary</SummaryTitle>
        <SummaryNumber>
          <div>
            <h1>1500</h1>
            <p>Request</p>
          </div>
          <i className='fas fa-ellipsis-h'></i>
        </SummaryNumber>
        <SummaryProgressbar>
          {progresses.map((progress, i) => (
            <RequestBar key={i} color={progress.color} width={progress.width} />
          ))}
        </SummaryProgressbar>

        <SummaryList>
          {summaryLists.map((list, i) => (
            <div key={i} className='lists'>
              <div className='title'>
                <div>{list.color}</div>
                <h4>{list.title}</h4>
              </div>
              <div className='num'>
                <h4>{list.num}</h4>
                <h4>{list.percent}%</h4>
              </div>
            </div>
          ))}
        </SummaryList>
      </Summary>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  p {
    margin: 0;
  }
`;
const Summary = styled.div`
  padding: 40px;
`;
const SummaryTitle = styled.h1`
  text-transform: uppercase;
  color: #aaaaaa;
`;
const SummaryNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;

  div {
    display: flex;
    align-items: flex-end;
  }

  h1 {
    margin: 0;
    padding-right: 5px;
  }
`;
const SummaryProgressbar = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  border-radius: 30px;
  overflow: hidden;
`;
const SummaryList = styled.div`
  padding-top: 40px;

  .lists {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;

    h4 {
      margin: 0;
    }
  }

  .num {
    display: flex;
    h4 {
      margin: 0;
      padding-left: 10px;
    }
  }
`;
const RequestBar = styled.div`
  background: ${({ color }) => color && color};
  width: ${({ width }) => width && width};
  height: 100%;
`;
const RequestStyle = styled.div`
  background: white;
  padding: 70px 40px;
  border-radius: 4px;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    padding-right: 10px;
  }
`;
const HeaderDropdownMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  div {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-right: 10px;
    border-radius: 50%;
    background: green;
    color: white;

    span {
      padding: 0;
      display: block;
    }
  }

  p {
    margin: 0;
  }
`;
const ListRow = styled.div``;
const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 25% 20% 15% 15% 25%;
  padding: 15px 0;
  border-bottom: 1px solid #cccccc;

  .bold {
    font-weight: bold;
  }
`;
const ListBody = styled.div`
  display: grid;
  grid-template-columns: 25% 20% 15% 15% 25%;
  padding: 15px 0;
  border-bottom: 1px solid #cccccc;

  .users {
    display: flex;
    padding-left: 10px;

    .user {
      width: 30px;
      height: 30px;
      border: 1px solid #eeeeee;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: grey;
      margin-left: -7px;
      text-transform: uppercase;
      color: #ccc;
    }
  }

  .status {
    width: 90%;
    background: ${({ color }) => (color ? color : "#cccccc")};
    color: white;
    border-radius: 4px;
    justify-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Request;
