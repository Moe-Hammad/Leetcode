// Find the longest unique Substring 

function lengthOfLongestSubstring(s: string): number {
    let charArray = s.split('')
    let unique = [charArray[0]] // Momentane richtige Antwort
    let contender =[charArray[0]] // Vorschlag des weiteren Array
    
    if(charArray.length ===  0){
        return 0
    }

    for(let i = 1; i < charArray.length; i++){
        if(unique[unique.length-1] === charArray[i]){
            break;
        }
        unique.push(charArray[i])
    }



    return unique.length;
};

lengthOfLongestSubstring("dwadasdawdas")