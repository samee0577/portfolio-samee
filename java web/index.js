
class person{
    constructor(name,age,...address){ 
        this.name=name;
        this.age=age;
        this.address=new Address(...address)
    }
}

class Address{
    constructor(street,city){
        this.street=street
        this.city=city
    }
}

const p1=new person("john",20,"mira street","rock bottom","int. company")

console.log(p1)