/*
function renderHTML
1.renderHTML จากข้อมูลใน tasks
2.ทำให้ปุ่ม delete ลบข้อมูลได้
  - ลบข้อมูลใน tasks
  - renderHTML ซ้ำ

function addToDo
1.เมื่อ Enter เอาข้อมูลจากใน input มาใส่ใน task
2.renderHTML

ทำให้ checkbox ยังอยู่
1.หลังกด enter, 
  - save checkbox
2.
*/
let tasks = [];
let checkboxList = [];

renderHTML();

function renderHTML() {
  let tasksHTML = '';

  //renderHTML จากข้อมูลใน tasks
  tasks.forEach((task) => {
    tasksHTML += `
      <div class="task-${task}-js container-checkbox">
        <div>
          <input class="checkbox-js" type="checkbox" name="list1">
          <label for="list1">${task}</label>
        </div>  
        <button data-task="${task}" class="delete-button delete-button-js">Delete</button>
      </div>
      `
  });

  document.querySelector(".container-checkbox-all").innerHTML = tasksHTML;

  //ทำให้ปุ่ม delete ลบข้อมูลได้
  document.querySelectorAll(".delete-button-js")
  .forEach((button, index) => {
    button.addEventListener("click", () => {
      saveCheckboxDelete(index)
      const taskData = button.dataset.task;
    
      let newTasks = [];
      tasks.forEach((task) => {
        if (task !== taskData) {
          newTasks.push(task);
        }
      });

      tasks = newTasks;
      console.log(tasks);

      renderHTML();
      addCheckbox();
    });
  });


};

//เมื่อ Enter เอาข้อมูลจากใน input มาใส่ใน task
document.addEventListener("keypress", (event) => {
  key = event.key;
  if (key === "Enter") {
    addToDo();
  }

});

function addToDo() {
  const task = document.querySelector(".your-task-js").value;
  if (task) {
    saveCheckboxAdd();
    tasks.push(task);

    //Reset new task input
    document.querySelector(".your-task-js").value = '';
    renderHTML();
    addCheckbox();
  };
};


//Save checkbox Add
function saveCheckboxAdd() {
  checkboxList = [];
  document.querySelectorAll(".checkbox-js")
  .forEach((checkbox) => {
    checkboxList.push(checkbox.checked);
  });
  checkboxList.push(false);
  
  console.log(checkboxList);
};

function addCheckbox() {
  for (let i=0; i<checkboxList.length; i++) {
    document.querySelectorAll(".checkbox-js")[i].checked = checkboxList[i];
  };
};

//Save checkbox Delete
function saveCheckboxDelete(index) {
  checkboxList = [];
  document.querySelectorAll(".checkbox-js")
  .forEach((checkbox) => {
    checkboxList.push(checkbox.checked);
  });
  //ลบตำแหน่งที่ลบออก
  checkboxList.splice(index,1);

  console.log(checkboxList);
};






/*
let tasks = ["asfa", "sfaf"];

renderHTML();

function renderHTML() {
  let tasksHTML = '';

  //renderHTML จากข้อมูลใน tasks
  tasks.forEach((task) => {
    tasksHTML += `
      <div class="task-${task}-js container-checkbox">
        <div>
          <input class="checkbox-js" type="checkbox" name="list1">
          <label for="list1">${task}</label>
        </div>  
        <button data-task="${task}" class="delete-button delete-button-js">Delete</button>
      </div>
      `
  });

  document.querySelector(".container-checkbox-all").innerHTML = tasksHTML;

  //ทำให้ปุ่ม delete ลบข้อมูลได้

  document.querySelectorAll(".delete-button-js")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const taskData = button.dataset.task;
    
      let newTasks = [];
      tasks.forEach((task) => {
        if (task !== taskData) {
          newTasks.push(task);
        }
      });

      tasks = newTasks;
      console.log(tasks);

      renderHTML();
    });
  });
};

//เมื่อ Enter เอาข้อมูลจากใน input มาใส่ใน task
document.addEventListener("keypress", (event) => {
  key = event.key;
    
  if (key === "Enter") {
    addToDo();
  }
});

function addToDo() {
  const task = document.querySelector(".your-task-js").value;
  if (task) {
    tasks.push(task);

    //Reset new task input
    document.querySelector(".your-task-js").value = '';
    renderHTML();
  };
};
*/










