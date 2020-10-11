<template>
     <div class="product-container card shadow mr-5">
            <h3 class="text-center">Ürün Listesi</h3>
             <div class="list-group">
             <Product v-for="index in 5" :key="index"/>
             </div>
     </div>
</template>
<script>
import Product from '@/components/product/Product'
export default {
    components:{
        Product
    }
    
}
</script>