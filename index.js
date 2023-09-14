const os = require("os");
const fs = require("fs");

// const getIPv4Addresses = () => {
//   const networkInterfaces = os.networkInterfaces();
//   const ipv4Addresses = [];

//   for (const key in networkInterfaces) {
//     for (const iface of networkInterfaces[key]) {
//       if (iface.family === "IPv4" && !iface.internal) {
//         ipv4Addresses.push(iface.address);
//       }
//     }
//   }

//   return ipv4Addresses;
// };

// const ipv4Addresses = getIPv4Addresses();

// const sysInfo = {
//   totalmem: `${(os.totalmem() / 1e9).toFixed(2)} GB`,
//   usedmem: `${((os.totalmem() - os.freemem()) / 1e9).toFixed(2)} GB`,
//   cpu: os.cpus()[0].model,
//   networkInterfaces: ipv4Addresses.slice(0, 2).join(" Or ") || "N/A",
// };

// const log = `
// Memory: ${sysInfo.usedmem} / ${sysInfo.totalmem}
// CPU Name: ${sysInfo.cpu}
// IP: ${sysInfo.networkInterfaces}
// `;

fs.readFileSync("log.text")

console.log(log);

try {
    fs.writeFileSync("log.text", log)
} catch (err) {
  console.log(err);
}