/*
let tasks = [];

let tasksHTML = ""; 

renderTask();

function renderTask () {

  document.addEventListener("keypress", (event) => {
    key = event.key;
    
    if (key === "Enter") {
      addTask();
      generateHTML(tasks);
    }
    console.log(tasks);

  });

  document.querySelectorAll(".delete-button-js")
    .forEach((button) => {
      button.addEventListener("click", () => {
        console.log("hello");
        deleteTask(button);
        renderTask();
      });
    });
};

function addTask() {
  const task = document.querySelector(".your-task-js").value;
  tasks.push(task);

  //Reset new task input
  document.querySelector(".your-task-js").value = '';
}

function generateHTML(tasks) {
  tasks.forEach((atask) => {
    tasksHTML += `
      <div class="task-${atask}-js container-checkbox">
        <div>
          <input class="checkbox-js" type="checkbox" name="list1">
          <label for="list1">${atask}</label>
        </div>  
        <button data-task="${atask}" class="delete-button delete-button-js">Delete</button>
      </div>
      `
      document.querySelector(".container-checkbox-all").innerHTML = tasksHTML;
  });
  tasksHTML = '';

};

function deleteTask(button) {
  const taskData = button.dataset.task;
 
  let newTasks = [];
  tasks.forEach((task) => {
    if (task !== taskData) {
      newTasks.push(task);
    }
  });

  tasks = newTasks;
  console.log(tasks);
  generateHTML(tasks);
}
*/












/*
let tasks = [];

let tasksHTML = '';

let checkboxList = [];

//Add a task
document.addEventListener("keypress", (event) => {
  const key = event.key;
  
  if (key === "Enter") {

    //push new task to list
    const task = document.querySelector(".your-task-js").value;
    if (task) {
      tasks.push(task);
      document.querySelector(".your-task-js").value = "";
    
      //save checkbox
      checkboxList = [];
      saveCheckbox();

      //generate HTML
      generateHTML(tasks);
      document.querySelector(".container-checkbox-all").innerHTML = tasksHTML;
      tasksHTML = '';

      //add checkbox
      addCheckbox();
    }

  };

  //Delete a task
  deleteTask();


});


//Function

function generateHTML(tasks) {
  tasks.forEach((atask) => {
    tasksHTML += `
      <div class="task-${atask}-js container-checkbox">
        <div>
          <input class="checkbox-js" type="checkbox" name="list1">
          <label for="list1">${atask}</label>
        </div>  
        <button data-task="${atask}" class="delete-button delete-button-js">Delete</button>
      </div>
      `
  });
};

function saveCheckbox() {
  document.querySelectorAll(".checkbox-js")
  .forEach((checkbox) => {
    checkboxList.push(checkbox.checked);
  })
  checkboxList.push(false);
  
  
  console.log(checkboxList);
}

function addCheckbox() {
  for (let i=0; i<checkboxList.length; i++) {
    document.querySelectorAll(".checkbox-js")[i].checked = checkboxList[i];
  }
}

function deleteTask() {
  document.querySelectorAll(".delete-button-js")
  .forEach((button) => {
    button.addEventListener("click", () => {
      console.log("hello");
      const taskData = button.dataset.task;

      console.log(taskData);
      // document.querySelector(`.task-${taskData}-js`).remove();
      document.querySelector(".container-checkbox-all").innerHTML = "";
      //Update task
      const newTasks = [];
      tasks.forEach((task) => {
        console.log(task);
        if (task !== taskData) {
          newTasks.push(task);
        }
      });
      
      console.log(newTasks);

      tasks = newTasks;
      
      generateHTML(tasks);
      document.querySelector(".container-checkbox-all").innerHTML = tasksHTML;
      tasksHTML = '';

    });
  });
};

*/