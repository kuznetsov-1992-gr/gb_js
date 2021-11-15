<template>
    <div class="error-element" >
        <p>{{error}}</p>
    </div>
</template>

<script>
import Home from '../views/Home.vue'

export default {
    name: 'ErrorElment',
    components: {
        Home
    },
    props: ['error' , 'error-visible'],
}
</script>
