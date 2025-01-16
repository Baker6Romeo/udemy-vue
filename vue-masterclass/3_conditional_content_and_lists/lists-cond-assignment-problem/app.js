const app = Vue.createApp({
    computed: {
        isTasksVisible() {
            return this.tasks.length > 0 && this.taskIsVisible;
        },
        visibilityButton() {
            return this.taskIsVisible ? 'Hide' : 'Show'
        }
    },
    data() {
        return {
            taskInput: '',
            taskIsVisible: true,
            tasks: []
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskInput);
            this.taskInput = '';
        },
        toggleTaskVisibility() {
            this.taskIsVisible = !this.taskIsVisible;
        }
    }
});

app.mount("#assignment");