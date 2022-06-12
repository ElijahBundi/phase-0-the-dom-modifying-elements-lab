// Write your code here!
const Main = document.querySelector('main')
Main.remove()

const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.textContent = 'Elijah_Bundi is the champion'
document.body.append(newHeader)

const element = document.createElement('div')
document.body.append(element)

const ul = document.createElement('ul')
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = (i + 1).toString();
    ul.append(li)
}
element.append(ul)

const title = document.getElementsByTagName('h1')
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

