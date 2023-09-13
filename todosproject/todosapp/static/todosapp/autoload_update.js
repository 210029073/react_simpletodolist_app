const UPDATE_DATA_URL = "https://127.0.0.1:8000/todosapp/todos/update";
let task = null;
async function initialize() {
  if (isPendingTaskAvailable) {
    //parse json data
    let pending_task = JSON.parse(sessionStorage.getItem("pending-task"));
    task = pending_task;
    console.log(pending_task);

    //populate data in the form fields.
    //use dom
    document.querySelector("#title").textContent = pending_task.title;
    document
      .querySelector("#startdate")
      .setAttribute(
        "value",
        String(pending_task.startdate).substring(
          0,
          String(pending_task.startdate).length - 1
        )
      );
    document
      .querySelector("#duedate")
      .setAttribute(
        "value",
        String(pending_task.duedate).substring(
          0,
          String(pending_task.duedate).length - 1
        )
      );
    // submit data via API request using PATCH
  }
}

async function updateRecordsInTextChange() {
  // console.log(document.getElementById("update-task").elements[0].value);

  console.log("Task old");
  console.log(task);
  task.title = document.getElementById("update-task").elements[0].value;
  task.startdate =
    document.getElementById("update-task").elements[1].value + "Z";
  task.duedate = document.getElementById("update-task").elements[2].value + "Z";
  console.log("Task new");
  console.log(task);

  //retrieve csrftoken
  part = document.cookie.split("csrftoken=");
  token = part[1];

  let data = JSON.stringify(task); //json data

  //make the api call
  await fetch(UPDATE_DATA_URL + "/" + task.todos_id, {
    method: "PATCH", //updating partial model using patch
    headers: {
      "X-CSRFToken": token, //may require for security reasons
      "Content-Type": "application/json; charset=utf-8", //to tell server we are working with json, and utf-8.
    },
    body: data, //the clients request holding data will be sent to the server to handle request
  });

  //destroy pending task in storage
  destroy();

  alert(`Successfully updated '${task.title}'`);

  //redirect back to the homepage once done
  window.location.replace("/todosapp");
}

async function isPendingTaskAvailable() {
  return sessionStorage.getItem("pending-task") != null ? true : false;
}

async function destroy() {
  if (isPendingTaskAvailable()) {
    sessionStorage.removeItem("pending-task");
  }
}

async function cancelUpdate() {
  await destroy();
  window.location.replace("/todosapp");
}
