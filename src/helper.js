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