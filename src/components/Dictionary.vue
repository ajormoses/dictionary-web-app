<template>
  <div :class="currentFont">
    <div
      class="fixed w-full z-10 bg-white dark:bg-[#050505] transition-all duration-500 ease-in-out"
    >
      <div class="container pb-8">
        <header class="py-6 flex justify-between items-center">
          <img src="../assets/images/logo.svg" />
          <div class="flex items-center">
            <Dropdown @changeFont="font = $event" class="mr-[1.2rem]" />
            <div class="flex items-center">
              <div
                @click="toggleDark()"
                class="bg-[#757575] dark:bg-[#A445ED] w-[40px] h-[20px] rounded-[10px] px-[3px] flex items-center cursor-pointer"
              >
                <div
                  v-if="!isDark"
                  class="w-[14px] h-[14px] rounded-full bg-white my-[3px]"
                ></div>
                <div
                  v-else
                  class="w-[14px] h-[14px] rounded-full bg-white my-[3px] ml-auto"
                ></div>
              </div>
              <img
                class="ml-4 dark:stroke-[#A445ED]"
                src="../assets/images/icon-moon.svg"
              />
            </div>
          </div>
        </header>
        <form
          @submit.prevent="search"
          class="flex justify-between items-center bg-[#F4F4F4] rounded-[1rem] py-3 px-6"
        >
          <input
            v-model="keyword"
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
    <div class="container flex justify-between items-center pt-[10.5rem]">
      <div>
        <h1
          class="text-[32px] md:text-[64px] md:leading-[60px] font-bold text-[#2D2D2D] dark:text-white"
        >
          {{ dico?.word }}
        </h1>
        <p
          class="text-[#A445ED] text-base md:text-[24px] leading-[24px] md:leading-[50px] font-normal"
        >
          {{ dico?.phonetic }}
        </p>
      </div>
      <div v-if="dico?.phonetics[0].audio">
        <img
          @click="playMusic"
          class="w-[48px] h-[48px] md:w-[75px] md:h-[75px] cursor-pointer"
          src="../assets/images/icon-play.svg"
        />
        <audio
          ref="audio"
          :src="dico?.phonetics[0].audio"
          type="audio/mpeg"
        ></audio>
      </div>
    </div>
    <div class="container py-6">
      <div v-for="(meaning, index) in dico?.meanings" :key="index" class="mb-5">
        <div class="flex justify-between items-center pb-5 md:pb-10">
          <h2
            class="italic capitalize font-bold leading-[22px] text-[18px] md:text-[24px] mr-4 dark:text-white"
          >
            {{ meaning?.partOfSpeech }}
          </h2>
          <div
            class="border border-[#E9E9E9] w-full bg-[#E9E9E9] dark:border-[#3A3A3A]"
          ></div>
        </div>
        <div>
          <h1
            class="text-base md:text-[20px] text-[#757575] leading-[19px] md:leading-[21px] font-normal"
          >
            Meaning
          </h1>
          <ul
            class="py-2.5 text-[15px] md:text-[18px] list-inside dark:text-white"
          >
            <li v-for="(list, index) in meaning?.definitions" :key="index">
              {{ list?.definition }}
            </li>
          </ul>
          <div class="flex items-center" v-if="meaning.synonyms.length">
            <h1
              class="text-base md:text-[20px] text-[#757575] leading-[19px] md:leading-[21px] font-normal mr-4 md:mr-8"
            >
              Synonyms
            </h1>
            <p
              v-for="(list, index) in meaning.synonyms"
              :key="index"
              @click="searchSynonyms(list)"
              class="text-[#A445ED] md:text-[20px] md:leading-[21px] font-bold pr-2 text-center cursor-pointer"
            >
              {{ index > 2 ? "" : list }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="dico?.word"
        class="bord pt-5 md:flex md:items-center dark:border-t dark:border-[#3A3A3A]"
      >
        <h1
          class="text-[14px] text-[#757575] leading-[17px] font-normal underline md:mr-5"
        >
          Source
        </h1>
        <div class="flex items-center">
          <div class="md:flex">
            <a
              v-for="(url, index) in dico?.sourceUrls"
              :key="index"
              :href="url"
              class="font-normal mr-3 text-[14px] text-[#2D2D2D] leading-[17px] decoration-dotted cursor-pointer dark:text-white"
            >
              {{ url }}
            </a>
          </div>
          <img src="../assets/images/icon-new-window.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useDark, useToggle } from "@vueuse/core";
import Dropdown from "./Dropdown.vue";
import { onMounted, ref } from "vue";
import { useDictionaryStore } from "../stores/dictionary";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { fetchDictionary } = useDictionaryStore();
const { dico } = storeToRefs(useDictionaryStore());

let keyword = ref("");

onMounted(() => {
  fetchDictionary(keyword.value);
});

const search = () => {
  fetchDictionary(keyword.value);
};

const searchSynonyms = (value) => {
  fetchDictionary(value);
  keyword = ref(value);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const font = ref("Sans Serif");

const fontChange = (font) => {
  font.value = font;
};

const fonts = {
  "Sans Serif": "sanserif",
  Serif: "sans",
  Mono: "mono",
};

const currentFont = computed(() => {
  return fonts[font.value];
});

const audio = ref(null);

const playMusic = () => {
  audio.value.play();
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
