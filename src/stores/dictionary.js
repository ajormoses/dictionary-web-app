import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
import { computed, ref } from "vue";

export const useDictionaryStore = defineStore("dictionary", () => {
  const dictionary = ref([]);
  const dico = computed(() => dictionary.value[0]);
  const fetchDictionary = async (payload) => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${payload}`
      );
      dictionary.value = data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    fetchDictionary,
    dictionary,
    dico,
  };
});
