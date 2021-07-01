class Dinosaur{

    static all = []    
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
    }  



// ################## set renderDino #########################
    renderDinosaur = (dinosaur) => { //console.log(dinosaur)
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("flip-card") //add a class to "div" a "flip-card"
        cardDiv.setAttribute("data-id", dinosaur.id) 
        cardDiv.id = dinosaur.id           
        cardDiv.innerHTML = this.makeACard()  
        document.querySelector("#dino-collection").append(cardDiv)

        cardDiv.addEventListener('click', e => {
            if (e.target.matches(".delete-btn")) API.deleteDino(e)
            if (e.target.matches(".edit-btn")) { 
                const dinoToUpdate = e.target.closest(".flip-card")
                const dinoToEditForm = document.createElement('form')
                const dinoEraDropDownValue = cardDiv.querySelector(".period").dataset.id
                //console.log(dinoEraDropDownValue)        
                dinoToEditForm.innerHTML = `

                    <h2> 🦕 Edit this dino 🦕 </h2>
                    <form class="dino-edit-form">

                    <h3>Dino name:</h3>
                    <input type="text" name="name"
                    value="${cardDiv.querySelector("h2").innerText}"
                    placeholder="${cardDiv.querySelector("h2").innerText}"
                    class="name-edit"/> <br>
                   
                    <h3>Image path:</h3>
                    <input type="text" name="image" 
                    value="${cardDiv.querySelector("img").src}"
                    placeholder="${cardDiv.querySelector("img").src}"
                    class="image-edit"/> <br> 
                    
                    <h3>Era:</h3>
                    <select id="era_dropdown" class="era-edit">
                    <option value="${dinoEraDropDownValue}" selected> ${this.mezosoic_era_id} </option>
                    <option value="1">Triassic</option>
                    <option value="2">Jurassic</option>
                    <option value="3">Cretaceous</option>
                    <!--<option value="" disabled selected>Lived...</option>-->
                    </select>
                    
                    <h3>Height:</h3>
                    <input type="text" name="height"
                    value="${cardDiv.querySelector(".height").innerText}"
                    placeholder="${cardDiv.querySelector(".height").innerText}"
                    class="height-edit"/><br>

                    <h3>Length:</h3>
                    <input type="text" name="size"
                    value="${cardDiv.querySelector(".size").innerText}"
                    placeholder="${cardDiv.querySelector(".size").innerText}"
                    class="size-edit"/><br>

                    <h3>Weight:</h3>
                    <input type="text" name="weight"
                    value="${cardDiv.querySelector(".weight").innerText}"
                    placeholder="${cardDiv.querySelector(".weight").innerText}"
                    class="weight-edit"/><br>

                    <h3>Description:</h3>
                    <input type="text" name="desc"
                    value="${cardDiv.querySelector(".description").innerText}"
                    placeholder="${cardDiv.querySelector(".description").innerText}"
                    class="desc-edit"/><br>

                    <input type="submit" name="submit"
                    value="Update"
                    class="submit-button"/>
                    <button class="close-button-editform">x</button>
                    </form>
              
                    <br><br><br>
                `      
                // prevent to keep append edit form 
                cardDiv.append(dinoToEditForm)
                cardDiv.querySelector(".edit-btn").disabled = true
                const notEdit = dinoToEditForm.querySelector(".close-button-editform")
                notEdit.addEventListener("click", () => {
                    dinoToEditForm.remove()
                    cardDiv.querySelector(".edit-btn").disabled = false
                })


                dinoToEditForm.addEventListener("click", (event) => { event.preventDefault();
                    if(event.target.matches(".submit-button")) {
                        let editedName = dinoToEditForm.querySelector(".name-edit").value
                        let editedImage = dinoToEditForm.querySelector(".image-edit").value
                        let editedEra = dinoToEditForm.querySelector(".era-edit").value
                            console.log("yoyo", editedEra)
                        let editedHeight = dinoToEditForm.querySelector(".height-edit").value
                        let editedSize = dinoToEditForm.querySelector(".size-edit").value
                        let editedWeight = dinoToEditForm.querySelector(".weight-edit").value
                        let editedDescription = dinoToEditForm.querySelector(".desc-edit").value

                        const editedDinoObject = {
                            name: editedName,
                            image: editedImage,
                            mezosoic_era_id: editedEra,
                            height: editedHeight,
                            size: editedSize,
                            weight: editedWeight,
                            desc: editedDescription
                        }

                        const id = e.target.dataset.id
                        fetch(`${API.ALL_DINOSAURS_URL}/${id}`, {  // this url ok? not mezosoic era url??
                        // const id = e.target.dataset.id
                        // console.log(editedEra)
                        // fetch(`${API.MESOZOIC_ERA_URL}/${editedEra}`, {  // this url ok? not mezosoic era url??
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(editedDinoObject)
                        })
                        .then(resp => resp.json())
                        .then(editedDino => { console.log(editedDino)

                            let eraName   
                            // console.log(eraName)
                            if (editedDino.mezosoic_era_id == 1 ) {eraName = "Triassic"}
                            else if (editedDino.mezosoic_era_id  == 2) {eraName = "Jurassic"}
                            else if (editedDino.mezosoic_era_id  == 3) {eraName = "Cretaceous"}
                            // console.log(eraName)

                            dinoToUpdate.querySelector("h2").innerText = editedDino.name
                            dinoToUpdate.querySelector("h3").innerText = editedDino.name
                            dinoToUpdate.querySelector("img").src = editedDino.image
                            dinoToUpdate.querySelector(".period").innerText = eraName
                            // console.log("showme", eraName)
                            dinoToUpdate.querySelector(".height").innerText = editedDino.height
                            dinoToUpdate.querySelector(".size").innerText = editedDino.size
                            dinoToUpdate.querySelector(".weight").innerText = editedDino.weight
                            dinoToUpdate.querySelector(".description").innerText = editedDino.desc
                        })
                        .then(dinoToEditForm.remove())
                        cardDiv.querySelector(".edit-btn").disabled = false
                    }
                })
            } //this.editDino(e)
        })
    }
 
    
    makeACard = () =>{ //console.log(this)

        let eraName 
            if (this.mezosoic_era_id == 1 ) {eraName = "Triassic"}
            else if (this.mezosoic_era_id == 2) {eraName = "Jurassic"}
            else {eraName = "Cretaceous"}

        return `
        <!-- <div class="flip-card"> -->
          
                <div class="flip-card-inner">
                    <div class="flip-card-front" >
                        <img src=${this.image} class="dino-icon" />
                        <h2>${this.name}</h2>
                    </div>

                    <div class="flip-card-back" >
                        <h3 style="color: #fdc52c;">${this.name}</h3>
                        Diet : <p style="display:inline" class="diet">${this.diets}</p><br>
                        <!-- <p>period : ${this.mezosoic_era_id}</p> -->
                        Period : <p data-id="${this.mezosoic_era_id}" style="display:inline" class="period">${this.mezosoic_era_id=eraName}</p><br>
                        Height : <p style="display:inline" class="height">${this.height}</p><br>
                        Length : <p style="display:inline" class="size">${this.size}</p><br>
                        Weight : <p style="display:inline" class="weight">${this.weight}</p><br>
                        Description :  <p style="display:inline" class="description">${this.desc}</p>
                        <button data-id="${this.id}" class="edit-btn"> Edit</button>
                        <button data-id="${this.id}" class="delete-btn"> Delete</button>  
                  
                    </div>
                </div>
                
              <!--  </div>--> 
        
                
        `
    }  //makeACard end
   


// // Delete a Dinosaur ####
//     deleteDino(e) {
//         const id = e.target.dataset.id
//         const byeDino = document.getElementById(id)
//             // fetch(`http://localhost:3000/dinosaurs/${id}`, {
//             fetch(`${API.ALL_DINOSAURS_URL}/${id}`, {
//                 method: "DELETE",
//                 headers: { "Content-Type": "application/json" }
//             })
//             .then(response => response.json())
//             .then( 
//                 byeDino.remove() //or e.target.closest(".flip-card").remove()
//                 )
//     }


   

    

}  // #########Class end



























        // collectionDiv.innerHTML = ""
        // const collectionDiv = document.querySelector("#dino-collection")

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
    //             //     const id = parseInt(e.target.parentElement.parentElement.id)  <== parseInt => to.i in ruby
              
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

