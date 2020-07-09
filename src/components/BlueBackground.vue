<template>
    <h1>{{ msg }}</h1>
</template>

<script>
/* eslint-disable indent */
export default {
    name: 'blue-background',
    data() {
        return {
            msg: 'I have a blue background',
        };
    },
};
</script>

<style scoped>
    body {
        background: blue;
    }
    h1 {
        color: orange;
    }
</style>