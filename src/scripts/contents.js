import momo from '../assets/momo.jpg';
import chef from '../assets/chef.png';
import chowmein from '../assets/chowmein.jpg';
import chickenRice from '../assets/chickenRice.jpg';

const contentCre = (() => {
    
    let id;

    const getId = (idfw) => {
        
        if (idfw) id = idfw;

    }


    const home = () => {
        const home = document.getElementById(id);
        home.textContent="";
        const img = document.createElement('img');
        img.src = chef;
        img.alt = `asldjkhlak`;
        home.appendChild(createParagraph('Best Food money can buy.'))
        home.appendChild(img);
        home.appendChild(createParagraph('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error, hic ex iusto excepturi quae doloribus quam quia reiciendis, commodi enim omnis consequatur incidunt asperiores quas placeat, minus deserunt numquam.'));

    }

    const contact = (id) => {
        const contact = document.getElementById(id);
        contact.textContent="";
        const h1 = document.createElement('h1');
        h1.textContent = "Reach us at";
        const divCon = document.createElement('div');
        divCon.classList.add('contacts');
        divCon.innerHTML = '<div>Phone Number: +9771234567890</div> <div>Address: 123 Galli</div> <div>Email: sm1@earth.com</div>';
        contact.appendChild(h1);
        contact.appendChild(divCon);
    }

    const menu = (id) => {
        const menu = document.getElementById(id);
        menu.textContent="";
        const h1 = document.createElement('h1');
        h1.textContent = `We make the best foods.`;
        menu.appendChild(h1);
        const foods = document.createElement('div');
        foods.setAttribute('style', 'backdrop-filter: blur(2px);');
        foods.classList.add('foods');
        const momoItem = foo(momo);
        momoItem.appendChild(createParagraph(`Delicious momo`));
        const chowmeinItem = foo(chowmein);
        chowmeinItem.appendChild(createParagraph(`Delicious chowmein`));
        const chickenItem = foo(chickenRice);
        chickenItem.appendChild(createParagraph(`Delicious Chicken Rice Curry`));
        const foodsArr = [momoItem, chowmeinItem, chickenItem];
        
        for (let i=0; i < foodsArr.length; i++)  {
            foods.appendChild(foodsArr[i]);
        }

        menu.appendChild(foods);
    }

    return {
        home,
        contact,
        menu,
        getId
    }

})();


function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}

function foo (item) {
    const food = document.createElement('div');
    food.classList.add(`${item}`);
    const image = document.createElement('img');
    image.src = item;
    food.appendChild(image);
    return food;
}



export default contentCre