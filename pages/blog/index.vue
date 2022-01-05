<template>
  <div>
    <main>
      {{ /* blog header */}}
      <div>
        <span class="font-black text-4xl"
          >Read my <span class="text-red-400">Blog</span>.
        </span>
      </div>
      {{ /* Posts */}}
      <div class="flex my-4 flex-wrap">
        <div
          class="p-4 border-blue-200 border border-solid bg-blue-100 rounded-md w-72 m-2 flex-wrap"
          v-for="post of posts"
          :key="post.slug"
        >
          <h1 class="font-bold text-2xl text-red-500 mb-1">
            <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
          </h1>
          <span class="font-light mb-1">By {{ post.author }}</span>
          <p>{{ post.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    let posts = await this.$content('blog').fetch()
    this.posts = posts
  },
}
</script>
