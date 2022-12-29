function solution(ingredient) {
    const stack = [];
    let count = 0;

    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);

        if(stack.length >= 4){
            if(stack.slice(-4).join('') === "1231"){
                for(let j = 0; j < 4; j++){
                    stack.pop();
                };
                count++
            };
        };

    };

    return count;
}
