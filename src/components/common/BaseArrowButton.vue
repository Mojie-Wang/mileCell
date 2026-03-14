<script setup>
import { computed } from "vue";
import { assetUrl } from "@src/utils/asset";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "outline",
  },
  arrow: {
    type: Boolean,
    default: true,
  },
});

const tagName = computed(() => (props.href ? "a" : "button"));
const arrowIconStyle = computed(() => ({
  "--arrow-button-icon": `url("${assetUrl("icons/arrow-right.png")}")`,
}));
</script>

<template>
  <component
    :is="tagName"
    :href="href || undefined"
    class="arrow-button"
    :class="`arrow-button--${variant}`"
    :style="arrowIconStyle"
  >
    <span>{{ label }}</span>
    <span v-if="arrow" class="arrow-button__icon" aria-hidden="true"></span>
  </component>
</template>

<style scoped lang="scss">
.arrow-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 56px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: "Apfel Grotezk-Regular", sans-serif;
  font-size: 1.05rem;
  line-height: 1;
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background-color 0.24s ease,
    color 0.24s ease,
    box-shadow 0.24s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &__icon {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    background-color: currentColor;
    mask: var(--arrow-button-icon) center / contain no-repeat;
    -webkit-mask: var(--arrow-button-icon) center / contain no-repeat;
    transition: transform 0.24s ease;
  }

  &:hover &__icon {
    transform: translateX(2px);
  }

  &--solid {
    background: var(--color-brand);
    color: #ffffff;
    box-shadow: 0 18px 34px rgba(26, 58, 92, 0.2);
  }

  &--soft {
    background: var(--color-accent);
    color: var(--color-brand);
    border-color: rgba(26, 58, 92, 0.08);
  }

  &--surface {
    background: #f4f4f4;
    color: #111111;
    border-color: #f4f4f4;
  }

  &--outline {
    background: transparent;
    color: var(--color-brand);
    border-color: rgba(26, 58, 92, 0.6);
  }

  &--ghost {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(10px);
  }

  @media (hover: hover) and (pointer: fine) {
    &--solid:hover {
      background: #132948;
      box-shadow: 0 24px 42px rgba(19, 41, 72, 0.28);
    }

    &--soft:hover {
      background: #c0d8d8;
      border-color: rgba(26, 58, 92, 0.14);
      box-shadow: 0 14px 28px rgba(26, 58, 92, 0.1);
    }

    &--surface:hover {
      background: #ffffff;
      border-color: rgba(26, 58, 92, 0.12);
      box-shadow: 0 16px 30px rgba(17, 34, 54, 0.08);
    }

    &--outline:hover {
      background: var(--color-brand);
      color: #ffffff;
      border-color: var(--color-brand);
      box-shadow: 0 16px 30px rgba(26, 58, 92, 0.18);
    }

    &--ghost:hover {
      background: rgba(255, 255, 255, 0.16);
      border-color: rgba(255, 255, 255, 0.7);
      box-shadow: 0 18px 34px rgba(10, 23, 42, 0.18);
    }
  }

  @media (max-width: 640px) {
    min-height: 50px;
    padding: 0 18px;
    font-size: 0.95rem;
  }
}
</style>
