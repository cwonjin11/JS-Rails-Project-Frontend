class Dinosaur{    //creating dino for the frontend object


    static all = []     ////  state😏🗃 of dinos  -- On the Frontend    ////  similar to  (@@all)
    // whenever we need to add somthing. To pass as whole object, use curly bracket{} for the attributes
    // The constructor method is a special method of a class for creating and initializing an object of that class.
    constructor({id, name, image, mezosoic_era_id, diets, height, size, weight, desc}) {
            this.id = id,
            this.name = name,
            this.image = image,
            this.mezosoic_era_id = mezosoic_era_id,
            this.diets = diets,
            this.height = height,
            this.size = size,
            this.weight = weight,
            this.desc = desc
    }  // ====>> calling this funcition to class API; new Dinosaur(dinosaur) 


// ################## set renderDino #########################

    renderDinosaur = (dinosaur) => { //console.log(dinosaur)
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
        const collectionDiv = document.querySelector("#dino-collection")
    // collectionDiv.innerHTML = ""
        // const collectionDiv = document.querySelector("#dino-collection")
        collectionDiv.append(cardDiv)
        cardDiv.addEventListener('click', e => {
            if (e.target.matches(".delete-btn")) this.deleteDino(e)
            // if (e.target.matches(".edit-btn")) this.editDino(e)

             
        })
    }

    makeACard = () =>{ //console.log(this)
        // get MesozoicEra attribute(in this case period) like MesozoicEra.period //
        let eraName
            if (this.mezosoic_era_id == 1) {eraName = "triassic"}
            else if (this.mezosoic_era_id == 2) {eraName = "Jurassic"}
            else {eraName = "Crateteous"}

        return `
                <div class="flip-card-inner">
                    <div class="flip-card-front" >
                        <img src=${this.image} class="dino-icon" />
                        <h2 >${this.name}</h2>
                    </div>

                    <div class="flip-card-back" >
                        <h3 style="color: #fdc52c;">${this.name}</h3>
                        <p>diet : ${this.diets}</p>
                        <!-- <p>period : ${this.mezosoic_era_id}</p> -->
                        <p>period : ${this.mezosoic_era_id = eraName}</p>
                        <p>height : ${this.height}</p>
                        <p>size : ${this.size}</p>
                        <p>weight : ${this.weight}</p>
                        <p>description : ${this.desc}</p>
                        <!--<button data-id="${this.id}" class="edit-btn"> Edit</button>-->
                        <button data-id="${this.id}" class="delete-btn"> Delete</button>
                    </div>
                </div>
                
        `
    }  //makeACard end
   
// Delete Dinosaur ####
    deleteDino(e) {
        const id = e.target.dataset.id
        const byeDino = document.getElementById(id)
            // fetch(`http://localhost:3000/dinosaurs/${id}`, {
            fetch(`${API.ALL_DINOSAURS_URL}/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(
                byeDino.remove()
                )
    }

}  //end

    // editDino(e) {

    //     const id = e.target.dataset.id
    //     const editDino = document.getElementById(id)
    //     // console.log("sssssss", editDino);
    //     const cardEditingName = editDino.querySelector("h3").innerText
    //     // console.log("letme please", cardEditingName) 

    //     const editForm = document.createElement("form-to-edit")
    //     editForm.innerHTML = `

    //         <br><br>
    //         <h2>Editing This Actor - In index.js🏙:</h2>
    //         <form class="name-change-form">
    //         <br>
    //         <button class="close-button">✖️CLOSE✖️THE✖️EDIT✖️FORM✖️</button>
    //         <br>
    //         <h4>Name:</h4>
    //         <input
    //         type="text"
    //         name="name"
    //         value="${cardEditingName}"
    //         placeholder="${cardEditingName}"
    //         class="input-text-name"
    //         />        
    //           <br />
    //         <h4>Image URL:</h4>
    //         <input
    //         type="text"
    //         name="image"
    //         value=""
    //         placeholder=""
    //         class="input-text-image"
    //         />        
    //           <br />
    //         <input
    //         type="submit"
    //         name="submit"
    //         value="Update Actor Name!!!!"
    //         class="submit-button"
    //         />
    //         </form>
    //         <br><br><br><br>
    
    //         `
    //         editDino.append(editForm)
    //         console.log(">>>>>>>>", editDino)
    //         // fetch(`${API.ALL_DINOSAURS_URL}/${id}`, {
    //         //     method: "PATCH",
    //         //     headers: { "Content-Type": "application/json" },
    //         //     body: JSON.stringify({
    //         //             name: e.target
    //         //     })
    //         // })
    //         // .then(response => response.json())
    //         // .then(
    //         //     byeDino.remove()
    //         //     )

    //             // greaseToggle(e){
    //             //     const id = parseInt(e.target.parentElement.parentElement.id)
              
    //             //     fetch(`http://localhost:3000/hogs/${id}`,{
    //             //       method: 'PATCH',
    //             //       headers: {
    //             //         'Content-Type': 'application/json'
    //             //       },
    //                 //   body: JSON.stringify({
    //                 //     greased: e.target.checked 
    //                 //   })
    //             //   })
    //             // }



    // } //edit end



    



























       
   









//             // #### edit edit edit
//             cardDiv.addEventListener("click", event => {
//                 console.log("lets add edit function here", event.target)
//                 // if(event.target.matches(".edit-btn"))
//                 if(event.target.matches(".myBtn"))
//                     {console.log("🍎🍎🍎🍎🍎here we go yoohoo🍎🍎🍎🍎🍎"), event.target}
        
     

//                 //     //###  ==>>>> rapping the closest card to get that element//
//                     const cardEditing = event.target.closest(".flip-card-inner")
//                     console.log("cardEdiing closest card")
        
//                     const editForm = document.createElement("form")
//                     editForm.innerHTML = `
                

                  
// <br><br>
//                     <h2>Editing This Actor In a Class!✨:</h2>
//                     <form class="name-change-form">
//                     <br>
//                     <button class="close-button">✖️CLOSE✖️THE✖️EDIT✖️FORM✖️</button>
//                     <br>
//                     <h4>Name:</h4>
//                     <input
//                     type="text"
//                     name="name"
//                     value="${cardDiv.querySelector("h2").innerText}"
//                     placeholder="${cardDiv.querySelector("h2").innerText}"
//                     class="input-text-name"
//                     />        
//                       <br />
//                     <h4>Image URL:</h4>
//                     <input
//                     type="text"
//                     name="image"
//                     value="${cardDiv.querySelector("img").src}"
//                     placeholder="${cardDiv.querySelector("img").src}"
//                     class="input-text-image"
//                     />        
//                       <br />
//                     <input
//                     type="submit"
//                     name="submit"
//                     value="Update Actor Name!!!!"
//                     class="submit-button"
//                     />
//                     </form>
//                     <br><br><br><br>







//                         <p>Some text in the Modal..</p>
//                       </div>
                    
//                     </div>



                    
//                     `
                    
                    
//                     console.log("lets see the edit form", editForm)
//                     cardEditing.append(editForm)
//                     console.log(">>>>>>>>>>>>>>>>> you got this edit form", cardDiv)



        
        
//             })





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

