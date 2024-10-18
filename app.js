// const Base_Url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// const dropDrown = document.querySelectorAll(".select-container select");
// const btn = document.querySelector(" form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropDrown) {
//   for (code in countryList) {
//     let newOption = document.createElement("option");
// newOption.innerText = code;
// newOption.value = code;
// if(select.name=== "from" && code==="USD"){
//     newOption.selected = "selected";
// } else if (select.name=== "to" && code==="PKR"){
//     newOption.selected = "selected";
// }
// select.append(newOption);
//   }
//   select.addEventListener("change",(evt)=>{
//     updateFlag(evt.target);
//   });
// }

// const updateFlag = (element)=>{
//  let code = element.value;
//  let countryCode = countryList[code];
//  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//  let img = element.parentElement.querySelector("img");
//  img.src = newSrc;
// }

// btn.addEventListener("click", async (evt)=>{
//  evt.preventDefault();
//  let amount = document.querySelector("form input");
//  let amtVal = amount.value;
//  if(amtVal === " " || amtVal < 1){
//   amtVal = 1;
//   amount.value = "1";
//  }
 
// //console.log(fromCurr.value,toCurr.value);
// const url = `${Base_Url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// let response = await fetch(url);
// let data = await response.json();
// let rate = data[toCurr.value.toLowerCase()];

// let finalAmount = amtVal * rate;
// msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// });


// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });



// new one started



const Base_Url = "https://api.currencyfreaks.com/convert?apikey=YOUR_API_KEY&from=USD&to=PKR&amount=100";
const dropDrown = document.querySelectorAll(".select-container select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropDrown) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if (select.name === "from" && code === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && code === "PKR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let code = element.value;
    let countryCode = countryList[code];
    let newSrc =" https://flagsapi.com/${countryCode}/flat/64.png";
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const updateExchangeRate = async () => {
    let amount = document.querySelector("form input");
    let amtVal = amount.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const url = `${Base_Url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()];

        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        msg.innerText = 'Failed to fetch exchange rate.';
    }
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});
































