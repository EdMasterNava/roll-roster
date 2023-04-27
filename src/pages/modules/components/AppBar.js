import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
//Creating Custom AppBar 
function AppBar(props) {
  return <MuiAppBar elevation={5} position="fixed" {...props} />;
}

export default AppBar;