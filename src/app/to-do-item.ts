export class ToDoItem {
    title: string;
    completed: boolean; 
    date: string; 

    constructor(t: string, c: boolean, d: string) {
        this.title = t;
        this.completed = c; 
        this.date = d;
    }

}
