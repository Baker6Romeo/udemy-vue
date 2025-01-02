const app = Vue.createApp({
  data() {
    return {
      confirmedName: '',
      counter: 10,
      name:''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    remove() {
      this.counter--;
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    submitForm() {
      alert("submitted!");
    }
  }
});

app.mount('#events');
