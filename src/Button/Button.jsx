import styles from './Button.module.css' //module css

export default function Button() {
  // inline css
  const inlineStyles={
    backgroundColor: "hsl(120, 100%, 50%)",
    color:" #333",
    padding: "10px 20px",
    borderRadius:"5px",
    border: "none",
    cursor: "pointer",
  }
  
  return (
    <>
    <button className={styles.button}>Click me</button>
    <button style={inlineStyles}>Click me</button>
    </>
  )
}
