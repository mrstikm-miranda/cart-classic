
const handleCart = () => {
    const doprava = document.querySelector('.extras-wrapper .extra.delivery')
    const cartSummary = document.querySelector('.cart-summary')
    if (doprava && cartSummary) {
        cartSummary.parentElement.insertBefore(doprava, cartSummary)
    }

    const checkoutContent = document.querySelector('#checkoutContent')
    if (checkoutContent) {
        const cartHeader = checkoutContent.querySelector('.cart-header')
        checkoutContent.parentElement.insertBefore(cartHeader, checkoutContent)
    }
    
}
handleCart()
document.addEventListener('ShoptetDOMCartContentLoaded', handleCart)