let title = document.querySelector(".main_heading")
let newName = "A Common Name"
let index = 1;

const typingEffect = () => {
    let name = newName.slice(0, index)
    title.innerHTML = name
    index++;
    console.log(index);

    setInterval(() => {
        typingEffect()
    }, 1000);
}

typingEffect()