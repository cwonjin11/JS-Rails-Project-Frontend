
class MezosoicEra{

    
    constructor(id, period){
        this.id = id,
        this.period = period,
        this.renderMezosoicEra()   // actually show Eras on the web page   // render the instance to the page 
    }


    renderMezosoicEra() {
        const eraHolder = document.getElementById("era-container")
        const eraContainer = document.createElement("div")
        eraContainer.dataset.id = this.id
        eraContainer.classList.add = "all-dinos-rocks"
        eraContainer.innerHTML += this.eraHTML()
        eraHolder.appendChild(eraContainer)
        eraContainer.addEventListener("click", e => { console.log("beep", e.target) 
            if (e.target.className === "category-button")this.showDinosByEraId(e)
        })
    }


    eraHTML(){
        return `
        <!-- <h2> ${this.period} </h2> -->
        <button type="button" class="category-button" data-id=${this.id}>${this.period} </button>
            `
    }


    // fetching shows dinosaurs by era
    showDinosByEraId(e) {   
        let id = e.target.dataset.id         // find the show id from the dataset = e.target.dataset.id
        // ##fetching dinos by era
        fetch(`http://localhost:3000/mezosoic_eras/${id}/dinosaurs`)
        .then(resp => resp.json())
        .then(dinosaurs => { console.log ("fetched Dinos by each period", dinosaurs)
        
        const collectionDiv = document.querySelector("#dino-collection")
        collectionDiv.innerHTML = ""   // make other eras blank
        
        dinosaurs.forEach( dinosaur=> {
            const newDinosaur = new Dinosaur(dinosaur)
            newDinosaur.renderDinosaur(dinosaur)
           
            })
        })
    }
};
























// let newwEra = new MezosoicEra('newwEra') 
// newwEra.renderMezosoicEra()
// console.log(this.period)


    // const renderAllMezosoicEra =(mezosoicEraArray)=> {
    //     mezosoicEraArray.forEach(mezosoicEraObj => renderMesozoicEra(mezosoicEraObj))
    //     }

    // fetch(MESOZOIC_ERA_URL).then(response => response.json())
    // .then(fetchedEra => {console.log(fetchedEra);
    //     console.log("ALL Eras comming");
    //     renderAllMezosoicEra(fetchedEra)
    // })








//     eraHolder.classList.add("category-button")
//     eraHolder.setAttribute("data-id", mezosoicEraObj.id)
//     eraHolder.id = mezosoicEraObj.id


//     // use innerHTML to create the inner elements
//     eraHolder.innerHTML = `
//             <h2> ${mezosoicEraObj.period} </h2>
//         `

//     //     <div class="category-button">
//     //     <h2> ${mezosoicEraObj.period} </h2>
//     //   </div>
//     const collectionEraDiv = document.querySelector("#era-container")
//     collectionEraDiv.append(eraHolder)
// }






// const renderAllMezosoicEra =(mezosoicEraArray)=> {
//     mezosoicEraArray.forEach(mezosoicEraObj => renderMesozoicEra(mezosoicEraObj))
//     }

// fetch(MESOZOIC_ERA_URL).then(response => response.json())
// .then(fetchedEra => {console.log(fetchedEra);
//     console.log("ALL Eras comming");
//     renderAllMezosoicEra(fetchedEra)
// })











//     renderMesozoicEra =(mezosoicEraObj)=> {
//         const eraDiv = document.createElement("div")
//     eraDiv.classList.add("category-button")
//     eraDiv.setAttribute("data-id", mezosoicEraObj.id)
//     eraDiv.id = mezosoicEraObj.id


// // use innerHTML to create the inner elements
//     eraDiv.innerHTML = `
//         <h2> ${mezosoicEraObj.period} </h2>
//     `
//     const collectionEraDiv = document.querySelector("#era-container")
//     collectionEraDiv.append(eraDiv)
    
// }

//     <div class="category-button">
//     <h2> ${mezosoicEraObj.period} </h2>
//   </div>

    // render(){
    //     const btn = document.createElement("button")
    //     btn.className = "category-button"
    //     btn.dataset.id = this.mezosoic_era.id 
    //     btn.innerHTML = this.mezosoic_era.period
    //     this.btn = btn
    //     this.constructor.container.appendChild(btn)
    //   }

    
    //  DON'T need the Function Syntax for
    // sayCatchPhrase(){ 
        
    //     console.log(`${this.catchPhrase}`) 
    
    // }
    //sayCatchPhrase(){ console.log(`${this.catchPhrase}`) }
    // this.catchPhrase = function(){ console.log(`${knownForSaying}`) }





