/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();

  for (let transaction of transactions) {
    const category = transaction.category;
    if (map.has(category)) map.set(category, map.get(category) + transaction.price);
    else map.set(category, transaction.price);
  }

  return Array.from(map).map(resultSet => ({ category: resultSet[0], totalSpent: resultSet[1] }));
}

module.exports = calculateTotalSpentByCategory;
