document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.querySelector(".add-to-cart");
    const cartCount = document.querySelector("#cart-count");
    let count = 0;

    addToCartButton.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
        alert("商品已加入购物车！");
    });
});