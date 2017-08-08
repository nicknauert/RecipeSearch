// recieve submit text
// USE reset()


let searchBar = document.getElementById("searchInput");

searchBar.addEventListener("keydown", function (event) {
    if (event.which == 13 || event.keyCode == 13) {
        searchRecipes();
        return false;
    }
    return true;
});


function clearResults(){
  let results = document.querySelector(".results");
  results.innerHTML = "";
}


function searchRecipes(){
  let input = document.getElementById("searchInput").value;
  let url = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=" + input;

  clearResults();

  fetch(url)
    .then(function (data){
      return data.json();
    })
    .then(function(data){
      for(i=0;i<8;i++){
        let results = document.querySelector(".results");
        let recipe = data.results[i];

        if(recipe.thumbnail === ""){
          let tmpl = `
          <div class="resultSquare">
            <img src="https://anandabhavanbc.com/img/placeholders/xgrey_fork_and_knife.png.pagespeed.ic.hdzj78SGIe.png">
            <div class="recipeText">
              <a href="${recipe.href}"><p>${recipe.title}</p></a>
            </div>
          </div>`;

          results.innerHTML += tmpl;

        } else {

          let tmpl = `
          <div class="resultSquare">
          <img src="${recipe.thumbnail}">
            <div class="recipeText">
              <a href="${recipe.href}"><p>${recipe.title}</p></a>
            </div>
          </div>`;

          results.innerHTML += tmpl;
        }


    }
  })
};
