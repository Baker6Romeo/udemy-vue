<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
    <div>
    <button @click="increaseCounter(1)" class="counter-button">{{ counterData.count }}</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import { vAutofocus } from '@/directives/vAutofocus';
  import { useCounter } from '@/use/useCounter';

  const {counterData, increaseCounter} = useCounter()
  const posts = ref([
    {
      id: 1,
      title: 'Post 1',
      body: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace \
      holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab \
      barque interloper chantey doubloon starboard grog black jack gangway rutters."
    },
    {
      id: 2,
      title: 'Post 2',
      body: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable \
      strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me \
      timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black\
       spot yardarm spyglass sheet transom heave to."
    },
    {
      id: 3,
      title: 'Post 3',
      body: "Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shive\
      r me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. \
      Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits."
    },
  ])
</script>

<style>
ul {
  margin-bottom: 20px;
}
.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}
</style>