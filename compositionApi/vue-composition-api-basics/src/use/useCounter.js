import { computed, nextTick, reactive, watch } from "vue";

const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

export function useCounter() {

  /* Must be outside function to be same across all uses
  const counterData = reactive({
      count: 0,
      title: 'My Counter'
    })
      */

  watch(() => counterData.count, (newCount, oldCount) => {
    if (newCount > 19) {
      alert("You hit 20?");
    }
  }) 

  const evenOrOdd = computed(() => {
    if (counterData.count % 2 === 0) {
      return 'even'
    }
      return 'odd'
  })

  const decreaseCounter = async (amount) => {
    counterData.count -= amount;
    await nextTick()
    console.log('Do something when the DOM updates')
  }
  const increaseCounter = (amount) => {
    counterData.count += amount;
  }

  return {
    counterData,
    decreaseCounter,
    evenOrOdd,
    increaseCounter
  }
}