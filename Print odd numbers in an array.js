(function() 
{ 
    var oddarray=[]
    var array=[1,2,3,4,5,6,7,8,9,0]
    for(i in array)
    {
      if(array[i]%2 !== 0)
      {
        oddarray.push(array[i])
      }
    }
    
    console.log("IIFE & anonymous",oddarray)
}
() 
)
