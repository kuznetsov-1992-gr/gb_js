<template>
    <div class="goods-list">
        <GoodsItem v-bind:key="good.id_product" v-for="good in goods" v-bind:good="good"></GoodsItem>
    </div>
</template>
<script>



export default{
  
    name: 'GoodList'
}
</script>
