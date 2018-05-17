
// console.log("running"); 
// var database=[{ 
// username:"Kunal", 
// password:"nymeria",  
// }, 
// { 
// username:"sunaina", 
// password:"ghost",  
// } ,
// { 
// username:"dinesh", 
// password:"jonsnow"  
// }  ]; 

// var newsfeed=[ 
// 	{ 
// 	username:"Kunal", 
// 	timeline:"Kunals Job : Developer Kunal's newsfeed is that he is really loving Javascript"

// 	},  
// 	{ 
// 	username:"sunaina", 
// 	timeline:"Desinger" ,
// 	}, 
// 	  { 
// 	username:"dinesh", 
// 	timeline:"marketing", 
// 	}, 
	 
// ]; 
// var todos=["Complete Javascript", 
// 				"Complete YDKJS",
// 				"Learn Angular", 
// 				"Learn React", 
// 				"Learn Redux"]; 
// for(var i=0;i<todos.length;i++) { 
// todos[i]=todos[i]+"!"; 
// }  
// var response=1;
// do{ 
// 	var user=prompt("Enter username"); 

// login(user);
// function login(user){  
// 	for(var i=0;i<database.length;i++) 
// 		{		 
// 		console.log("inside for loop 1"); 
// 		if(user===database[i].username)
// 		{
// 			 	do{
// 				var pass=prompt("Enter Password");  
// 				if(pass===database[i].password) 
// 					{alert("Welcome"); 
// 					 var j; 
// 					 for(j=0;j<newsfeed.length;j++) 
// 					 	{	 //console.log("inside j loop") ;	 
// 					 		if(newsfeed[j].username===user) 
// 					 				{console.log(newsfeed[j].timeline);  
// 					 				break;}

// 					 	} 
// 					 }
// 				else    
// 						var input=prompt("Wrong Password \nEnter 0 to try again \n Enter 1 to exit");
// 			} while(input==='0');



// 		} 

// 		} 
// 		} 
// 		 response=prompt("Do you want to check out another Timeline\n Enter 1:YES \n Enter 2:No \n "); 
// 	}while(response==='1'); 
// 	if(response==='2') 
// 		alert("Bubye!!");
 
//var input=document.getElementByid('input');  
// var ul= document.querySelector("ul"); 
// var button=document.getElementById("butt"); 
// var inp=document.getElementById("input");  

// button.addEventListener("click",function(){   
// 	if(inp.value.lenght>0){
// 	var element=document.createElement("li"); 
// 	element.appendChild(document.createTextNode(inp.value)); 
// 	ul.appendChild(element);  
// }
// }) 
// var check=document.getElementsByClassName("check"); 
var input2=document.getElementById("input1"); 
var button=document.getElementById("butt");  
var h=document.querySelector("ul"); 
button.addEventListener("click",function(){ 
var element=document.createElement("li"); 
element.appendChild(document.createTextNode(input2.value)); 
h.appendChild(element);   
var new_button=document.createElement("button"); 
new_button.appendChild(document.createTextNode("clear")); 
h.appendChild(new_button); 
input2.value="";    
new_button.addEventListener("click",function() { 
element.style.display="none";  
new_button.style.display="none";
})
})  
input2.addEventListener("keypress",function(event){ 
	var keycode=event.keyCode;  
	if(keycode===13){  
		var element=document.createElement("li"); 
element.appendChild(document.createTextNode(input2.value)); 
h.appendChild(element);   
var new_button=document.createElement("button"); 
new_button.appendChild(document.createTextNode("clear")); 
h.appendChild(new_button); 
input2.value="";    
new_button.addEventListener("click",function() { 
element.style.display="none";  
new_button.style.display="none";
})
	}
})

 
