import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { Container, RowHeader, H1, Grid } from "./style";
import { Button } from "../CreateDepartment/style";
import { useHistory } from "react-router-dom";

// import { data } from "../datas/data";
import { DepartmentContext } from "../../../context/department/DepartmentProvider";

const ViewDepartments = () => {
  const { fetchDepartments, departments } = useContext(DepartmentContext);
  const history = useHistory();
  // console.log({ fetch: departments });

  useEffect(() => {
    fetchDepartments();

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <RowHeader>
        <div></div>
        <H1>DEPARTMENTS</H1>
        <Button
          background='#10655e'
          onClick={() => history.push("/dashboard/department")}
        >
          Create Departments
        </Button>
      </RowHeader>
      <Grid>
        {departments.map((department) => (
          <Card department={department} />
        ))}
      </Grid>
    </Container>
  );
};

export default ViewDepartments;
