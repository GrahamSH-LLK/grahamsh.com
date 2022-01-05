<template>
  <nuxt-link
    class="rounded-md bg-blue-100 border-blue-200 border border-solid p-2 font-bold text-blue-700"
    :to="to"
    ><slot
  /></nuxt-link>
</template>
<script>
export default {
  props: ['to'],
}
</script>
