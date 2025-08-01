<!-- .vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <div class="custom-footer">
        <hr>
        <p>
          © 2025 <a href="https://video.mcenahle.org.cn" target="_blank">video.mcenahle.org.cn</a>。
          备案信息：
          <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2025116360号-1</a> |
          <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31015102000182" target="_blank">
            沪公网安备31015102000182号
          </a>
        </p>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.custom-footer {
  margin-top: 2em;
  padding: 1em;
  font-size: 0.875em;
  text-align: center;
  color: #888;
  border-top: 1px solid #eee;
}
</style>
