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

function calculateTotalSpentByCategory(transactions) 
{
	let lst = [];
	for(let i=0; i<transactions.length; i++)
	{
		let cat_exists = false;
		let cat = transactions[i]["category"]
		for(let j=0; j<lst.length; j++)
		{
			if(lst[j]["category"] === cat)
			{
				cat_exists = true;
				lst[j]["totalSpent"] += transactions[i]["price"];
				break;
			}
		}
		if(!cat_exists)
		{
			let price = transactions[i]["price"];
			ele = {
			category: cat,
			totalSpent: price,
			}
			lst.push(ele)
		}
	}
  	return lst;
}

module.exports = calculateTotalSpentByCategory;
