
// console.log("where is my dinosaurs");



class Dinosaur{    //creating dino for the frontend object


    static all = []     ////  state😏🗃 of our Actors  -- On the Frontend    ////  similar to  (@@all)

    // whenever we need to add somthing. To pass as whole object, use curl bracket{} for the attributes
    constructor({id, name, image, mezosoic_era_id, diets, height, length, weight, desc}){

            this.id = id,
            this.name = name,
            this.image = image,
            this.mezosoic_era_id = mezosoic_era_id,
            this.diets = diets,
            this.height = height,
            this.length = length,
            this.weight = weight,
            this.desc = desc

                // this.catchPhrase = knownForSaying

        Dinosaur.all.push(this)
        //  Actor.all[]  <<  this  ~  @actor

    }  // ====>> calling this funcition to class API; new Dinosaur(dinosaur) 


    makeACard = () =>{ //console.log(this)
        return `
        
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src=${this.image} class="toy-avatar" />
                        <h2 >${this.name}</h2>
                    </div>

                    <div class="flip-card-back">
                        <h3 style="color: #fdc52c;">${this.name}</h3>
                        <p>diet : ${this.diets}</p>
                        <p>period : ${this.mezosoic_era_id}</p>
                        <p>height : ${this.height}</p>
                        <p>length : ${this.length}</p>
                        <p>weight : ${this.weight}</p>
                        <p>description : ${this.desc}</p>
                        <button data-id="${this.id}" class="delete-btn"> Delete</button>
                    </div>
                </div>

                
         `
}



// ################## set renderDino #########################

renderDinosaur = (dinosaur) => {
    // Create the Outer Wrapping/Containing Element 
    ////  - In this case a <div>
    const cardDiv = document.createElement("div")

    // Assigning any classes etc to it
    ////  - In this case: class="card"
        cardDiv.classList.add("flip-card")
         cardDiv.setAttribute("data-id", dinosaur.id)
        //  adding an (id=) to (cardDiv) 
         cardDiv.id = dinosaur.id

    // use innerHTML to create the inner elements
        cardDiv.innerHTML = this.makeACard()
        // console.log(cardDiv)
        //  cardDiv.innerHTML = `




    const collectionDiv = document.querySelector("#dino-collection")
    collectionDiv.append(cardDiv)


}



    // delete our hogs
    // deleteHog(e){
    //     const id = parseInt(e.target.parentElement.id)
    //     fetch(`http://localhost:3000/dinosaurs/${id}`,{
    //       method: 'DELETE'
    //     })
    //     .then(() => {
    //       document.getElementById('hog-container').removeChild(document.getElementById(id))
    //     })
    //   }




}
