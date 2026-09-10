import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let paramsObj = new URLSearchParams(search)

  let adventureId = paramsObj.get("adventure")

  return adventureId;

  // Place holder for functionality to work in the Stubs
  
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
    let res = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`)

    if(!res.ok){ 
      return null
    }

   let data = await res.json();
   return data;
    
  } catch(error){
    return null
  }
  // Place holder for functionality to work in the Stubs
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  

  // console.log(adventure)
  document.getElementById("adventure-name").innerHTML = adventure.name
  document.getElementById("adventure-subtitle").innerHTML   = adventure.subtitle
  document.getElementById("adventure-content").innerHTML   = adventure.content

  adventure.images.forEach((image) => {
    let divEle = document.createElement("div")
    let imgEle  = document.createElement("img")

    imgEle.setAttribute("src", image)
    imgEle.className = "activity-card-image"

    divEle.append(imgEle)

    document.getElementById("photo-gallery").append(divEle)

  })


}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let carousel = document.createElement("div")
  carousel.setAttribute("id", "carouselExampleIndicators") 
  carousel.setAttribute("class", "carousel slide")

  carousel.innerHTML =
  `<div class="carousel-indicators" id="carousel-indicators">

  </div>

  <div class="carousel-inner" id="carousel-items">

  </div>
  <button class = "carousel-control-prev" type = "button" data-bs-target = "#carouselExampleIndicators" data-bs-slide = "prev">
  <span class = "carousel-control-prev-icon" aria-hidden = "true"></span>
  <span class = "visually-hidden">Previous</span>
  </button>

  <button class = "carousel-control-next" type = "button" data-bs-target = "#carouselExampleIndicators" data-bs-slide = "next">
  <span class = "carousel-control-next-icon" aria-hidden = "true"></span>
  <span class = "visually-hidden">Next</span>
  </button>`

  document.getElementById("photo-gallery").replaceChildren(carousel)

  images.forEach((imgURL, index) => {
    
    let indicatorBtn = document.createElement("button")
    indicatorBtn.setAttribute("type", "button")
    indicatorBtn.setAttribute("data-bs-target", "#carouselExampleIndicators")
    indicatorBtn.setAttribute("data-bs-slide-to", index)

    if (index === 0){
      indicatorBtn.setAttribute("class", "active")
    }


    document.getElementById("carousel-indicators").append(indicatorBtn)
    let carouselItem = document.createElement("div")
    carouselItem.className = "carousel-item"


    if (index === 0){
      carouselItem.className += " active"
    }

    carouselItem.innerHTML = `<img src=${imgURL} class ="activity-card-image">`

    document.getElementById("carousel-items").append(carouselItem)
  })  
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
  if(adventure.available){
    document.getElementById("reservation-panel-sold-out").style.display = "none"
    document.getElementById("reservation-panel-available").style.display = "block"

    document.getElementById("reservation-person-cost").innerHTML = adventure.costPerHead
  }
  else{
    document.getElementById("reservation-panel-sold-out").style.display = "block"
    document.getElementById("reservation-panel-available").style.display = "none"
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
//Implementation of reservation cost calculation based on persons

function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  let total = adventure.costPerHead * parseInt(persons)
  document.getElementById("reservation-cost").textContent = total
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
  let form = document.getElementById("myForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = {
            name : "",
            date : "",
            person : "",
            adventure :""    
          }

          data.name = form.elements["name"].value
          data.date = form.elements["date"].value
          data.person = form.elements["person"].value
          data.adventure = adventure.id


          fetch(config.backendEndpoint + "/reservations/new",{
            method : "POST",
            body : JSON.stringify(data),
            headers : {
              "content-type" : "application/json; charset=UTF-8",
            },
          }).then((res) => {
                    if (res.ok) {
                      alert("Success!")
                    }
                  }).catch((err) => {
                    console.log(err)
                  })
           })


}


//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
  if (adventure.reserved){
    document.getElementById("reserved-banner").style.display = "block"
  }else{
    document.getElementById("reserved-banner").style.display = "none"
  }
}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
