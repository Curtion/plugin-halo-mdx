<script setup lang="ts">
import { ref } from 'vue'

const terminalLines = ref([
  { type: 'info', content: 'Microsoft Windows [版本 10.0.19045.3693]' },
  { type: 'info', content: '(c) Microsoft Corporation。保留所有权利。' },
  { type: 'empty', content: '' },
  { type: 'prompt', content: 'D:\\Code\\Curtion\\plugin-halo-mdx>', command: 'npm run dev' },
  { type: 'output', content: '> plugin-halo-mdx@1.0.0 dev' },
  { type: 'output', content: '> vite' },
  { type: 'empty', content: '' },
  { type: 'output', content: '  VITE v5.0.0  ready in 234 ms' },
  { type: 'success', content: '  ➜  Local:   http://localhost:5173/' },
  { type: 'info', content: '  ➜  Network: use --host to expose' },
  { type: 'empty', content: '' },
])

const currentCommand = ref('')

function executeCommand() {
  if (currentCommand.value.trim()) {
    terminalLines.value.push({
      type: 'prompt',
      content: `D:\\Code\\Curtion\\plugin-halo-mdx>`,
      command: currentCommand.value,
    })
    terminalLines.value.push({
      type: 'output',
      content: `执行命令: ${currentCommand.value}`,
    })
    currentCommand.value = ''
  }
}

function clearTerminal() {
  terminalLines.value = []
}
</script>

<template>
  <div class="terminal">
    <div class="terminal-header">
      <div class="terminal-tabs">
        <div class="terminal-tab active">
          <span class="tab-icon">⚡</span>
          <span class="tab-name">终端</span>
        </div>
        <div class="terminal-tab">
          <span class="tab-icon">📤</span>
          <span class="tab-name">输出</span>
        </div>
        <div class="terminal-tab">
          <span class="tab-icon">🔍</span>
          <span class="tab-name">调试控制台</span>
        </div>
      </div>
      <div class="terminal-actions">
        <span class="action-btn" title="清除" @click="clearTerminal">🗑️</span>
        <span class="action-btn" title="最大化">⛶</span>
        <span class="action-btn" title="关闭">✕</span>
      </div>
    </div>
    <div class="terminal-content">
      <div v-for="(line, index) in terminalLines" :key="index" class="terminal-line" :class="line.type">
        <span v-if="line.type === 'prompt'" class="prompt-prefix">{{ line.content }}</span>
        <span v-if="line.type === 'prompt' && line.command" class="command">{{ line.command }}</span>
        <span v-else>{{ line.content }}</span>
      </div>
      <div class="terminal-input-line">
        <span class="prompt-prefix">D:\\Code\\Curtion\\plugin-halo-mdx></span>
        <input
          v-model="currentCommand"
          type="text"
          class="terminal-input"
          spellcheck="false"
          autocomplete="off"
          @keyup.enter="executeCommand"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terminal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #333333;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
}

.terminal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 8px;
}

.terminal-tabs {
  display: flex;
}

.terminal-tab {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 12px;
  border-bottom: 2px solid transparent;
  user-select: none;
  color: #666666;

  &:hover {
    background-color: #e8e8e8;
  }

  &.active {
    background-color: #ffffff;
    border-bottom-color: #007acc;
    color: #333333;
  }
}

.tab-icon {
  margin-right: 6px;
  font-size: 12px;
}

.terminal-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 3px;
  font-size: 12px;
  opacity: 0.7;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
    background-color: #e0e0e0;
  }
}

.terminal-content {
  flex: 1;
  padding: 8px 12px;
  overflow-y: auto;
  line-height: 1.5;
}

.terminal-line {
  white-space: pre-wrap;
  word-break: break-all;

  &.info {
    color: #666666;
  }

  &.success {
    color: #28a745;
  }

  &.output {
    color: #333333;
  }

  &.prompt {
    color: #333333;
  }
}

.prompt-prefix {
  color: #6f42c1;
  margin-right: 4px;
}

.command {
  color: #333333;
}

.terminal-input-line {
  display: flex;
  align-items: center;
  margin-top: 4px;
}

.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #333333;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin-left: 4px;
}
</style>
