<script setup>
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
    <div class="site-footer__links section-shell">
      <div v-for="column in columns" :key="column.title" class="site-footer__column">
        <h2>{{ column.title }}</h2>
        <a v-for="link in column.links" :key="link" href="#top">{{ link }}</a>
      </div>
    </div>

    <div class="site-footer__panel">
      <div class="section-shell site-footer__panel-inner">
        <section class="site-footer__contact">
          <h2>Questions?</h2>
          <div class="site-footer__regions">
            <article v-for="region in regions" :key="region.name" class="site-footer__region">
              <h3>{{ region.name }}</h3>

              <div class="site-footer__fact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M7.4 4.5h2.4l1.2 3.4-1.6 1.4a14.2 14.2 0 0 0 5.3 5.3l1.4-1.6 3.4 1.2v2.4c0 .7-.5 1.3-1.2 1.4-.5.1-1 .1-1.5.1A12.8 12.8 0 0 1 4.5 7.2c0-.5 0-1 .1-1.5.1-.7.7-1.2 1.4-1.2Z"
                  />
                </svg>
                <div>
                  <span>PHONE</span>
                  <a href="#contact">{{ region.phone }}</a>
                </div>
              </div>

              <div class="site-footer__fact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="6.5" width="17" height="11" rx="1.5" />
                  <path d="m4.5 8 7.5 5 7.5-5" />
                </svg>
                <div>
                  <span>EMAIL</span>
                  <a href="#contact">{{ region.email }}</a>
                </div>
              </div>

              <div class="site-footer__fact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20c3.2-3.7 4.8-6.4 4.8-8.3A4.8 4.8 0 1 0 7.2 11.7C7.2 13.6 8.8 16.3 12 20Z" />
                  <circle cx="12" cy="11.3" r="1.8" />
                </svg>
                <div>
                  <span>ADD.</span>
                  <p>{{ region.address }}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="site-footer__newsletter">
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
            <a href="#top" class="site-footer__contact-link">
              <span>Contact US</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h12" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
            <a class="site-footer__social" href="#top" aria-label="LinkedIn">in</a>
          </div>
        </section>
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
  background: #142949;
  color: #ffffff;

  &__links {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 48px;
    padding-top: 55px;
    padding-bottom: 44px;
  }

  &__column {
    h2 {
      margin-bottom: 26px;
      font-family: "Apfel Grotezk-Mittel", sans-serif;
      font-size: 1.25rem;
      line-height: 1;
      color: #ffffff;
    }

    a {
      display: block;
      margin-bottom: 17px;
      color: rgba(255, 255, 255, 0.6);
      font-family: "PP Neue Montreal-Book", sans-serif;
      font-size: 1rem;
      line-height: 1.2;
    }
  }

  &__panel {
    background: rgba(0, 0, 0, 0.2);
  }

  &__panel-inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 411px;
    gap: 120px;
    padding-top: 59px;
    padding-bottom: 44px;
  }

  &__contact h2 {
    margin-bottom: 34px;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.625rem;
    line-height: 1;
  }

  &__regions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px;
  }

  &__region h3 {
    margin-bottom: 19px;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.125rem;
    line-height: 1;
  }

  &__fact {
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 15px;
    align-items: start;
    margin-bottom: 24px;

    svg {
      width: 30px;
      height: 30px;
      margin-top: 2px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.7;
      stroke-linecap: round;
      stroke-linejoin: round;
      color: #ffffff;
      flex: 0 0 auto;
    }

    span {
      display: block;
      margin-bottom: 6px;
      font-family: "PP Neue Montreal-Book", sans-serif;
      font-size: 1rem;
      line-height: 1.1;
      color: #ffffff;
    }

    a,
    p {
      color: #ffffff;
      font-family: "PP Neue Montreal-Book", sans-serif;
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  &__newsletter h2 {
    margin-bottom: 18px;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.5rem;
    line-height: 1.1;
    color: #ffffff;
  }

  &__newsletter-copy {
    margin-bottom: 35px;
    font-family: "PP Neue Montreal-Book", sans-serif;
    font-size: 0.875rem;
    line-height: 1.4;
    color: #ffffff;
  }

  &__newsletter-form {
    display: flex;
    align-items: stretch;
    margin-bottom: 26px;

    input {
      flex: 1 1 auto;
      min-width: 0;
      height: 45px;
      padding: 0 17px;
      border: 0;
      border-radius: 4px 0 0 4px;
      background: #d9d9d9;
      color: #000000;
      font-family: "Apfel Grotezk-Regular", sans-serif;
      font-size: 1rem;
      line-height: 1;

      &::placeholder {
        color: #000000;
      }
    }

    button {
      flex: 0 0 90px;
      height: 45px;
      border-radius: 0 2px 2px 0;
      border: 1px solid #d9d9d9;
      background: #142949;
      color: #ffffff;
      font-family: "Apfel Grotezk-Mittel", sans-serif;
      font-size: 1rem;
      line-height: 1;
    }
  }

  &__legal-copy {
    margin-bottom: 36px;
    color: rgba(255, 255, 255, 0.6);
    font-family: "PP Neue Montreal-Book", sans-serif;
    font-size: 0.75rem;
    line-height: 1.5;
  }

  &__newsletter-actions {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  &__contact-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 48px;
    padding: 0 16px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.6);
    color: #000000;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.25rem;
    line-height: 1;

    svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }

  &__social {
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 30px;
    color: #ffffff;
    font-family: "Apfel Grotezk-Mittel", sans-serif;
    font-size: 1.25rem;
    line-height: 1;
  }

  &__bottom {
    background: #0c1c33;

    p {
      padding: 16px 0;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      font-family: "PP Neue Montreal-Book", sans-serif;
      font-size: 1rem;
      line-height: 1.25;
    }
  }

  @media (max-width: 1180px) {
    &__panel-inner {
      grid-template-columns: 1fr;
      gap: 56px;
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
      gap: 28px;
    }

    &__newsletter-form {
      flex-direction: column;

      input,
      button {
        width: 100%;
        border-radius: 4px;
      }

      button {
        margin-top: 10px;
      }
    }

    &__newsletter-actions {
      flex-wrap: wrap;
    }

    &__bottom p {
      text-align: left;
    }
  }
}
</style>
