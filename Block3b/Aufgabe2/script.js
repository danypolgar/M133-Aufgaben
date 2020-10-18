class Person {
    constructor(firstname, lastname)
    {
        this._firstname = firstname;
        this._lastname = lastname;
        this.fulltname = firstname + " " + lastname;
    }


}

let person = new Person("Hans", "Meyer");
