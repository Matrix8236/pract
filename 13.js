function elem(selector) {
    return document.querySelector(selector);
}

function elems(selector) {
    return document.querySelectorAll(selector);
}

let input = elem("input"),
    last_number,
    operation;

elems(".number").forEach(button => {
    button.addEventListener("click", function () {
        let number = this.innerText;
        input.value = input.value + number;
    });
});

elem("#plus").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "plus";
});

elem("#minus").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "minus";
});

elem("#umnoz").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "umnoz";
});

elem("#delenie").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "delenie";
});
elem("#stepen").addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    operation = "stepen";
});

elem("#ravno").addEventListener("click", function(){
    if (last_number && operation){let result;
        switch (operation) {
            case "plus": {
                result = parseInt(last_number) + parseInt(input.value);
            }
                break;
            case "minus": {
                result = parseInt(last_number) - parseInt(input.value);
            }
                break;
            case "umnoz": {
                result = parseInt(last_number) * parseInt(input.value);
            }
                break;
            case "delenie": {
                if (parseInt(input.value) !== 0) {
                    result = parseInt(last_number) / parseInt(input.value);
                } else {
                    input.value = "Error";
                    return;
                }
            }
                break;
            case "stepen": {
                result = Math.pow(parseFloat(last_number), parseFloat(input.value));
            }
                break;
        }
        input.value = result;
        last_number = null;
        operation = null;}

});
elem("#kvadrat").addEventListener("click",function(){
    let number=parseInt(input.value);
    input.value=Math.pow(number,2)
})
elem("#delete").addEventListener("click",function (){
    input.value="";
    last_number = null;
    operation=null;
});
elem("#koren").addEventListener("click",function(){
    let number=parseInt(input.value);
    input.value=Math.sqrt(parseFloat(number))
    last_number = null;
    operation = null;

})


