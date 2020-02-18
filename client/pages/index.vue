<template>
  <div class="container bg-secondary">
    <div class="row text-center">
      <div class="col">
        <h1 class="text-primary">Hello world!</h1>
      </div>
    </div>
    <div class="row">
      <template v-for="post in posts">
        <div class="col mx-3 my-2 bg-light">
          {{post.title}}
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData({$axios}) {
    const posts = await $axios.$get("/posts")
    return {
      posts
    }
  }
}
</script>