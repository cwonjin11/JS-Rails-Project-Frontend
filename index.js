  
// const baseURL = "http://localhost:3000"
// const api = new ApiService(baseURL)





//  BASELINE BUILD - RECOMMENDED START UP
const MESOZOIC_ERA_URL = "http://localhost:3000/mezosoic_eras"
console.log("This is our MezosoicEra URL ->", MESOZOIC_ERA_URL) 

const ALL_DINOSAURS_BY_ERA_URL = "http://localhost:3000/mezosoic_eras/${id}/dinosaurs"
console.log("This is our MezosoicEra URL ->", ALL_DINOSAURS_BY_ERA_URL) 

// const ALL_DINOSAURS_URL = "http://localhost:3000/dinosaurs"
// console.log("This is our Dinos Database URL ->", ALL_DINOSAURS_URL)





document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )

////  'Listen To TheDOM🌌🧘🌠👁✨'
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
document.addEventListener("DOMContentLoaded", function(){ //console.log("🦕🦕Dinosaurs Showtime🦖🦖")


let showTheForm = false;

    // to make fetching easy, we define our routes as API_DATABASE_URL and use this in later for fetching
    // const ALL_DINOSAURS_URL = "http://localhost:3000/dinosaurs"
    // console.log("This is our Dinos Database URL ->", ALL_DINOSAURS_URL)


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


    API.addDinosaurs()

    document.querySelector('.container').addEventListener('submit', API.newDinoForm)
// ############## form validation ???  ##########



// })



// // ################## set renderDino #########################
    // const renderAllDinosaurs =(dinosaurArray)=> {

    //     dinosaurArray.forEach(dinosaur => { 

    // //         // renderDinosaur(dinosaur) 
    // //         const newDinosaur = new Dinosaur(dinosaur)
    // //         console.log("abracadabra", newDinosaur)
    // //         newDinosaur.renderDinosaur(dinosaur)
    //     })

    // }



//     // Create the Outer Wrapping/Containing Element 
//     ////  - In this case a <div>
//     const cardDiv = document.createElement("div")

//     // Assigning any classes etc to it
//     ////  - In this case: class="card"
//         cardDiv.classList.add("flip-card")
//          cardDiv.setAttribute("data-id", obj.id)
//          cardDiv.id = obj.id

//     // const newDinosaur = new Dinosaur(obj)
//     // console.log("abracadabra", newDinosaur)
//     // cardDiv.innerHTML = makeACard()


//     // use innerHTML to create the inner elements
//         cardDiv.innerHTML = this.makeACard()
//         console.log(cardDiv)

//         //  cardDiv.innerHTML = `
//         //     <div class="flip-card">
//         //         <div class="flip-card-inner">
//         //             <div class="flip-card-front">
//         //                 <img src=${obj.image} class="toy-avatar" />
//         //                 <h2>${obj.name}</h2>
//         //             </div>

//         //             <div class="flip-card-back">
//         //                 <h3 style="color: #fdc52c;">${obj.name}</h3>
//         //                 <p>diets : ${obj.diets}</p>
//         //                 <p>height : ${obj.height}</p>
//         //                 <p>length : ${obj.length}</p>
//         //                 <p>weight : ${obj.weight}</p>
//         //                 <p>description : ${obj.desc}</p>
//         //             </div>
//         //         </div>
//         //     </div>       

//         //     `

//     //   <button data-id="${dinosaurObj.id}" class="like-btn">Like ❤️</button>
//     //   <button data-id="${dinosaurObj.id}" class="delete-btn"> DELETE🚁💫🚂? </button> 
    
//     // SSSlap it on the DOM (toy-collection)
//     const collectionDiv = document.querySelector("#dino-collection")
//     collectionDiv.append(cardDiv)


//   }





//   const renderAllDinosaurs =(dinosaurArray)=> {

//     dinosaurArray.forEach(dinosaur => { 

//         renderDinosaur(dinosaur) 
//     })






    ////  Using a (ForOfLoop)
      // hey let each toyObj in this toyArray, do this thing.(in this case renderToy(toyObj))
      // for(let toyObj of toyArray){

      //   renderToy(toyObj)
        
      // }
//   }



//=====  BASIC GET FETCH PROCESS  ========
    // API.addDinosaurs()

// API.renderAllDinosaurs()




    
    // // fetching started here  for ALL DINOSAURS
    // fetch(ALL_DINOSAURS_URL).then(response => response.json())
    // // .then(console.log) // this last .then is what we are going to decide to do with our data
    // // .then(whatwefetched => {console.log(whatwefetched)}) // this last .then is what we are going to decide to do with our data
    // .then(fetchedArray => {console.log(fetchedArray); // this last .then is what we are going to decide to do with our data
    //     // console.log("ALL Dinos comming");
    //     renderAllDinosaurs(fetchedArray)
    //     // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 
    // }) 


// ###########################################  


 



  


  //=====  MezosoicEra GET FETCH PROCESS  ========

//   const MezosoicEra_URL = "http://localhost:3000/mezosoic_eras" 
//     console.log("This is Mezosoic Era URL ->", MezosoicEra_URL)


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
                <h2> ${mezosoicEraObj.period} </h2>
            `

        //     <div class="category-button">
        //     <h2> ${mezosoicEraObj.period} </h2>
        //   </div>
        const collectionEraDiv = document.querySelector("#era-container")
        collectionEraDiv.append(eraDiv)
    }






    const renderAllMezosoicEra =(mezosoicEraArray)=> {
        mezosoicEraArray.forEach(mezosoicEraObj => renderMesozoicEra(mezosoicEraObj))
        }

    fetch(MESOZOIC_ERA_URL).then(response => response.json())
    .then(fetchedEra => {console.log(fetchedEra);
        console.log("ALL Eras comming");
        renderAllMezosoicEra(fetchedEra)
    })









//=====  POST FETCH PROCESS  ========


  // Connecting 'JS-Puppet-Strings' to The New Toy Form
//   const newDinoForm = document.querySelector(".add-dino-form")

//   newDinoForm.addEventListener("submit", event =>{ event.preventDefault(); 
      // console.log("**********", event.target)
      ////  THIS IS NOT CODE THAT WILD MAKE THE POST HAPPEN
      ////  This Console.loging The Main Event of Focus:  >>>> "submit" <<<<
      


      //  Getting User Form Input Data 📋🖋🤪
    //   const name = event.target.name.value
    //   const image = event.target.image.value
    //   const mezosoic_era_id = event.target.mezosoic_era_id.value
    //   const diets = event.target.diets.value
    //   const height = event.target.height.value
    //   const length = event.target.length.value
    //   const weight = event.target.weight.value
    //   const desc = event.target.desc.value
    //     const submit = event.target.submit
    //       console.log("SHOW ME SUBMIT - IN THE FORM:  ", submit)
          ////  This will ONLY show up upon hitting  The "SUBMIT" Button




        //   fetching a new added dinosaurs by user

    //   fetch("http://localhost:3000/dinosaurs", {
    
    //     method: "POST",
    //     headers: { "Content-Type": "application/json"},
    //     body: JSON.stringify({ 
    //       "name": name,
    //       "image": image,
    //       "mezosoic_era_id": mezosoic_era_id,
    //       "diets": diets,
    //       "height": height,
    //       "length": length,
    //       "weight": weight,
    //       "desc": desc
    //       /* WHAT WE ARE POSTING */
    //     })
    
    //   })
    //   .then(response => response.json())
    //   .then(theThingWePostedButFromTheServer => Dinosaur.renderDinosaur(theThingWePostedButFromTheServer) )
    //   //.then(theThingWePosted => console.log("Hey! This is what we posted 📋🤓👍:  ", theThingWePosted))  //

    //         event.target.reset()   //  ****
            // showing clearing values with and emptys

//   }) 


 



  


  //=====  Dinos by Era GET FETCH PROCESS  ========


//     const renderDinosByEra =(dinoByEraObj)=> {
//     const cardDiv = document.createElement("div")
//         cardDiv.classList.add("flip-card")
//          cardDiv.setAttribute("data-id", dinoByEraObj.id)
//          cardDiv.id = dinoByEraObj.id

//          cardDiv.innerHTML = `
//             <div class="flip-card">
//                 <div class="flip-card-inner">
//                     <div class="flip-card-front">
//                         <img src=${dinoByEraObj.image} class="toy-avatar" />
//                         <h2>${dinoByEraObj.name}</h2>
//                     </div>

//                     <div class="flip-card-back">
//                         <h3 style="color: #fdc52c;">${dinoByEraObj.name}</h3>
//                         <p>diets : ${dinoByEraObj.diets}</p>
//                         <p>height : ${dinoByEraObj.height}</p>
//                         <p>length : ${dinoByEraObj.length}</p>
//                         <p>weight : ${dinoByEraObj.weight}</p>
//                         <p>desc : ${dinoByEraObj.desc}</p>
//                     </div>
//                 </div>
//             </div>       

//             `
//     const collectionDiv = document.querySelector("#dino-collection")
//     collectionDiv.append(cardDiv)

//   }     

//     const renderAllDinosByEra =(dinosByEraArray)=> {
//         dinosByEraArray.forEach(dinoByEraObj => renderDinosByEra(dinoByEraObj))
//         }

//     fetch(ALL_DINOSAURS_BY_ERA_URL).then(response => response.json())
//     .then(fetchedEra => {console.log(fetchedEra);
//         console.log("ALL Dinos by Eras comming");
//         renderAllDinosByEra(fetchedEra)
//     })





// #################################
 //========  DELETE + EDIT FETCH (Based on Buttons)  ========
  
  
 const cardsCollection = document.querySelector("#toy-collection")

cardsCollection.addEventListener("click", event =>{ event.preventDefault(); 
    // console.log(event.target)  ////  


      // if(event.target.matches(".delete-btn")){ console.log(event.target) }
      // if(event.target.matches(".delete-btn")){ console.log(event.target.dataset.id) }
    
      
      if(event.target.matches(".delete-btn")){   //  ***  (===)  MAKE A VIDEO!!
        
        console.log(event.target) 
        
        
        const id = event.target.dataset.id
        
        const geThatOuttaHeeyah = document.getElementById(id)
        
        
        fetch(`${API_DATABASE_URL}/${id}`, {
            
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
            
        })
        .then(response => response.json())
        .then( 
            
            
            // event.target.closest(".card").remove() 
            
            geThatOuttaHeeyah.remove()
            
            
            )        
            
            
            
            // fetch(`${API_DATABASE_URL}/${id}`, {
                
                //   method: "DELETE",
                //   headers: { "Content-Type": "application/json" }
                
                // })
                // .then(response => response.json())   
                // .then(theThingWeJustDeleted => console.log("You Just Deleted  ->", theThingWeJustDeleted))
                
                
                
                
            }




});   //END DOCLOADED