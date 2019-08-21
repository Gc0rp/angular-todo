export class ToDoItem {
    title: string;
    completed: boolean; 
    date: Date; 

    constructor(t: string, c: boolean, d: Date) {
        this.title = t;
        this.completed = c; 
        this.date = d;
    }
}
