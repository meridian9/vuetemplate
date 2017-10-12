<template>
    <div class="box">
        {{ message }}
        <router-link to="/settings">Go to Foo</router-link>
    </div>
     
</template>

<script>
export default {
    data: function() {
        return {
            message: 'Hello, VueJS!'
        }
    },

    // *******************************************************************
    // Example - call a webservice on component creation to get some data
    // created: function() {
    //     this.$http.get('/api/endpoint')
    //         .then(response => {
    //             this.message = response.data[0];
    //         });
    // }
    // *******************************************************************
}
</script>

<style scoped>
.box
{
    font-size: 1.5em;
}
</style>