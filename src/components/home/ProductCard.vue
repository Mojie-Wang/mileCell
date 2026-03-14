<script setup>
import BaseArrowButton from "@/common/BaseArrowButton.vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="product-card surface-card">
    <div class="product-card__media">
      <img :src="product.image" :alt="product.name" loading="lazy" />
    </div>
    <h3>{{ product.name }}</h3>
    <BaseArrowButton
      label="View more"
      :variant="product.buttonVariant"
      href="#contact"
    />
  </article>
</template>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  padding: 20px;

  &__media {
    display: grid;
    place-items: center;
    min-height: 236px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);

    img {
      width: 100%;
      height: 188px;
      object-fit: contain;
      object-position: center;
      mix-blend-mode: multiply;
    }
  }

  h3 {
    min-height: 56px;
    margin-bottom: 18px;
    font-family: "PP Neue Montreal-Medium", sans-serif;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  @media (max-width: 640px) {
    h3 {
      min-height: 0;
      font-size: 1.2rem;
    }
  }
}
</style>
