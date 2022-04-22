import { Grid } from "@material-ui/core";
import React from "react";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SavedGifs from "./SavedGifs";

const Dashboard = (props) => {
  return (
    <div>
      <Navbar />
      <Grid container style={{ padding: 0, margin: 0 }}>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={10}>
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/trending" element={<Feed />} />
            <Route path="/favorites" element={<SavedGifs />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
