i = 0;
while(i < 101){if(i == 0){FizzBuzz = 3;}
    else{if (i % 3 == 0 && i % 5 == 0){FizzBuzz = 0;i++;}
        else{if(i % 3 == 0){FizzBuzz = 1;i++;}
            else{if(i % 5 == 0){FizzBuzz = 2;i++;}
                else{FizzBuzz = 3;}}}}
    switch(FizzBuzz){
        case 0:console.log('FizzBuzz');break;
        case 1:console.log('Fizz');break;
        case 2:console.log('Buzz');break;
        default:console.log(i);i++;}}