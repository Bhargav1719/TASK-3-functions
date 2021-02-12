(function() 
{ 
    var median=0
    var array1=[1,12,15,26,38]
    var array2=[2,13,17,30,45]

    array3=array1.concat(array2)
    array3.sort(function(a,b) {return a-b})
    console.log("IIFE & anonymous",Math.round((array3[array1.length]+array3[array1.length-1])/2))
}
() 
)
