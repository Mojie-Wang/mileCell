<script setup>
import SiteHeader from "@/common/SiteHeader.vue";
import SiteFooter from "@/common/SiteFooter.vue";
import BaseArrowButton from "@/common/BaseArrowButton.vue";
import ProductCard from "@/home/ProductCard.vue";
import FeatureCard from "@/home/FeatureCard.vue";
import MetricCard from "@/home/MetricCard.vue";
import ResourceCard from "@/home/ResourceCard.vue";
import NewsCard from "@/home/NewsCard.vue";
import { homePage } from "@content/indexPage";
import { assetUrl } from "@src/utils/asset";

const page = homePage;
const bannerStyle = {
  "--banner-background-image": `url("${assetUrl("home/hero-lab.png")}")`,
};
const cellsBackgroundStyle = {
  "--section-background-image": `url("${assetUrl("home/cells-bg.png")}")`,
};
</script>

<template>
  <div class="page-shell">
    <SiteHeader
      :logo-src="assetUrl('home/logo.png')"
      :nav-items="page.navItems"
      :search-placeholder="page.searchPlaceholder"
    />

    <section id="top" class="banner" :style="bannerStyle">
      <div class="banner__content">
        <div class="banner__progress-mark" aria-hidden="true">
          <i></i>
          <span></span>
        </div>

        <div class="banner__copy">
          <h1>{{ page.hero.title }}</h1>
          <p>{{ page.hero.description }}</p>
          <a class="banner__button" href="#products">
            <span>{{ page.hero.ctaLabel }}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h12" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <div class="banner__pagination" aria-label="slide indicator">
          <span>{{ page.hero.currentSlide }}</span>
          <i></i>
          <span class="is-muted">{{ page.hero.totalSlides }}</span>
        </div>
      </div>
    </section>

    <section id="products" class="products">
      <div class="section-shell">
        <div class="section-top">
          <div>
            <p class="section-kicker">Recommended Products</p>
            <h2 class="section-title">{{ page.products.title }}</h2>
            <p class="section-description">{{ page.products.description }}</p>
          </div>
          <BaseArrowButton
            :label="page.products.ctaLabel"
            variant="soft"
            href="#contact"
          />
        </div>

        <div class="products__grid">
          <ProductCard
            v-for="product in page.products.items"
            :key="product.name"
            :product="product"
          />
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="section-shell">
        <div class="section-top">
          <div>
            <p class="section-kicker">About</p>
            <h2 class="section-title">{{ page.about.title }}</h2>
            <p class="section-description">{{ page.about.description }}</p>
          </div>
          <BaseArrowButton
            :label="page.about.ctaLabel"
            variant="soft"
            href="#contact"
          />
        </div>

        <div class="about__visual">
          <img :src="page.about.image" :alt="page.about.title" loading="lazy" />
          <div class="about__overlay">
            <h3>{{ page.about.overlayTitle }}</h3>
            <p>{{ page.about.overlayDescription }}</p>
            <BaseArrowButton
              :label="page.about.overlayCtaLabel"
              variant="ghost"
              href="#contact"
            />
          </div>
        </div>

        <div class="about__grid">
          <FeatureCard
            v-for="feature in page.about.features"
            :key="feature.title"
            :feature="feature"
          />
        </div>
      </div>
    </section>

    <section class="advantages" :style="cellsBackgroundStyle">
      <div class="section-shell">
        <div class="advantages__header">
          <p class="section-kicker section-kicker--light">Advantages</p>
          <h2 class="section-title section-title--light">
            {{ page.advantages.title }}
          </h2>
          <p class="section-description section-description--light">
            {{ page.advantages.description }}
          </p>
        </div>

        <div class="advantages__grid">
          <MetricCard
            v-for="item in page.advantages.items"
            :key="item.label"
            :metric="item"
          />
        </div>
      </div>
    </section>

    <section id="resources" class="resources">
      <div class="section-shell resources__layout">
        <div class="resources__copy">
          <p class="section-kicker">Resource Hub</p>
          <h2 class="section-title resources__title">{{ page.resources.title }}</h2>
          <p class="section-description">{{ page.resources.description }}</p>
          <BaseArrowButton
            :label="page.resources.ctaLabel"
            variant="outline"
            href="#news"
          />
        </div>

        <div class="resources__grid">
          <ResourceCard
            v-for="resource in page.resources.items"
            :key="resource.title"
            :resource="resource"
          />
        </div>
      </div>
    </section>

    <section id="support" class="event" :style="cellsBackgroundStyle">
      <div class="section-shell event__panel">
        <div class="event__copy">
          <p class="section-kicker section-kicker--light">{{ page.event.kicker }}</p>
          <h2 class="section-title section-title--light">{{ page.event.title }}</h2>
          <p class="section-description section-description--light">
            {{ page.event.description }}
          </p>
        </div>

        <div class="event__card surface-card">
          <div class="event__meta">
            <article v-for="item in page.event.meta" :key="item.label">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </article>
          </div>
          <BaseArrowButton
            :label="page.event.ctaLabel"
            variant="solid"
            href="#contact"
          />
        </div>
      </div>
    </section>

    <section id="news" class="news">
      <div class="section-shell">
        <div class="section-top">
          <div>
            <p class="section-kicker">News</p>
            <h2 class="section-title">{{ page.news.title }}</h2>
          </div>
          <BaseArrowButton
            :label="page.news.ctaLabel"
            variant="soft"
            href="#contact"
          />
        </div>

        <div class="news__grid">
          <NewsCard v-for="item in page.news.items" :key="item.title" :item="item" />
        </div>
      </div>
    </section>

    <SiteFooter
      :columns="page.footer.columns"
      :regions="page.footer.regions"
      :newsletter="page.footer.newsletter"
      :legal="page.footer.legal"
    />
  </div>
