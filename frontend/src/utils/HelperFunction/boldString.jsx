function boldString(text) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/);

  // Return JSX with appropriate styles for bold and italic
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          // Bold text
          return (
            <strong style={{ color: "#000", fontWeight: "bold" }} key={index}>
              {part.slice(2, -2)}
            </strong>
          );
        } else if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <strong style={{ color: "#FF6B00" }} key={index}>
              {part.slice(1, -1)}{" "}
            </strong>
          );
        } else {
          // Regular text
          return part;
        }
      })}
    </>
  );
}

export { boldString };

// <>
//   {parts.map((part, index) =>
//     part.startsWith("*") && part.endsWith("*") ? (
//       <strong style={{ color: "#FF6B00" }} key={index}>
//         {part.slice(1, -1)}
//       </strong> // Remove * and wrap in <strong>
//     ) : (
//       part // Render normal text
//     )
//   )}
// </>
