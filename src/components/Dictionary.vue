<template>
  <div class="font-[inter]">
    <div class="fixed w-full z-10 bg-white">
      <div class="container">
        <header class="py-6 flex justify-between items-center">
          <img src="../assets/images/logo.svg" />
          <div class="flex items-center">
            <div
              v-on:click="theme"
              class="bg-[#757575] w-[40px] h-[20px] rounded-[10px] px-[3px] flex items-center cursor-pointer"
            >
              <div
                v-if="light"
                class="w-[14px] h-[14px] rounded-full bg-white my-[3px]"
              ></div>
              <div
                v-else
                class="w-[14px] h-[14px] rounded-full bg-white my-[3px] ml-auto"
              ></div>
            </div>
            <img class="ml-4" src="../assets/images/icon-moon.svg" />
          </div>
        </header>
        <form
          @submit.prevent
          class="flex justify-between items-center bg-[#F4F4F4] rounded-[1rem] py-3 px-6"
        >
          <input
            class="bg-[#F4F4F4] w-full outline-none font-extrabold text-base"
            placeholder="Enter Text"
          />
          <img
            class="cursor-pointer"
            src="../assets/images/icon-search.svg"
            alt="Search"
          />
        </form>
      </div>
    </div>
    <div class="container flex justify-between items-center pt-[10rem]">
      <div>
        <h1
          class="text-[32px] md:text-[64px] md:leading-[60px] font-bold text-[#2D2D2D]"
        >
          Keyboard
        </h1>
        <p
          class="text-[#A445ED] text-base md:text-[24px] leading-[24px] md:leading-[50px] font-normal"
        >
          /'Ki:bo:d'/
        </p>
      </div>
      <img
        class="w-[48px] h-[48px] md:w-[75px] md:h-[75px] cursor-pointer"
        src="../assets/images/icon-play.svg"
      />
    </div>
    <div class="container py-6">
      <div class="flex justify-between items-center pb-5 md:pb-10">
        <h2
          class="italic font-bold leading-[22px] text-[18px] md:text-[24px] mr-4"
        >
          noun
        </h2>
        <div class="border border-[#E9E9E9] w-full bg-[#E9E9E9]"></div>
      </div>
      <div>
        <h1
          class="text-base md:text-[20px] text-[#757575] leading-[19px] md:leading-[21px] font-normal"
        >
          Meaning
        </h1>
        <ul class="py-4 text-[15px] md:text-[18px] list-inside">
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
        <div class="flex items-center">
          <h1
            class="text-base md:text-[20px] text-[#757575] leading-[19px] md:leading-[21px] font-normal mr-5 md:mr-8"
          >
            Synonyms
          </h1>
          <p class="text-[#A445ED] md:text-[20px] md:leading-[21px] font-bold">
            electronic keyboard
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center py-8 md:py-10">
        <h2
          class="italic font-bold leading-[22px] text-[18px] md:text-[24px] mr-4"
        >
          verb
        </h2>
        <div class="border border-[#E9E9E9] w-full bg-[#E9E9E9]"></div>
      </div>
      <div>
        <h1
          class="text-base md:text-[20px] text-[#757575] leading-[19px] md:leading-[25px] font-normal"
        >
          Meaning
        </h1>
        <ul class="py-4 text-[15px] list-inside md:text-[18px]">
          <li>To type on a computer keyboard.</li>
          <li class="text-[#757575] list-none ml-[1.3rem]">
            “Keyboarding is the part of this job I hate the most.”
          </li>
        </ul>
        <div class="bord pt-5 md:flex md:items-center">
          <h1
            class="text-[14px] text-[#757575] leading-[17px] font-normal underline md:mr-5"
          >
            Source
          </h1>
          <div class="flex items-center">
            <p
              class="font-normal mr-3 text-[14px] text-[#2D2D2D] leading-[17px] decoration-dotted cursor-pointer"
            >
              https://en.wiktionary.org/wiki/keyboard
            </p>
            <img src="../assets/images/icon-new-window.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      light: true,
    };
  },

  methods: {
    theme() {
      this.light = !this.light;
    },
  },
};
</script>

<style scoped>
.bord {
  border-top: 1px solid #e9e9e9;
}

ul {
  list-style-type: disc;
}

ul li {
  padding: 0.5rem 0;
}
</style>
