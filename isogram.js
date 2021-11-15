//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  let noHyphens = word.replaceAll('-', '').replace(' ', '')
  let no
  let wordLower = noHyphens.toLowerCase()
  //if the first occurrence of the character 
  //is also the last occurrence
  //then the word repeats & is not an isogram
  for (let i=0; i<wordLower.length; i++) {
    if ( wordLower.indexOf(wordLower[i]) !== wordLower.lastIndexOf(wordLower[i]) ) {
      return false;
    }
  }
return true;
};
