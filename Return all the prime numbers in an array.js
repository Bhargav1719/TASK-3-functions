(function() 
{ 
    var pallindromes=[]
    var array=["abc","aba","abcd","abcba","exe"]
    for(i in array){
        if(array[i]==array[i].split("").reverse().join("")){
            pallindromes.push(array[i])
        }
    }
    console.log("IIFE & anonymous",pallindromes)
}
() 
)
