var string = "Implement that gggg function takes two two parameters ";
var words = ["that", "two"];

function repetitionsOfWords(string, words){
	var NewArray =[];
	var str, word, j, res=0;
		for(var i=0;i<words.length;i++)
	{ 	       
		word = words[i];
		str = string.toLowerCase();
		j=0;
		while (j<str.length)
		{			
			var SubStr=str.substr(j,word.length);
				if(SubStr==word)
				{
					res+=1;
					j+=word.length;	
				}
				else j++;
		}
		var obj = {Word:word, NewNumber:res};
		NewArray.push(obj);
		res=0;
		
	}
	return NewArray;
	
}
	var result = repetitionsOfWords(string,words);
	for(let val of result)
		document.write(val.Word + " - " + val.NewNumber+ "; ");

