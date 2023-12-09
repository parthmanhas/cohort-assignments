/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
