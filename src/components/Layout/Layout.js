import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  content: {
    margin: '10px',
  },
}));
const Layout = (props) => {
  const classes = useStyles();
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
