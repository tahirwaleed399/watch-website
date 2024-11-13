// This is the variable that will keep track of total bill
let totalBill = 0;

// This function runs when someone clicks "Add to Cart" button
function addToCart(watchName, price) {
    // Add the price to total bill
    totalBill = totalBill + price;
    
    // Show a message to user
    alert("Added " + watchName + " to cart!\nYour current bill is: $" + totalBill);
}

// This code runs when page loads
window.onload = function() {
    // Reset the bill to 0
    totalBill = 0;
}