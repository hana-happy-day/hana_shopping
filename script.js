// 2WAYアロマバンド用

const aromaButton = document.querySelector(".aroma-btn");

aromaButton.addEventListener("click", () => {

    alert(
        "2WAYアロマバンドは4個欲しいです！\n\nお花柄が無かったら別の柄でもOK♪"
    );

});

// 合計金額
let total = 0;
const totalPrice = document.querySelector("#total-price");

const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // すでに追加済みなら何もしない
        if (button.classList.contains("added")) {
            return;
        }

        // ====================
        // 金額加算
        // ====================

        const card = button.closest(".product-card");

        const priceText =
            card.querySelector(".price").textContent;

        let price = Number(
            priceText
                .replace("¥", "")
                .replace(/,/g, "")
        );

        // アロマバンドだけ4個分
        if (button.classList.contains("aroma-btn")) {
            price = price * 4;
        }

        total += price;

        totalPrice.textContent =
            `¥${total.toLocaleString()}`;

        // ====================
        // ボタン変更
        // ====================

        button.textContent = "追加済";
        button.classList.add("added");

        // アロマバンドだけ特別処理
        if (button.classList.contains("aroma-btn")) {

            const message = document.createElement("p");

            message.classList.add("message");
            message.textContent = "🌷 4個欲しいです！";

            card.appendChild(message);
        }

        // スピードドライヤーの処理
        if (button.classList.contains("speed-btn")) {

            const message = document.createElement("p");

            message.classList.add("message");
            message.textContent =
                "水筒に使えそうだったら欲しい！\n軽すぎて使えなさそうならいらないよ";

            card.appendChild(message);
        }

    });

});
