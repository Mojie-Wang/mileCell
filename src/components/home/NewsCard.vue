<script setup>
import BaseArrowButton from "@/common/BaseArrowButton.vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="news-card">
    <img :src="item.image" :alt="item.title" loading="lazy" />
    <span class="news-card__date">{{ item.date }}</span>
    <h3>{{ item.title }}</h3>
    <BaseArrowButton label="Read more" variant="surface" href="#contact" />
  </article>
</template>

<style scoped lang="scss">
.news-card {
  img {
    width: 100%;
    aspect-ratio: 437 / 266;
    border-radius: 12px;
    object-fit: cover;
  }

  &__date {
    display: block;
    margin: 18px 0 10px;
    color: rgba(26, 58, 92, 0.56);
    font-size: 1rem;
  }

  h3 {
    min-height: 132px;
    margin-bottom: 20px;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.9rem;
    line-height: 1.16;
    color: #111111;
  }

  @media (max-width: 900px) {
    h3 {
      min-height: 0;
      font-size: 1.5rem;
    }
  }
}
</style>
