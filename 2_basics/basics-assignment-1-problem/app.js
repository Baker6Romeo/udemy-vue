const app = Vue.createApp({
    data() {
        return {
          age: 40,
          imageUrl: "https://pngimg.com/uploads/batman/batman_PNG10.png",
          name: "Jonathan",
        };
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');