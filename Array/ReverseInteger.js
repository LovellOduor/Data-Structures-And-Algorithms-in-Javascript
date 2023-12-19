function reverse(num){
    let reverse = 0;
    while(num > 0){
        let quo = num%10;
        num = parseInt(num/10);
        reverse = reverse*10 + quo; 
    }
    console.log(reverse);
}

reverse(223);