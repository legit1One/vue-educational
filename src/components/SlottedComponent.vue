<template>
  <div class="overlay">
    <div class="modal">
      <div class="header">
        <!-- named slot -->
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer"></div>
    </div>
 </div>
</template>

<script setup>
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, .3);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  max-width: 400px;
  width: 100%;
  background: white;
  border-radius: 12px;
}

.header, .footer, .body {
  min-height: 20px;
  padding: 20px;
}
</style>