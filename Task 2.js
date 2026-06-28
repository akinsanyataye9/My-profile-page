//Store a contact as an array of Object
const contactBook = [];

// Function to add a new contact to the array of objects
function addContact(name, phone, email) {
  contactBook.push({name, phone, email});
}

// Function to find and return a contact by name
function findContact(name) {
  return contactBook.find(contact => contact.name === name);
}

// Adding 5+ contacts
console.log("\n📝 Adding contacts...");
addContact("Taiwo Ade", "08012345678", "taiwoade@gmail.com");
addContact("Michael Chen", "+1-555-5678", "mchen@email.com");
addContact("Emma Wilson", "+44-20-7946-0123", "emma.w@email.co.uk");
addContact("David Rodriguez", "+1-555-9012", "david.r@email.com");
addContact("Lisa Tanaka", "+81-3-1234-5678", "lisa.t@email.jp");
addContact("James O'Brien", "+353-1-234-5678", "james.ob@email.ie");

// Display all contacts
console.log("\nAll Contacts:");
console.log(contactBook);

// Search for a contact by name
console.log("\n🔍 Searching for contact...");
const foundContact = findContact('Taiwo Ade');
console.log("Found Contact:", foundContact);