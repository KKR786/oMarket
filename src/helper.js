import { getProduct } from "./queries";

export const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndex = cart.findIndex(item => item.id === id);

    if (productIndex === -1) {
        cart.push({ id, quantity: 1 });
    } else {
        cart[productIndex].quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCartProducts = async (cart) => {
    const products = [];

    for( let i = 0; i < cart.length; i++ ) {
        products.push(await getProduct(cart[i].id));
    }
    
    return products;
}