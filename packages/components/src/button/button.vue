<template>
  <button class="j-button" :class="buttonStyle">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "j-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`j-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
