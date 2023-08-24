function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("sideNav").style.display = "block";
  }
  
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav").style.display = "none";
  }

  const  toDoArray = [];
  const doneArray = [];

  function submit() {
    const toDoTask = document.getElementById("input-box").value;
    document.getElementById("todo-notification").style.display = "none";
    document.getElementById("todo-text").innerHTML = "";
    document.getElementById("input-box").value = "";
    toDoArray.push(toDoTask);
    toDoArray.map((item,index) => {
        document.getElementById("todo-text").innerHTML += `<p>${item}</p>
        <button onclick="moveToDone(${index})">Complete</button>`;
    });
    console.log("", toDoArray);
  }

  function moveToDone(index) {
    document.getElementById("done-notification").style.display = "none";
    doneArray.push(toDoArray[index]);
    toDoArray.splice(index, 1);
    document.getElementById("done-text").innerHTML = "";
    document.getElementById("todo-text").innerHTML = "";
    toDoArray.map((item,index) => {
        document.getElementById("todo-text").innerHTML += `<p>${item}</p>
        <button onclick="moveToDone(${index})">Complete</button>`;
    });
    doneArray.map((item) => {
        document.getElementById("done-text").innerHTML += `<p>${item}</p>`;
    })
    if(toDoArray.length === 0) {
        document.getElementById("todo-notification").style.display = "block";
    }
  }

  function viewDones() {
    document.getElementById("todo").style.display = "none";
  }
  
  function viewAll() {
    document.getElementById("todo").style.display = "block";
    document.getElementById("done").style.display = "block";
  }