const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value){
  if (value.trim().length === 0)
    delete records[id][prop];
  if (prop !== "tracks" && value.trim().length !== 0)
    records[id][prop] = value;
  if(prop === "tracks" && value.trim().length !== 0 && !Object.hasOwn(records[id], "tracks")){
    records[id]["tracks"] = [];
    records[id]["tracks"].push(value);
  }
    else if(prop === "tracks" && value.trim().length !== 0){
    records[id][prop].push(value);
  }
  return records;
}

// ==========================================
// TEST CASES
// ==========================================

// Test 1: Add a new artist
updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log("Test 1 - Add artist:", recordCollection[5439]);

// Test 2: Update an existing artist
updateRecords(recordCollection, 2548, "artist", "Updated Artist");
console.log("Test 2 - Update artist:", recordCollection[2548]);

// Test 3: Add a track to an existing array
updateRecords(recordCollection, 2468, "tracks", "Purple Rain");
console.log("Test 3 - Add track:", recordCollection[2468]);

// Test 4: Create a missing tracks array
updateRecords(recordCollection, 5439, "tracks", "Dancing Queen");
console.log("Test 4 - Create tracks:", recordCollection[5439]);

// Test 5: Delete a property
updateRecords(recordCollection, 1245, "artist", "");
console.log("Test 5 - Delete artist:", recordCollection[1245]);