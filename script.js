// Async Javascript

// console.log("first");
// setTimeout(function () { console.log("Third"); }, 0);
// console.log("Second");


// const ans = new Promise((res, rej) => {
//   var n = Math.floor(Math.random() * 10);

//   if (n < 5) {
//     return res()
//   } else {
//     return rej()
//   }
// })


// ans.then(
//   function () { console.log("below"); }
// )
//   .catch(
//     function () { console.log("above"); }
//   )


// 1. first resolve
// 2. second resolve
// 3. third resolve
// 4. fourth resolve
// 5. fifth resolve

//promise
const ans1 = new Promise((res, rej) => {
  return res("first resolve")
})

const ans2 = ans1.then(function (data1) {
  console.log("then", data1)
  return new Promise((res, rej) => {
    return res("second resolve")
  })
}).catch(function (dataer) {
  console.log("catch", dataer)
})

const ans3 = ans2.then(function (d) {
  console.log("then2", d)
  return new Promise((res, rej) => {
    return res("Third resolve")
  })
}).catch(function (d) {
  console.log("catch2", d)
})

var ans4 = ans3.then(function (dd) {
  console.log("then3", dd)
  return new Promise((res, rej) => {
    return res("fourth resolve")
  })
}).catch(function (dd) {
  console.log("catch3", dd)
})

const ans5 = ans4.then(function (dd) {
  console.log("then4", dd)
  return new Promise((res, rej) => {
    return res("fifth resolve")
  })
}).catch(function (dd) {
  console.log("catch4", dd)
})


ans5.then(function (dd) {
  console.log("then5", dd)

}).catch(function (dd) {
  console.log("catch5", dd)
})


//async await 
function abc() {
  fetch("https://randomuser.me/api/")
    .then(function (data) {
      return data.json()
    }).then(function (res) {
      console.log(res)
    })
}

abc()

async function abc() {
  let raw = await fetch("https://randomuser.me/api/")
  let data = await raw.json()
  console.log(data)
}

abc()