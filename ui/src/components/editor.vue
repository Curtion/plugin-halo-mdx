<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'markdown',
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const editorContent = ref(props.modelValue)

function onInput() {
  emit('update:modelValue', editorContent.value)
}

const tabs = ref([
  { name: 'mdx.vue', active: true, modified: false },
  { name: 'FileSystem.vue', active: false, modified: true },
])
</script>

<template>
  <div class="editor">
    <div class="editor-tabs">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="tab"
        :class="{ active: tab.active }"
      >
        <span class="tab-name">{{ tab.name }}</span>
        <span v-if="tab.modified" class="tab-modified">●</span>
        <span class="tab-close">×</span>
      </div>
    </div>
    <div class="editor-toolbar">
      <div class="toolbar-left">
        <span class="toolbar-btn">📋</span>
        <span class="toolbar-btn">🔍</span>
        <span class="toolbar-btn">🔄</span>
      </div>
      <div class="toolbar-right">
        <span class="language-badge">{{ language }}</span>
      </div>
    </div>
    <div class="editor-content">
      <div class="line-numbers">
        <div v-for="n in 20" :key="n" class="line-number">
          {{ n }}
        </div>
      </div>
      <textarea
        v-model="editorContent"
        class="editor-textarea"
        placeholder="在此输入内容..."
        @input="onInput"
      />
    </div>
    <div class="editor-statusbar">
      <div class="status-left">
        <span>UTF-8</span>
        <span>Markdown</span>
        <span>Ln 1, Col 1</span>
      </div>
      <div class="status-right">
        <span>Prettier</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #333333;
}

.editor-tabs {
  display: flex;
  background-color: #f3f3f3;
  border-bottom: 1px solid #e0e0e0;
  overflow-x: auto;
}

.tab {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #f3f3f3;
  border-right: 1px solid #e0e0e0;
  cursor: pointer;
  font-size: 12px;
  min-width: 120px;
  max-width: 200px;
  user-select: none;
  color: #666666;

  &:hover {
    background-color: #e8e8e8;
  }

  &.active {
    background-color: #ffffff;
    border-top: 1px solid #007acc;
    color: #333333;
  }
}

.tab-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab-modified {
  color: #007acc;
  font-size: 8px;
  margin-left: 4px;
}

.tab-close {
  margin-left: 8px;
  padding: 0 4px;
  border-radius: 3px;

  &:hover {
    background-color: #e0e0e0;
  }
}

.editor-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.toolbar-left {
  display: flex;
  gap: 12px;
}

.toolbar-btn {
  cursor: pointer;
  font-size: 14px;
  opacity: 0.7;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
  }
}

.toolbar-right {
  display: flex;
  align-items: center;
}

.language-badge {
  font-size: 11px;
  color: #666666;
  text-transform: uppercase;
}

.editor-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.line-numbers {
  width: 50px;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
  padding: 8px 0;
  text-align: right;
  user-select: none;
}

.line-number {
  padding: 0 8px;
  color: #999999;
  font-size: 13px;
  line-height: 20px;
  font-family: 'Consolas', 'Monaco', monospace;
}

.editor-textarea {
  flex: 1;
  background-color: #ffffff;
  color: #333333;
  border: none;
  outline: none;
  padding: 8px 12px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  line-height: 20px;
  resize: none;
  white-space: pre;
  overflow-wrap: normal;
  overflow-x: auto;
}

.editor-statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  background-color: #007acc;
  color: #ffffff;
  font-size: 11px;
}

.status-left {
  display: flex;
  gap: 16px;
}

.status-right {
  display: flex;
  gap: 12px;
}
</style>
