<template>
  <aside :class="{ show }">
    <header>
      <p>{{ name }}</p>
      <div class="avatar"></div>
    </header>
    <div id="language-switcher">
      <h3>{{ $t('language') }}</h3>
      <ul>
        <li><button @click="setLanguage('de')">Deutsch</button></li>
        <li><button @click="setLanguage('en')">English</button></li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts" setup>
interface SettingsProps {
  show: boolean;
}

defineProps<SettingsProps>();

const { t, setLocale } = useI18n();
const emits = defineEmits(['onClose']);

const setLanguage = (lang: string) => {
  setLocale(lang);
  emits('onClose');
};

const name = ref('Profile');
</script>

<style lang="scss" scoped>
aside {
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
    font-size: 1.4rem;
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

  header {
    align-items: center;
    border-bottom: 1px solid rgba(93, 134, 197, 0.5);
    display: flex;
    gap: 1rem;
    height: 4rem;
    justify-content: flex-end;
    padding: 0 0.5rem;
  }

  p {
    font-size: 1.4rem;
  }

  .avatar {
    background-color: #aaa;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }

  #language-switcher {
    ul {
      display: flex;
      gap: 1rem;
      margin: 0 12px;
    }

    button {
      font-size: 1rem;
      min-width: 7rem;
      padding: 6px 12px;
    }
  }
}
</style>
