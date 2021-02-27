// import $ from "jquery";

if (window.location.toString().indexOf("bot.html") > 0) {
    let finishPromt = function (data) {
        alert(data);
    };

    let checkPrompt = function (callback) {
        let a = prompt("Please enter correct password", "");

        if (a != 123456) {
            checkPrompt(finishPromt);
        } else {
            alert("Welcome Back !");
        }
    };
    checkPrompt(finishPromt);

    function sendMessage(method, url) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";

        xhr.onload = () => {
            if (xhr.status < 400) {
                console.log(xhr.response);
            } else {
                console.log(xhr.response, xhr.status);
            }
        };

        xhr.onerror = () => {
            console.error(xhr.response, xhr.status);
        };

        xhr.open(method, url);
        xhr.send();
    }

    document.querySelector(".tg__button").addEventListener("click", function (e) {
        e.preventDefault();
        const chatId = 423357424;
        const token = "1606442807:AAH-d2_0mmkacazQzsdGbnoUQB0uDruyuHs";
        const sendText = document.querySelector(".tg__input").value;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${sendText}`;
        sendMessage("GET", url);
        clear();
    });

    function clear() {
        document.querySelector(".tg__input").value = "";
    }
}
