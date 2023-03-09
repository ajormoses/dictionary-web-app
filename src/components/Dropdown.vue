<template>
  <div class="menu-item relative cursor-pointer" @click="isOpen = !isOpen">
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
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a
            class="leading-[24px] text-[14px] hover:text-[#A445ED] font-bold"
            :href="item.link"
            >{{ item.title }}</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
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
