let todo = [
    {
        input: 'TO DO',
    },
    {
        input: 'IN PROGRESS',
    },
    {
        input: 'DONE',
    }
];

let centralContainer = document.querySelector('.main-container');

let draggingInfo = {
    draggingElement: null,
    draggingId: null,
}

todo.forEach((item, index) => {
    let cardContainer = document.createElement('div');
    cardContainer.className = 'main';

    let card = `
      <div class="cards">
          <nav class="nav">
           <div class="head">
              <p><i class="fa-solid fa-braille"></i></p>
              <input type="text" placeholder="${item.input}">
              <p>0</p>
           </div>
           <p><i class="fa-solid fa-down-left-and-up-right-to-center"></i></p>
           <p><i class="fa-solid fa-ellipsis"></i></p>
          </nav>
         <div class="lower">
         <button class="btn"><i class="fa-solid fa-plus"></i></button>
          <h6>Create</h6>
         </div>
         <div class="box" id=${index}></div>
      </div>
      <div class="text-box hide">
          <input type="text" placeholder="What needs to be done?" class="myinput">
          <div class="task-card">
              <div class="task">
                  <span class="icon"><i class="fa-regular fa-square-check"></i></span>
                  <h6>Task</h6>
                  <span><i class="fa-solid fa-angle-down"></i></span>
              </div>
              <div class="creat">
                  <h6>Create</h6>
                  <span class="icons"><i class="fa-solid fa-left-long"></i></span>
              </div>
          </div>
      </div> `;

    cardContainer.innerHTML = card;
    centralContainer.appendChild(cardContainer);

    let box = cardContainer.querySelector('.box')
    let textbox = cardContainer.querySelector('.text-box');
    let input = cardContainer.querySelector('.myinput');
    

    input.addEventListener('keyup', (e) => {
        input.focus()
        if (e.keyCode === 13) {  
            let value = input.value;
            let newCard = document.createElement('div');
            newCard.innerText = value;
            newCard.className = 'new-card';
            newCard.setAttribute('data-container', 'card')
            newCard.draggable = 'true'
            let target = e.target
            console.log(target)
            box.appendChild(newCard);

            newCard.addEventListener('dragstart', (e) => {
                // console.log('hello')
                draggingInfo.draggingElement = e.target
                draggingInfo.draggingId = e.target.getAttribute('data-container')
                console.log(draggingInfo.draggingElement, draggingInfo.draggingId)
            })

            textbox.classList.add('hide')
            input.classList.remove('hide')

            // input.value = ''
            // input.value = ''
            let parentContainer = e.target.parentElement.previousElementSibling.lastElementChild
            console.log(parentContainer)

            parentContainer.appendChild(newCard)
            e.target.value = ''

        }
    });


    let button = cardContainer.querySelector('.lower');
    button.addEventListener('click', (e) => {
        // ......
        // input.focuson()
        let hide = e.target.closest('.cards').nextElementSibling;
        hide.classList.toggle('hide');
        
        let input = hide.querySelector('.myinput');
        input.focus();
    });
});

let allcards = document.querySelectorAll('.box')
allcards.forEach((item) => {
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    item.addEventListener('drop', (e) => {
        // console.log('dropping card')
        let card = draggingInfo.draggingElement;
        // card.id = draggingInfo.draggingId;
        let box = e.currentTarget;
        //   console.log(box)
        box.appendChild(card)
       
    });

});