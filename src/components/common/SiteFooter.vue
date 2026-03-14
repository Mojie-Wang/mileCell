<script setup>
import { assetUrl } from "@src/utils/asset";

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

const phoneIconSrc = assetUrl("icons/contact-phone.png");
const emailIconSrc = assetUrl("icons/contact-email.png");
const addressIconSrc = assetUrl("icons/contact-address.png");
const arrowIconSrc = assetUrl("icons/arrow-right.png");
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
                <img :src="phoneIconSrc" alt="" aria-hidden="true" />
                <div>
                  <span>PHONE</span>
                  <a href="#contact">{{ region.phone }}</a>
                </div>
              </div>

              <div class="site-footer__fact">
                <img :src="emailIconSrc" alt="" aria-hidden="true" />
                <div>
                  <span>EMAIL</span>
                  <a href="#contact">{{ region.email }}</a>
                </div>
              </div>

              <div class="site-footer__fact">
                <img :src="addressIconSrc" alt="" aria-hidden="true" />
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
              <img :src="arrowIconSrc" alt="" aria-hidden="true" />
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

    img {
      width: 30px;
      height: 30px;
      margin-top: 2px;
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

    img {
      width: 18px;
      height: 18px;
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
