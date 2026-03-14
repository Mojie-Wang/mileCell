<script setup>
defineProps({
  feature: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="feature-card surface-card">
    <img :src="feature.image" :alt="feature.title" loading="lazy" />
    <h3>{{ feature.title }}</h3>
  </article>
</template>

<style scoped lang="scss">
.feature-card {
  display: grid;
  justify-items: center;
  gap: 16px;
  min-height: 188px;
  padding: 32px 24px 28px;
  text-align: center;
  background: #eef5f4;

  img {
    width: 56px;
    height: 56px;
    object-fit: contain;
  }

  h3 {
    font-family: "Apfel Grotezk-Mittel", sans-serif;
    font-size: 1.35rem;
    line-height: 1.35;
  }
}
</style>
