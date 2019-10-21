/*eslint-env browser*/

var employee = [
		["Jack", "Vice President", 4872],
		["Jim", "Director ", 4356],
        ["Pat", "Senior Manager", 4567],
		["Harry", "Manager", 7890],
		["Alisha", "Software Developer", 4325],
]

function resetForm() {
    document.getElementById("Name").value = ''
    document.getElementById("Title").value = ''
    document.getElementById("Extension").value = ''
  }

function employeeData() {
	var newEntry = ""
	for (let i = 0; i < employee.length; i++) {
		let emp = employee[i];
		newEntry += '<tr><td>' + emp[0] + '</td><td>' + emp[1] + '</td><td>' + emp[2] + '</td><td><button class="deleteEmployee-btn" onclick="deleteEmployee(' + i + ')">Delete</button></td></tr>';
	}
	document.querySelector("tbody").innerHTML = newEntry;
	document.getElementById("count").innerHTML = employee.length;
}

window.onload = function () {
	employeeData();
}

function deleteEmployee(n) {
	employee.splice(n, 1);
	employeeData();
}

var submit = document.getElementById("submit");
submit.addEventListener("click", function () {
	let Name = document.getElementById("Name").value;
	let Title = document.getElementById("Title").value;
	let Extension = document.getElementById("Extension").value;
	
	if(!Name)
	document.getElementById("name_error").style.display = "inline-block";
	else
	document.getElementById("name_error").style.display = "none";
    
	
	if(!Title)
	document.getElementById("title_error").style.display = "inline-block";
	else
	document.getElementById("title_error").style.display = "none";
	
	
	if(!Extension)
	document.getElementById("extension_error").style.display = "inline-block";
	else
	document.getElementById("extension_error").style.display = "none";
	
	if (!(Name && Title && Extension)) return;
    employee.push([Name, Title, Extension]);

    employeeData();
    resetForm();
   
});


