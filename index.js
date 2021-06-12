//  BASELINE BUILD - RECOMMENDED START UP
document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )


////  'Listen To TheDOM🌌🧘🌠👁✨'
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
document.addEventListener("DOMContentLoaded", function(){ console.log("🦕🦕Dinosaurs Showtime🦖🦖")


let showTheForm = false;

    // to make fetching easy, we define our routes as API_DATABASE_URL and use this in later for fetching
    const ALL_DINOSAURS_URL = "http://localhost:3000/dinosaurs"
    console.log("This is our Dinos Database URL ->", ALL_DINOSAURS_URL)


    const dinoFormContainer = document.querySelector(".container")
    const buttonToShowUsTheForm = document.querySelector("#new-dino-btn");
        buttonToShowUsTheForm.addEventListener("click", () => {
            showTheForm = !showTheForm;
            if (showTheForm) {
                dinoFormContainer.style.display = "block";
                } 
            else {
                dinoFormContainer.style.display = "none";
                }
        });







    // ################## set renderDino #########################
    const renderDinosaur = (dinosaurObj) => {

    // Display a Card for each Toy
    // Create the Outer Wrapping/Containing Element 
    ////  - In this case a <div>
        const cardDiv = document.createElement("div")

    // Assigning any classes etc to it
    ////  - In this case: class="card"
        cardDiv.classList.add("flip-card")

         cardDiv.setAttribute("data-id", dinosaurObj.id)
         cardDiv.id = dinosaurObj.id


    // use innerHTML to create the inner elements
         cardDiv.innerHTML = `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src=${dinosaurObj.image} class="toy-avatar" />
                        <h2>${dinosaurObj.name}</h2>
                    </div>

                    <div class="flip-card-back">
                        <h3 style="color: #fdc52c;">${dinosaurObj.name}</h3>
                        <p>diets : ${dinosaurObj.diets}</p>
                        <p>height : ${dinosaurObj.height}</p>
                        <p>length : ${dinosaurObj.length}</p>
                        <p>weight : ${dinosaurObj.weight}</p>
                        <p>description : ${dinosaurObj.desc}</p>
                    </div>
                </div>
            </div>       

            `

    //   <button data-id="${dinosaurObj.id}" class="like-btn">Like ❤️</button>
    //   <button data-id="${dinosaurObj.id}" class="delete-btn"> DELETE🚁💫🚂? </button> 
    
    // SSSlap it on the DOM (toy-collection)
    const collectionDiv = document.querySelector("#dino-collection")
    collectionDiv.append(cardDiv)


  }

  const renderAllDinosaurs =(dinosaurArray)=> {


    dinosaurArray.forEach(dinosaurObj => { renderDinosaur(dinosaurObj) } )

    ////  Using a (ForOfLoop)
      // hey let each toyObj in this toyArray, do this thing.(in this case renderToy(toyObj))
      // for(let toyObj of toyArray){

      //   renderToy(toyObj)
        
      // }


  }


  //=====  BASIC GET FETCH PROCESS  ========

    // fetching started here  
    fetch(ALL_DINOSAURS_URL).then(response => response.json())
    // .then(console.log) // this last .then is what we are going to decide to do with our data
    // .then(whatwefetched => {console.log(whatwefetched)}) // this last .then is what we are going to decide to do with our data
    .then(fetchedArray => {console.log(fetchedArray); // this last .then is what we are going to decide to do with our data

        renderAllDinosaurs(fetchedArray)
        // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 

      }) 

    // ###########################################








//   constructor(mezosoicEra) {
//     this.mezocoicEra = mezocoicEra
//     this.render()
//     this.attachEventListener()}

//   const renderMezosoicEra =(mezosoicObj)=> {

    // Display a Card for each Toy
    // Create the Outer Wrapping/Containing Element 
    ////  - In this case a <div>
    // const cardDiv = document.createElement("div")
    // const btn = document.createElement("button")
    //     btn.className = "category-button"
    //     btn.dataset.id = this.mezosoic_era.id 
    // btn.innerHTML = this.mezosoic_era.period
    // this.btn = btn
    // this.constructor.container.appendChild(btn)

    // Assigning any classes etc to it
    ////  - In this case: class="card"
    // cardDiv.classList.add("flip-card")

    //   cardDiv.setAttribute("data-id", dinosaurObj.id)
    //   cardDiv.id = dinosaurObj.id


    // use innerHTML to create the inner elements
    // cardDiv.innerHTML = `
    // <div class="flip-card">
    //     <div class="flip-card-inner">
    //         <div class="flip-card-front">
    //             <img src=${dinosaurObj.image} class="toy-avatar" />
    //             <h2>${dinosaurObj.name}</h2>
    //         </div>

    //         <div class="flip-card-back">
    //             <h3>${dinosaurObj.name}</h3>
    //             <p>diets : ${dinosaurObj.diets}</p>
    //             <p>height : ${dinosaurObj.height}</p>
    //             <p>length : ${dinosaurObj.length}</p>
    //             <p>weight : ${dinosaurObj.weight}</p>
    //             <p>description : ${dinosaurObj.desc}</p>
    //         </div>
    //     </div>
    // </div>       

    //   `

    // //   <button data-id="${dinosaurObj.id}" class="like-btn">Like ❤️</button>
    // //   <button data-id="${dinosaurObj.id}" class="delete-btn"> DELETE🚁💫🚂? </button> 
    
    // // SSSlap it on the DOM (toy-collection)
    // const collectionDiv = document.querySelector("#toy-collection")
    // collectionDiv.append(cardDiv)


//   }

//   render(){
//     const btn = document.createElement("button")
//     btn.className = "category-button"
//     btn.dataset.id = this.category.id 
//     btn.innerHTML = this.category.name
//     this.btn = btn
//     this.constructor.container.appendChild(btn)
//   }
  


  //=====  MezosoicEra GET FETCH PROCESS  ========

  const MezosoicEra_URL = "http://localhost:3000/mezosoic_eras" 
    console.log("This is Mezosoic Era URL ->", MezosoicEra_URL)


        const renderMesozoicEra =(mezosoicEraObj)=> {
            const eraDiv = document.createElement("div")
        
            // static container = document.getElementById("category-container")
            // Assigning any classes etc to it
            ////  - In this case: class="card"
            eraDiv.classList.add("category-button")
        
              eraDiv.setAttribute("data-id", mezosoicEraObj.id)
              eraDiv.id = mezosoicEraObj.id
        
        
            // use innerHTML to create the inner elements
                eraDiv.innerHTML = `
                <div class="button">
                            <h2>${mezosoicEraObj.period}</h2>
                </div>       
            
                `
        
            //   <button data-id="${dinosaurObj.id}" class="like-btn">Like ❤️</button>
            //   <button data-id="${dinosaurObj.id}" class="delete-btn"> DELETE🚁💫🚂? </button> 
            
            // SSSlap it on the DOM 
            const collectionEraDiv = document.querySelector("#category-container")
            collectionEraDiv.append(eraDiv)
        }

    const renderAllMezosoicEra =(mezosoicEraArray)=> {
        mezosoicEraArray.forEach(mezosoicEraObj => renderMesozoicEra(mezosoicEraObj))
        }

    fetch(MezosoicEra_URL).then(response => response.json())
    .then(fetchedEra => {console.log(fetchedEra);
        renderAllMezosoicEra(fetchedEra)
    })






});