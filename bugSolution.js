```javascript
const query = {
  $expr: {
    $and: [
      { $eq: [{ $type: "$field" }, 1] }, // Check if field is a number (type 1)
      { $gt: [{ $toDouble: "$field" }, 10] }
    ]
  }
};
db.collection.find(query);
```