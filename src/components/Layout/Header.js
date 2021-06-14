import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
 
export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="colorSecondary" noWrap>
          Simple Blog Task
        </Typography>
      </Toolbar>
    </AppBar>
  );
};