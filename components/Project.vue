<template>
  <motion.div
    :whileHover="{ scale: 1.02 }"
    :initial="{ scale: 'none' }"
  >
    <a :href="link" class="no-underline font-normal">
      <img v-if="image" :src="`/${image}.png`" />
      <div class="text-white flex items-center font-bold">
        {{ title }}
        <hr class="flex-1 !my-0 ml-2 border-white" />
      </div>
      {{ description }}
    </a></motion.div
  >

</template>

<script setup lang="ts">
import { motion } from 'motion-v'
defineProps<{
  title: string
  description: string
  link: string
  image?: string
}>()
</script>
