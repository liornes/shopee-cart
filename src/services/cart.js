// adicionar item no carrinho
function addItem(userCart, item) {
    userCart.push(item);
}

// exclui um item do carrinho
function deleteItem(userCart, itemName) {

}

// tira uma unidade de item do carrinho
function removeItem(userCart, index) {

}

// calcular o total de um carrinho
function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(result);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}