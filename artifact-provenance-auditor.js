const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

console.log(collection[101].title);
console.log(collection[101].curator.name);

function getArtifactTitle(id) {
  const artifact = collection[id];
  return artifact ? artifact.title : "Artifact not found";
}

console.log(getArtifactTitle(102));

function addTag(id, tag) {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}

addTag(101, "royal");
console.log(collection[101].tags);

function moveArtifact(id, gallery, year) {
  const artifact = collection[id];
  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}

moveArtifact(102, "Hall B", 2026);
console.log(collection[102].locations);

function toggleDisplayStatus(id) {
  const artifact = collection[id];
  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
}

console.log(collection[102].onDisplay);
toggleDisplayStatus(102);
console.log(collection[102].onDisplay);

function updateCurator(id, name) {
  const artifact = collection[id];
  if (artifact) {
    artifact.curator.name = name;
  }
}

updateCurator(101, "Fran Sinclair");
console.log(collection[101].curator.name);

function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
  const currentLocation = artifact.locations[artifact.locations.length - 1];
  const summary =  `${artifact.title} \nCategory: ${artifact.category} \nCurator: ${artifact.curator.name} \nCurrent Gallery: ${currentLocation.gallery} \nOn Display: ${artifact.onDisplay}`;
  return summary;
}

console.log(buildSummary(101));

// Test 1: Look up an artifact
console.log("Test 1 - Get title:", getArtifactTitle(101));

// Test 2: Handle an invalid artifact ID
console.log("Test 2 - Invalid ID:", getArtifactTitle(999));

// Test 3: Add a tag
addTag(101, "royal");
console.log("Test 3 - Add tag:", collection[101].tags);

// Test 4: Move an artifact
moveArtifact(102, "Hall B", 2026);
console.log("Test 4 - Move artifact:", collection[102].locations);

// Test 5: Build a summary
console.log("Test 5 - Summary:\n" + buildSummary(101));