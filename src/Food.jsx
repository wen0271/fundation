export default function Food() {
  const food1 = "Orange";
  const food2 = "Banana";

  return (
    <>
      <ul>
        <li>Apple</li>
        {/* .toUpperCase()/ .toLowerCase():字母大/小寫 */}
        <li>{food1.toLowerCase()}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
    </>
  );
}
