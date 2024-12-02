const btnadd = document.querySelector("button");
const listgroup = document.getElementById("listgroup")

const inputText = document.querySelector('.inputText')

btnadd.addEventListener('click', (e)=>{
    e.preventDefault();
    if(inputText.value.length >0 && inputText.value.length<=50){
        //
        const listitem = document.createElement('div');
        const starIcon = document.createElement('span');
        const parg = document.createElement('p');
        const divIcon = document.createElement('div');
        const trashIcon = document.createElement('span');
        const angryIcon = document.createElement('span');

        //class
        listitem.classList.add('list-item');
        starIcon.classList.add('icon-star');
        trashIcon.classList.add('icon-trash');
        angryIcon.classList.add('icon-angry2');

        //
        parg.textContent = inputText.value;

        //
        listitem.appendChild(starIcon);
        listitem.appendChild(parg);
        listitem.appendChild(divIcon);
        divIcon.appendChild(trashIcon);
        divIcon.appendChild(angryIcon);
        listgroup.appendChild(listitem);

        //
        angryIcon.addEventListener('click', () => {
            angryIcon.classList.toggle('icon-angry2');
            angryIcon.classList.toggle('icon-heart');
        });
        starIcon.addEventListener('click', () => {
            starIcon.classList.toggle('icon-star-highlighted');
        });

        trashIcon.addEventListener('click',()=>{
            listitem.remove()
        })
    


        
    }
    
})