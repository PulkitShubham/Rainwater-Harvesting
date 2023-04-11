function calculate() {
  const roofArea = document.getElementById("roofArea").value;
  const rainfall = document.getElementById("rainfall").value;
  const efficiency = document.getElementById("efficiency").value;

  const gallons = (roofArea * rainfall * efficiency) / 623.3;

  const result = document.getElementById("result");
  result.innerHTML = `You can harvest ${gallons.toFixed(
    2
  )} gallons of water annually.`;
}
