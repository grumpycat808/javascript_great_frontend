function textSearch(text, query) {
   
    let queryLC = query.toLowerCase();
    // const indices = [];
    let newString = "";
    const recursiveSearch = (haystack, startingIndex) => {
        let lc = haystack.toLowerCase();
        console.log('haystack', haystack);
        if(lc.length == 0 || query.length === 0 || !lc.includes(queryLC)) {
            newString += haystack;
            return;
        };
        // debugger
    
        const index = lc.indexOf(queryLC)
        // indices.push(index + startingIndex);
        newString += haystack.slice(0, index) + "<b>" + haystack.slice(index, index + query.length) + "</b>";
         recursiveSearch(haystack.slice(index + query.length), index + query.length);
    }
    recursiveSearch(text, 0);
    newString = newString.replace("</b><b>", "")
    return newString;
}

console.log("textSearch", textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'booooooooo'));
function getAllIndices(text, query) {

}
