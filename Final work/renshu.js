function deleteMovies(){
  let titles = document.querySelectorAll("#dismissible");
  let movies = document.querySelectorAll(".style-scope ytd-rich-grid-row")
  for(let i = 0; i < movies.length; i++){
      let e = titles[i]    
      let m = movies[i]
      if(jpFinder(e.innerText)){
        m.style.display = 'none';
      }
    }
}

let calendars = document.querySelectorAll("#video-title");
for(let i = 0; i < calendars.length; i++){
  let e = calendars[i];
  e.style.display = 'none';
}

let titles = document.querySelectorAll(".media-item-metadata");
for(let i = 0; i < titles.length; i++){
      let e = titles[i];
      let movie = e.closest(".details");
      if(jpFinder(e.innerText)){
        movie.style.display = 'none';
      }
}

function jpFinder(t){
    const regex =  /[あ-ん]/
    console.log(regex.test(t))
    return regex.test(t)
}

