<template>
    <div>
            <a :href="props.site" target="_blank">
                <img :src="props.imageUrl"/>
            </a>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        site: string,
        imageUrl: string
    }>()
</script>