function boldString(text) {
  // Split the string by `*`, capturing bold parts
  const parts = text.split(/(\*.*?\*)/);

  // Return JSX with bold parts wrapped in <strong>
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <strong key={index}>{part.slice(1, -1)}</strong> // Remove * and wrap in <strong>
        ) : (
          part // Render normal text
        )
      )}
    </>
  );
}

export { boldString };
