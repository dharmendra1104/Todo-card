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

todo.forEach((item) => {
    let cardContainer = document.createElement('div');
    cardContainer.className = 'main';

    let cardHTML = `
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

    cardContainer.innerHTML = cardHTML;
    centralContainer.appendChild(cardContainer);
    let cards=document.querySelector('.cards')

    let input = cardContainer.querySelector('.myinput');
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            let value = input.value;
            let newCard = document.createElement('div');
            newCard.innerText = value;
            newCard.className = 'new-card';
            newCard.style.padding = '10px';
            newCard.style.borderRadius = '10px';
            newCard.style.marginTop = '5px';
            newCard.style.background = '#068FFF';

            cards.appendChild(newCard);
        }
    });

    let button = cardContainer.querySelector('.lower');
    button.addEventListener('click', (e) => {
        let hide = e.target.closest('.cards').nextElementSibling;
        hide.classList.toggle('hide');
    });
});