</template>

<style scoped lang="scss">
.banner {
  position: relative;
  min-height: 596px;
  color: #ffffff;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    var(--banner-background-image) center / cover no-repeat;

  &__content {
    position: relative;
    width: min(100%, 1920px);
    min-height: 596px;
    margin: 0 auto;
  }

  &__copy {
    position: absolute;
    top: 126px;
    left: 318px;
    max-width: 704px;
  }

  &__progress-mark {
    position: absolute;
    left: 67px;
    top: 241px;
    display: grid;
    justify-items: center;
    gap: 11px;

    i {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.95);
    }

    span {
      width: 4px;
      height: 94px;
      background: rgba(255, 255, 255, 0.95);
    }
  }

  h1 {
    margin-bottom: 20px;
    font-family: "Noto Sans SC", sans-serif;
    font-size: clamp(2.5rem, 3vw, 2.875rem);
    line-height: 1.28;
    font-weight: 700;
  }

  p {
    max-width: 704px;
    font-family: "Noto Sans SC", sans-serif;
    font-size: 1.1875rem;
    line-height: 32px;
    color: #ffffff;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 26px;
    width: 196px;
    height: 67px;
    margin-top: 42px;
    padding: 0 40px;
    border-radius: 2px;
    background: #283886;
    color: #ffffff;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.375rem;
    line-height: 1;

    svg {
      width: 24px;
      height: 24px;
      flex: 0 0 auto;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }

  &__pagination {
    position: absolute;
    left: 71px;
    bottom: 74px;
    display: flex;
    align-items: center;
    gap: 11px;
    font-family: "PP Neue Montreal-Book", sans-serif;
    font-size: 1.625rem;

    i {
      width: 18px;
      height: 1px;
      background: rgba(255, 255, 255, 0.72);
    }

    .is-muted {
      color: rgba(255, 255, 255, 0.4);
    }
  }
}

.products {
  padding: 86px 0 98px;
  background: #edf6f5;

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 28px;
  }
}

