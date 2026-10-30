function navigate(commands) {
  const path = ["Home"];
  let index = 0;
  for (let i = 0; i < commands.length; i++) {
    let action = commands[i].split(" ");
    let page = "";
    if (action.length > 1) {
      if (action[0] === "Visit") {
        path.splice(index + 1);
        index++;
        for (let j = 1; j < action.length; j++) {
          page += j + 1 < action.length ? action[j] + " " : action[j];
        }
        path.push(page);
      }
    } else {
      if (action[0] == "Back") index -= index > 0 ? 1 : 0;
      else if (action[0] == "Forward") index += index + 1 >= path.length ? 0 : 1;
    }
  }
  return path[index];
}

console.log(navigate(["Visit About Us", "Back", "Forward"])); // "About Us"
console.log(navigate(["Forward"])); // "Home"
console.log(navigate(["Back"])); // "Home"
console.log(navigate(["Visit About Us", "Visit Gallery"])); // "Gallery"
console.log(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])); // "Home"
console.log(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"])); // "Contact"
console.log(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"])); // "Visit Us"
