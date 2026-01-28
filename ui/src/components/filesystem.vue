<script setup lang="ts">
import { ref } from 'vue'

interface FileNode {
  name: string
  type: 'file' | 'directory'
  children?: FileNode[]
  expanded?: boolean
}

const fileTree = ref<FileNode[]>([
  {
    name: 'src',
    type: 'directory',
    expanded: true,
    children: [
      {
        name: 'components',
        type: 'directory',
        children: [
          { name: 'FileSystem.vue', type: 'file' },
          { name: 'Editor.vue', type: 'file' },
          { name: 'Terminal.vue', type: 'file' },
        ],
      },
      { name: 'mdx', type: 'directory', children: [{ name: 'mdx.vue', type: 'file' }] },
      { name: 'index.ts', type: 'file' },
    ],
  },
  {
    name: 'package.json',
    type: 'file',
  },
  {
    name: 'README.md',
    type: 'file',
  },
])

function toggleExpand(node: FileNode) {
  if (node.type === 'directory') {
    node.expanded = !node.expanded
  }
}
</script>

<template>
  <div class="file-system">
    <div class="file-system-header">
      <span class="header-title">文件资源管理器</span>
    </div>
    <div class="file-tree">
      <ul class="tree-list">
        <li v-for="node in fileTree" :key="node.name" class="tree-item">
          <div class="tree-node" @click="toggleExpand(node)">
            <span v-if="node.type === 'directory'" class="expand-icon">
              {{ node.expanded ? '▼' : '▶' }}
            </span>
            <span v-else class="expand-icon placeholder" />
            <span class="node-icon">{{ node.type === 'directory' ? '📁' : '📄' }}</span>
            <span class="node-name">{{ node.name }}</span>
          </div>
          <ul v-if="node.children && node.expanded" class="tree-children">
            <li v-for="child in node.children" :key="child.name" class="tree-item">
              <div class="tree-node" @click="toggleExpand(child)">
                <span v-if="child.type === 'directory'" class="expand-icon">
                  {{ child.expanded ? '▼' : '▶' }}
                </span>
                <span v-else class="expand-icon placeholder" />
                <span class="node-icon">{{ child.type === 'directory' ? '📁' : '📄' }}</span>
                <span class="node-name">{{ child.name }}</span>
              </div>
              <ul v-if="child.children && child.expanded" class="tree-children">
                <li v-for="grandChild in child.children" :key="grandChild.name" class="tree-item">
                  <div class="tree-node">
                    <span class="expand-icon placeholder" />
                    <span class="node-icon">📄</span>
                    <span class="node-name">{{ grandChild.name }}</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-system {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  color: #333333;
  font-size: 13px;
}

.file-system-header {
  padding: 10px 12px;
  background-color: #e8e8e8;
  border-bottom: 1px solid #d0d0d0;
  display: flex;
  align-items: center;
}

.header-title {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #555555;
}

.file-tree {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.tree-list,
.tree-children {
  list-style: none;
  margin: 0;
  padding: 0;
}

.tree-children {
  padding-left: 16px;
}

.tree-node {
  display: flex;
  align-items: center;
  padding: 4px 12px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s;

  &:hover {
    background-color: #e0e0e0;
  }
}

.expand-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-right: 4px;
  color: #666666;

  &.placeholder {
    visibility: hidden;
  }
}

.node-icon {
  margin-right: 6px;
  font-size: 14px;
}

.node-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
