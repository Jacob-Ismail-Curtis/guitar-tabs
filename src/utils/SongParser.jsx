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

  export const formatLinesForScroll = (rawData) => {
    // Split the data at the [Intro] tag
    const [songInformation, songContentWithoutIntro] = rawData.split('[Intro]');
    // Add the [Intro] tag back to the song content
    const songContent = '[Intro]' + (songContentWithoutIntro || '');
  
    // Split the song content into lines
    const lines = songContent.split('\n');
    const songLines = [];
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let chords = '';
      let lyrics = '';
  
      // Check if the line contains chords
      if (line.includes('[ch]')) {
        chords = processLine(line);
        // Check if the next line is lyrics
        if (i + 1 < lines.length && !lines[i + 1].includes('[ch]')) {
          lyrics = processLine(lines[i + 1]);
          i++; // Skip the next line as it has been processed
        }
      } else {
        // The line is lyrics
        lyrics = processLine(line);
      }
  
      songLines.push({ chords, lyrics });
    }
  
    return {
      songInformation: songInformation.trim(),
      songLines
    };
  };
  
  const processLine = (line) => {
    // Replace tab tags
    line = line.replace('[tab]', '<div class="tab font-mono whitespace-pre text-gray-700">')
               .replace('[/tab]', '</div>');
  
    // Replace chord tags
    line = line.replace(/\[ch\]/g, '<span class="chord font-bold text-gray-500">')
               .replace(/\[\/ch\]/g, '</span>');
  
    return `<span class="lyrics block whitespace-pre">${line}</span>`;
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