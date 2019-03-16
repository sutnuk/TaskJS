function wordsCounter(text){
	var count =0;
	for(var i=0;i<text.length;i++)
	{
		if(text[i]== " ")
		{
			count++;
		}
		if(text[i]=="." || text[i]==",")
			if(text[i-1]==" " && text[i+1]==" ")
				count--;
	}
	count++;
	return count;
}

var text = "Hello, from Automation team";
alert(wordsCounter(text.replace(/  +/g, ' ')));

