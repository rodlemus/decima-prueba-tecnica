import { Grid } from "@material-ui/core";
import React from "react";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
const Dashboard = (props) => {
  return (
    <div>
      <Navbar />
      <Grid container style={{ padding: 0, margin: 0 }}>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={10}>
          <Feed />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
