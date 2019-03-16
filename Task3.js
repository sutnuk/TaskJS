function filterArray(arr, minVal, maxVal){
	var newArr=[];
	var j=0;
	for(var i=0;i<arr.length;i++)
	{
		if((arr[i]>minVal) && (arr[i]<maxVal))
		{   
	        newArr[j]=arr[i];
			j++;
		}
	}
	return newArr;
}
var Array = [8, 6, 3, 58, 12, 1, 45, 65];
alert(filterArray(Array, 3,20));