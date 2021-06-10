//  BASELINE BUILD - RECOMMENDED START UP

document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )
////  'Listen To TheDOM🌌🧘🌠👁✨'


document.addEventListener("DOMContentLoaded", function(){ console.log("🦕🦕Dinosaurs Showtime🦖🦖") })


// to make fetching easy, we define our routes as API_DATABASE_URL and use this in later for fetching
const API_DATABASE_URL = "http://localhost:3000/dinosaurs"
  console.log("This is our Dinos Database URL ->", API_DATABASE_URL)


// ################## set renderDino #########################
const renderDinosaur =(dinosaurObj)=> {

    // Display a Card for each Toy
    // Create the Outer Wrapping/Containing Element 
    ////  - In this case a <div>
    const cardDiv = document.createElement("div")

    // Assigning any classes etc to it
    ////  - In this case: class="card"
    cardDiv.classList.add("card")

      cardDiv.setAttribute("data-id", dinosaurObj.id)
      cardDiv.id = dinosaurObj.id


    // use innerHTML to create the inner elements
    cardDiv.innerHTML = `
        <h2>${dinosaurObj.name}</h2>
        <img src=${dinosaurObj.image} class="toy-avatar" />
        <p>period : ${dinosaurObj.period}</p>
        <p>diets : ${dinosaurObj.diets}</p>
        <p>height : ${dinosaurObj.height}</p>
        <p>length : ${dinosaurObj.length}</p>
        <p>weight : ${dinosaurObj.weight}</p>
        <p>offense : ${dinosaurObj.offense}</p>
        <p>defense : ${dinosaurObj.defense}</p>

      `

    //   <button data-id="${dinosaurObj.id}" class="like-btn">Like ❤️</button>
    //   <button data-id="${dinosaurObj.id}" class="delete-btn"> DELETE🚁💫🚂? </button> 
    
    // SSSlap it on the DOM (toy-collection)
    const collectionDiv = document.querySelector("#toy-collection")
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
fetch(API_DATABASE_URL).then(response => response.json())
// .then(console.log) // this last .then is what we are going to decide to do with our data
// .then(console.log()) // this last .then is what we are going to decide to do with our data
// .then(whatwefetched => {console.log(whatwefetched)}) // this last .then is what we are going to decide to do with our data
.then(fetchedArray => {console.log(fetchedArray); // this last .then is what we are going to decide to do with our data

    renderAllDinosaurs(fetchedArray)
    // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 

  }) 

  // ###########################################