let todo=[
    {
        input:'TO DO',
    },
    {
        input:'IN PROGRESS',
    },
    {
        input:'DONE',
    }
    
]

let obj=todo.map((item)=>{
    return`
<div class="main">
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
    <input type="text" placeholder="What needs to be done?">
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
</div>
</div>`
})

let container=document.querySelector('.main-container')
let add=obj.join('')
// console.log(container)
container.innerHTML=add

let button=document.querySelectorAll('.lower')

button.forEach((item)=>{

    item.addEventListener('click',(e)=>{
         
        let hide=e.target.closest('.cards').nextElementSibling
        hide.classList.toggle('hide')
    })
})

