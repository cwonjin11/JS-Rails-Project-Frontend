let showTheForm = true

document.addEventListener("click", (event) => { console.log("ʘ CLICKED ʘ", event.target) }); 
document.addEventListener("DOMContentLoaded", () => { // The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
    mouseOverEvent()        // Header Color changes
    API.addEras()           //  << First view of web page. Showing all Eras  //callback function
    API.addDinosaurs() 


  // ##################### FORM ####################################################   
    // hide-and-seek form //
    const dinoFormContainer = document.querySelector(".container")
    const buttonToShowUsTheForm = document.querySelector("#new-dino-btn"); //|| document.querySelector(".close-button");
        buttonToShowUsTheForm.addEventListener("click",  () => {
            showTheForm  = !showTheForm;
            if  (showTheForm) 
                {dinoFormContainer.style.display = "none";}      //default  // {blocked scope} : let, const  vs function scope : var
            else  
                {dinoFormContainer.style.display = "block";}
        });
        // ## form close button //
    const buttonToCloseTheForm =  document.querySelector(".close-button");
        buttonToCloseTheForm.addEventListener("click",  () => {
            if (showTheForm = true ) {
                dinoFormContainer.style.display = "none";
            }
        });
    document.querySelector('.container').addEventListener('submit', API.newDinoForm)    // submit form 
   // ############################################################################### 


    // ############## get all dinos by clicking <All Dinos> button  ##########
        const getAllDinos = document.querySelector('.all-dinos') // console.log(getAllDinos)
              getAllDinos.addEventListener("click", () => {
        const collectionDiv = document.querySelector("#dino-collection")
              collectionDiv.innerHTML = ""
              API.addDinosaurs()
        });
});   //ENd "DOMContentLoaded"






//############## title text color change effect ##############

    const dinosaurColors = ["green", "lightgreen", "yellow", "yellowgreen",  "brown", "red", "gold"]
    let index = 0
    const maxIndex = dinosaurColors.length

    const changeColor = (title) => {
        title.style.color = dinosaurColors[index++]
        if(index == maxIndex){
            index = 0;
        }
    }
    
    // test eventlistener other then click. 
    function mouseOverEvent(){
        const head = document.querySelector("h1")
        head.addEventListener("mouseover", ()=> changeColor(head))
}
//##############################################################


































// hoisting practice with var let const 
// function nameIs() {
//     let nameis = "Ian"
//     console.log("my name is " + nameis)
//     // let name = "Ian"
//     // console.log("my name is " + `${name}`)
// }
// // console.log("my name is " + nameis)
// nameIs()


// function myAge() {
//     let age = 30
//     console.log("show age", age)
//     // var age =30
//     // let age = 30
//     // age = 30
//     // let age
//     // console.log("show age", age)
// //     console.log(age)
// }
// myAge()

// const x;
// x = "hello"
// const x = "hello"
// let x;
// x = "hello"
// console.log(x)






// console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
// var num; // Declaration
// num = 6; 



// console.log(num); // Throws ReferenceError exception
// num = 6;







// const testButton = document.querySelector(".test-button")
// testButton.addEventListener("click", () => { document.body.style.backgroundColor = "red"})

// // document.body.style.backgroundColor = "red"








 //========  DELETE FETCH (Based on Buttons)  ========
  




  
//  const cardsCollection = document.querySelector("#dino-collection")

//  cardsCollection.addEventListener("click", event => { event.preventDefault(); 
//  // console.log(event.target)  ////  
//    // if(event.target.matches(".delete-btn")){ console.log(event.target) }
//    // if(event.target.matches(".delete-btn")){ console.log(event.target.dataset.id) }
 
   
//    if(event.target.matches(".delete-btn")){   // 
//      console.log(event.target) 
//      const id = event.target.dataset.id
//      const byeDino = document.getElementById(id)
     
     
//      fetch(`${ALL_DINOSAURS_URL}/${id}`, {
//          method: "DELETE",
//          headers: { "Content-Type": "application/json" }
//      })
//          .then(response => response.json())
//          .then(
//              byeDino.remove()
//              )

//      }

//      }) //cardcollectotion close

  


// setTimeout(function(){console.log('async')},5000)  <== async example
// setTimeout(() => {console.log('async')},5000)  //<== async example



//regular function
    // function getData(){
    //     console.log("2. Returning instantly available data.");
    //     return [{name: "Dobby the House-Elf"}, {name: "Nagini"}];
    // }

    // arrow function 
    // const getData = () => {
    //     console.log("2. Returning instantly available data.")
    //     return [{name: "Dobby the House-Elf"}, {name: "Nagini"}]
    // }
    // getData = () => {
    //     console.log("2. Returning instantly available data.")
    //     return [{name: "Dobby the House-Elf"}, {name: "Nagini"}]
    // }
    // getData()
    

    // function main(){
    // console.log("1. Starting Script");
    // const data = getData();
    // console.log(`3. Data is currently ${JSON.stringify(data)}`);
    // console.log("4. Script Ended");
    // }


    // const main = () => {
    // console.log("1. Starting Script")
    // const data = getData()
    // console.log(`3. Data is currently ${JSON.stringify(data)}`)
    // console.log("4. Script Ended")
    // }

    // main()
  

   //asynchronous practice.  
