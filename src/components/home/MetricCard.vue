<script setup>
defineProps({
  metric: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="metric-card surface-card">
    <strong>{{ metric.value }}</strong>
    <span>{{ metric.label }}</span>
  </article>
</template>

<style scoped lang="scss">
.metric-card {
  min-height: 180px;
  padding: 34px 28px;
  border-radius: 12px;

  strong {
    display: block;
    margin-bottom: 22px;
    font-family: "PP Neue Montreal-Bold", sans-serif;
    font-size: clamp(2rem, 3vw, 3.4rem);
    line-height: 1;
    color: #283886;
  }

  span {
    display: block;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.55rem;
    line-height: 1.25;
    color: #161616;
  }

  @media (max-width: 640px) {
    min-height: 0;

    span {
      font-size: 1.2rem;
    }
  }
}
</style>
