<template>
    <div class="news-class">
        <div>这是一个插槽</div>
        <SlotTest>
            <h2>我是插槽内容</h2>
        </SlotTest>
    </div>
</template>

<script>
import SlotTest from './slot-test';
  export default {
      name: "news-class",
      components: {
          SlotTest
      }
  };
</script>

<style scoped>

</style>
