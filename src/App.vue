<script setup>
import { storeToRefs } from "pinia";
import { useSiteStore } from "./stores/site";

const site = useSiteStore();
const {
  menuOpen,
  navItems,
  hero,
  heroPanels,
  heroStats,
  products,
  capabilities,
  advantages,
  resources,
  eventInfo,
  eventHighlights,
  newsItems,
  footerColumns,
  footerContact,
} = storeToRefs(site);

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <div class="section-frame header-frame">
        <a class="brand" href="#top" @click="site.closeMenu()">
          <span class="brand__mark">M</span>
          <span class="brand__text">
            <strong>MileCell</strong>
            <span>Biotechnology</span>
          </span>
        </a>

        <nav class="main-nav" :class="{ 'is-open': menuOpen }">
          <a
            v-for="item in navItems"
            :key="item.label"
            class="nav-link"
            :href="item.href"
            @click="site.closeMenu()"
          >
            {{ item.label }}
          </a>
          <a
            class="button button--solid nav-cta--mobile"
            href="#contact"
            @click="site.closeMenu()"
          >
            Contact us
          </a>
        </nav>

        <div class="header-actions">
          <a class="button button--ghost header-action" href="#resources"
            >Resources</a
          >
          <a class="button button--solid header-action" href="#contact"
            >Contact us</a
          >
          <button
            class="menu-toggle"
            type="button"
            :aria-expanded="menuOpen"
            aria-label="Toggle navigation"
            @click="site.toggleMenu()"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="section-frame hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">{{ hero.eyebrow }}</span>
            <h1>{{ hero.title }}</h1>
            <p>{{ hero.description }}</p>

            <div class="hero-actions">
              <a
                class="button button--solid button--hero"
                :href="hero.ctaPrimary.href"
              >
                {{ hero.ctaPrimary.label }}
              </a>
              <a
                class="button button--outline button--hero"
                :href="hero.ctaSecondary.href"
              >
                {{ hero.ctaSecondary.label }}
              </a>
            </div>

            <ul class="hero-stats">
              <li v-for="item in heroStats" :key="item.label">
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </li>
            </ul>
          </div>

          <div class="hero-visual">
            <div class="hero-visual__panel">
              <div class="hero-flask"></div>
              <div class="hero-rack">
                <span class="hero-rack__tube"></span>
                <span class="hero-rack__tube"></span>
                <span class="hero-rack__tube"></span>
                <span class="hero-rack__tube"></span>
                <span class="hero-rack__tube"></span>
              </div>
              <div class="hero-lane"></div>
            </div>

            <div class="hero-floating-cards">
              <article
                v-for="panel in heroPanels"
                :key="panel.title"
                class="floating-card"
                :class="`floating-card--${panel.tone}`"
              >
                <span class="floating-card__label">{{ panel.label }}</span>
                <h2>{{ panel.title }}</h2>
                <p>{{ panel.copy }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="products" class="section section--soft">
        <div class="section-frame">
          <div class="section-heading">
            <div>
              <span class="section-tag">Recommended Products</span>
              <h2>Curated tools for sensitive primary-cell workflows</h2>
            </div>
            <p>
              Built to match the structure of the design draft: compact card
              grid, soft backgrounds, and clear calls to action for both desktop
              and mobile visitors.
            </p>
          </div>

          <div class="products-grid">
            <article
              v-for="product in products"
              :key="product.name"
              class="product-card"
              :class="`product-card--${product.tone}`"
            >
              <div class="product-card__visual">
                <span class="product-card__badge">{{ product.category }}</span>
                <div class="product-card__package">
                  <span class="package package--box"></span>
                  <span class="package package--vial"></span>
                  <span class="package package--mini"></span>
                </div>
              </div>
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <a href="#contact">View more</a>
            </article>
          </div>
        </div>
      </section>

      <section id="about" class="section section--pattern">
        <div class="section-frame">
          <div class="section-heading section-heading--split">
            <div>
              <span class="section-tag">Who we are</span>
              <h2>
                Integrated delivery for cell sourcing, expansion, and analysis
              </h2>
            </div>
            <a class="button button--pale" href="#contact">Explore MileCell</a>
          </div>

          <div class="story-visual">
            <div class="story-visual__image">
              <div class="story-visual__ring"></div>
              <div class="sample-tube"></div>
            </div>

            <div class="capability-grid">
              <article
                v-for="item in capabilities"
                :key="item.title"
                class="capability-card"
              >
                <span class="capability-card__index">{{ item.marker }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--deep">
        <div class="section-frame">
          <div class="section-heading section-heading--light">
            <div>
              <span class="section-tag section-tag--dark"
                >MileCell Advantages</span
              >
              <h2>Evidence-driven credibility in a compact metrics block</h2>
            </div>
            <p>
              The stats area follows the same visual logic as the design draft:
              a dark research backdrop with six bright value cards that remain
              readable on small screens.
            </p>
          </div>

          <div class="advantage-grid">
            <article
              v-for="item in advantages"
              :key="item.label"
              class="stat-card"
            >
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </article>
          </div>
        </div>
      </section>

      <section id="resources" class="section section--white">
        <div class="section-frame resources-layout">
          <div class="resource-copy">
            <span class="section-tag">Research Hub</span>
            <h2>Your hub for research, data, and discovery</h2>
            <p>
              Publications, brochures, registration flows, and application notes
              are grouped into a quick-access panel that collapses cleanly on
              mobile.
            </p>
            <a class="button button--ghost" href="#news"
              >Browse all educational content</a
            >
          </div>

          <div class="resource-links">
            <a
              v-for="item in resources"
              :key="item.title"
              class="resource-link"
              :href="item.href"
            >
              <span>{{ item.title }}</span>
              <span>{{ item.note }}</span>
            </a>
          </div>
        </div>
      </section>

      <section class="section section--event">
        <div class="section-frame event-grid">
          <div class="event-copy">
            <span class="section-tag section-tag--dark">{{
              eventInfo.eyebrow
            }}</span>
            <h2>{{ eventInfo.title }}</h2>
            <p>{{ eventInfo.description }}</p>

            <div class="event-meta">
              <div
                v-for="item in eventInfo.meta"
                :key="item.label"
                class="event-meta__item"
              >
                <span>{{ item.label }}</span>
                <strong>{{ item.value }}</strong>
              </div>
            </div>
          </div>

          <div class="event-card">
            <div class="event-card__glow"></div>
            <div class="event-card__content">
              <p class="event-card__lead">
                Plan your meeting with the technical team
              </p>
              <ul class="event-highlight-list">
                <li v-for="item in eventHighlights" :key="item">{{ item }}</li>
              </ul>
              <a class="button button--solid button--event" href="#contact">{{
                eventInfo.cta
              }}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="news" class="section section--soft">
        <div class="section-frame">
          <div class="section-heading">
            <div>
              <span class="section-tag">News &amp; Updates</span>
              <h2>
                Editorial modules aligned to the final section of the draft
              </h2>
            </div>
            <a class="button button--pale" href="#contact">Read more</a>
          </div>

          <div class="news-grid">
            <article
              v-for="item in newsItems"
              :key="item.title"
              class="news-card"
              :class="`news-card--${item.tone}`"
            >
              <div class="news-card__media">
                <span class="news-card__pill">{{ item.kicker }}</span>
              </div>
              <div class="news-card__body">
                <span class="news-card__meta">{{ item.date }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.summary }}</p>
                <a href="#contact">Read article</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" class="site-footer">
      <div class="section-frame footer-frame">
        <div class="footer-top">
          <div>
            <span class="section-tag section-tag--dark">Newsletter</span>
            <h2>Stay close to product launches and event updates</h2>
            <p>
              The footer mirrors the design draft with multi-column navigation,
              contact details, and a compact signup form.
            </p>
          </div>

          <form class="newsletter-form" @submit.prevent>
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
            />
            <button class="button button--solid" type="submit">
              Subscribe
            </button>
          </form>
        </div>

        <div class="footer-grid">
          <div class="footer-about">
            <a
              class="brand brand--footer"
              href="#top"
              @click="site.closeMenu()"
            >
              <span class="brand__mark">M</span>
              <span class="brand__text">
                <strong>MileCell</strong>
                <span>Biotechnology</span>
              </span>
            </a>
            <p>
              Responsive single-page marketing site built with Vue 3, Pinia, and
              Vite, following the section order and visual hierarchy from the
              provided design image.
            </p>
            <div class="footer-contact">
              <span>{{ footerContact.address }}</span>
              <a :href="`mailto:${footerContact.email}`">{{
                footerContact.email
              }}</a>
              <a :href="`tel:${footerContact.phoneLink}`">{{
                footerContact.phone
              }}</a>
            </div>
          </div>

          <div
            v-for="column in footerColumns"
            :key="column.title"
            class="footer-column"
          >
            <h3>{{ column.title }}</h3>
            <a
              v-for="link in column.links"
              :key="link.label"
              :href="link.href"
              >{{ link.label }}</a
            >
          </div>
        </div>

        <div class="footer-bottom">
          <p>
            &copy; {{ currentYear }} MileCell Biotechnology. All rights
            reserved.
          </p>
          <p>Max canvas width: 1920px. Optimized for desktop and mobile H5.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