.about {
  position: relative;
  padding: 96px 0 110px;
  background:
    radial-gradient(circle at 0 0, rgba(26, 58, 92, 0.06) 0 6px, transparent 6px 30px)
      0 0 / 72px 72px,
    #ffffff;

  &__visual {
    position: relative;
    margin-top: 18px;
    overflow: hidden;
    border-radius: 18px;

    img {
      width: 100%;
      aspect-ratio: 1340 / 508;
      object-fit: cover;
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    display: grid;
    justify-items: center;
    align-content: center;
    gap: 22px;
    padding: 40px;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(12, 21, 33, 0.08),
      rgba(12, 21, 33, 0.5)
    );
    color: #ffffff;

    h3 {
      font-family: "PP Neue Montreal-Book", sans-serif;
      font-size: clamp(2rem, 3vw, 3.3rem);
      color: rgba(255, 255, 255, 0.92);
    }

    p {
      max-width: 780px;
      color: rgba(255, 255, 255, 0.72);
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    margin-top: 26px;
  }
}

.advantages {
  padding: 92px 0 100px;
  background:
    linear-gradient(180deg, rgba(26, 58, 92, 0.96), rgba(26, 58, 92, 0.96)),
    var(--section-background-image) center / cover no-repeat;

  &__header {
    margin-bottom: 42px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px 28px;
  }
}

.resources {
  position: relative;
  padding: 96px 0 104px;
  background:
    radial-gradient(circle at 0 0, rgba(26, 58, 92, 0.06) 0 6px, transparent 6px 30px)
      0 0 / 72px 72px,
    #ffffff;

  &__layout {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 46px;
    align-items: center;
  }

  &__title {
    max-width: 10ch;
  }

  &__copy {
    .section-description {
      max-width: 32rem;
    }

    :deep(.arrow-button) {
      margin-top: 16px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
}

.event {
  padding: 74px 0;
  color: #ffffff;
  background:
    linear-gradient(90deg, rgba(11, 27, 47, 0.84), rgba(11, 27, 47, 0.42)),
    var(--section-background-image) center / cover no-repeat;

  &__panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 420px;
    gap: 32px;
    align-items: center;
  }

  &__card {
    padding: 30px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.96);
  }

  &__meta {
    display: grid;
    gap: 16px;
    margin-bottom: 24px;

    article {
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(26, 58, 92, 0.12);

      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }
    }

    span {
      display: block;
      margin-bottom: 8px;
      color: rgba(26, 58, 92, 0.55);
      font-family: "Apfel Grotezk-Mittel", sans-serif;
      font-size: 0.9rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    strong {
      display: block;
      color: var(--color-brand);
      font-family: "PP Neue Montreal-Medium", sans-serif;
      font-size: 1.15rem;
      line-height: 1.4;
    }
  }
}

.news {
  padding: 94px 0 112px;
  background: #edf6f5;

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }
}

@media (max-width: 1180px) {
  .products__grid,
  .advantages__grid,
  .news__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .resources__layout,
  .event__panel {
    grid-template-columns: 1fr;
  }

  .banner__copy {
    left: 180px;
    right: 32px;
    max-width: 640px;
  }

  .banner__progress-mark,
  .banner__pagination {
    left: 32px;
  }
}

@media (max-width: 900px) {
  .banner {
    min-height: auto;
  }

  .banner__content {
    display: grid;
    gap: 24px;
    min-height: auto;
    padding: 48px 24px 56px;
  }

  .banner__progress-mark,
  .banner__copy,
  .banner__pagination {
    position: static;
  }

  .banner__copy {
    max-width: none;
  }

  .banner__button {
    margin-top: 28px;
  }

  .about__overlay {
    justify-items: start;
    text-align: left;
  }
}

@media (max-width: 640px) {
  .banner {
    min-height: auto;
  }

  .banner__content {
    padding: 36px 16px 48px;
  }

  .banner__copy h1 {
    font-size: clamp(2rem, 10vw, 2.4rem);
    line-height: 1.2;
  }

  .banner__copy p {
    font-size: 1rem;
    line-height: 1.75;
  }

  .banner__button {
    width: 100%;
    max-width: 196px;
    height: 58px;
    padding: 0 26px;
    font-size: 1.125rem;
  }

  .banner__pagination {
    font-size: 1.1rem;
  }

  .products,
  .about,
  .advantages,
  .resources,
  .news {
    padding-top: 72px;
    padding-bottom: 80px;
  }

  .products__grid,
  .about__grid,
  .advantages__grid,
  .resources__grid,
  .news__grid {
    grid-template-columns: 1fr;
  }
}
</style>
