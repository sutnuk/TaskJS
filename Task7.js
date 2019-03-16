var arr = [1,2,3,4,5,6,7]
function Numbers(arr){
var newArr =[];
var func;
for(var val of arr){
	func = Odd(val);
	var obj = {};
	obj.value = val;
	obj.method = func;
	newArr.push(obj); 
}
return newArr;
}

function Odd(val){
	if(val % 2 == 0)
		return false;
	else 
		return true;
}
 var res = Numbers(arr);
 for(var val of res)
	 alert(val.value + "-" + val.method);