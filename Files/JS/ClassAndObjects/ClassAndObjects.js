{
    class Car {
        modelName = "";
        fuelType = "";
        cost = 0;

        constructor(modelName, fuelType, cost) {
            this.modelName = modelName;
            this.fuelType = fuelType;
            this.cost = cost;
        }

        Start() {
            console.log("Engine Start For: " + this.modelName + " " + this.fuelType + " " + this.cost);
        }

        Stop(brandName, fuelType, cost) {
            return "Engine Stop For: " + brandName + " " + fuelType + " " + cost;
        }

        Average(brandName, fuelType) {
            return "Average For: " + brandName + " " + fuelType;
        }
    }

    let mahindraCar = new Car("XUV 800", "Diesel", 4000000);

    mahindraCar.Start();
    let carStop = mahindraCar.Stop(mahindraCar.modelName, mahindraCar.fuelType, mahindraCar.cost);
    let carAverage = mahindraCar.Average(mahindraCar.modelName, mahindraCar.fuelType);

    console.log(`Car Stop: ${carStop}`);
    console.log(`Car Average: ${carAverage}`);
}

/* ***** Class Inheritance ***** */
{
    class Person {
        personName = "";
        constructor(personName) {
            this.personName = personName;
        }

        Eat() {
            console.log("Person is eating");
        }

        Sleep() {
            console.log("Person is sleeping");
        }
    }

    class Engineer extends Person {
        name = "";

        constructor(name) {
            super();
            this.name = name;
        }

        Eat() {
            console.log("Engineer is eating");
        }
        Work () {
            super.Eat();
            console.log("Engineer is working");
        }
    }

    let engineer = new Engineer("Rahul");
    engineer.Work();
    engineer.Eat();
    engineer.Sleep();
}

/* ***** Assignment Code ***** */
{
    /* ***** Assignment 1 - To create a class "User" with name and email as properties with a method ViewData to view website data ***** */
    class User {
        name = "";
        email = "";

        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        ViewData() {
            console.log("View Data Method!");
        }
    }

    class Admin extends User {
        constructor(name, email) {
            super(name, email);
        }

        EditData() {
            console.log("Edit Data Method!");
        }
    }

    let staff1 = new User("Amit", "amit@gmail.com");
    let student1 = new User("Alok", "alok@gmail.com");
    let admin1 = new Admin("Rahul", "rahul@deptment.com");
    
    staff1.ViewData();
    student1.ViewData();
    admin1.EditData();
}