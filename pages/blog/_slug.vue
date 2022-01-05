<template>
  <main>
    <h1 class="font-black text-3xl text-red-400">{{ post.title }}</h1>
    <p class="font-light">By {{ post.author || 'GrahamSH' }}</p>
    <article class="prose-red prose">
      <nuxt-content :document="post" />
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },

  async fetch() {
    let post = await this.$content('blog', this.$route.params.slug).fetch()
    this.post = post
  },
}
</script>
