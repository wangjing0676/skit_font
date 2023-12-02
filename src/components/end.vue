<template>
    <div class="flex_center">
      <p class="flex_center">
        <span class="border"></span>
        <span class="end">END</span>
        <span class="border"></span>
      </p>
    </div>
</template>
<script>

export default {
}
</script>
<style  lang="scss" scoped>
.flex_center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    .end {
        color: #999;
        font-size: 12px;
        margin: 0 8px;
    }
    .border {
        width: 41px;
        height: 1px;
        background: #ddd;
    }
}
</style>