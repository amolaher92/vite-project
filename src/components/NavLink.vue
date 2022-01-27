<template>
    <ul class="list-reset md:flex justify-end flex-1 items-center">
        <template v-for="(link,index) in links" :key="index">
            <li class="mr-3">
                <router-link class="nav-link" :to="{name:link.slug}">{{link.label}}</router-link>
            </li>
        </template>
    </ul>
</template>
<script>
export default {
    name: "NavLink",
    props: {
        links: {
            type: Array,
            required: true
        },
    }
}
</script>