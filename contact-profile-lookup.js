let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property){
  for(const contact of contacts){
    if(contact.firstName === name){
      if(Object.hasOwn(contact, property))
        return contact[property];
      else
        return "No such property";
    }
  }
  return "No such contact";
   
}



console.log(Array.isArray(contacts)); // true
console.log(typeof lookUpProfile === "function"); // true
console.log(typeof lookUpProfile("Kristian", "lastName")); // string
console.log(lookUpProfile("Kristian", "lastName")); // Vos
console.log(lookUpProfile("Sherlock", "likes")); // ["Intriguing Cases", "Violin"]
console.log(Array.isArray(lookUpProfile("Harry", "likes"))); // true
console.log(lookUpProfile("Bob", "number")); // No such contact
console.log(lookUpProfile("Bob", "potato")); // No such contact
console.log(lookUpProfile("Akira", "address")); // No such property

const originalContacts = JSON.stringify(contacts);
lookUpProfile("Sherlock", "likes");
console.log(JSON.stringify(contacts) === originalContacts); // true