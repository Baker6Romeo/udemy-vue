const app = Vue.createApp({
  data() {
    return {
        backgroundInput: '',
        styleClass: '',
        hidden: false,
    };
  },
  methods: {
    isParagraphHidden() {
        this.hidden = !this.hidden;
    }
  },
});

app.mount("#assignment");
