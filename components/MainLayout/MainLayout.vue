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

  <aside class="main" :class="{ show: showSettings }">
    <div id="language-switcher">
      <h3>{{ $t('language') }}</h3>
      <ul>
        <li><button @click="setLanguage('de')">Deutsch</button></li>
        <li><button @click="setLanguage('en')">English</button></li>
      </ul>
    </div>
  </aside>
  <div class="bg" @click="showSettings = false" :class="{ show: showSettings }" />
</template>

<script setup lang="ts">
import '~/assets/css/main.css';

interface MainLayoutProps {
  title?: string;
}

defineProps<MainLayoutProps>();

const { t, setLocale } = useI18n();
const showSettings = ref(false);

const setLanguage = (lang: string) => {
  setLocale(lang);
  showSettings.value = false;
};

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

aside.main {
  background-color: #2e2737;
  bottom: 0;
  box-shadow: 0 0 10px #222;
  max-width: 350px;
  position: fixed;
  right: -85%;
  top: 0;
  transition: 0.25s;
  width: 85%;
  z-index: 20;

  &.show {
    right: 0;
  }

  h3 {
    font-size: 22px;
    font-weight: normal;
    margin: 0;
    padding: 12px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  #language-switcher {
    ul {
      display: flex;
      gap: 12px;
      justify-content: space-evenly;
      margin: 0 12px;
    }

    button {
      font-size: 18px;
      min-width: 120px;
      padding: 6px 12px;
    }
  }
}
</style>
