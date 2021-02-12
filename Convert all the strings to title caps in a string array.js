(function() 
{ const capitalize = function(s)  {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
    var TitleCasedString=""
    var string= "Programming languages are like girlfriends: The new one is better because you are better."
    array=string.split(" ")
    for(i in array)
    {
     array[i]=capitalize(array[i])
    }
    
    console.log("IIFE + anonymous",array.join(" "))
}
() 
)
