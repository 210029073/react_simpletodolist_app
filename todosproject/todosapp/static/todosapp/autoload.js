var data = "https://127.0.0.1:8000/todosapp/todos/data"; //url for making api request to get data

var output = []; //holding the response in json

var parsed_data = []; //hold processed data from json
/**
 * This will make an asynchronous web api call using fetch to retrieve all items that
 * are part of the todo list.
 *
 * @author Ibrahim Ahmad
 */
async function fetchData() {
  const response = await fetch(data, { method: "GET" });

  output = await response.json();
  //store results in localstorage

  //check if it exists in localstorage
  //remove if it already exists
  if (localStorage.getItem("todos") != null) {
    localStorage.removeItem("todos"); //remove from localstorage
  }

  //otherwise set
  localStorage.setItem("todos", JSON.stringify(output));
  parsed_data = Array.from(output);
  console.log(parsed_data);
  return parsed_data;
}

fetchData(); //make the api request for getting todo list data

/**
 * This will initialise the data in response body which is the target webpage.
 */
async function initialize() {
  parsed_data = await fetchData();

  if (localStorage.getItem("todos") != null) {
    console.log("Data: ");
    //on page load check status of elements
    statusMessage();
  }
  if (!document.querySelector("#list").hasChildNodes()) {
    //on page load check status of elements
    statusMessage();

    prepare();
  }
}

/**
 * This will initialise the data in response body which is the target webpage.
 */
async function initializeData() {
  parsed_data = await fetchData();
}

/**
 * This will prepare the data within the response body. The response body is a webpage.
 */
function prepare() {
  let i = 0;
  let relativeElementPath = {};
  Array.from(parsed_data).forEach((element) => {
    let processed_element =
      `<span id="link-${i}">` +
      "<p>" +
      element.todos_id +
      "</p>" +
      "<p>" +
      element.title +
      "</p>" +
      "<p>" +
      new Date(element.startdate).toUTCString() +
      "</p>" +
      "<p>" +
      new Date(element.duedate).toUTCString() +
      "</p>" +
      `<button class="btn black" type="button" onclick="deleteItem('${element.todos_id}')">` +
      "Delete</button>" +
      `<button class="btn black" type="button" onclick="updateOnClick('${element.todos_id}')">` +
      "Update</button> </span>";
    const element_tag_name = `link-${i}`;
    relativeElementPath[element.todos_id] = element_tag_name;

    sessionStorage.setItem(
      "relativeElementPath",
      JSON.stringify(relativeElementPath)
    );

    document.querySelector("#list").innerHTML += processed_element;
    i++;
  });
}

function statusMessage() {
  //change quantity value
  if (parsed_data.length > 0) {
    document.querySelector("#quantityMessage").textContent =
      "You currently have " +
      parsed_data.length +
      " tasks that require your attention.";
  } else {
    document.querySelector("#quantityMessage").textContent =
      "You currently have no tasks assigned to your todo list.";
  }
}

async function deleteItem(task) {
  part = document.cookie.split("csrftoken=");
  token = part[1];

  //will not use in future releases.
  // xhttp.open(
  //   "DELETE",
  //   "https://127.0.0.1:8000/todosapp/todos/delete/" + task,
  //   true
  // );
  // xhttp.setRequestHeader("X-CSRFToken", token);
  // xhttp.send();

  //we need to confirm if the user wishes to delete the item
  let confirmation = confirm(
    "Are you sure you want to delete this task? \nTHIS CANNOT BE UNDONE."
  );
  if (confirmation == true) {
    const delete_op = await fetch(
      "https://127.0.0.1:8000/todosapp/todos/delete/" + task,
      {
        method: "DELETE",
        headers: {
          "X-CSRFToken": token,
        },
      }
    );
    //update array and apply to localstorage
    let oldindex = parsed_data.findIndex((element) => element.todos_id == task);
    parsed_data = parsed_data.filter((element) => element.todos_id != task);
    localStorage.setItem("todos", parsed_data);
    const relativeElementPathNamesUnprepared = sessionStorage.getItem(
      "relativeElementPath"
    );
    const relativeElementPathNames = JSON.parse(
      relativeElementPathNamesUnprepared
    );
    console.log(relativeElementPathNames.task);
    document.getElementById(relativeElementPathNames[task]).remove();
    if (parsed_data.length > 0) {
      document.querySelector("#quantityMessage").textContent =
        "You currently have " +
        parsed_data.length +
        " tasks that require your attention.";
    } else {
      document.querySelector("#quantityMessage").textContent =
        "You currently have no tasks assigned to your todo list.";
    }
  } else {
  }
}

function updateOnClick(id) {
  parsed_data.forEach((element) => {
    if (element.todos_id == id) {
      console.log(element); //outputs element object

      if (sessionStorage.getItem("pending-task") != null) {
        sessionStorage.removeItem("pending-task");
      }

      //add to session storage
      sessionStorage.setItem("pending-task", JSON.stringify(element));
      // localStorage.removeItem("todos");
      sessionStorage.removeItem("relativeElementPath");
      window.location.replace("/todosapp/todos/update/" + element.todos_id);
    }
  });
}
