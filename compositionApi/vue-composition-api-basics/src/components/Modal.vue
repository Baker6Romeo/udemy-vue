<template>
  <teleport to="body">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eius ullam iusto est ipsam recusandae hic animi harum, nisi voluptates veritatis error perferendis. Culpa omnis distinctio corporis quod, molestiae ad?</p>
      <button>Hide Modal</button>
    </div>
    </teleport>
</template>

<style>
  .modal {
    background: beige;
    color: blue;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>