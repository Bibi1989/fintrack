import React from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import { contents, buttonsArray } from "./utils/cardContents";
const dashboardpic = "../../../assets/dashboardpic.png";

const DashboardTwo = () => {
  // menu dropdown ant.design
  const menus = (
    <Menu>
      <Menu.Item key='0'>Today</Menu.Item>
      <Menu.Item key='1'>Yesterday</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>Last week</Menu.Item>
      <Menu.Item key='3'>Last month</Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Row>
        <Header>
          <Image>
            <img src={dashboardpic} alt='dashboard' />
          </Image>
          <Hello>
            <h1>Hello Micheal</h1>
            <p>Welcome to your dashboard</p>
          </Hello>
        </Header>
        <SmallCard>
          <H3>Last Days 30</H3>
          <i className='fas fa-chevron-down'></i>
        </SmallCard>
      </Row>

      <Grid>
        {contents.map((content) => (
          <Card key={content.status}>
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
                <i className='fas fa-ellipsis-h'></i>
              </a>
            </Dropdown>
            <img src={content.src} alt={content.title} />
            <CardContent>
              <h1>{content.number}</h1>
              <p>{content.status}</p>
            </CardContent>
          </Card>
        ))}
      </Grid>

      <GridTwo>
        <Card>
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
              <i className='fas fa-ellipsis-h'></i>
            </a>
          </Dropdown>
          <img src='../../../assets/pending.png' alt='card pending' />
          <CardContent>
            <h1>5,000,000</h1>
            <p>Pending</p>
          </CardContent>
        </Card>
        <GridTwoCardTwo>
          <GridChartHeader>
            <h1>Request Status</h1>
            <i class='fas fa-ellipsis-h'></i>
          </GridChartHeader>
          <GridChart>
            <Status>
              {buttonsArray.map((btn, i) => (
                <Button key={i} color={btn.color}>
                  <span></span> {btn.title}
                </Button>
              ))}
            </Status>
            <ImageChart>
              <img src='../../../assets/chartpic.png' alt='' />
            </ImageChart>
          </GridChart>
        </GridTwoCardTwo>
      </GridTwo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
`;
const Image = styled.div`
  width: 60px;

  img {
    width: 100%;
  }
`;
const Hello = styled.div`
  padding-left: 10px;

  h1 {
    margin: 0;
  }
`;
const CardContent = styled.div`
  text-align: center;

  h1 {
    font-weight: bolder;
  }
`;
const H3 = styled.h3`
  margin: 0;
`;
const SmallCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 15px 20px;
  border-radius: 10px;

  i {
    padding-left: 20px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 30px;
`;
const GridTwo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 75%;
  gap: 50px;
  margin-top: 30px;
`;
const Card = styled.div`
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0);
  }

  .menu {
    align-self: flex-end;
    font-size: 20px;
  }

  img {
    display: block;
  }
`;
const GridChart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px;
`;
const GridTwoCardTwo = styled(Card)`
  padding-top: 20px;
  min-height: 300px;
`;
const GridChartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
  }
`;
const Status = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  align-items: center;
`;
const ImageChart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    display: block;
  }
`;
const Button = styled.button`
  border: 1px solid #cccccc;
  border-radius: 5px;
  background: white;
  padding: 7px 20px;
  display: flex;
  align-items: center;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ color }) => color && color};
    margin-right: 20px;
  }
`;
// const Container = styled.div``

export default DashboardTwo;
