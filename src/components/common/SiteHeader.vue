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
    <div class="site-header__topbar">
      <div class="site-header__topbar-inner">
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
      </div>
    </div>

    <div class="site-header__navband">
      <div class="site-header__navband-inner">
        <nav class="site-header__nav" aria-label="Primary">
          <a v-for="item in navItems" :key="item.label" :href="item.href">
            {{ item.label }}
          </a>
        </nav>

        <div class="site-header__utility">
          <a href="#news" class="site-header__utility-link">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 19c1.7-3 4.3-4.5 7-4.5s5.3 1.5 7 4.5" />
            </svg>
            <span>Login/Reg</span>
          </a>
          <span class="site-header__divider" aria-hidden="true"></span>
          <a href="#contact" class="site-header__utility-link">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 9h10l-1 10H8L7 9Z" />
              <path d="M9 9V7.5a3 3 0 0 1 6 0V9" />
            </svg>
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
  z-index: 10;

  &__topbar {
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
    flex: 0 0 auto;

    img {
      width: min(251px, 100%);
      height: auto;
      mix-blend-mode: darken;
    }
  }

  &__search {
    display: flex;
    align-items: stretch;
    width: min(584px, 100%);
    min-height: 48px;
    margin-left: auto;
    overflow: hidden;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    background: #f2f2f2;

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

    svg {
      width: 30px;
      height: 30px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
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

    &__brand img {
      width: min(210px, 100%);
    }

    &__nav {
      gap: 18px;
      overflow-x: auto;
      padding-bottom: 4px;
      font-size: 0.95rem;
    }

    &__utility {
      width: 100%;
      justify-content: flex-end;
      gap: 12px;
      font-size: 0.95rem;
    }

    &__utility-link {
      font-size: 0.95rem;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
