<template>
  <div class="toggle">
    <div class="toggle__wrapper bg-white">
      <div
        v-for="(option, index) in toggleOptions"
        :key="index"
        class="toggle__wrapper__btn"
        :class="{ 'bg-orange': selectedOption === index }"
        @click="toggleOption(index)"
      >
        <p
          class="bold-14 text-white mx-32 my-8"
          :class="selectedOption === index ? 'text-white' : 'text-offblack-600'"
        >
          {{ option.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleOptions: [
        {
          name: "Type01 Plywood",
          value: "t01p",
        },
        {
          name: "Type01 Veneer",
          value: "t01v",
        },
        {
          name: "Type02",
          value: "t02",
        },
      ],
      selectedOption: 0,
    };
  },
  methods: {
    toggleOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="scss">
.toggle {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  &__wrapper {
    display: flex;
    border-radius: 30px;
    &__btn {
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>