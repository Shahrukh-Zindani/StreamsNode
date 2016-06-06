function getUserInput(firstname, lastname, gender, callback){
	var fullname= firstname+ lastname;
	if(typeof callback=== 'function'){

		callback(fullname,gender);
	}
}

function greetUser(customerName, gender){
	console.log(customerName+' is a '+gender);
}

getUserInput('shahrukh', 'zindani', 'male', greetUser);