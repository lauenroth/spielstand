<template>
  <button :type="isSubmitButton ? 'submit' : 'button'" @click="$emit('onClick')" :class="{ fullwidth: fullWidth }">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface ButtonProps {
  fullWidth?: boolean;
  isSubmitButton?: boolean;
}

defineProps<ButtonProps>();

defineEmits(['onClick']);
</script>

<style lang="scss" scoped>
.button,
button {
  background-color: rgb(93, 134, 197);
  border: none;
  border-radius: 4px;
  color: #dddfed;
  cursor: pointer;
  font-size: 1rem;
  padding: 12px 24px;
  text-decoration: none;
  transition: background-color 0.25s;

  &:hover {
    background-color: rgb(93, 134, 197, 0.8);
  }

  &:disabled {
    background-color: #999;
    color: #ccc;
    cursor: not-allowed;

    &:hover {
      background-color: #888;
    }
  }

  &.fullwidth {
    width: 100%;
  }
}
</style>
