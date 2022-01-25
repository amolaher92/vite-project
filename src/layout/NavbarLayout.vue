<template>
    <nav class="fixed w-full z-30 top-0 py-5 px-2">
        <div class="container w-full mx-auto flex flex-wrap items-center justify-between mt-0">
            <div class="pl-4 flex items-center">
                <slot name="brand"></slot>
            </div>
            <slot></slot>
        </div>
    </nav>
</template>
<script>
export default {
    name: "NavbarLayout"
}
</script>