// const allosaurus = new Dinosaur("Allosaurus", "https://www.google.com/search?sxsrf=ALeKk016aMSvhfNfUlk_i-WtS1yT14DukA:1623333394135&q=allosaurus+dinosaur&tbm=isch&source=iu&ictx=1&tbs=simg:CAESlwIJdQqiEbZqgk8aiwILELCMpwgaOgo4CAQSFPoL9Cu3GtgYkQ3bO7klri_16P68-GhqaxAGnIb3cIhvewM86KqINOZkvp6txaMOAuiAFMAQMCxCOrv4IGgoKCAgBEgRMKiD7DAsQne3BCRqrAQohCg1hbmltYWwgZmlndXJl2qWI9gMMCgovbS8waDhtN2NzCicKEXR5cmFubm9zYXVydXMgcmV42qWI9gMOCgwvZy8xaGZfY245azIKHwoMY2FuaW5lIHRvb3Ro2qWI9gMLCgkvbS8wMWN2ODQKHAoJdGhlcm9wb2Rz2qWI9gMLCgkvbS8wMXJ2bmQKHgoMdmVsb2NpcmFwdG9y2qWI9gMKCggvbS8wN3p5MQw&fir=zkZiGE3GWdS5TM%252C2lQNXIOpCtZfdM%252C_&vet=1&usg=AI4_-kSQu60LE1pveyZ6sBa0OcvpGf-JQQ&sa=X&ved=2ahUKEwidorySnI3xAhUQh-AKHflDCAkQ9QF6BAgWEAE#imgrc=zkZiGE3GWdS5TM", "late Jurassic", "meat eater", "17 ft", "40 ft", "4,000 lbs", 4, 4)


// name: "Allosaurus",
// image: "https://www.google.com/search?sxsrf=ALeKk016aMSvhfNfUlk_i-WtS1yT14DukA:1623333394135&q=allosaurus+dinosaur&tbm=isch&source=iu&ictx=1&tbs=simg:CAESlwIJdQqiEbZqgk8aiwILELCMpwgaOgo4CAQSFPoL9Cu3GtgYkQ3bO7klri_16P68-GhqaxAGnIb3cIhvewM86KqINOZkvp6txaMOAuiAFMAQMCxCOrv4IGgoKCAgBEgRMKiD7DAsQne3BCRqrAQohCg1hbmltYWwgZmlndXJl2qWI9gMMCgovbS8waDhtN2NzCicKEXR5cmFubm9zYXVydXMgcmV42qWI9gMOCgwvZy8xaGZfY245azIKHwoMY2FuaW5lIHRvb3Ro2qWI9gMLCgkvbS8wMWN2ODQKHAoJdGhlcm9wb2Rz2qWI9gMLCgkvbS8wMXJ2bmQKHgoMdmVsb2NpcmFwdG9y2qWI9gMKCggvbS8wN3p5MQw&fir=zkZiGE3GWdS5TM%252C2lQNXIOpCtZfdM%252C_&vet=1&usg=AI4_-kSQu60LE1pveyZ6sBa0OcvpGf-JQQ&sa=X&ved=2ahUKEwidorySnI3xAhUQh-AKHflDCAkQ9QF6BAgWEAE#imgrc=zkZiGE3GWdS5TM",
// period: "late Jurassic",
// diets: "meat eater",
// height: "17 ft",
// length: "40 ft",
// weight: "	4,000 lbs",
// offense: 4,
// defense: 4


        // if (e.target.className === "all-dinos") {
        //     console.log("with ======= ", e.target)
        // }
        // if (e.target.matches(".all-dinos")) {
        //     console.log("with === ", e.target)
        // }
        // this.showaDinosByEraId(e) //this.renderDinosaur(e) 


                //     const{id, period, mezosoic_era_id} = dinosaur
        //     // create our new associated muppet objects
        //  let d = new Dinosaur(id, period, mezosoic_era_id)
        //     d.renderDinosaur(dinosaur)