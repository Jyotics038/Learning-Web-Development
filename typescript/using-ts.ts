function  autobind(target:any,name:string,descriptor:PropertyDescriptor) {
    const originalMethod=descriptor.value;

    const newDescriptor:PropertyDescriptor={
        configurable:true,
        get(){
            return originalMethod.bind(this);
        },
    };
    return newDescriptor;
}
enum ProjectStatus{
    Active,
    Finished,
}

class Project{
    constructor(
    public id:string,
    public title:string,
    public description:string,
    public people:number,
    public status:ProjectStatus)
    {

    }
}

class ProjectInput{
    FormE1:HTMLFormElement;
    titleE1:HTMLFormElement;
    peopleE1:HTMLFormElement;
    descriptionE1:HTMLFormElement;
    constructor(){
        this.FormE1=document.querySelector('form') as HTMLFormElement;
        this.titleE1=document.getElementById('title') as HTMLInputElement;
        this.peopleE1=document.getElementById('people') as HTMLInputElement;
        this.descriptionE1=document.getElementById('description') as HTMLInputElement;

        this.configure();
    }
    
    
    private configure(){
      this.FormE1.addEventListener('submit',this.submitHandler);

    }
    @autobind
    private submitHandler(event:Event){
        event.preventDefault();

        const title=this.titleE1.value;
        //console.log(title);
        const description=this.descriptionE1.value;
        const people=new.peopleE1.value;
    }
    }
const projectInput=new ProjectInput();
