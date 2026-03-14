<script setup>
defineProps({
  logoSrc: {
    type: String,
    required: true,
  },
  navItems: {
    type: Array,
    required: true,
  },
  searchPlaceholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="site-header">
    <div class="site-header__top section-shell">
      <a class="site-header__brand" href="#top" aria-label="MileCell home">
        <img :src="logoSrc" alt="MileCell" />
      </a>

      <form class="site-header__search" @submit.prevent>
        <label class="sr-only" for="site-search">Search</label>
        <input
          id="site-search"
          type="search"
          :placeholder="searchPlaceholder"
          autocomplete="off"
        />
        <button type="submit">SEARCH</button>
      </form>

      <div class="site-header__utility">
        <a href="#news">
          <span class="site-header__icon" aria-hidden="true">⌕</span>
          <span>Login/Reg</span>
        </a>
        <span class="site-header__divider" aria-hidden="true"></span>
        <a href="#contact">
          <span class="site-header__icon" aria-hidden="true">🛒</span>
          <span>0</span>
        </a>
      </div>
    </div>

    <nav class="site-header__nav section-shell" aria-label="Primary">
      <a v-for="item in navItems" :key="item.label" :href="item.href">
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: absolute;
  inset: 0 0 auto;
  z-index: 5;
  padding-top: 18px;
  color: #ffffff;

  &__top {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__brand {
    flex: 0 0 auto;

    img {
      width: clamp(170px, 17vw, 232px);
      height: auto;
    }
  }

  &__search {
    flex: 1 1 auto;
    display: flex;
    align-items: stretch;
    min-width: 0;
    margin-left: auto;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.92);

    input {
      flex: 1 1 auto;
      min-width: 0;
      padding: 0 16px;
      border: 0;
      background: transparent;
      color: #111111;

      &::placeholder {
        color: rgba(17, 17, 17, 0.45);
      }
    }

    button {
      flex: 0 0 auto;
      min-width: 90px;
      padding: 0 18px;
      background: var(--color-brand);
      color: #ffffff;
      font-family: "PP Neue Montreal-Medium", sans-serif;
      letter-spacing: 0.06em;
    }
  }

  &__utility {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    white-space: nowrap;
    font-family: "Apfel Grotezk-Mittel", sans-serif;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
  }

  &__icon {
    font-size: 1rem;
    line-height: 1;
  }

  &__divider {
    width: 1px;
    height: 22px;
    background: rgba(255, 255, 255, 0.45);
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 34px;
    margin-top: 22px;
    font-family: "Apfel Grotezk-Mittel", sans-serif;
    font-size: 0.95rem;
    letter-spacing: 0.04em;

    a {
      position: relative;
      padding-bottom: 8px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.7);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.24s ease;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 1024px) {
    &__top {
      flex-wrap: wrap;
    }

    &__search {
      order: 3;
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    padding-top: 14px;

    &__top {
      gap: 16px;
    }

    &__utility {
      width: 100%;
      justify-content: flex-end;
      font-size: 0.9rem;
    }

    &__nav {
      gap: 16px;
      margin-top: 18px;
      overflow-x: auto;
      padding-bottom: 6px;
      font-size: 0.8rem;
    }
  }
}
</style>
