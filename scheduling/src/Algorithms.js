export function LLF(itemsIn, time) {
  var items = JSON.parse(JSON.stringify(itemsIn));
  var intervals = [];
  var preemptions = 0;

  console.log("* LLF start *");
  // shortest deadline first for certain amount of time
  var y = 1;
  var indexOfShortest = -1;
  for (y; y <= time; y++) {

    // find shortest difference of computation left and deadline of the array that has computation left and gives back the index of the items array that it is at
    // it should do this for every time period to determine which of the tasks should run for one time period
    var i = 0;
    var shortest = time + 1;
    var noneToRun = true;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].di - items[i].cli < shortest) { // if its deadline - computation left is shorter
          shortest = items[i].di - items[i].cli;
          if (i !== indexOfShortest && y !== 1) {
            if ((items[indexOfShortest].ci !== items[indexOfShortest].cli) && (items[indexOfShortest].cli !== 0)) {
              preemptions++;
              console.log("Preempted here");
            }
          }
          indexOfShortest = i;
        }
      }
    }

    if (!noneToRun) { // there was a task to run
      // found the closest deadline so put it in the interval
      intervals.push(indexOfShortest);
      console.log("At time " + y + " it is task" + (indexOfShortest + 1));
      // take one computation time from it
      items[indexOfShortest].cli--;
    }
    else {
      intervals.push(-1); // -1 will symbolize no task running at this time
      console.log("At time " + y + " there is no task");
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].di === y) {
        console.log("deadline equals time");
        console.log(items[x]);
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computat ion
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
        else {
          // the task finished computation before passing its deadline
          // set the new remaining computation time and deadline
          items[x].cli = items[x].ci;
          items[x].di = items[x].di + items[x].pi;
        }
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* LLF end *");
  return { passed: true, intervals: intervals, preemptions: preemptions };
};

export function EDF(itemsIn, time) {
  var items = JSON.parse(JSON.stringify(itemsIn));
  var intervals = [];
  var preemptions = 0;

  console.log("* EDF start *");
  // shortest deadline first for certain amount of time
  var y = 1;
  var indexOfShortest = -1;
  for (y; y <= time; y++) {

    // find shortest di of the array that has computation left and gives back the index of the items array that it is at
    // it should do this for every time period to determine which of the tasks should run for one time period
    var i = 0;
    var shortest = time + 1;
    var noneToRun = true;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].di < shortest) { // if its deadline is shorter
          shortest = items[i].di;
          if (i !== indexOfShortest && y !== 1) {
            if ((items[indexOfShortest].ci !== items[indexOfShortest].cli) && (items[indexOfShortest].cli !== 0)) {
              preemptions++;
              console.log("Preempted here");
            }
          }
          indexOfShortest = i;
        }
      }
    }

    if (!noneToRun) { // there was a task to run
      // found the closest deadline so put it in the interval
      intervals.push(indexOfShortest);
      console.log("At time " + y + " it is task" + (indexOfShortest + 1));
      // take one computation time from it
      items[indexOfShortest].cli--;
    }
    else {
      intervals.push(-1); // -1 will symbolize no task running at this time
      console.log("At time " + y + " there is no task");
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].di === y) {
        console.log("deadline equals time");
        console.log(items[x]);
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computat ion
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
        else {
          // the task finished computation before passing its deadline
          // set the new remaining computation time and deadline
          items[x].cli = items[x].ci;
          items[x].di = items[x].di + items[x].pi;
        }
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* EDF end *");

  return { passed: true, intervals: intervals, preemptions: preemptions };
};

export function RMS(itemsIn, time) {
  var items = JSON.parse(JSON.stringify(itemsIn));
  var intervals = [];
  var preemptions = 0;

  console.log("* RMS start *");
  // shortest deadline first for certain amount of time
  var y = 1;
  var indexOfShortest = -1;

  // a preemption is when one task interrupts another before it gets completed
  // if the indexOfShortest changes and that previous task doesn't have ci === cli or no computation left then it is interrupted

  for (y; y <= time; y++) {

    // find shortest pi of the array that has computation left and gives back the index of the items array that it is at
    // it should do this for every time period to determine which of the tasks should run for one time period
    var i = 0;
    var shortest = time + 1;
    var noneToRun = true;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].pi < shortest) { // if its deadline is shorter
          shortest = items[i].pi;
          if (i !== indexOfShortest && y !== 1) {
            if ((items[indexOfShortest].ci !== items[indexOfShortest].cli) && (items[indexOfShortest].cli !== 0)) {
              preemptions++;
              console.log("Preempted here");
            }
          }
          indexOfShortest = i;
        }
      }
    }

    if (!noneToRun) { // there was a task to run
      // found the closest deadline so put it in the interval
      intervals.push(indexOfShortest);
      console.log("At time " + y + " it is task" + (indexOfShortest + 1));
      // take one computation time from it
      items[indexOfShortest].cli--;
    }
    else {
      intervals.push(-1); // -1 will symbolize no task running at this time
      console.log("At time " + y + " there is no task");
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].di === y) {
        console.log("deadline equals time");
        console.log(items[x]);
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computat ion
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
        else {
          // the task finished computation before passing its deadline
          // set the new remaining computation time and deadline
          items[x].cli = items[x].ci;
          items[x].di = items[x].di + items[x].pi;
        }
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* RMS end *");

  return { passed: true, intervals: intervals, preemptions: preemptions };
}

export function DMS(itemsIn, time) {
  var items = JSON.parse(JSON.stringify(itemsIn));
  var intervals = [];
  var preemptions = 0;

  console.log("* DMS start *");
  // shortest deadline first for certain amount of time
  var y = 1;
  var indexOfShortest = -1;
  for (y; y <= time; y++) {

    // find shortest d of the array that has computation left and gives back the index of the items array that it is at
    // it should do this for every time period to determine which of the tasks should run for one time period
    var i = 0;
    var shortest = time + 1;
    var noneToRun = true;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].d < shortest) { // if its deadline is shorter
          shortest = items[i].d;
          if (i !== indexOfShortest && y !== 1) {
            if ((items[indexOfShortest].ci !== items[indexOfShortest].cli) && (items[indexOfShortest].cli !== 0)) {
              preemptions++;
              console.log("Preempted here");
            }
          }
          indexOfShortest = i;
        }
      }
    }

    if (!noneToRun) { // there was a task to run
      // found the closest deadline so put it in the interval
      intervals.push(indexOfShortest);
      console.log("At time " + y + " it is task" + (indexOfShortest + 1));
      // take one computation time from it
      items[indexOfShortest].cli--;
    }
    else {
      intervals.push(-1); // -1 will symbolize no task running at this time
      console.log("At time " + y + " there is no task");
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].di === y) {
        console.log("deadline equals time");
        console.log(items[x]);
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computat ion
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
        else {
          // the task finished computation before passing its deadline
          // set the new remaining computation time and deadline
          items[x].cli = items[x].ci;
          items[x].di = items[x].di + items[x].pi;
          items[x].d = items[x].d + items[x].dc;
        }
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* DMS end *");

  return { passed: true, intervals: intervals, preemptions: preemptions };
};