

const  promise = (age, name) => { 
	return new Promise( (resolve, reject) => {
	
	if(age>18){
		resolve(`Welcome, ${name}. You can vote.`)
	}else{
		reject(`Oh sorry ${name}. You aren't old enough.`)
	}
} )}

function form_submit(event){
	event.preventDefault()
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;

	if(age==0 || name.length==0){
		return false
		

	}
	
	promise(age,name).then( (data)=>{
		setTimeout( ()=> {
			alert(data)
		},4000)
		

	} )



}