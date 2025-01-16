const app = Vue.createApp({
    data(){
        return {
          output: '',
          hello: "Hello",
          input: ''
        };
    },
    methods: {
        showAlert() {
            alert("Alert Shown");
        },
        updateInput(e) {
            this.input = e.target.value;
        },
        updateOutput() {
            console.log("Output");
            this.output = this.input;
            console.log(this.output);
        }
    }
    
});

app.mount("#assignment");