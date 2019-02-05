var movies=[
  {title:"In Bruges",
   hasWatched:true,
   rating:5
  },
  {
    title:"Frozen",
    hasWatched:false,
    rating:4.5
  }
]
// movies.forEach(function(movie){
//   var result="you have"
//   if(movie.hasWatched){
//     result+="watched";
//   }
//   else{
//     result +="not seen";
//   }
//   result += "\""+ movie.title + "\"";
//   result += movie.rating + "-" + "starts";
//   console.log(result);
// })

function buildString(movie){
  var result="you have"
  if(movie.hasWatched){
    result+="watched";
  }
  else{
    result +="not seen";
  }
  result += "\""+ movie.title + "\"";
  result += movie.rating + "-" + "starts";
  return result;
}
movies.forEach(function(movie){
  console.log(buildString(movie));
});