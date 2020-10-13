<template>
    <ul class="list-group list-group-flush">
       <li class="list-group-item">
          <slot name="title"></slot>
          <slot name="content"></slot>
       </li>
      </ul>
</template>
<script>
export default {
    props: ['link']
}
</script>
<style scoped>
  .mb-2{
    padding-top: 40px;
    height: 100%;
  }
</style>
