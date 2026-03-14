<script setup>
const props = defineProps({
  resource: {
    type: Object,
    required: true,
  },
});

const resourceStyle = {
  backgroundImage: `linear-gradient(0deg, rgba(26, 58, 92, 0.9), rgba(26, 58, 92, 0.9)), url(${props.resource.image})`,
};
</script>

<template>
  <a class="resource-card" :style="resourceStyle" href="#contact">
    <span>{{ resource.title }}</span>
  </a>
</template>

<style scoped lang="scss">
.resource-card {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 68px;
  padding: 0 20px;
  border-radius: 6px;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  box-shadow: 0 18px 40px rgba(26, 58, 92, 0.12);

  span {
    position: relative;
    z-index: 1;
    font-family: "Noto Sans SC", sans-serif;
    font-size: 1.15rem;
    line-height: 1.3;
  }
}
</style>
