// console.log(Document);
// console.log(document.body)

const blogTittle =  document.getElementsByTagName("h3");
//console.log(blogTittle);
for(let i =0 ; i < blogTittle.length; i++){
    const blog = blogTittle[i];
    console.log(blog.innerText);
}
//for of loop
for (const blog of blogTittle) {
    console.log(blog.innerText);
    
}

//blackground color with for of loop
// const paragraphs = document.getElementsByTagName('p');
//        for (const para of paragraphs) {
//         console.log(para.innerHTML);
//         para.style.backgroundColor = 'yellow';
        
        
//        }

//get elements by class name and change color with classname
const selecteds = document.getElementsByClassName('article-2');
console.log(selecteds);
for (const select of selecteds) {
 console.log(select);
 select.style.color = 'red'; 
}

 //create element new tag
 const h1 = document.createElement('h1');
 h1.innerText = 'Hello World'
 console.log(h1);
 const lastArticle = document.getElementById('article-3');
 lastArticle.appendChild(h1)
 
//create new tag 
 let div = document.createElement('div');
 div.innerText = "create new element";
 document.getElementById('article-3').prepend(div);
 div.style.color = 'blue';
 div.style.fontSize = '80px';



///style will be under all code 
 // design the page
 const designs = document.getElementsByTagName('article');
 for (const design of designs) {
    design.style.border = '9x solid red';
    design.style.margin = '20px';
    design.style.padding = '20px';
     
 }

//  const h3 = document.getElementById('head');
// console.log(h3);
// h3.style.fontSize = '50px';
// h3.style.color = 'gray';
// h3.style.textAlign = 'center';

//document of object model = DOM
/* 
object js
const person = {
    age: 22,
    name: "xx",
}
console.log(person.age);*/


