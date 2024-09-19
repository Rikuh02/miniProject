const add = document.getElementById('btn-add'); //adicionar

const note = JSON.parse(localStorage.getItem('notes'));

if(note){
    note.forEach(e => addNewNote(e));//chamar o evento
};

add.addEventListener('click', ()=> addNewNote()); // chama a função de criar notas

//criar notas e alterar
function addNewNote(text = ''){
    const notes = document.createElement('div');
    notes.setAttribute('class','notes');

    notes.innerHTML = ` 

        <div class="content-top">
            <button id="edit"><i class='bx bxs-edit-alt'></i></button>
            <button id="trash"><i class='bx bxs-trash-alt'></i></button>
        </div>

        <div class="box ${text ? "" : "hidden"}"></div>
        <textarea class="content ${text ? "hidden" : ""}" id="content"></textarea>

    `;

    const edit = notes.querySelector('#edit'); //btn
    const trash = notes.querySelector('#trash'); //btn
    const content = notes.querySelector('#content'); //textArea
    const conteiner = document.getElementById('notes-conteiner'); //conteiner
    const box = notes.querySelector('.box'); // box
    
    content.value = text;
    box.innerHTML = marked(text);

    //btn remover
    trash.addEventListener('click', ()=>{
        notes.remove();
        update();
    });

    //btn edit(toggle)
    edit.addEventListener('click',()=>{
        box.classList.toggle('hidden');
        content.classList.toggle('hidden');
    });

    //text
    content.addEventListener('input', (e)=>{
        const {value} = e.target;

        box.innerHTML = marked(value);
        update();
    });

    conteiner.appendChild(notes);

};

function update(){
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes));
}
