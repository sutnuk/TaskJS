var arr = [1,2,3,4,5,6,7]
function Numbers(arr){
var newArr =[];
for(var val of arr){
	var obj = {};
	obj.value = val;
	obj.method = function()
	{
		return this.value % 2 == 0;
	};
	newArr.push(obj); 
}
return newArr;
}
 var res = Numbers(arr);


for(var val of res)
	 console.log(val.value + "-" + val.method());

 