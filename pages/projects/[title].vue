<template>
    <UCard>
        <h1>Hi I am your project!</h1>
    </UCard>
    </template>

    <script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const projectTitle = route.params.title

console.log("project", projectTitle);
</script>