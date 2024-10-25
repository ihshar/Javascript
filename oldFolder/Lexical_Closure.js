function Outer(){
    let username = "Himashu"

    function inner(){
        let secret = "Himanshu is a Good Man"
        console.log("Inner",username);
    }

    function innerTwo(){
        console.log("InnerTwo",username);
    }

    inner();
    innerTwo();
}

Outer();