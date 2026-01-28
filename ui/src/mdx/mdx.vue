<script setup lang="ts">
import type { Attachment } from '@halo-dev/api-client'
import Editor from '../components/editor.vue'
import FileSystem from '../components/filesystem.vue'
import Terminal from '../components/terminal.vue'

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
  <div class="mdx-editor">
    <!-- 左侧文件系统 -->
    <div class="mdx-sidebar">
      <FileSystem />
    </div>

    <!-- 右侧主区域 -->
    <div class="mdx-main-area">
      <!-- 上方编辑器 -->
      <div class="editor-section">
        <Editor />
      </div>

      <!-- 下方终端 -->
      <div class="terminal-section">
        <Terminal />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mdx-editor {
  display: flex;
  background-color: #f0f0f0;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.mdx-sidebar {
  width: 250px;
  min-width: 200px;
  max-width: 400px;
  height: 100%;
  border-right: 1px solid #d0d0d0;
  resize: horizontal;
  overflow: hidden;
}

.mdx-main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.editor-section {
  flex: 1;
  min-height: 200px;
  overflow: hidden;
}

.terminal-section {
  height: 200px;
  min-height: 100px;
  max-height: 50%;
  border-top: 1px solid #d0d0d0;
  resize: vertical;
  overflow: hidden;
}
</style>
