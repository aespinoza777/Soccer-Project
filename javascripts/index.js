document.addEventListener("DOMContentLoaded", () => {
    Api.fetchCompetitions()
  const change = document.querySelector(".change")
  let colorchange = false
  change.addEventListener("click", () => {
    if (colorchange === true) {
      document.body.style.backgroundColor = "white";
      colorchange = false
    }
    else {
      document.body.style.backgroundColor = "black";
      colorchange = true
    }
 
  })

} )