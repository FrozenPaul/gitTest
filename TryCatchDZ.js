const div = document.querySelector("div");
const form = document.forms[0];

const input = form.elements.url;


function loadImage() {
    const img = document.createElement('img');
    div.innerHTML = "";
    try {
        if (input.value.length == 0) {
            throw new Error("Форма ввода пуста");
        }
        img.src = input.value;

        div.append(img);
    } catch (error) {
        div.innerText = error.message + "\n" + error.stack;
    }

    event.preventDefault();
}

form.addEventListener("submit", loadImage);

function showModal(header, footer, content) {
    const div = document.createElement('div');
    div.style.height = "200px";
    div.style.position = 'absolute';
    div.style.width = "400px";
    //div.style.opacity = 0.5;
    // document.body.style.opacity = 0.5;
    div.style.left = "50%";
    div.style.top = "50%";
    div.style.marginLeft = "-200px";
    div.style.marginTop = '-100px';
    div.innerHTML = `<form action="" name = "myForm">
                        <input type="text" name="message" placeholder="Введите сообщение">
                        <input type="submit" name="send" value="Отправить">
                    </form>`;
    const form = document.forms[0];
    const input = form.elements.message;
    

    document.body.append(div);
}

const secondButton = document.querySelector('button');
secondButton.addEventListener('click', showModal);