"use client"

import { AppBar, BottomNavigation, BottomNavigationAction, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FaceIcon from '@mui/icons-material/Face';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import EmailIcon from '@mui/icons-material/Email';
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("about")
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <main className="">
      <AppBar position="static">
        <Toolbar variant="dense" >
          <IconButton edge="start" color="inherit" aria-aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography>
            Sample MUI
          </Typography>
        </Toolbar>
      </AppBar>


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
