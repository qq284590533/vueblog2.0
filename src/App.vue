<template>
  <div id="app">
    <transition>
      <router-view class="wrapper"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
