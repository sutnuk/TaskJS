var numbers = [12,4,6,-100,5,9,1,29,3,11];
var max = findMax(numbers);
var min = findMin(numbers);

function findMax(arr){
	var max=arr[0];
	for(var i=0;i<arr.length;i++){
	if(max<arr[i])
		max=arr[i];
	}
	return max;	
}

function findMin(arr){
	var min=arr[0];
	for(var i=0;i<arr.length;i++){
	if(min>arr[i])
		min=arr[i];
	}
	return min;
}
alert(max);
alert(min);