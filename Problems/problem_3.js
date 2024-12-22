"use strict";
lengthOfLongestSubstring("abbabsc");
function lengthOfLongestSubstring(s) {
    let seen = new Set(); // Set zum Speichern der einzigartigen Zeichen im aktuellen Substring
    let left = 0; // Der linke Zeiger des Fensters
    let maxLength = 0; // Die Länge des längsten Substrings ohne Duplikate
    for (let right = 0; right < s.length; right++) {
        // Wenn das Zeichen bereits im Set ist, verschiebe den linken Zeiger nach rechts
        while (seen.has(s[right])) {
            seen.delete(s[left]); // Entferne das Zeichen, das durch den linken Zeiger geht
            left++; // Verschiebe den linken Zeiger nach rechts
        }
        seen.add(s[right]); // Füge das aktuelle Zeichen zum Set hinzu
        maxLength = Math.max(maxLength, right - left + 1); // Aktualisiere die maximale Länge
    }
    return maxLength;
}
