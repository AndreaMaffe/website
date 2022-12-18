export default function generateRandomNumberInRange (min, max) {
  const str = (Math.random() * (max - min) + min)
  return parseFloat(str)
}