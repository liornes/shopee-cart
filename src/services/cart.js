// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// exclui um item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index != -1) {
        userCart.splice(index, 1);
    }
}

// tira uma unidade de item do carrinho
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    console.log(indexFound);
    
    if(indexFound == -1) {
        console.log('Item não encontrado');
        return;
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    } 
    
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("Shopee cart list:");

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}

// calcular o total de um carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    
    console.log("\nShopee cart total is: ");

    console.log(`Total: R$ ${result}`);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}