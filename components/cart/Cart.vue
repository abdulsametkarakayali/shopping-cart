<template>
     <div class="cart-container card shadow">
         <h3 class="text-center ">Sepet</h3>
         <Alert/>
         <Cart/>
         <CartFooter/>
     </div>
</template>
<script>
import Alert from "@/components/cart/Alert"
import Cart from "@/components/cart/Cart"
import CartFooter from "@/components/cart/CartFooter"
export default {
    component:{
        Alert,
        Cart,
        CartFooter
    }
    
}
</script>