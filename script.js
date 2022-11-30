let numberArray=[5,499,20,244];
let largest=numberArray[0];

function go(){
	for(var i=0;i<numberArray.length;i++){
			if(numberArray[i]>largest){
				largest=numberArray[i];	
			}
	}
	document.getElementById("main").innerHTML+=largest;
	console.log(largest);
}

