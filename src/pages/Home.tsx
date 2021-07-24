import { makeStyles, Typography, Button, Drawer, Fab } from '@material-ui/core';
import React, { useEffect } from 'react';
import moment from 'moment';
import { StaticTimePicker } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
     height:1200,
     background:'pink'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  drawerFooter: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));


const Home = () => {

  const classes = useStyles();

  const [time, setTime] = React.useState(new Date().getTime());
  const [value, setValue] = React.useState<any>(null);
  const [open, setOpen] = React.useState(false);

  const [timer, setTimer] = React.useState<Object>({})

  const tictak = () => {
    return setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);
  };

  useEffect(() => {
    // const id = tictak();

    // return () => {
    //   clearInterval(id);
    // };
  }, []);


  const toggleDrawer = () => {
    setOpen(!open);
  };

  const openDrawer = () => {
    setValue(moment(new Date()));
    toggleDrawer();
  };

  const cancel = () => {
    setValue(null);
    toggleDrawer();
  };

  const add = () => {

    setTimer(obj => ({
      ...obj,
      [String(value.unix())]: {
        value: value.unix(),
        label: value.format('YYYY-MM-DD HH:mm')
      }
    }))

    toggleDrawer();
  };
  const onChange = (val: any) => {
    setValue(val);

  };

  const d = moment(time).format('YYYY-MM-DD HH:mm:ss');
  const d2 = value?.format('YYYY-MM-DD HH:mm');

  console.log(timer)

  return (
    <div className={classes.root}>
      <Typography align='center' variant='h5'>现在系统时间 {d}</Typography>
      {
        value && <Typography align='center' variant='h5'>你选择的时间是 {d2}</Typography>
      }
      <Drawer anchor='bottom' open={open} onClose={cancel}>
        <StaticTimePicker
          ampm={false}
          orientation='portrait'
          openTo='minutes'
          value={value}
          onChange={onChange}
          renderInput={(props: any) => <TextField {...props} />}
          label='选择日期'
        />

        <div className={classes.drawerFooter}>
          <Button style={{ marginRight: 20 }} variant='contained' color='primary' onClick={add}>添加</Button>
          <Button variant='contained' onClick={cancel}>取消</Button>
        </div>
      </Drawer>
      <Fab className={classes.fab} color="primary" onClick={openDrawer}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
