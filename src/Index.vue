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

const page = homePage;
</script>

<template>
  <div class="page-shell">
    <section id="top" class="hero">
      <SiteHeader
        logo-src="/home/logo.png"
        :nav-items="page.navItems"
        :search-placeholder="page.searchPlaceholder"
      />

      <div class="section-shell hero__content">
        <div class="hero__copy">
          <div class="hero__marker" aria-hidden="true">
            <span></span>
            <i></i>
          </div>
          <h1>{{ page.hero.title }}</h1>
          <p>{{ page.hero.description }}</p>
          <BaseArrowButton
            :label="page.hero.ctaLabel"
            variant="solid"
            href="#products"
          />
        </div>

        <div class="hero__indicator" aria-label="slide indicator">
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

    <section class="advantages">
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

    <section id="support" class="event">
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
.hero {
  position: relative;
  min-height: 760px;
  padding: 202px 0 86px;
  color: #ffffff;
  background:
    linear-gradient(90deg, rgba(11, 21, 34, 0.72), rgba(11, 21, 34, 0.18) 58%),
    linear-gradient(180deg, rgba(26, 58, 92, 0.44), rgba(26, 58, 92, 0.18)),
    url("/home/hero-lab.png") center / cover no-repeat;

  &__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 32px;
  }

  &__copy {
    display: grid;
    gap: 22px;
    max-width: 760px;
  }

  &__marker {
    display: inline-grid;
    justify-items: start;
    gap: 10px;

    span {
      width: 4px;
      height: 96px;
      background: rgba(255, 255, 255, 0.76);
    }

    i {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.82);
    }
  }

  h1 {
    max-width: 12ch;
    font-family: "Noto Sans SC", sans-serif;
    font-size: clamp(2.6rem, 4.2vw, 4.75rem);
    line-height: 1.08;
    font-weight: 700;
    text-shadow: 0 14px 40px rgba(0, 0, 0, 0.16);
  }

  p {
    max-width: 660px;
    font-size: clamp(1.05rem, 1.8vw, 1.3rem);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.92);
  }

  &__indicator {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;
    font-family: "PP Neue Montreal-Book", sans-serif;
    font-size: 1.45rem;

    i {
      width: 22px;
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
    url("/home/cells-bg.png") center / cover no-repeat;

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
    url("/home/cells-bg.png") center / cover no-repeat;

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
}

@media (max-width: 900px) {
  .hero {
    min-height: 700px;
    padding-top: 230px;

    &__content {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .about {
    &__overlay {
      justify-items: start;
      text-align: left;
    }
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: 640px;
    padding: 220px 0 56px;

    &__marker {
      span {
        height: 70px;
      }
    }

    &__indicator {
      font-size: 1.1rem;
    }
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
