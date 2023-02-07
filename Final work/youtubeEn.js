let count = 0
const time = 500
for(;;){
  if(count == time){
    deleteMovies()
    count++
  }
  else{
    count++
  }
}

function deleteMovies(){
  let titles = document.querySelectorAll(".style-scope ytd-rich-grid-media");
  let movies = document.querySelectorAll(".style-scope ytd-rich-grid-row")
  for(let i = 0; i < movies.length; i++){
      let e = titles[i]
      let m = movies[i]
      if(jpFinder(e.innerText)){
        m.style.display = 'none';
      }
    }
}

function jpFinder(t){
  const regex =  /[あ-ん]/
  console.log(regex.test(t))
  return regex.test(t)
}

