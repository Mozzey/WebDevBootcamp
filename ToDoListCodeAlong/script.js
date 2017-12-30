var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
	if (input === "list") {	
	  listTodos();	
	} else if (input === "new") {
	  addTodo();
	} else if (input === "delete") {
	  deleteTodo();
	}
    input = prompt("What would you like to do?");
}
console.log("OK you quit the app");

function listTodos() {
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
}

function addTodo() {
	var newToDo = prompt("Enter new todo");
	todos.push(newToDo);
	console.log("Added Todo");
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Deleted Todo");
}


