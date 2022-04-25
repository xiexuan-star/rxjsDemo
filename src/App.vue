<template>
  <input ref="inputRef" v-model="inputContent"/>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { getList } from './mock';

const inputContent = ref('');
const list = ref<{ id: number, name: string }[]>([]);

watchEffect(() => {
  //
});

</script>
