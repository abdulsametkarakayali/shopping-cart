export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Alert } from '../..\\components\\cart\\Alert.vue'
export { default as Cart } from '../..\\components\\cart\\Cart.vue'
export { default as CartFooter } from '../..\\components\\cart\\CartFooter.vue'
export { default as CartItems } from '../..\\components\\cart\\CartItems.vue'
export { default as Product } from '../..\\components\\product\\Product.vue'
export { default as Products } from '../..\\components\\product\\Products.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyAlert = import('../..\\components\\cart\\Alert.vue' /* webpackChunkName: "components_cart/Alert" */).then(c => c.default || c)
export const LazyCart = import('../..\\components\\cart\\Cart.vue' /* webpackChunkName: "components_cart/Cart" */).then(c => c.default || c)
export const LazyCartFooter = import('../..\\components\\cart\\CartFooter.vue' /* webpackChunkName: "components_cart/CartFooter" */).then(c => c.default || c)
export const LazyCartItems = import('../..\\components\\cart\\CartItems.vue' /* webpackChunkName: "components_cart/CartItems" */).then(c => c.default || c)
export const LazyProduct = import('../..\\components\\product\\Product.vue' /* webpackChunkName: "components_product/Product" */).then(c => c.default || c)
export const LazyProducts = import('../..\\components\\product\\Products.vue' /* webpackChunkName: "components_product/Products" */).then(c => c.default || c)
