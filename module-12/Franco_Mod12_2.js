let books = [
    "El Evangelio by Ray Ortlund",
    "Financial Peace by Dave Ramsey",
    "Fighting Shadows by Jon Tyson",
    "Tú Eres Teólogo by Jen Wilkin",
    "Sé Lider by Paul David Tripp",
    "El Hombre Completo by Larry Titus",
    "It Will Cost You Everything by Steven Lawson",
    "Creature of the Word by Matt Chandler",
    "Spiritual Disciplines for the Christian Life by Donald Whitney",
    "The God Ask by Steve Shadrach"
];
  function displayTopToBottom() {
    let sortedBooks = books.slice();
    let bookList = document.querySelector("ol");
    bookList.innerHTML = "";
    for (let i = 0; i < sortedBooks.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = sortedBooks[i];
      bookList.appendChild(listItem);
      if (document.querySelector("#bottom-to-top").classList.contains("active")) {
        listItem.value = 10 - i;
      } else {
        listItem.value = i + 1;
      }
    }
  }
  
  function displayBottomToTop() {
    let sortedBooks = books.slice();
    sortedBooks.reverse();
    let bookList = document.querySelector("ol");
    bookList.innerHTML = "";
    for (let i = 0; i < sortedBooks.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = sortedBooks[i];
      bookList.appendChild(listItem);
      if (document.querySelector("#bottom-to-top").classList.contains("active")) {
        listItem.value = 10 - i;
      } else {
        listItem.value = i + 1;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#top-to-bottom").addEventListener("click", function() {
      this.classList.add("active");
      document.querySelector("#bottom-to-top").classList.remove("active");
      displayTopToBottom();
    });
    document.querySelector("#bottom-to-top").addEventListener("click", function() {
      this.classList.add("active");
      document.querySelector("#top-to-bottom").classList.remove("active");
      displayBottomToTop();
    });
    displayTopToBottom();
  });