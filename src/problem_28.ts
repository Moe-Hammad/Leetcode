/**
 * Given two strings needle and haystack, 
 * return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param haystack 
 * @param needle 
 * @returns index of the first occurence
 */
function strStr(haystack: string, needle: string): number {

    let found = haystack.match(needle)
    if(found && found.index !== -1){
        return found!.index!
    }
    return -1
};

strStr("sadbutsad", "sad")