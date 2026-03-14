<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { assetUrl } from "@src/utils/asset";

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

const accountIconSrc = assetUrl("icons/header-account.png");
const cartIconSrc = assetUrl("icons/header-cart.png");

const mobileMenuBreakpoint = 820;
const isMenuOpen = ref(false);

function closeMenu() {
  isMenuOpen.value = false;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function syncMenuState() {
  if (window.innerWidth > mobileMenuBreakpoint) {
    closeMenu();
  }
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

onMounted(() => {
  syncMenuState();
  window.addEventListener("resize", syncMenuState);
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", syncMenuState);
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <header class="site-header">
    <div class="site-header__topbar">
      <div class="site-header__topbar-inner">
        <a class="site-header__brand" href="#top" aria-label="MileCell home" @click="closeMenu">
          <img :src="logoSrc" alt="MileCell" />
        </a>

        <button
          type="button"
          class="site-header__menu-toggle"
          :class="{ 'is-open': isMenuOpen }"
          aria-controls="site-header-menu"
          :aria-expanded="String(isMenuOpen)"
          @click="toggleMenu"
        >
          <span class="sr-only">{{ isMenuOpen ? "Close menu" : "Open menu" }}</span>
          <span class="site-header__menu-toggle-bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

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
      </div>
    </div>

    <button
      v-show="isMenuOpen"
      type="button"
      class="site-header__backdrop"
      aria-label="Close menu"
      @click="closeMenu"
    ></button>

    <div
      id="site-header-menu"
      class="site-header__navband"
      :class="{ 'is-open': isMenuOpen }"
    >
      <div class="site-header__navband-inner">
        <nav class="site-header__nav" aria-label="Primary">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="site-header__utility">
          <a href="#news" class="site-header__utility-link" @click="closeMenu">
            <img :src="accountIconSrc" alt="" aria-hidden="true" />
            <span>Login/Reg</span>
          </a>
          <span class="site-header__divider" aria-hidden="true"></span>
          <a href="#contact" class="site-header__utility-link" @click="closeMenu">
            <img :src="cartIconSrc" alt="" aria-hidden="true" />
            <span>0</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: relative;
  z-index: 20;
  isolation: isolate;

  &__menu-toggle,
  &__backdrop {
    display: none;
  }

  &__topbar {
    position: relative;
    z-index: 3;
    background: #f2f2f2;
  }

  &__topbar-inner,
  &__navband-inner {
    width: min(calc(100% - 48px), 1330px);
    margin: 0 auto;
  }

  &__topbar-inner {
    display: flex;
    align-items: center;
    gap: 32px;
    min-height: 83px;
  }

  &__brand {
    display: block;
    flex: 0 0 251px;
    width: 251px;
    max-width: 100%;

    img {
      width: 100%;
      height: auto;
      mix-blend-mode: darken;
    }
  }

  &__search {
    display: flex;
    flex: 0 1 584px;
    align-items: stretch;
    width: 584px;
    max-width: 100%;
    min-height: 48px;
    margin-left: auto;
    overflow: hidden;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: inset 0 0 0 1px rgba(194, 194, 194, 0.18);

    input {
      flex: 1 1 auto;
      min-width: 0;
      padding: 0 16px;
      border: 0;
      background: transparent;
      color: #000000;
      font-family: "Roboto-Regular", "PP Neue Montreal-Book", sans-serif;
      font-size: 1rem;
      line-height: 26px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    button {
      flex: 0 0 90px;
      border-radius: 0 4px 4px 0;
      background: #1a3a5c;
      color: #ffffff;
      font-family: "PP Neue Montreal-Medium", sans-serif;
      font-size: 1rem;
      line-height: 26px;
      letter-spacing: 0;
    }
  }

  &__navband {
    position: relative;
    z-index: 2;
    background: #1a3a5c;
    color: #ffffff;
  }

  &__navband-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 58px;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 48px;
    min-width: 0;

    a {
      font-family: "Apfel Grotezk-Mittel", sans-serif;
      font-size: 1.125rem;
      line-height: 1;
      white-space: nowrap;
    }
  }

  &__utility {
    display: inline-flex;
    align-items: center;
    gap: 18px;
    white-space: nowrap;
  }

  &__utility-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: "Apfel Grotezk-Mittel", sans-serif;
    font-size: 1.125rem;
    line-height: 26px;

    img {
      width: 30px;
      height: 30px;
      flex: 0 0 auto;
    }
  }

  &__divider {
    width: 1px;
    height: 23px;
    background: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 1100px) {
    &__topbar-inner,
    &__navband-inner {
      width: min(calc(100% - 32px), 1330px);
    }

    &__topbar-inner {
      flex-wrap: wrap;
      padding: 16px 0;
    }

    &__search {
      width: 100%;
    }

    &__navband-inner {
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 12px 0;
    }
  }

  @media (max-width: 720px) {
    &__topbar-inner,
    &__navband-inner {
      width: min(calc(100% - 24px), 1330px);
    }

    &__topbar-inner {
      gap: 14px;
      min-height: 0;
      padding: 14px 0;
    }

    &__brand {
      flex-basis: 180px;
      width: 180px;
    }

    &__nav {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px 14px;
      padding-bottom: 0;

      a {
        font-size: 1rem;
        line-height: 1.15;
        white-space: normal;
      }
    }

    &__search {
      min-height: 42px;

      input {
        padding: 0 12px;
        font-size: 0.95rem;
      }

      button {
        flex-basis: 82px;
        font-size: 0.95rem;
      }
    }

    &__navband-inner {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      min-height: 0;
      padding: 12px 0 14px;
    }

    &__utility {
      width: 100%;
      justify-content: flex-start;
      gap: 14px;
    }

    &__utility-link {
      font-size: 0.95rem;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 820px) {
    &__topbar-inner {
      justify-content: space-between;
      gap: 14px;
      padding: 14px 0;
    }

    &__menu-toggle {
      display: inline-flex;
      flex: 0 0 auto;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      margin-left: auto;
      border: 1px solid rgba(26, 58, 92, 0.12);
      border-radius: 14px;
      background: #ffffff;
      box-shadow: 0 12px 28px rgba(18, 34, 55, 0.08);
      color: #1a3a5c;
    }

    &__menu-toggle-bars {
      position: relative;
      display: grid;
      gap: 5px;
      width: 18px;

      span {
        display: block;
        width: 18px;
        height: 2px;
        border-radius: 999px;
        background: currentColor;
        transition:
          transform 0.2s ease,
          opacity 0.2s ease;
      }
    }

    &__menu-toggle.is-open &__menu-toggle-bars span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    &__menu-toggle.is-open &__menu-toggle-bars span:nth-child(2) {
      opacity: 0;
    }

    &__menu-toggle.is-open &__menu-toggle-bars span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    &__search {
      order: 3;
      width: 100%;
      flex-basis: 100%;
      margin-left: 0;
    }

    &__backdrop {
      position: fixed;
      inset: 0;
      z-index: 1;
      display: block;
      background: rgba(10, 24, 43, 0.42);
      border: 0;
      cursor: pointer;
    }

    &__navband {
      position: absolute;
      top: calc(100% - 12px);
      left: 0;
      right: 0;
      z-index: 2;
      background: transparent;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: translateY(-14px);
      transition:
        opacity 0.22s ease,
        transform 0.22s ease,
        visibility 0.22s ease;
    }

    &__navband.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateY(0);
    }

    &__navband-inner {
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
      min-height: 0;
      padding: 20px;
      border-radius: 24px;
      background: rgba(17, 45, 78, 0.98);
      box-shadow: 0 28px 56px rgba(7, 18, 31, 0.24);
    }

    &__nav {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      width: 100%;

      a {
        padding: 13px 14px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.08);
        font-size: 1rem;
        line-height: 1.2;
        white-space: normal;
      }
    }

    &__utility {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      width: 100%;
    }

    &__utility-link {
      min-height: 56px;
      padding: 0 14px;
      justify-content: flex-start;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.12);
      font-size: 0.95rem;
    }

    &__divider {
      display: none;
    }
  }

  @media (max-width: 420px) {
    &__brand {
      flex-basis: 164px;
      width: 164px;
    }

    &__search {
      min-height: 40px;

      input {
        padding: 0 10px;
        font-size: 0.9rem;
      }

      button {
        flex-basis: 78px;
        font-size: 0.9rem;
      }
    }

    &__nav {
      gap: 8px 12px;

      a {
        font-size: 0.92rem;
      }
    }

    &__utility {
      justify-content: space-between;
      gap: 10px;
    }

    &__utility-link {
      gap: 6px;
      font-size: 0.9rem;
    }
  }
}
</style>
