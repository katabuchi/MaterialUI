"use client"

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import EmailIcon from '@mui/icons-material/Email';
import { SyntheticEvent, useState } from "react";
import AppBar from "./components/AppBar/AppBar";

export default function Home() {
  const [value, setValue] = useState("about")
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <main className="">
      <AppBar />

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}>
          <BottomNavigationAction
            label="About"
            value="about"
            icon={<FaceIcon />}
          />
          <BottomNavigationAction
            label="Works"
            value="works"
            icon={<WorkIcon />}
          />
          <BottomNavigationAction
            label="Blog"
            value="blog"
            icon={<CreateIcon />}
          />
          <BottomNavigationAction
            label="Contact"
            value="contact"
            icon={<EmailIcon />}
          />
        </BottomNavigation>
      </Paper>
    </main>
  );
}
