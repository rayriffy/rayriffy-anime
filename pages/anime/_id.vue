<template>
  <div class="text-2xl font-bold">{{ data }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { getMedia } from '../../functions/getMedia'

export default Vue.extend({
  name: 'Anime',
  asyncData: async context => {
    const { params } = context

    try {
      const media = await getMedia(Number(params.id))

      return {
        loading: false,
        error: false,
        data: media,
      }
    } catch {
      return {
        loading: false,
        error: true,
        data: null,
      }
    }
  },
  data: () => {
    return {
      loading: true,
      error: false,
      data: null,
    }
  },
})
</script>
