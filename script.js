const products = [
  {name:"StudyBook Air",icon:"💻",price:28999,type:"laptop",desc:"Lightweight laptop for study, browsing and coding."},
  {name:"CodePro 15",icon:"💻",price:54999,type:"laptop",desc:"Powerful laptop for coding and multitasking."},
  {name:"Creator X",icon:"💻",price:79999,type:"laptop",desc:"High-performance laptop for development."},
  {name:"SoundPods Lite",icon:"🎧",price:1999,type:"audio",desc:"Affordable wireless earbuds."},
  {name:"NoiseCancel Pro",icon:"🎧",price:8999,type:"audio",desc:"Wireless headphones with noise cancellation."},
  {name:"FitWatch",icon:"⌚",price:3499,type:"watch",desc:"Smartwatch for fitness and daily tracking."},
  {name:"SmartWatch Ultra",icon:"⌚",price:12999,type:"watch",desc:"Advanced smartwatch for health and fitness."},
  {name:"PhoneMax",icon:"📱",price:24999,type:"phone",desc:"Balanced smartphone with strong battery and camera."},
  {name:"PhonePro AI",icon:"📱",price:64999,type:"phone",desc:"Premium smartphone with AI features."}
];

document.getElementById("recommendBtn").addEventListener("click", function() {
  const need = document.getElementById("need").value.toLowerCase();
  const budget = document.getElementById("budget").value;
  const results = document.getElementById("results");

  let matches = products.filter(p => {
    if (need.includes(p.type)) return true;
    if (p.type === "laptop" && (need.includes("study") || need.includes("coding"))) return true;
    if (p.type === "audio" && (need.includes("music") || need.includes("headphone"))) return true;
    if (p.type === "watch" && (need.includes("fitness") || need.includes("gym"))) return true;
    return false;
  });

  if (matches.length === 0) matches = products;

  if (budget === "low") matches = matches.filter(p => p.price <= 30000);
  if (budget === "mid") matches = matches.filter(p => p.price > 30000 && p.price <= 60000);
  if (budget === "high") matches = matches.filter(p => p.price > 60000);

  if (matches.length === 0) matches = products.slice(0,3);

  results.innerHTML = matches.slice(0,3).map(p => `
    <div class="product">
      <div class="icon">${p.icon}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <strong>₹${p.price.toLocaleString("en-IN")}</strong>
    </div>
  `).join("");
});
