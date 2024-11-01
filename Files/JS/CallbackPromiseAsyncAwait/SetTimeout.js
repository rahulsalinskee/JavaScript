/* ****** Set Time out ****** */
{
    function DisplayName(name) {
        return name;
    }
    console.log("Start");
    let displayName = setTimeout((name) => {
        let nameDisplayPrint = DisplayName(name);
        console.log(nameDisplayPrint);
    }, 1000, "Rahul");
    console.log(displayName);
    console.log("End");

    function GetDataFromDatabase(id) {
        setTimeout(() => {
            console.log("Get Data: " + id);
        }, 2000);
    }

    GetDataFromDatabase(12);
}