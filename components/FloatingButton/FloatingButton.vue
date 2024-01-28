<template>
  <button type="button" @click="$emit('onClick')">+</button>
</template>

<script lang="ts" setup>
defineEmits(['onClick']);
</script>

<style lang="scss" scoped>
button {
  all: unset;
  align-items: center;
  background-color: #5d86c5;
  border-radius: 50%;
  bottom: 1rem;
  color: #eee;
  cursor: pointer;
  display: flex;
  font-size: 1.8rem;
  height: 65px;
  justify-content: center;
  position: fixed;
  right: 1rem;
  width: 65px;
}
</style>
