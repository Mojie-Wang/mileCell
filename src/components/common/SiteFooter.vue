<script setup>
import BaseArrowButton from "@/common/BaseArrowButton.vue";

defineProps({
  columns: {
    type: Array,
    required: true,
  },
  regions: {
    type: Array,
    required: true,
  },
  newsletter: {
    type: Object,
    required: true,
  },
  legal: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer id="contact" class="site-footer">
    <div class="section-shell site-footer__links">
      <div v-for="column in columns" :key="column.title" class="site-footer__column">
        <h2>{{ column.title }}</h2>
        <a v-for="link in column.links" :key="link" href="#top">{{ link }}</a>
      </div>
    </div>

    <div class="site-footer__panel">
      <div class="section-shell site-footer__panel-inner">
        <div class="site-footer__contact">
          <h2>Questions?</h2>
          <div class="site-footer__regions">
            <article v-for="region in regions" :key="region.name" class="site-footer__region">
              <h3>{{ region.name }}</h3>
              <div class="site-footer__fact">
                <span>PHONE</span>
                <a href="#contact">{{ region.phone }}</a>
              </div>
              <div class="site-footer__fact">
                <span>EMAIL</span>
                <a href="#contact">{{ region.email }}</a>
              </div>
              <div class="site-footer__fact">
                <span>ADD.</span>
                <p>{{ region.address }}</p>
              </div>
            </article>
          </div>
        </div>

        <div class="site-footer__newsletter">
          <h2>{{ newsletter.title }}</h2>
          <p class="site-footer__newsletter-copy">{{ newsletter.description }}</p>
          <form class="site-footer__newsletter-form" @submit.prevent>
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              :placeholder="newsletter.placeholder"
            />
            <button type="submit">Continue</button>
          </form>
          <p class="site-footer__legal-copy">{{ newsletter.legal }}</p>
          <div class="site-footer__newsletter-actions">
            <BaseArrowButton label="Contact US" variant="surface" href="#top" />
            <a class="site-footer__social" href="#top" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="section-shell">
        <p>{{ legal }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  position: relative;
  background: #1a2e4d;
  color: #ffffff;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.06), transparent 26%),
      radial-gradient(circle at 75% 0%, rgba(255, 255, 255, 0.05), transparent 22%);
    pointer-events: none;
  }

  &__links {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 40px;
    padding: 74px 0 54px;
  }

  &__column {
    h2 {
      margin-bottom: 24px;
      font-family: "Apfel Grotezk-Mittel", sans-serif;
      font-size: 1rem;
      letter-spacing: 0.06em;
    }

    a {
      display: block;
      margin-bottom: 14px;
      color: rgba(255, 255, 255, 0.68);
      font-size: 1rem;
    }
  }

  &__panel {
    position: relative;
    z-index: 1;
    background: rgba(10, 23, 42, 0.38);
  }

  &__panel-inner {
    display: grid;
    grid-template-columns: 1.25fr 0.95fr;
    gap: 56px;
    padding: 54px 0 48px;
  }

  &__contact,
  &__newsletter {
    h2 {
      margin-bottom: 22px;
      font-family: "PP Neue Montreal-Medium", sans-serif;
      font-size: clamp(2rem, 3vw, 3rem);
    }
  }

  &__regions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
  }

  &__region {
    h3 {
      margin-bottom: 22px;
      font-family: "PP Neue Montreal-Medium", sans-serif;
      font-size: 1.35rem;
    }
  }

  &__fact {
    margin-bottom: 24px;

    span {
      display: block;
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.6);
      font-family: "Apfel Grotezk-Mittel", sans-serif;
      font-size: 0.92rem;
      letter-spacing: 0.08em;
    }

    a,
    p {
      color: rgba(255, 255, 255, 0.95);
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  &__newsletter-copy {
    margin-bottom: 22px;
    color: rgba(255, 255, 255, 0.82);
    font-size: 1rem;
  }

  &__newsletter-form {
    display: flex;
    align-items: stretch;
    margin-bottom: 24px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 4px;
    overflow: hidden;

    input {
      flex: 1 1 auto;
      min-width: 0;
      padding: 0 16px;
      border: 0;
      background: rgba(255, 255, 255, 0.92);
      color: #111111;

      &::placeholder {
        color: rgba(17, 17, 17, 0.45);
      }
    }

    button {
      min-width: 96px;
      padding: 0 18px;
      background: var(--color-brand);
      color: #ffffff;
      font-family: "PP Neue Montreal-Medium", sans-serif;
    }
  }

  &__legal-copy {
    max-width: 440px;
    color: rgba(255, 255, 255, 0.58);
    font-size: 0.85rem;
    line-height: 1.6;
  }

  &__newsletter-actions {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 28px;
  }

  &__social {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: rgba(255, 255, 255, 0.9);
    font-family: "Apfel Grotezk-Mittel", sans-serif;
    font-size: 1.35rem;
  }

  &__bottom {
    position: relative;
    z-index: 1;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    p {
      padding: 22px 0 26px;
      text-align: center;
      color: rgba(255, 255, 255, 0.58);
      font-size: 0.95rem;
    }
  }

  @media (max-width: 1100px) {
    &__panel-inner {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 900px) {
    &__links,
    &__regions {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    &__links,
    &__regions {
      grid-template-columns: 1fr;
    }

    &__newsletter-form {
      flex-direction: column;

      input,
      button {
        min-height: 48px;
      }
    }

    &__bottom {
      p {
        text-align: left;
      }
    }
  }
}
</style>
