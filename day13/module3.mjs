export class Manager{
    constructor(name,salary,branch)
    {
        this.name=name;
        this.salary=salary;
        this.branch=branch;
    }
    display()
    {
        console.log("Manager name is:"+this.name);
        console.log("Manager salary is:"+this.salary);
        console.log("Manager branch is:"+this.branch);
    }
}
