/* ***** An Object is an Entity that contains state & behaviors (properties and methods) ***** */
{
    const student = {
        fullName: "Rahul Dravid",
        age: 20,
        grade: 90.5,
        printDetails: function () {
            console.log(this.fullName + " " + this.age + " " + this.grade);
        },
        calculateGrade: () => {
            if (this.grade >= 90 && this.grade <= 100) {
                return "Passed With Grade - A";
            }
            else if (this.grade >= 70 && this.grade <= 89) {
                return "Passed With Grade - B";
            }
            else if (this.grade >= 60 && this.grade <= 69) {
                return "Passed With Grade - C";
            }
            else if (this.grade >= 50 && this.grade <= 59) {
                return "Passed With Grade - D";
            }
            else if (this.grade >= 0 && this.grade <= 49) {
                return "Sorry! You have Failed";
            }
            else {
                return "Invalid Input";
            }
        }
    }
}

/* ***** Creating an Object with our own custom prototypes ***** */
{
    const employee = {
        /* ***** Creating functions in multiple ways ***** */
        
        /**
         * This function prints "Calculate Tax 1".
         */
        CalculateTax_1() {
            console.log("Calculate Tax 1");
        },

        /**
         * This function prints "Calculate Tax 2".
         */
        CalculateTax_2: function () {
            console.log("Calculate Tax 2");
        },

        /**
         * This function prints "Calculate Tax 3".
         */
        CalculateTax_3: () => {
            console.log("Calculate Tax 3");
        },

        /**
         * This function prints "Calculate Tax 4".
         */
        CalculateTax_4() {
            console.log("Calculate Tax 4");
        },

        /**
         * This function prints "Calculate Tax 5".
         */
        CalculateTaxFive: function CalculateTax_5() {
            console.log("Calculate Tax 5");
        },
    }

    /* ***** Adding the properties of the employee object to the AlphaBeta object ***** */
    const AlphaBeta = {
        fullName: "Alpha Beta1",
        age: 20,
        salary: 100000,
        CalculateTax_1() {
            console.log("Calculate Tax 1");
        }
    }

    const AlphaBeta2 = {
        fullName: "Alpha Beta2",
        age: 20,
        salary: 200000
    }

    const AlphaBeta3 = {
        fullName: "Alpha Beta3",
        age: 20,
        salary: 300000
    }

    const AlphaBeta4 = {
        fullName: "Alpha Beta4",
        age: 20,
        salary: 400000
    }

    const AlphaBeta5 = {
        fullName: "Alpha Beta5",
        age: 20,
        salary: 500000
    }

    /* ***** Adding the prototypes of the employee object to the AlphaBeta object ***** */
    AlphaBeta.__proto__ = employee;
    AlphaBeta2.__proto__ = employee;
    AlphaBeta3.__proto__ = employee;
    AlphaBeta4.__proto__ = employee;
    AlphaBeta5.__proto__ = employee;

    /* ***** Printing the objects ***** */
    console.dir(AlphaBeta);
    console.dir(AlphaBeta2);
    console.dir(AlphaBeta3);
    console.dir(AlphaBeta4);
    console.dir(AlphaBeta5);
}