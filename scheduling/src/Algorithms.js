export function RMS(itemsIn, time) {
  var items = JSON.parse(JSON.stringify(itemsIn));
  var intervals = [];
  var preemptions = 0;

  console.log("* RMS start *");
  // shortest deadline first for certain amount of time
  var y = 1;
  var indexOfShortest = -1;
  for (y; y <= time; y++) {

    // find shortest d of the array that has computation left and gives back the index of the items array that it is at
    // it should do this for every time period to determine which of the tasks should run for one time period
    var i = 0;
    var shortest = time + 1;
    var noneToRun = true;
    var prevIndexOfShortest = indexOfShortest;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].pi < shortest) { // if its dynamic period is shorter
          shortest = items[i].pi;
          indexOfShortest = i;
        }
      }
    }

    if (prevIndexOfShortest !== indexOfShortest && y !== 1 && indexOfShortest !== -1 && prevIndexOfShortest !== -1) { // if the task changes and computation time left on the previous task isn't 0
      if ((items[prevIndexOfShortest].ci !== items[prevIndexOfShortest].cli) && (items[prevIndexOfShortest].cli !== 0)) {
        preemptions++;
        console.log("Preempted here");
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
      indexOfShortest = -1;
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].d === y) {
        // check if it failed to compute witin its deadline time not period
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computation
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
      }
      if (items[x].di === y) {
        // checks for period time and resets period and new deadline
        console.log("deadline equals time");
        console.log(items[x]);

        // the task finished computation before passing its deadline
        // set the new remaining computation time and deadline
        items[x].cli = items[x].ci;
        items[x].d = items[x].di + items[x].dc; // last period end plus the deadline time is new deadline
        items[x].di = items[x].di + items[x].pi; // new deadline is plus period
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* RMS end *");

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

    // find shortest d of the array that has computation left and gives back the index of the items array that it is at
    // it should do this for every time period to determine which of the tasks should run for one time period
    var i = 0;
    var shortest = time + 1;
    var noneToRun = true;
    var prevIndexOfShortest = indexOfShortest;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].d < shortest) { // if its dynamic deadline is shorter
          shortest = items[i].d;
          indexOfShortest = i;
        }
      }
    }

    if (prevIndexOfShortest !== indexOfShortest && y !== 1 && indexOfShortest !== -1 && prevIndexOfShortest !== -1) { // if the task changes and computation time left on the previous task isn't 0
      if ((items[prevIndexOfShortest].ci !== items[prevIndexOfShortest].cli) && (items[prevIndexOfShortest].cli !== 0)) {
        preemptions++;
        console.log("Preempted here");
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
      indexOfShortest = -1;
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].d === y) {
        // check if it failed to compute witin its deadline time not period
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computation
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
      }
      if (items[x].di === y) {
        // checks for period time and resets period and new deadline
        console.log("deadline equals time");
        console.log(items[x]);

        // the task finished computation before passing its deadline
        // set the new remaining computation time and deadline
        items[x].cli = items[x].ci;
        items[x].d = items[x].di + items[x].dc; // last period end plus the deadline time is new deadline
        items[x].di = items[x].di + items[x].pi; // new deadline is plus period
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* EDF end *");

  return { passed: true, intervals: intervals, preemptions: preemptions };
};

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
    var prevIndexOfShortest = indexOfShortest;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].dc < shortest) { // if its static deadline is shorter
          shortest = items[i].dc;
          indexOfShortest = i;
        }
      }
    }

    if (prevIndexOfShortest !== indexOfShortest && y !== 1 && indexOfShortest !== -1 && prevIndexOfShortest !== -1) { // if the task changes and computation time left on the previous task isn't 0
      if ((items[prevIndexOfShortest].ci !== items[prevIndexOfShortest].cli) && (items[prevIndexOfShortest].cli !== 0)) {
        preemptions++;
        console.log("Preempted here");
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
      indexOfShortest = -1;
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].d === y) {
        // check if it failed to compute witin its deadline time not period
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computation
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
      }
      if (items[x].di === y) {
        // checks for period time and resets period and new deadline
        console.log("deadline equals time");
        console.log(items[x]);

        // the task finished computation before passing its deadline
        // set the new remaining computation time and deadline
        items[x].cli = items[x].ci;
        items[x].d = items[x].di + items[x].dc; // last period end plus the deadline time is new deadline
        items[x].di = items[x].di + items[x].pi; // new deadline is plus period
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* DMS end *");

  return { passed: true, intervals: intervals, preemptions: preemptions };
};

export function LLF(itemsIn, time) {
  var items = JSON.parse(JSON.stringify(itemsIn));
  var intervals = [];
  var preemptions = 0;

  console.log("* LLF start *");
  // shortest deadline first for certain amount of time
  var y = 1;
  var indexOfShortest = -1;
  for (y; y <= time; y++) {

    // find shortest d of the array that has computation left and gives back the index of the items array that it is at
    // it should do this for every time period to determine which of the tasks should run for one time period
    var i = 0;
    var shortest = time + 1;
    var noneToRun = true;
    var prevIndexOfShortest = indexOfShortest;

    for(i; i < items.length; i++) {
      if (items[i].cli > 0) { // if it has computation left
        noneToRun = false; // there is something to run
        if (items[i].d - items[i].cli < shortest) { // if its dynamic deadline - computation is shorter
          shortest = items[i].d - items[i].cli;
          indexOfShortest = i;
        }
      }
    }

    if (prevIndexOfShortest !== indexOfShortest && y !== 1 && indexOfShortest !== -1 && prevIndexOfShortest !== -1) { // if the task changes and computation time left on the previous task isn't 0
      if ((items[prevIndexOfShortest].ci !== items[prevIndexOfShortest].cli) && (items[prevIndexOfShortest].cli !== 0)) {
        preemptions++;
        console.log("Preempted here");
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
      indexOfShortest = -1;
    }

    var x = 0;
    for(x; x < items.length; x++) {
      if (items[x].d === y) {
        // check if it failed to compute witin its deadline time not period
        if (items[x].cli > 0) {
          // the task passed its deadline without finishing computation
          console.log("failed");
          return { passed: false, intervals: intervals, preemptions: preemptions };
        }
      }
      if (items[x].di === y) {
        // checks for period time and resets period and new deadline
        console.log("deadline equals time");
        console.log(items[x]);

        // the task finished computation before passing its deadline
        // set the new remaining computation time and deadline
        items[x].cli = items[x].ci;
        items[x].d = items[x].di + items[x].dc; // last period end plus the deadline time is new deadline
        items[x].di = items[x].di + items[x].pi; // new deadline is plus period
      }
    };
  }

  console.log(intervals);
  console.log("Preemptions " + preemptions);
  console.log("* LLF end *");

  return { passed: true, intervals: intervals, preemptions: preemptions };
};