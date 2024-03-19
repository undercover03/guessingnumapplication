var a=(Math.ceil(Math.random()*100));
var count=1;
console.log(a);

function FindNum()
{
    var userinp=parseInt(document.getElementById("a1").value);
    if(userinp==a)
    {
        document.getElementById("res").textContent="Congratulations!!! You guessed the number in "+count+" tries.";

    }
    else if(userinp>a)
    {
        document.getElementById("res").textContent = "Try with the smaller number";

    }
    else{
        document.getElementById("res").textContent = "Try with the larger number";

    }
    document.getElementById("tries").textContent = count;
    count++;
}

