/**
 * Function that when called, solves the problem statement mentioned in ProblemStatement.txt file.
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let pointer = 0;
    let tempResult = ['',''];
    let tempResult2;
    let result;
    
    if(s.length == 1 || numRows==1) {
        result = s
    } else {
        do{
            
            for ( let i = 1; i < numRows; i++){

                if(pointer == s.length){
                        break;
                    }

                if(s.charAt(pointer)){
                    if(tempResult[i]){
                        tempResult[i] = tempResult[i] + s.charAt(pointer)
                    } else {
                         tempResult[i] = s.charAt(pointer)
                    }
                    pointer = pointer + 1;
                    if(pointer == s.length){
                        break;
                    }
                }
            }

            for ( let j = numRows; j > 1; j--){

                if(pointer == s.length){
                        break;
                    }

                if(s.charAt(pointer)){
                    if(tempResult[j]) {
                        tempResult[j] = tempResult[j] + s.charAt(pointer)
                    } else {
                        tempResult[j] = s.charAt(pointer)
                    }
                    pointer = pointer + 1;
                }
            }
        } while (pointer != s.length)
    
        tempResult2 = tempResult.filter((str)=>{
            return str != ''
        })
        result = tempResult2.join('')
    }
    
    return result;
};
