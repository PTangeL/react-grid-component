export default function getClass (className, styles) {
  return styles && styles[className] ? styles[className] : className
}
