export class TodoModel {
    constructor(
        public id: string = '',
        public title: string = '',
        public content: string = ''
    ){
        this.content = content;
        this.title = title;
        this.id = id;
    }
}