//   setTimeout(() => console.log('Hello World!'), 2000);
//   console.log("No, me first");

  //result = > No, me first then Hello World after 2sec

// Practice : Sort By Name
// let dinoURL = "http://localhost:3000/dinosaurs"


// let allDino = 
//   [
//     {
//     id: 1,
//     mezosoic_era_id: 1,
//     name: "Allosaurus",
//     image: "data:image/jpeg;base64,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",
//     diets: "carnivores",
//     height: "17 ft",
//     size: "40 ft",
//     weight: "4000 lbs",
//     desc: "Allosaurus is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.772Z",
//     updated_at: "2021-06-22T14:42:45.772Z"
//     },
//     {
//     id: 2,
//     mezosoic_era_id: 3,
//     name: "Trynosaurus Rex",
//     image: "https://images.theconversation.com/files/388279/original/file-20210308-13-ebzk93.jpg?ixlib=rb-1.1.0&rect=71%2C53%2C5883%2C4589&q=45&auto=format&w=496&fit=clip",
//     diets: "carnivores",
//     height: "12 – 20 ft",
//     size: "15 ft",
//     weight: "9,900 – 18,000 lbs",
//     desc: "T-rex is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.775Z",
//     updated_at: "2021-06-22T14:42:45.775Z"
//     },
//     {
//     id: 3,
//     mezosoic_era_id: 2,
//     name: "Stegosaurus",
//     image: "https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-1200-80.jpg",
//     diets: "herbivores",
//     height: "10 ft",
//     size: "25 ft",
//     weight: "3000 lbs",
//     desc: "Stegosaurus is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.796Z",
//     updated_at: "2021-06-22T14:42:45.796Z"
//     },
//     {
//     id: 4,
//     mezosoic_era_id: 3,
//     name: "Parasaurolophus",
//     image: "https://static.wikia.nocookie.net/jurassicworld-evolution/images/c/cf/Jurassic_World_Evolution_Screenshot_2020.01.08_-_21.06.32.21.png/revision/latest?cb=20200120120641",
//     diets: "herbivores",
//     height: "16 ft",
//     size: "33 – 36 ft.",
//     weight: "5056.8 kg",
//     desc: "Parasaurolophus is a genus of herbivorous ornithopod dinosaur that lived in what is now North America and possibly Asia during the Late Cretaceous Period.",
//     created_at: "2021-06-22T14:42:45.800Z",
//     updated_at: "2021-06-22T14:42:45.800Z"
//     },
//     {
//     id: 5,
//     mezosoic_era_id: 1,
//     name: "Diplodocus",
//     image: "https://i.pinimg.com/originals/b9/1a/1f/b91a1f474690e139c6c597c089186c95.png",
//     diets: "herbivores",
//     height: "6.5 m",
//     size: "32 m",
//     weight: "12 tons",
//     desc: "Stegosaurus is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.803Z",
//     updated_at: "2021-06-22T14:42:45.803Z"
//     },
//     {
//     id: 6,
//     mezosoic_era_id: 1,
//     name: "c",
//     image: "https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-1200-80.jpg",
//     diets: "herbivores",
//     height: "10",
//     size: "25",
//     weight: "3000",
//     desc: "Stegosaurus is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.806Z",
//     updated_at: "2021-06-22T14:42:45.806Z"
//     },
//     {
//     id: 7,
//     mezosoic_era_id: 3,
//     name: "d",
//     image: "https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-1200-80.jpg",
//     diets: "herbivores",
//     height: "10",
//     size: "25",
//     weight: "3000",
//     desc: "Stegosaurus is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.809Z",
//     updated_at: "2021-06-22T14:42:45.809Z"
//     },
//     {
//     id: 8,
//     mezosoic_era_id: 2,
//     name: "e",
//     image: "https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-1200-80.jpg",
//     diets: "herbivores",
//     height: "10",
//     size: "25",
//     weight: "3000",
//     desc: "Stegosaurus is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.811Z",
//     updated_at: "2021-06-22T14:42:45.811Z"
//     },
//     {
//     id: 9,
//     mezosoic_era_id: 1,
//     name: "f",
//     image: "https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-1200-80.jpg",
//     diets: "herbivores",
//     height: "10",
//     size: "25",
//     weight: "3000",
//     desc: "Stegosaurus is a genus of large carnosaurian theropod dinosaur that lived 155 to 145 million years ago during the Late Jurassic epoch (Kimmeridgian to late Tithonian.",
//     created_at: "2021-06-22T14:42:45.814Z",
//     updated_at: "2021-06-22T14:42:45.814Z"
//     }
//   ]
//     console.log("original JSON data file copied", allDino)
    

// // ##############Sort by Dinos Name in alphabetical order##########################################################

//     function compare (a, b) {
//         var nameA = a.name.toUpperCase();
//         var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
//         return 0;
//       };

