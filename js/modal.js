const openModal = (p) => {

    let padre = document.getElementById(p);

    if(padre){
        padre.addEventListener('click',e=>{
            let elementP = e.target;//elemento pulsado
            if(elementP.tagName === 'IMG'){
                //creamos el modal
                let modal = createModal(elementP);

                document.body.appendChild(modal);
                document.body.classList.add("scrollOff");

                let close = modal.querySelector(".close-modal");    

                close.addEventListener("click",j=>{
                    document.body.removeChild(modal);
                    document.body.classList.remove("scrollOff");
                });

            }
        });
    }

   

};

const createModal = (img)=>{
    //create modal
    let modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
    modalContainer.innerHTML = `
        <div class="modal-content">
            <div class="modal-inner">
                <div class="header">
                    <p class="modal-title t2">${img.alt}</p>
                </div>
                <div class="body">
                    <img class="modal-img" src=${img.src} alt=${img.alt}>
                </div>
                <div class="footer">
                    <p class="txt-footer">${img.width} * ${img.height}</p>
                </div>
            </div>
        </div>
        <div class="close-modal">x</div>
    `;
    return modalContainer;
}

openModal("publicaciones");