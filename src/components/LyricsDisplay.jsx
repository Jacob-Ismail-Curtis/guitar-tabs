const LyricsDisplay = ({ songLines, scrollPosition }) => {
  return (
    <div className="lyrics-container flex flex-row py-10" style={{ transform: `translateX(${scrollPosition}px)` }}>
      {songLines.map((line, index) => (
        <div key={index} className="line-pair flex flex-col px-10"> {/* Adjusted right margin */}
          {/* Render chords line */}
          <div dangerouslySetInnerHTML={{ __html: line.chords }} className="chords-line"></div>
          {/* Render lyrics line */}
          <div dangerouslySetInnerHTML={{ __html: line.lyrics }} className="lyrics-line text-[23px]"></div> {/* text-[23px] */}
        </div>
      ))}
    </div>
  );
};

export default LyricsDisplay;
