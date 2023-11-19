export const formatChords = (rawData) => {
       // Replace [tab] and [/tab] tags with appropriate HTML elements
       let formattedData = rawData.replace(/\[tab\]/g, '<div class="tab font-mono whitespace-pre text-gray-700">').replace(/\[\/tab\]/g, '</div>');
  
       // Process [ch] and [/ch] tags within the formatted data
       formattedData = formattedData.split('\n').map(line => {
         if (line.includes('[ch]')) {
           // Replace chord tags and wrap chords with a span
           return line.replace(/\[ch\]/g, '<span class="chord font-bold text-gray-500">').replace(/\[\/ch\]/g, '</span>');
         } else {
           // Regular line (lyrics or other)
           return `<span class="lyrics block">${line}</span>`;
         }
       }).join('<br/>');
     
       return formattedData;
  };
  
  export const findInObject = (obj, key) => {
    let objects = [];
    for (const i in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      if (typeof obj[i] === 'object') {
        objects = objects.concat(findInObject(obj[i], key));
      } else if (i === key) {
        objects.push(obj[i]);
      }
    }
    return objects;
  };