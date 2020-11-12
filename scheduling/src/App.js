import React, { useState } from 'react';
import { Container, Grid, Typography, FormControl, MenuItem, InputLabel, Select, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

require('typeface-roboto');

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200
  },
  smallInput: {
    width: "60px"
  },
  spacer: {
    height: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();
  const [numProcesses, setNumProcesses] = useState(1);

  const [process1C, setProcess1C] = useState('');
  const [process1P, setProcess1P] = useState('');
  const handleProcess1C = (e) => {
    setProcess1C(e.target.value);
  }
  const handleProcess1P = (e) => {
    setProcess1P(e.target.value);
  }

  const [process2C, setProcess2C] = useState('');
  const [process2P, setProcess2P] = useState('');
  const handleProcess2C = (e) => {
    setProcess2C(e.target.value);
  }
  const handleProcess2P = (e) => {
    setProcess2P(e.target.value);
  }

  const [process3C, setProcess3C] = useState('');
  const [process3P, setProcess3P] = useState('');
  const handleProcess3C = (e) => {
    setProcess3C(e.target.value);
  }
  const handleProcess3P = (e) => {
    setProcess3P(e.target.value);
  }

  const [process4C, setProcess4C] = useState('');
  const [process4P, setProcess4P] = useState('');
  const handleProcess4C = (e) => {
    setProcess4C(e.target.value);
  }
  const handleProcess4P = (e) => {
    setProcess4P(e.target.value);
  }

  const [process5C, setProcess5C] = useState('');
  const [process5P, setProcess5P] = useState('');
  const handleProcess5C = (e) => {
    setProcess5C(e.target.value);
  }
  const handleProcess5P = (e) => {
    setProcess5P(e.target.value);
  }


  const handleNumProcessesSelect = (e) => {
    setNumProcesses(e.target.value);
  }

  return (
    <Container maxWidth="md">
      <Grid container  direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h3" >
            Algorithm Scheduling 
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" >
            By: Kyle Marek and Griffin Stout
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.spacer}/>
      <Grid container direction="column" alignItems="flex-start" justify="center">
        <Grid item>
          <Typography variant="h6">Select the number of processes:</Typography>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Number of Processes</InputLabel>
            <Select
            
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={numProcesses}
              onChange={handleNumProcessesSelect}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <div className={classes.spacer}/>
        <Grid container direction="column" alignItems="flex-start" spacing={2}>
          <Grid item>
            <Typography variant="h6">Input details for each process:</Typography>
          </Grid>
          {numProcesses >= 1 && (
            <Grid item >
              <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item><Typography>Process 1</Typography></Grid>
                <Grid item>
                <TextField 
                  label="c1"
                  className={classes.smallInput}
                  value={process1C}
                  onChange={handleProcess1C}
                  variant="outlined"
                  size="small"
                />
                </Grid>
                <Grid item>
                <TextField 
                  label="p1"
                  className={classes.smallInput}
                  value={process1P}
                  onChange={handleProcess1P}
                  variant="outlined"
                  size="small"
                />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 2 && (
            <Grid item >
              <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item><Typography>Process 2</Typography></Grid>
                <Grid item>
                <TextField 
                  label="c2"
                  className={classes.smallInput}
                  value={process2C}
                  onChange={handleProcess2C}
                  variant="outlined"
                  size="small"
                />
                </Grid>
                <Grid item>
                <TextField 
                  label="p2"
                  className={classes.smallInput}
                  value={process2P}
                  onChange={handleProcess2P}
                  variant="outlined"
                  size="small"
                />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 3 && (
            <Grid item >
              <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item><Typography>Process 3</Typography></Grid>
                <Grid item>
                <TextField 
                  label="c3"
                  className={classes.smallInput}
                  value={process3C}
                  onChange={handleProcess3C}
                  variant="outlined"
                  size="small"
                />
                </Grid>
                <Grid item>
                <TextField 
                  label="p3"
                  className={classes.smallInput}
                  value={process3P}
                  onChange={handleProcess3P}
                  variant="outlined"
                  size="small"
                />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 4 && (
            <Grid item >
              <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item><Typography>Process 4</Typography></Grid>
                <Grid item>
                <TextField 
                  label="c4"
                  className={classes.smallInput}
                  value={process4C}
                  onChange={handleProcess4C}
                  variant="outlined"
                  size="small"
                />
                </Grid>
                <Grid item>
                <TextField 
                  label="p4"
                  className={classes.smallInput}
                  value={process4P}
                  onChange={handleProcess4P}
                  variant="outlined"
                  size="small"
                />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 5 && (
            <Grid item >
              <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item><Typography>Process 5</Typography></Grid>
                <Grid item>
                <TextField 
                  label="c5"
                  className={classes.smallInput}
                  value={process5C}
                  onChange={handleProcess5C}
                  variant="outlined"
                  size="small"
                />
                </Grid>
                <Grid item>
                <TextField 
                  label="p5"
                  className={classes.smallInput}
                  value={process5P}
                  onChange={handleProcess5P}
                  variant="outlined"
                  size="small"
                />
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item>
            <Button variant="contained" color="primary" >
              Calculate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
