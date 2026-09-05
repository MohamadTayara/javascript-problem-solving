function normalizeUnits(manifest) {
  const manifestCopy = { ...manifest };

  if (manifestCopy.unit === "kg") {
    return manifestCopy;
  }

  manifestCopy.unit = "kg";
  manifestCopy.weight *= 0.45;

  return manifestCopy;
}

function validateManifest(manifest) {
  const errors = {};

  if (!Object.hasOwn(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!Object.hasOwn(manifest, "unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    const manifestNormalized = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${manifestNormalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

// --------------------------------------------------
// Manual Tests
// --------------------------------------------------

console.log("\n--- Test 1: Valid manifest already in kilograms ---");

const validKgManifest = {
  containerId: 1,
  destination: "Santa Cruz",
  weight: 304,
  unit: "kg",
  hazmat: false,
};

processManifest(validKgManifest);

// Expected:
// Validation success: 1
// Total weight: 304 kg

console.log("\n--- Test 2: Valid manifest requiring conversion ---");

const validLbManifest = {
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false,
};

processManifest(validLbManifest);

// Expected:
// Validation success: 55
// Total weight: 180 kg

console.log("\n--- Test 3: Invalid values ---");

const invalidManifest = {
  containerId: -88,
  destination: "Soledad",
  weight: NaN,
};

processManifest(invalidManifest);

// Expected:
// Validation error: -88
// {
//   containerId: "Invalid",
//   weight: "Invalid",
//   unit: "Missing",
//   hazmat: "Missing"
// }

console.log("\n--- Test 4: Missing all required properties ---");

const emptyManifest = {};

processManifest(emptyManifest);

// Expected:
// Validation error: undefined
// {
//   containerId: "Missing",
//   destination: "Missing",
//   weight: "Missing",
//   unit: "Missing",
//   hazmat: "Missing"
// }

console.log("\n--- Test 5: Multiple invalid values ---");

const multipleInvalidManifest = {
  containerId: 3.5,
  destination: "   ",
  weight: -20,
  unit: "tons",
  hazmat: "false",
};

processManifest(multipleInvalidManifest);

// Expected:
// Validation error: 3.5
// {
//   containerId: "Invalid",
//   destination: "Invalid",
//   weight: "Invalid",
//   unit: "Invalid",
//   hazmat: "Invalid"
// }

console.log("\n--- Test 6: Verify normalizeUnits does not mutate input ---");

const originalManifest = {
  containerId: 68,
  destination: "Salinas",
  weight: 100,
  unit: "lb",
  hazmat: true,
};

const normalizedManifest = normalizeUnits(originalManifest);

console.log("Original:", originalManifest);
console.log("Normalized:", normalizedManifest);

// Expected:
// Original weight remains 100 lb.
// Normalized weight becomes 45 kg.

console.log("\n--- Test 7: Verify validateManifest does not mutate input ---");

const manifestBeforeValidation = {
  containerId: 10,
  destination: "Monterey",
  weight: 250,
  unit: "kg",
  hazmat: false,
};

const snapshot = { ...manifestBeforeValidation };

validateManifest(manifestBeforeValidation);

console.log(
  "Manifest unchanged:",
  JSON.stringify(manifestBeforeValidation) === JSON.stringify(snapshot),
);

// Expected:
// true
