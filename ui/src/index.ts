import { VLoading } from '@halo-dev/components'
import { definePlugin } from '@halo-dev/ui-shared'
import { defineAsyncComponent } from 'vue'

export default definePlugin({
  extensionPoints: {
    'editor:create': () => {
      return [
        {
          name: 'mdx',
          displayName: 'MDX 编辑器',
          component: defineAsyncComponent({
            loader: () => import('./components/mdx.vue'),
            loadingComponent: VLoading,
          }),
          rawType: 'mdx',
          logo: '/plugins/halo-mdx/assets/logo.png',
        },
      ]
    },
  },
})
