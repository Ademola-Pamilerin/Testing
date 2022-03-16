const express = require("express");
const path = require("path");
const app = express();
const deeplink = require("node-deeplink");

//this  works for only IOS devices

app.get("/apple-app-site-association", (req, res) => {
  res.setHeader("Content-type", "application/json");
  res
    .statusCode(200)
    .sendFile(path.join(__dirname, "/apple-app-site-association"));
});

// app.get("/deeplink",(req,res)=>{
//     res.setHeader("Content-type","text/html")
//     res.sendFile(path.join(__dirname,"/client.html"));
// })

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "client.html"));
});

// app.get("/check", (req, res) => {
//   if(process.platform !== "android" || process.platform !=="")
// });

app.get(
  "/deeplink",
  deeplink({
    fallback: "www.facebook.com",
    andriod_package_name: "com.facebook.katana",
    ios_store_link: "https://apps.apple.com/us/app/facebook/id284882215",
  })
);

// this works for only andriod devices

// app.get("/deeplink",deeplink({
//     fallback: `http://localhost:3000`,
//     andriod_package_name:"Facebook: com"
// }))

app.listen(3000, () => {
  console.log("connected");
});
