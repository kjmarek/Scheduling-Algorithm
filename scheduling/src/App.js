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

  const [numProcesses, setNumProcesses] = useState(1);
  const [time, setTime] = useState("");

  const [process1C, setProcess1C] = useState("");
  const [process1P, setProcess1P] = useState("");
  const [process1D, setProcess1D] = useState("");
  const handleProcess1C = (e) => {
    setProcess1C(e.target.value);
  };
  const handleProcess1P = (e) => {
    setProcess1P(e.target.value);
  };
  const handleProcess1D = (e) => {
    setProcess1D(e.target.value);
  };

  const [process2C, setProcess2C] = useState("");
  const [process2P, setProcess2P] = useState("");
  const [process2D, setProcess2D] = useState("");
  const handleProcess2C = (e) => {
    setProcess2C(e.target.value);
  };
  const handleProcess2P = (e) => {
    setProcess2P(e.target.value);
  };
  const handleProcess2D = (e) => {
    setProcess2D(e.target.value);
  };

  const [process3C, setProcess3C] = useState("");
  const [process3P, setProcess3P] = useState("");
  const [process3D, setProcess3D] = useState("");
  const handleProcess3C = (e) => {
    setProcess3C(e.target.value);
  };
  const handleProcess3P = (e) => {
    setProcess3P(e.target.value);
  };
  const handleProcess3D = (e) => {
    setProcess3D(e.target.value);
  };

  const [process4C, setProcess4C] = useState("");
  const [process4P, setProcess4P] = useState("");
  const [process4D, setProcess4D] = useState("");
  const handleProcess4C = (e) => {
    setProcess4C(e.target.value);
  };
  const handleProcess4P = (e) => {
    setProcess4P(e.target.value);
  };
  const handleProcess4D = (e) => {
    setProcess4D(e.target.value);
  };

  const [process5C, setProcess5C] = useState("");
  const [process5P, setProcess5P] = useState("");
  const [process5D, setProcess5D] = useState("");
  const handleProcess5C = (e) => {
    setProcess5C(e.target.value);
  };
  const handleProcess5P = (e) => {
    setProcess5P(e.target.value);
  };
  const handleProcess5D = (e) => {
    setProcess5D(e.target.value);
  };

  const handleNumProcessesSelect = (e) => {
    setNumProcesses(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const calculateThingies = () => {
    var taskSet;
    switch (numProcesses) {
      default:
        taskSet = [
          {
            ci: parseInt(process1C),
            pi: parseInt(process1P),
            d: parseInt(process1D),
            cli: parseInt(process1C),
            di: parseInt(process1P),
            dc: parseInt(process1D),
          },
        ];
        break;
      case 2:
        taskSet = [
          {
            ci: parseInt(process1C),
            pi: parseInt(process1P),
            d: parseInt(process1D),
            cli: parseInt(process1C),
            di: parseInt(process1P),
            dc: parseInt(process1D),
          },
          {
            ci: parseInt(process2C),
            pi: parseInt(process2P),
            d: parseInt(process2D),
            cli: parseInt(process2C),
            di: parseInt(process2P),
            dc: parseInt(process2D),
          },
        ];
        break;
      case 3:
        taskSet = [
          {
            ci: parseInt(process1C),
            pi: parseInt(process1P),
            d: parseInt(process1D),
            cli: parseInt(process1C),
            di: parseInt(process1P),
            dc: parseInt(process1D),
          },
          {
            ci: parseInt(process2C),
            pi: parseInt(process2P),
            d: parseInt(process2D),
            cli: parseInt(process2C),
            di: parseInt(process2P),
            dc: parseInt(process2D),
          },
          {
            ci: parseInt(process3C),
            pi: parseInt(process3P),
            d: parseInt(process3D),
            cli: parseInt(process3C),
            di: parseInt(process3P),
            dc: parseInt(process3D),
          },
        ];
        break;
      case 4:
        taskSet = [
          {
            ci: parseInt(process1C),
            pi: parseInt(process1P),
            d: parseInt(process1D),
            cli: parseInt(process1C),
            di: parseInt(process1P),
            dc: parseInt(process1D),
          },
          {
            ci: parseInt(process2C),
            pi: parseInt(process2P),
            d: parseInt(process2D),
            cli: parseInt(process2C),
            di: parseInt(process2P),
            dc: parseInt(process2D),
          },
          {
            ci: parseInt(process3C),
            pi: parseInt(process3P),
            d: parseInt(process3D),
            cli: parseInt(process3C),
            di: parseInt(process3P),
            dc: parseInt(process3D),
          },
          {
            ci: parseInt(process4C),
            pi: parseInt(process4P),
            d: parseInt(process4D),
            cli: parseInt(process4C),
            di: parseInt(process4P),
            dc: parseInt(process4D),
          },
        ];
        break;
      case 5:
        taskSet = [
          {
            ci: parseInt(process1C),
            pi: parseInt(process1P),
            d: parseInt(process1D),
            cli: parseInt(process1C),
            di: parseInt(process1P),
            dc: parseInt(process1D),
          },
          {
            ci: parseInt(process2C),
            pi: parseInt(process2P),
            d: parseInt(process2D),
            cli: parseInt(process2C),
            di: parseInt(process2P),
            dc: parseInt(process2D),
          },
          {
            ci: parseInt(process3C),
            pi: parseInt(process3P),
            d: parseInt(process3D),
            cli: parseInt(process3C),
            di: parseInt(process3P),
            dc: parseInt(process3D),
          },
          {
            ci: parseInt(process4C),
            pi: parseInt(process4P),
            d: parseInt(process4D),
            cli: parseInt(process4C),
            di: parseInt(process4P),
            dc: parseInt(process4D),
          },
          {
            ci: parseInt(process5C),
            pi: parseInt(process5P),
            d: parseInt(process5D),
            cli: parseInt(process5C),
            di: parseInt(process5P),
            dc: parseInt(process5D),
          },
        ];
        break;
    }
    console.log(taskSet);
    console.log("Begin schedules");
    var rms = RMS(taskSet, time);
    if (rms.passed === false) {
      setRMSfailed(true);
    } else {
      setRMSfailed(false);
      setRMSpreemptions(rms.preemptions);
      // call output function
    }
    var edf = EDF(taskSet, time);
    if (edf.passed === false) {
      setEDFfailed(true);
    } else {
      setEDFfailed(false);
      setEDFpreemptions(edf.preemptions);
      // call output function
    }
    var llf = LLF(taskSet, time);
    if (llf.passed === false) {
      setLLFfailed(true);
    } else {
      setLLFfailed(false);
      setLLFpreemptions(llf.preemptions);
      // call output function
    }
    var dms = DMS(taskSet, time);
    if (dms.passed === false) {
      setDMSfailed(true);
    } else {
      setDMSfailed(false);
      setDMSpreemptions(dms.preemptions);
    }
    setAlgosRan(true);
  };

  return (
    <Container maxWidth="md">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h3">Algorithm Scheduling</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">By: Kyle Marek and Griffin Stout</Typography>
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
          <Typography variant="h6">Select the number of processes:</Typography>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Number of Processes
            </InputLabel>
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
        <div className={classes.spacer} />
        <Grid container direction="column" alignItems="flex-start" spacing={2}>
          <Grid item>
            <Typography variant="h6">
              Input details for each process:
            </Typography>
          </Grid>
          {numProcesses >= 1 && (
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Typography>Process 1</Typography>
                </Grid>
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
                <Grid item>
                  <TextField
                    label="d1"
                    className={classes.smallInput}
                    value={process1D}
                    onChange={handleProcess1D}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 2 && (
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Typography>Process 2</Typography>
                </Grid>
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
                <Grid item>
                  <TextField
                    label="d2"
                    className={classes.smallInput}
                    value={process2D}
                    onChange={handleProcess2D}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 3 && (
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Typography>Process 3</Typography>
                </Grid>
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
                <Grid item>
                  <TextField
                    label="d3"
                    className={classes.smallInput}
                    value={process3D}
                    onChange={handleProcess3D}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 4 && (
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Typography>Process 4</Typography>
                </Grid>
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
                <Grid item>
                  <TextField
                    label="d4"
                    className={classes.smallInput}
                    value={process4D}
                    onChange={handleProcess4D}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
          {numProcesses >= 5 && (
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Typography>Process 5</Typography>
                </Grid>
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
                <Grid item>
                  <TextField
                    label="d5"
                    className={classes.smallInput}
                    value={process5D}
                    onChange={handleProcess5D}
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
        {algosRan && (
          <>
            <Grid item>
              {RMSfailed ? (
                <div>RMS failed</div>
              ) : (
                <div>RMS passed, preemptions: {RMSpreemptions}</div>
              )}
              {EDFfailed ? (
                <div>EDF failed</div>
              ) : (
                <div>EDF passed, preemptions: {EDFpreemptions}</div>
              )}
              {LLFfailed ? (
                <div>LLF failed</div>
              ) : (
                <div>LLF passed, preemptions: {LLFpreemptions}</div>
              )}
              {DMSfailed ? (
                <div>DMS failed</div>
              ) : (
                <div>DMS passed, preemptions: {DMSpreemptions}</div>
              )}
            </Grid>
          </>
        )}
      </Grid>
      <Chart
        width={"100%"}
        height={"200px"}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "string", id: "Position" },
            { type: "string", id: "Name" },
            { type: "number", id: "Start" },
            { type: "number", id: "End" },
          ],
          ["RMS", "George Washington", 0, 2000],
          ["RMS", "John Adams", 2000, 3000],
          ["RMS", "George Washington", 3000, 4000],
        ]}
        rootProps={{ "data-testid": "3" }}
      />
    </Container>
  );
}

export default App;
