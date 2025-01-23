<template>
  <div class="post-detail">
    <h1>Posts</h1>
    <p>Display the content of post wit ID of {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHome">Go home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';


  const route = useRoute();
  const router = useRouter();

  const goHome = () => {
    setTimeout(() => {router.push("/");}, 3000);    
  }
  const goToFirstPost = () => {
    router.push({
      name: 'postDetail',
      params: {
        id: '1'
      }
    })
  }
  const showPostId = () => {
    console.log(route.params.id);
    alert(route.params.id);
  }
</script>