db.employees.updateOne(
  { name: "John Smith" },
  { $set: { email: "john@outlook.com" } }
);

db.employees.find().sort({ salary: -1 }).limit(3);

db.employees.updateMany(
  {},
  { $inc: { salary: 1000 } }
);

db.employees.insertOne({
  name: "Sarah Lee",
  email: "sarah@admin.com",
  department: "admin",
  salary: 2000,
  location: ["CA"],
  date: Date()
});

db.employees.deleteMany({ department: "admin" });

