const LyricsDisplay = ({ lyrics, scrollPosition }) => {
    return (
      <div className="lyrics-container whitespace-nowrap" style={{ transform: `translateX(${scrollPosition}px)` }}>
        {lyrics.map((line, index) => (
          <span key={index} className="lyrics-line inline-block mr-12 text-4xl">
            {line}
          </span>
        ))}
      </div>
    );
  };
  
  export default LyricsDisplay;
  