<template>
  <header class="main">
    <h1>
      <NuxtLink to="/">{{ title ?? $t('title') }}</NuxtLink>
    </h1>
    <button @click="showSettings = true" aria-label="Menu"><span /></button>
  </header>
  <main>
    <slot />
  </main>

  <Settings :show="showSettings" @onClose="showSettings = false" />

  <div class="bg" @click="showSettings = false" :class="{ show: showSettings }" />
</template>

<script lang="ts" setup>
import Settings from '../Settings/Settings.vue';
import '~/assets/css/main.css';

interface MainLayoutProps {
  title?: string;
}

defineProps<MainLayoutProps>();

const { t } = useI18n();
const showSettings = ref(false);

useHead({
  title: t('title'),
  link: [{ rel: 'manifest', href: '/manifest.json' }],
  meta: [
    {
      name: 'theme-color',
      content: '#2e2737',
    },
  ],
});
</script>

<style lang="scss" scoped>
header.main {
  align-items: center;
  background-color: #2e2737;
  display: flex;
  height: 62px;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;

  h1 {
    font-size: 22px;
  }

  button {
    background-color: transparent;
    height: 40px;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 40px;

    span {
      background-color: #eee;
      border-radius: 2px;
      display: block;
      height: 3px;
      width: 30px;

      &::before,
      &::after {
        background-color: #eee;
        border-radius: 2px;
        content: '';
        display: block;
        height: 3px;
        left: 12px;
        position: relative;
        top: 8px;
        width: 18px;
      }

      &::after {
        width: 23px;
        top: -11px;
        left: 7px;
      }
    }
  }
}

main {
  align-items: center;
  background-color: #342c3f;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 100dvh;
  padding-top: 62px;
}

.bg {
  background-color: rgba(34, 34, 34, 0.85);
  bottom: 0;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.25s;
  visibility: hidden;
  z-index: 12;

  &.show {
    opacity: 1;
    visibility: visible;
  }
}
</style>
