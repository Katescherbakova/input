function changeBackground() {
    var input = document.getElementById("inputText").value;
    if (input === "") {
      alert("Помилка: введіть текст!");
    } else if (input.includes("hello")) {
      document.body.style.backgroundColor = "lightgreen";
    } else if (input.includes("world")) {
      document.body.style.backgroundColor = "lightblue";
    } else {
      document.body.style.backgroundColor = "red";
    }
  }