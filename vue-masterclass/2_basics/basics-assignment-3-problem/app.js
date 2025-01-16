const app = Vue.createApp({
    computed: {
        result() {
            if (this.counter < 37) {return "You're not there yet."}
            else if (this.counter > 37) {return "Too much!"}
            else {return this.counter}
        }
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add(value) {
            this.counter += value;
        },
        resetCounter() {
            this.counter = 0;
        }
    },
    watch: {
        result() {
            setTimeout(this.resetCounter, 5000);
        }
    }
});

app.mount("#assignment");