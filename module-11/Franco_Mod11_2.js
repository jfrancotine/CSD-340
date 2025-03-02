let myArray = [];

// Function to add an element to the list
function addElement() {
    const input = document.getElementById('input').value.trim();
    if (input === "") {
        alert("Please enter a task!");
        return;
    }
    myArray.push(input);
    alert(`Added: "${input}" at position ${myArray.length}`);
    document.getElementById('input').value = "";
}

// Function to delete the last item
function deleteLastItem() {
    if (myArray.length === 0) {
        alert("The list is already empty!");
        return;
    }

    const confirmDelete = confirm("Are you sure you want to delete the last item?");
    if (confirmDelete) {
        myArray.pop();
        alert("Last item deleted!");
        displayList();
    }
}

// Function to delete a specific item by number
function deleteSpecificItem() {
    if (myArray.length === 0) {
        alert("The list is empty!");
        return;
    }

    const itemNumber = prompt(`Enter the number of the item to delete (1-${myArray.length}):`);
    const index = parseInt(itemNumber) - 1;

    if (isNaN(index) || index < 0 || index >= myArray.length) {
        alert("Invalid number! Please enter a valid item number.");
        return;
    }

    const confirmDelete = confirm(`Delete "${myArray[index]}"?`);
    if (confirmDelete) {
        myArray.splice(index, 1); 
        displayList();
    }
}

// Function to display the list
function displayList() {
    const displayArea = document.getElementById('display-area');
    displayArea.innerHTML = "<h2>To-Do List</h2>"; 

    if (myArray.length === 0) {
        displayArea.innerHTML += "<p>The list is empty!</p>";
        return;
    }

    const list = document.createElement("ul");

    myArray.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        list.appendChild(listItem);
    });

    displayArea.appendChild(list);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('add-btn').addEventListener('click', addElement);
    document.getElementById('del-btn').addEventListener('click', deleteLastItem);
    document.getElementById('del-specific-btn').addEventListener('click', deleteSpecificItem);
    document.getElementById('display-btn').addEventListener('click', displayList);
});
