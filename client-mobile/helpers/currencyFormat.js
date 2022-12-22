export default function currencyFormat(price) {
  let rupiah = String(price)
  rupiah = rupiah.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  return `Rp${rupiah}`;
}