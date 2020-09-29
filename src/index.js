const sort = array => {
    let tmp;
    for(let i = array.length; i > 0 ; i--){
        for(let j =0; j < i; j++){
            if(array[j]> array[j + 1]){
                tmp = array[j];
                array[j] = array[j+1];
                array[j + 1] = tmp; 
            }
        }
    }
    return array;
}

const towelSort = matrix => {
    if(!matrix || matrix.length < 1) return [];
    let arrM = [];
    let res = [];
    for(let i = 0; i < matrix.length; i++){
        if(i % 2 !== 0){
            arrM.push(sort(matrix[i]).reverse());
        }else{
            arrM.push(sort(matrix[i]));
        }
    }

    for(let item of arrM){
        for(let value of item){
            res.push(value);
        }
    }
    return res;
}


module.exports = towelSort;
