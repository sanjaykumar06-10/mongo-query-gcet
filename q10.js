db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $limit: 3 },
  { $project: { _id: 0, name: 1, salary: 1 } }
]);
//
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      monthlySalary: "$salary",
      annualSalary: { $multiply: ["$salary", 12] }
    }
  }
]);
//
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      age: 1,
      band: {
        $cond: { if: { $gt: ["$age", 40] }, then: "Band A", else: "Band B" }
      }
    }
  }
]);