//       console.log("using compare function", allDino.sort(compare));
// //   // or
//       console.log("without function but sort itself", allDino.sort());

// // //or 

//     allDino.sort(function(a, b) {
//         var nameA = a.name.toUpperCase();
//         var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
//         return 0;
//       });

//     console.log("sort function ab", allDino);
// ####################################################################################################################


// const MESOZOIC_ERA_URL = "http://localhost:3000/mezosoic_eras"
// console.log("This is our MezosoicEra URL ->", MESOZOIC_ERA_URL) 

// const ALL_DINOSAURS_BY_ERA_URL = "http://localhost:3000/mezosoic_eras/${id}/dinosaurs"
// console.log("This is our MezosoicEra URL ->", ALL_DINOSAURS_BY_ERA_URL) 






     //  cardDiv.addEventListener("click", event => {
        // console.log("lets add edit function here", event.target)
        // if(event.target.matches(".edit-btn"))
        // if(event.target.matches("#myBtn"))
        //     {console.log("🍎🍎🍎🍎🍎here we go yoohoo🍎🍎🍎🍎🍎"), event.target}

        // Get the modal
        // var modal = document.getElementById("myModal");
      
        // // Get the button that opens the modal
        // var btn = document.getElementById("myBtn");

        // // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // // When the user clicks on the button, open the modal
        //     btn.onclick = function() {
        //     modal.style.display = "block";
        //     }

        // // When the user clicks on <span> (x), close the modal
        // span.onclick = function() {
        // modal.style.display = "none";
        // }

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        // if (event.target == modal) {
        //     modal.style.display = "none";
        // }
        // }



         // event.target.closest(".card").remove() 
         
         // fetch(`${API_DATABASE_URL}/${id}`, {
             
             //   method: "DELETE",
             //   headers: { "Content-Type": "application/json" }
             
             // })
             // .then(response => response.json())   
             // .then(theThingWeJustDeleted => console.log("You Just Deleted  ->", theThingWeJustDeleted))














 
// EVENT LISTENER FOR:  CLOSE BUTTON ON POP-UP-EDIT FORM
// const closeButton = dinoFormContainer.querySelector(".close-button")
//         closeButton.addEventListener("click", (event)=>{
//         console.log("✖️CLOSE✖️", event)
//         if (showTheForm) {
//             dinoFormContainer.style.display = "none";
//             } 

// });



        
// console.log("================== ", event.target) }  ) //Dinosaur.renderDinosaur())

// })
// ======================================================================




//################ validation ################





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


 



  


//   //=====  MezosoicEra GET FETCH PROCESS  ========

// //   const MezosoicEra_URL = "http://localhost:3000/mezosoic_eras" 
// //     console.log("This is Mezosoic Era URL ->", MezosoicEra_URL)


//     const renderMesozoicEra =(mezosoicEraObj)=> {
//         const eraDiv = document.createElement("div")
        
//         // static container = document.getElementById("category-container")
//         // Assigning any classes etc to it
//         ////  - In this case: class="card"
//         eraDiv.classList.add("category-button")
//             eraDiv.setAttribute("data-id", mezosoicEraObj.id)
//             eraDiv.id = mezosoicEraObj.id
    
    
//         // use innerHTML to create the inner elements
//             eraDiv.innerHTML = `
//                 <h2> ${mezosoicEraObj.period} </h2>
//             `

//         //     <div class="category-button">
//         //     <h2> ${mezosoicEraObj.period} </h2>
//         //   </div>
//         const collectionEraDiv = document.querySelector("#era-container")
//         collectionEraDiv.append(eraDiv)
//     }






//     const renderAllMezosoicEra =(mezosoicEraArray)=> {
//         mezosoicEraArray.forEach(mezosoicEraObj => renderMesozoicEra(mezosoicEraObj))
//         }

//     fetch(MESOZOIC_ERA_URL).then(response => response.json())
//     .then(fetchedEra => {console.log(fetchedEra);
//         console.log("ALL Eras comming");
//         renderAllMezosoicEra(fetchedEra)
//     })









// =====  POST FETCH PROCESS  ========


//   Connecting 'JS-Puppet-Strings' to The New Toy Form
//   const newDinoForm = document.querySelector(".add-dino-form")

//   newDinoForm.addEventListener("submit", event =>{ event.preventDefault(); 
//       console.log("**********", event.target)
//       //  THIS IS NOT CODE THAT WILD MAKE THE POST HAPPEN
//       //  This Console.loging The Main Event of Focus:  >>>> "submit" <<<<
      


//     //    Getting User Form Input Data 📋🖋🤪
//       const name = event.target.name.value
//       const image = event.target.image.value
//       const mezosoic_era_id = event.target.mezosoic_era_id.value
//       const diets = event.target.diets.value
//       const height = event.target.height.value
//       const length = event.target.length.value
//       const weight = event.target.weight.value
//       const desc = event.target.desc.value
//         const submit = event.target.submit
//           console.log("SHOW ME SUBMIT - IN THE FORM:  ", submit)
//           //  This will ONLY show up upon hitting  The "SUBMIT" Button


//         }) 

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





