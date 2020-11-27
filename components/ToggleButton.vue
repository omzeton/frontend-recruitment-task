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
          class="toggle__wrapper__btn__text bold-14 text-white mx-32 my-8"
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
    };
  },
  computed: {
    selectedOption: {
      get() {
        return this.$store.getters.GET_SELECTED_OPTION;
      },
      set(val) {
        this.$store.dispatch("SELECT_NEW_OPTION", val);
      },
    },
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
    width: calc(100vw - 32px);
    display: flex;
    border-radius: 30px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    @include desktop-min {
      width: auto;
      overflow-x: visible;
    }
    &__btn {
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &__text {
        white-space: nowrap;
      }
    }
  }
}
</style>