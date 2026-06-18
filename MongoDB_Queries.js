// 1. Total Revenue Generated

db.sales_data.aggregate([
{
$group:{
_id:null,
Total_Revenue:{ $sum:"$Total_Sales" }
}
}
])

Result:
₹139,399,439.65

---

// 2. Top 5 Products by Revenue

db.sales_data.aggregate([
{
$group:{
_id:"$Product",
Revenue:{ $sum:"$Total_Sales" }
}
},
{$sort:{Revenue:-1}},
{$limit:5}
])

Result:

Laptop  -> ₹25,443,008.51
Mobile  -> ₹25,335,573.19
Book    -> ₹25,031,689.40
Rice    -> ₹22,231,711.28
Chair   -> ₹21,521,561.48

---

// 3. Revenue by Category

db.sales_data.aggregate([
{
$group:{
_id:"$Category",
Revenue:{ $sum:"$Total_Sales" }
}
},
{$sort:{Revenue:-1}}
])

Result:

Electronics -> ₹50.78M
Education   -> ₹25.03M
Grocery     -> ₹22.23M
Furniture   -> ₹21.52M
Fashion     -> ₹19.84M

---

// 4. Top Customers by Spending

db.sales_data.aggregate([
{
$group:{
_id:"$Customer_Name",
Total_Spent:{ $sum:"$Total_Sales" }
}
},
{$sort:{Total_Spent:-1}},
{$limit:10}
])

Top Customer:

Customer_335 -> ₹1,684,832.52

---

// 5. Monthly Revenue Trend

db.sales_data.aggregate([
{
$group:{
_id:{
year:{$year:"$Order_Date"},
month:{$month:"$Order_Date"}
},
Revenue:{ $sum:"$Total_Sales" }
}
}
])

Highest Month:

March 2025 -> ₹13,059,899.94

---

// 6. Revenue by Gender

db.sales_data.aggregate([
{
$group:{
_id:"$Gender",
Revenue:{ $sum:"$Total_Sales" }
}
}
])

Result:

Male   -> ₹72.46M
Female -> ₹66.94M

---

// 7. Revenue by City

db.sales_data.aggregate([
{
$group:{
_id:"$City",
Revenue:{ $sum:"$Total_Sales" }
}
},
{$sort:{Revenue:-1}}
])

Result:

Patna      -> ₹20.83M
Kolkata    -> ₹18.88M
Bengaluru  -> ₹18.77M
Mumbai     -> ₹18.76M
Hyderabad  -> ₹17.17M
