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
  for(let i = 0; i < titles.length; i++){
        let e = titles[i];
        let movie = e.closest(".style-scope ytd-richgrid-row");
        if(jpFinder(e.innerText)){
           movie.style.display = 'none';
        }
    }
}

function jpFinder(t){
  const regex =  /[あ-ん]/
  console.log(regex.test(t))
  return regex.test(t)
}

