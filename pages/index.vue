<template>
  <MainLayout>
    <ul class="options">
      <li>
        <NuxtLink to="/custom-game" class="btn">{{ $t('newGame') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/canasta" class="btn">Canasta</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink
          to="/custom-game?type=teams&num-players=2&name=Team+1&name=Team+2&game=cumulated&gameName=Canasta"
          class="btn"
          >Canasta</NuxtLink
        >
      </li> -->
    </ul>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout/MainLayout.vue';
</script>

<style lang="scss" scoped>
.options {
  display: flex;
  margin: auto 12px 48px;
  padding: 0;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;

  li {
    width: 40%;
  }

  .btn {
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: center;
  }
}
</style>
