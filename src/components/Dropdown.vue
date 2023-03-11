<template>
  <div class="menu-item relative cursor-pointer" @click="handleOpen">
    <div
      class="flex justify-between items-center border-r border-[#E9E9E9] pr-3"
    >
      <div class="mr-3 font-bold text-[#2D2D2D] dark:text-white">
        {{ title }}
      </div>
      <img
        class="w-[12px] h-[6px]"
        src="../assets/images/icon-arrow-down.svg"
      />
    </div>
    <transition
      class="absolute w-[110px] lg:w-[130px] right-4 p-4 dropmenu dark:bg-[#1f1f1f] dark:text-white dark:shadow-[0px_5px_30px_#A445ED]"
      name="fade"
      appear
    >
      <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
          <p
            @click="changeFont('Sans Serif')"
            class="leading-[24px] text-[14px] hover:text-[#A445ED] font-bold font-[inconsolata]"
          >
            Sans Serif
          </p>
          <p
            @click="changeFont('Serif')"
            class="leading-[24px] text-[14px] hover:text-[#A445ED] font-bold font-[lora]"
          >
            Serif
          </p>
          <p
            @click="changeFont('Mono')"
            class="leading-[24px] text-[14px] hover:text-[#A445ED] font-bold font-[inter]"
          >
            Mono
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import { Ref } from 'vue';
export default {
  name: "dropdown",

  data() {
    return {
      isOpen: false,
      title: "San Serif",
    };
  },

  methods: {
    handleOpen() {
      this.isOpen = !this.isOpen;
    },

    changeFont(font) {
      this.title = font;
      this.$emit("changeFont", font);
    },
  },
};
</script>

<style>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}

nav .menu-item .sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.dropmenu {
  background: #ffffff;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.darkdropmenu {
  background: #1f1f1f;
  box-shadow: 0px 5px 30px #a445ed;
  border-radius: 16px;
}
</style>
