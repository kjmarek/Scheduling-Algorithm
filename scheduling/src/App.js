import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RMS, EDF, LLF, DMS } from "./Algorithms";
import Chart from "react-google-charts";

require("typeface-roboto");

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  smallInput: {
    width: "60px",
  },
  mediumInput: {
    width: "120px",
  },
  spacer: {
    height: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  const [algosRan, setAlgosRan] = useState(false);

  const [RMSfailed, setRMSfailed] = useState(false);
  const [EDFfailed, setEDFfailed] = useState(false);
  const [LLFfailed, setLLFfailed] = useState(false);
  const [DMSfailed, setDMSfailed] = useState(false);

  const [RMSpreemptions, setRMSpreemptions] = useState(0);
  const [EDFpreemptions, setEDFpreemptions] = useState(0);
  const [LLFpreemptions, setLLFpreemptions] = useState(0);
  const [DMSpreemptions, setDMSpreemptions] = useState(0);

  const [numTasks, setNumTasks] = useState(1);
  const [time, setTime] = useState("");
  const [data, setData] = useState([]);

  const [task1C, setTask1C] = useState("");
  const [task1P, setTask1P] = useState("");
  const [task1D, setTask1D] = useState("");
  const handleTask1C = (e) => {
    setTask1C(e.target.value);
  };
  const handleTask1P = (e) => {
    setTask1P(e.target.value);
  };
  const handleTask1D = (e) => {
    setTask1D(e.target.value);
  };

  const [task2C, setTask2C] = useState("");
  const [task2P, setTask2P] = useState("");
  const [task2D, setTask2D] = useState("");
  const handleTask2C = (e) => {
    setTask2C(e.target.value);
  };
  const handleTask2P = (e) => {
    setTask2P(e.target.value);
  };
  const handleTask2D = (e) => {
    setTask2D(e.target.value);
  };

  const [task3C, setTask3C] = useState("");
  const [task3P, setTask3P] = useState("");
  const [task3D, setTask3D] = useState("");
  const handleTask3C = (e) => {
    setTask3C(e.target.value);
  };
  const handleTask3P = (e) => {
    setTask3P(e.target.value);
  };
  const handleTask3D = (e) => {
    setTask3D(e.target.value);
  };

  const [task4C, setTask4C] = useState("");
  const [task4P, setTask4P] = useState("");
  const [task4D, setTask4D] = useState("");
  const handleTask4C = (e) => {
    setTask4C(e.target.value);
  };
  const handleTask4P = (e) => {
    setTask4P(e.target.value);
  };
  const handleTask4D = (e) => {
    setTask4D(e.target.value);
  };

  const [task5C, setTask5C] = useState("");
  const [task5P, setTask5P] = useState("");
  const [task5D, setTask5D] = useState("");
  const handleTask5C = (e) => {
    setTask5C(e.target.value);
  };
  const handleTask5P = (e) => {
    setTask5P(e.target.value);
  };
  const handleTask5D = (e) => {
    setTask5D(e.target.value);
  };

  const handleNumTasksSelect = (e) => {
    setNumTasks(e.target.value);
  };

  const handleTime = (e) => {
    //if (parseInt(e.target.value) > 50) {
    //  setTime(50);
    //} else {
    setTime(e.target.value);
    //}
  };

  const calculateThingies = () => {
    var dataTmp = [];
    dataTmp.push([
      { type: "string", id: "Position" },
      { type: "string", id: "Name" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ]);
    var taskSet;
    switch (numTasks) {
      default:
        taskSet = [
          {
            ci: parseInt(task1C),
            pi: parseInt(task1P),
            d: parseInt(task1D),
            cli: parseInt(task1C),
            di: parseInt(task1P),
            dc: parseInt(task1D),
          },
        ];
        break;
      case 2:
        taskSet = [
          {
            ci: parseInt(task1C),
            pi: parseInt(task1P),
            d: parseInt(task1D),
            cli: parseInt(task1C),
            di: parseInt(task1P),
            dc: parseInt(task1D),
          },
          {
            ci: parseInt(task2C),
            pi: parseInt(task2P),
            d: parseInt(task2D),
            cli: parseInt(task2C),
            di: parseInt(task2P),
            dc: parseInt(task2D),
          },
        ];
        break;
      case 3:
        taskSet = [
          {
            ci: parseInt(task1C),
            pi: parseInt(task1P),
            d: parseInt(task1D),
            cli: parseInt(task1C),
            di: parseInt(task1P),
            dc: parseInt(task1D),
          },
          {
            ci: parseInt(task2C),
            pi: parseInt(task2P),
            d: parseInt(task2D),
            cli: parseInt(task2C),
            di: parseInt(task2P),
            dc: parseInt(task2D),
          },
          {
            ci: parseInt(task3C),
            pi: parseInt(task3P),
            d: parseInt(task3D),
            cli: parseInt(task3C),
            di: parseInt(task3P),
            dc: parseInt(task3D),
          },
        ];
        break;
      case 4:
        taskSet = [
          {
            ci: parseInt(task1C),
            pi: parseInt(task1P),
            d: parseInt(task1D),
            cli: parseInt(task1C),
            di: parseInt(task1P),
            dc: parseInt(task1D),
          },
          {
            ci: parseInt(task2C),
            pi: parseInt(task2P),
            d: parseInt(task2D),
            cli: parseInt(task2C),
            di: parseInt(task2P),
            dc: parseInt(task2D),
          },
          {
            ci: parseInt(task3C),
            pi: parseInt(task3P),
            d: parseInt(task3D),
            cli: parseInt(task3C),
            di: parseInt(task3P),
            dc: parseInt(task3D),
          },
          {
            ci: parseInt(task4C),
            pi: parseInt(task4P),
            d: parseInt(task4D),
            cli: parseInt(task4C),
            di: parseInt(task4P),
            dc: parseInt(task4D),
          },
        ];
        break;
      case 5:
        taskSet = [
          {
            ci: parseInt(task1C),
            pi: parseInt(task1P),
            d: parseInt(task1D),
            cli: parseInt(task1C),
            di: parseInt(task1P),
            dc: parseInt(task1D),
          },
          {
            ci: parseInt(task2C),
            pi: parseInt(task2P),
            d: parseInt(task2D),
            cli: parseInt(task2C),
            di: parseInt(task2P),
            dc: parseInt(task2D),
          },
          {
            ci: parseInt(task3C),
            pi: parseInt(task3P),
            d: parseInt(task3D),
            cli: parseInt(task3C),
            di: parseInt(task3P),
            dc: parseInt(task3D),
          },
          {
            ci: parseInt(task4C),
            pi: parseInt(task4P),
            d: parseInt(task4D),
            cli: parseInt(task4C),
            di: parseInt(task4P),
            dc: parseInt(task4D),
          },
          {
            ci: parseInt(task5C),
            pi: parseInt(task5P),
            d: parseInt(task5D),
            cli: parseInt(task5C),
            di: parseInt(task5P),
            dc: parseInt(task5D),
          },
        ];
        break;
    }
    console.log(taskSet);
    console.log("Begin schedules");
    var rms = RMS(taskSet, time);
    setChartData("RMS", rms.intervals, dataTmp);
    if (rms.passed === false) {
      setRMSfailed(true);
    } else {
      setRMSfailed(false);
      setRMSpreemptions(rms.preemptions);
      // call output function
    }

    var edf = EDF(taskSet, time);
    setChartData("EDF", edf.intervals, dataTmp);
    if (edf.passed === false) {
      setEDFfailed(true);
    } else {
      setEDFfailed(false);
      setEDFpreemptions(edf.preemptions);
      // call output function
    }

    var llf = LLF(taskSet, time);
    setChartData("LLF", llf.intervals, dataTmp);
    if (llf.passed === false) {
      setLLFfailed(true);
    } else {
      setLLFfailed(false);
      setLLFpreemptions(llf.preemptions);
      // call output function
    }
    var dms = DMS(taskSet, time);
    setChartData("DMS", dms.intervals, dataTmp);
    if (dms.passed === false) {
      setDMSfailed(true);
    } else {
      setDMSfailed(false);
      setDMSpreemptions(dms.preemptions);
    }

    setData(dataTmp);
    setAlgosRan(true);
  };

  const setChartData = (algorithm, intervals, dataParam) => {
    var i = 0;
    while (i < intervals.length) {
      var start = i;
      var taskNum = intervals[i];
      while (i < intervals.length && intervals[i] === taskNum) {
        i++;
      }
      if (taskNum !== -1) {
        dataParam.push([
          algorithm,
          "Task " + (taskNum + 1),
          start * 1000,
          i * 1000,
        ]);
      }
    }
    console.log(dataParam);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h3">Algorithm Scheduling</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              By: Kyle Marek and Griffin Stout
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.spacer} />
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item>
            <Typography variant="h6">Select the number of taskes:</Typography>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Number of Tasks
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={numTasks}
                onChange={handleNumTasksSelect}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <div className={classes.spacer} />
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6">Input details for each task:</Typography>
            </Grid>
            {numTasks >= 1 && (
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography>Task 1</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="c1"
                      className={classes.smallInput}
                      value={task1C}
                      onChange={handleTask1C}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="p1"
                      className={classes.smallInput}
                      value={task1P}
                      onChange={handleTask1P}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="d1"
                      className={classes.smallInput}
                      value={task1D}
                      onChange={handleTask1D}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {numTasks >= 2 && (
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography>Task 2</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="c2"
                      className={classes.smallInput}
                      value={task2C}
                      onChange={handleTask2C}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="p2"
                      className={classes.smallInput}
                      value={task2P}
                      onChange={handleTask2P}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="d2"
                      className={classes.smallInput}
                      value={task2D}
                      onChange={handleTask2D}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {numTasks >= 3 && (
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography>Task 3</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="c3"
                      className={classes.smallInput}
                      value={task3C}
                      onChange={handleTask3C}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="p3"
                      className={classes.smallInput}
                      value={task3P}
                      onChange={handleTask3P}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="d3"
                      className={classes.smallInput}
                      value={task3D}
                      onChange={handleTask3D}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {numTasks >= 4 && (
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography>Task 4</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="c4"
                      className={classes.smallInput}
                      value={task4C}
                      onChange={handleTask4C}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="p4"
                      className={classes.smallInput}
                      value={task4P}
                      onChange={handleTask4P}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="d4"
                      className={classes.smallInput}
                      value={task4D}
                      onChange={handleTask4D}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {numTasks >= 5 && (
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography>Task 5</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="c5"
                      className={classes.smallInput}
                      value={task5C}
                      onChange={handleTask5C}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="p5"
                      className={classes.smallInput}
                      value={task5P}
                      onChange={handleTask5P}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="d5"
                      className={classes.smallInput}
                      value={task5D}
                      onChange={handleTask5D}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Typography>Computation Time</Typography>
                </Grid>
                <Grid item>
                  <TextField
                    label="Time"
                    className={classes.mediumInput}
                    value={time}
                    onChange={handleTime}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={calculateThingies}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.spacer} />
      <div className={classes.spacer} />
      {algosRan && (
        <Container size="lg">
          <Grid container direction="column" >
            <Grid item>
            <div>
                Note: units are in seconds due to graph restrictions. Any total
                time &gt; 60 goes into a new 'minute' on the scale
              </div>
              <Chart
                width={"100%"}
                height={"215px"}
                chartType="Timeline"
                loader={<div>Loading Chart</div>}
                data={data}
              />
            </Grid>
            <Grid item>
              {RMSfailed ? (
                <div>RMS failed</div>
              ) : (
                <div>RMS passed, preemptions {RMSpreemptions}</div>
              )}
              {EDFfailed ? (
                <div>EDF failed</div>
              ) : (
                <div>EDF passed, preemptions {EDFpreemptions}</div>
              )}
              {LLFfailed ? (
                <div>LLF failed</div>
              ) : (
                <div>LLF passed, preemptions {LLFpreemptions}</div>
              )}
              {DMSfailed ? (
                <div>DMS failed</div>
              ) : (
                <div>DMS passed, preemptions {DMSpreemptions}</div>
              )}
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default App;
