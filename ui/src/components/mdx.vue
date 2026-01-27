<script setup lang="ts">
import type { Attachment } from '@halo-dev/api-client'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  raw: {
    type: String,
    required: false,
    default: '',
  },
  content: {
    type: String,
    required: false,
    default: '',
  },
})

const emit = defineEmits<{
  (event: 'update:title', value: string): void
  (event: 'update:raw', value: string): void
  (event: 'update:content', value: string): void
  (event: 'update', value: string): void
}>()
</script>

<template>
  {{ props.title }}
</template>

<style lang="scss" scoped>

</style>
