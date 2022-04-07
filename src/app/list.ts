export class List {
    //? id!: number;
    //? task!: string;
    //? about!: string;

    //! input property binding passes data into a component, output property binding passes data out of a component.
    showAbout: boolean;
  name: any;
    constructor( public id: number, public task: string, public about: string, public completeDate: Date){
    this.showAbout=false;
}
}


//?ng generate class <class-name> syntax to create class which has properties of id and task