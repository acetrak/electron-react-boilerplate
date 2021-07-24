import React, { useEffect, useState } from 'react';
import { ipcRenderer, remote } from 'electron';
import { colors, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import RemoveIcon from '@material-ui/icons/Remove';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import Crop32Icon from '@material-ui/icons/Crop32';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 32,
    marginTop: theme.spacing(1)
  },
  right: {
    flex: 1
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inBox: {
    height: '100%',
    width: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '-webkit-app-region': 'no-drag',
    transition: 'all 0.2s ease-in'
  },
  close: {
    '&:hover': {
      background: colors.red[500],
      color: '#fff'
    }
  },
  other: {
    '&:hover': {
      background: 'rgba(0,0,0,0.1)'
    }
  }
}));

const mainWindow = remote?.getCurrentWindow();

function ToolBar() {

  const classes = useStyles();
  const [isMaximized, set] = useState(false);

  useEffect(() => {
    ipcRenderer.on('max-window-reply', (_, args) => {
      set(args);
    });

    mainWindow.on('resize', () => {
      set(mainWindow.isMaximized());
    });

  }, []);

  const handleMaxWindow = () => {
    ipcRenderer.send('max-window');
  };

  const handleMinWindow = () => {
    ipcRenderer.send('min-window');
  };

  const handleCloseWindow = () => {
    ipcRenderer.send('close-window');
  };

  return (
    <div className={classes.root}>
      <div className={classes.right} />
      <div className={classes.left}>
        <div className={clsx(classes.inBox, classes.other)} onClick={handleMinWindow}><RemoveIcon fontSize='small' /></div>
        <div className={clsx(classes.inBox, classes.other)} onClick={handleMaxWindow}>
          {isMaximized ? <FilterNoneIcon style={{ fontSize: 14 }} /> : <Crop32Icon fontSize='small' />}
        </div>
        <div className={clsx(classes.inBox, classes.close)} onClick={handleCloseWindow}><CloseIcon fontSize='small' /></div>
      </div>
    </div>
  );
}

export default ToolBar;
