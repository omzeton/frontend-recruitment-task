<template>
  <div class="carousel mt-40">
    <div ref="mainCarousel" class="main-carousel ml-16 md:ml-32">
      <div v-for="cell in 20" :key="cell" class="carousel-cell mr-16 bg-white">
        <div class="cell__image">
          <img
            src="https://i.pinimg.com/originals/3c/40/b7/3c40b78843a9dc8621ea4b448ef9feda.jpg"
          />
        </div>
        <div class="cell__details ml-8">
          <div class="adjust-button bg-orange">
            <img src="~/assets/adjust.svg" />
          </div>
          <h2 class="bold-14 text-black mt-12 mb-4">Title</h2>
          <h3 class="normal-12 text-offblack-600 mb-4">Type</h3>
          <p class="normal-12 text-offblack-600">Width: 120cm</p>
          <p class="normal-12 text-offblack-600">Height: 120cm</p>
          <p class="normal-12 text-offblack-600">Depth: 120cm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      const Flickity = require("flickity");
      const elem = this.$refs.mainCarousel;
      const flkty = new Flickity(elem, {
        cellAlign: "left",
        prevNextButtons: false,
        pageDots: false,
      });
    }
  },
};
</script>

<style lang="scss">
.main-carousel {
  outline: none;
}
.carousel-cell {
  width: 164px;
  height: 273px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  .cell__image {
    height: 50%;
    width: 100%;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cell__details {
    height: 50%;
    width: 100%;
    overflow: hidden;
    .adjust-button {
      position: absolute;
      top: calc(50% - 16px);
      right: 6px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
}
</style>