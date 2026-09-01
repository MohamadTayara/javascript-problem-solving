const manifestTest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
};

const manifestTest2 = {
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true,
};

function normalizeUnits(manifest) {
  const manifestCopy = manifest;
  if (manifestCopy.unit == "kg") return manifestCopy;

  manifestCopy.unit = "kg";
  manifestCopy.weight = manifestCopy.weight * 0.45;
  return manifestCopy;
}

function validateManifest(manifest) {
  const errors = {};

  if (!Object.hasOwn(manifest, "containerId")) errors.containerId = "Missing";
  else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0)
    errors.containerId = "Invalid";

  if (!Object.hasOwn(manifest, "destination")) errors.destination = "Missing";
  else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  )
    errors.destination = "Invalid";
  if (!Object.hasOwn(manifest, "weight")) errors.weight = "Missing";
  else if (
    manifest.weight <= 0 ||
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight)
  )
    errors.weight = "Invalid";
  if (!Object.hasOwn(manifest, "unit")) errors.unit = "Missing";
  else if (manifest.unit !== "lb" || manifest.unit !== "kg")
    errors.unit = "Invalid";
  if (!Object.hasOwn(manifest, "hazmat")) errors.hazmat = "Missing";
  else if (typeof manifest.hazmat !== "boolean") errors.hazmat = "Invalid";

  return errors;
}

console.log(normalizeUnits(manifestTest));
console.log(normalizeUnits(manifestTest2));
