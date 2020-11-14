export class PersonModel {
    constructor(
        public  id: number = 0 ,
        public  lastName: string = '',
        public  firstName: string = '',
        public  job: string='',
        public  cin: string='',
        public  age: number=20,
        public path:string='',
    ){
        this.age = age;
        this.lastName = lastName;
        this.firstName = firstName;
        this.job = job;
        this.cin = cin;
        this.id = id;
        this.path = path;
    }
}
