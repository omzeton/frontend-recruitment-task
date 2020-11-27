<template>
  <div class="container bg-grey-700">
    <h2 class="container__heading bold-28 pt-64 mb-40 text-center">
      Explore the whole collection
    </h2>
    <ToggleButton />
    <Carousel />
  </div>
</template>

<script>
import ToggleButton from "../components/ToggleButton";
import Carousel from "../components/Carousel";

export default {
  components: {
    ToggleButton,
    Carousel,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
