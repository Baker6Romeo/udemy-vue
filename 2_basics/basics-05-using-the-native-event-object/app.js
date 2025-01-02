const app = Vue.createApp({
  computed: {
    fullName() {
      console.log("Shaw");
      return this.name + " " + "Shaw";
    }
  },
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    outputFullName() {
      return this.name + ' ' + "Shaw";
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetCounter() {
      this.counter = 0;
    },
    resetInput() {
      this.name = '';
    }
  },
  watch: {
    counter(value) {
      if (value > 50){ this.resetCounter() }
    }
  }
});

app.mount('#events');
