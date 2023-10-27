// Simple JavaScript Calculator Function


function calculator(n1,ch,n2){
            switch(ch){
                case ("*"):{
                    return n1 + n2;
                    break;    
                }
                case("/"):{
                    return n1/n2;
                    break;
                }
                case("+"):{
                    return n1 + n2;
                    break;
                }
                case("-"):{
                    return n1-n2;
                    break;
                }
                default:{
                    return "not a number";
                }
            }
        }

        console.log(calculator(2, "+", 2));
        console.log(calculator(2, "*", 2));
        console.log(calculator(4, "/", 2));
        console.log(calculator(4, "-", 2));
