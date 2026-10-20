const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }
  if (config.fault === true) {
    console.log("Faulted phase!");
    return;
  }
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < config.phases.length; j++) {
      if (config.phases[j].duration <= 0) {
        console.log("Invalid phase detected");
        continue;
      }
      console.log(
        `Switching to ${config.phases[j].color} for ${config.phases[j].duration} s`,
      );
    }
  }
}

function generateTimeline(config, cycles) {
  let duration = 0;
  let timestamps = [];

  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < config.phases.length; j++) {
      duration += config.phases[j].duration;
      timestamps.push(duration);
    }
  }

  return timestamps;
}

// Test 1: Normal sequence (2 cycles)
console.log("Test 1: Normal sequence");
runSequence(config1, 2);

// Test 2: Invalid phase duration
console.log("\nTest 2: Invalid duration");
runSequence(config2, 1);

// Test 3: Fault detected
console.log("\nTest 3: Fault");
runSequence(config3, 1);

// Test 4: Empty phases
console.log("\nTest 4: Empty phases");
runSequence(config4, 1);

// Test 5: Generate timeline
console.log("\nTest 5: Timeline");
console.log(generateTimeline(config1, 2));
// Expected: [5, 7, 11, 16, 18, 22]