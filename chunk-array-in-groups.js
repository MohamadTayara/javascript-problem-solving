function chunkArrayInGroups(arr, num){
  const chunk = [];
  for(let i = 0; i < arr.length; i += num)
    chunk.push(arr.slice(i, i + num));   
  return chunk;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 
// [["a", "b"], ["c", "d"]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); 
// [[0, 1, 2], [3, 4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); 
// [[0, 1, 2, 3], [4, 5]]

console.log(chunkArrayInGroups([1, 2, 3], 1)); 
// [[1], [2], [3]]

console.log(chunkArrayInGroups([1, 2, 3], 5)); 
// [[1, 2, 3]]

console.log(chunkArrayInGroups([], 2)); 
// []