// 2WAYアロマバンド用

const aromaButton = document.querySelector(".aroma-btn");

aromaButton.addEventListener("click", () => {

    alert(
        "2WAYアロマバンドは4個欲しいです！\n\nお花柄が無かったら別の柄でもOK♪"
    );

});
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // すでに追加済みなら何もしない
        if (button.classList.contains("added")) {
            return;
        }

        // ボタン変更
        button.textContent = "追加済";
        button.classList.add("added");

        // アロマバンドだけ特別処理
        if (button.classList.contains("aroma-btn")) {

            const card = button.closest(".product-card");

            const message = document.createElement("p");

            message.classList.add("message");
            message.textContent = "🌷 4個欲しいです！";

            card.appendChild(message);
        }
    });

});
