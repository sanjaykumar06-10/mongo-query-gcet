// Insert a single document
db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

// Insert multiple documents
db.employees.insertMany([
  {
    name: "John Smith",
    email: "john@gmail.com",
    department: "IT",
    salary: 1456,
    location: ["FL", "OH"]
  },
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"]
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"]
  }
]);

// View all documents
db.employees.find();
