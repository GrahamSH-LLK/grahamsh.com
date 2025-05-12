<template>
  <motion.div
    class="text-white flex items-center"
    :whileHover="{ scale: 1.02 }" :initial="{ scale: 1 }"
  >
    <slot />
    <hr class="flex-1 !my-0 ml-2 border-white">
  </motion.div>
</template>

<script lang="ts" setup>
import {motion} from"motion-v";
</script>