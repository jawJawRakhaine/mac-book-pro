// updating price
function updatePrice(inputId, cost) {
  const extraMemory = document.getElementById(inputId, cost);
  extraMemory.innerText = cost;
  calculationTotal();
}
// getting total price & final total
function calculationTotal() {
  // best price
  const bestPrice = 1299;
  // extra memory
  const extraMemoryTotal = parseFloat(
    document.getElementById("extra-memory-cost").innerText
  );
  // extra storage
  const extraStorageTotal = parseFloat(
    document.getElementById("extra-storage-cost").innerText
  );
  // delivery cost
  const deliveryCostTotal = parseFloat(
    document.getElementById("delivery-cost").innerText
  );
  // total price
  document.getElementById("total-price").innerText =
    bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
  // getting total for last total
  document.getElementById("final-total").innerText =
    bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
}
// discounted total
function discountTotal() {
  const matchCode = document.getElementById("promo-input");
  if (matchCode.value == "stevekaku") {
    const TotalPriceText = document.getElementById("total-price");
    const TotalPrice = parseFloat(TotalPriceText.innerText);
    const discount = parseFloat((TotalPrice * 20) / 100);
    const discountedTotal = TotalPrice - discount;
    document.getElementById("final-total").innerText = discountedTotal;
    matchCode.value = "";
  } else {
    alert("Promo code does not match. Try again.");
  }
}
// 8gb memory button event-handler
document
  .getElementById("8gb-memory-btn")
  .addEventListener("click", function () {
    updatePrice("extra-memory-cost", 0);
  });
// 16gb memory button event-handler
document
  .getElementById("16gb-memory-btn")
  .addEventListener("click", function () {
    updatePrice("extra-memory-cost", 180);
  });
// 256gb storage button event-handler
document
  .getElementById("256gb-storage-btn")
  .addEventListener("click", function () {
    updatePrice("extra-storage-cost", 0);
  });
// 512gb storage button event-handler
document
  .getElementById("512gb-storage-btn")
  .addEventListener("click", function () {
    updatePrice("extra-storage-cost", 100);
  });
// 1TB storage button event-handler
document
  .getElementById("1tb-storage-btn")
  .addEventListener("click", function () {
    updatePrice("extra-storage-cost", 180);
  });
// aug21 button event-handler
document
  .getElementById("free-delivery-btn")
  .addEventListener("click", function () {
    updatePrice("delivery-cost", 0);
  });
// aug21 button event-handler
document
  .getElementById("charge-delivery-btn")
  .addEventListener("click", function () {
    updatePrice("delivery-cost", 20);
  });
// apply button event-handler
document.getElementById("apply-btn").addEventListener("click", function () {
  discountTotal();
});
