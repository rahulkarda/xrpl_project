function getNet() {
  let net;
  net = "wss://xrplcluster.com";
  return net;
}

async function getTokens() {
  let net = getNet();
  const client = new xrpl.Client(net);
  results = "Connecting to " + net + "...";
  document.getElementById("resultField").value = results;
  await client.connect();
  results += "\nConnected. \nGetting NFTs...\n";
  document.getElementById("resultField").value = results;
  const nfts = await client.request({
    method: "account_nfts",
    account: accountField.value,
    limit: 400,
  });

  //results += "\nNFTs:\n " + JSON.stringify(nfts, null, 2);
  //document.getElementById("resultField").value = results;

  let allNfts = nfts.result.account_nfts;

  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwXtered5xDwifU1LDAEira2zQVN57gTBG") {
      results = "\nThis is a number1 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r4WACvo5MF4F67WNYgVbrBRBxUbvYQo3t5") {
      results = "\nThis is a number2 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rpeUegPQ7phkPDt3i6LaMcHd27jnPpJoPJ") {
      results = "\nThis is a number3 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rMAThnVnax3WcXLuYZ94ZtpNtiCvL4SQYZ") {
      results = "\nThis is a number4 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rfBjAa63uJic3Xyz3tPnZwH93qj2ftL7w5") {
      results = "\nThis is a number5 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rpjufc2JYgWZiQeJHoNhzBzRmEQ1JbqzmV") {
      results = "\nThis is a number6 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rPNYYKaDw4R1rwDs579S37wFZ18aNxT9wW") {
      results = "\nThis is a number7 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r9s4EQeCDg3dDnC2qVcdwisYnkQkWppAne") {
      results = "\nThis is a number8 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rn8ZodJs2LpHkZVg2QFd2BT7i9ZfUhF5sd") {
      results = "\nThis is a number9 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwkACvvYqhHGFvJicCPXJju9oW1sYmwVcL") {
      results = "\nThis is a number10 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rLVuEP27kZ8WzJC5N6xtygspG4GgmMJ3qk") {
      results = "\nThis is a number11 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rJrxMyDFJX1BWkuobT2VCTdhkAGJxYd8Pw") {
      results = "\nThis is a number12 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rnKg6vS9iFS5T2CbCVRnMLBU41yKVZH2hz") {
      results = "\nThis is a number13 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rDYwhBym9p1Ds7xKhj1xhLNJMGYHMdbcw8") {
      results = "\nThis is a number14 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsLVeC3HQhz7z8KNvRfTG42Tfp4JnMEwMG") {
      results = "\nThis is a number15 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r3h24pJzo6ed3WMsYVRX7kU9pDWkxuCygr") {
      results = "\nThis is a number16 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rLfPYWnYrqWUHz1N7mtrBzoRkrdMPPLHHX") {
      results = "\nThis is a number17 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwfcm3F2xxfjAdizUU2R3ddFH4KasAecgv") {
      results = "\nThis is a number18 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHKPVGYVpWminFDbbfKFzG6LmdYYjYP9fB") {
      results = "\nThis is a number19 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rDQHs2X7nQGFCx2Jd2XiKn6Zavebz76TT4") {
      results = "\nThis is a number20 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r456WbTdQLkDnrvHGUmY7PcULAAX3upCPV") {
      results = "\nThis is a number21 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rEG5DvJP2q9TrQZpYaijs6NP9PhWdr9brV") {
      results = "\nThis is a number22 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHSLoFTELgAwpMzFM8sZq6pdWeEWxiSdQQ") {
      results = "\nThis is a number23 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rBGYPSiM5wmvbjHL9nMvfjEJWWRv2ZAkRs") {
      results = "\nThis is a number24 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rUtjuVgKzDQFJcAZgeX4NC6UE9jfYRGR4u") {
      results = "\nThis is a number25 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rUAF7WhpZd7QTkBbqZSECUos1eCpBDwv3w") {
      results = "\nThis is a number26 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rGw4ryUroPK7xrMyYkc7DKe4cjiuAseNfb") {
      results = "\nThis is a number27 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsVH14CjsFgBsoZMxzs2swmP5HxewdNddB") {
      results = "\nThis is a number28 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rESq3xxje1rQxX3Ss3LEjbXq4GRTS949o3") {
      results = "\nThis is a number29 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsrsg86KCnqESPdzV2swuqwXXNyCNqjR1x") {
      results = "\nThis is a number30 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rnEHGwHsCegzorExTgG35t8isdPbVd7862") {
      results = "\nThis is a number31 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r4BYNXdS6cGk4NhkhHU6Dke63bJzNgqLYN") {
      results = "\nThis is a number32 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rpeGpMRhWQ9cKHRQba8WeN3buhnJbZXbs5") {
      results = "\nThis is a number33 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwrbkqPAJEZoDr844xxTFv72P935p9nk8c") {
      results = "\nThis is a number34 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rNj9YerzfFw8B4cZFqg2HDU8EhKzEq2agV") {
      results = "\nThis is a number35 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsqx4NFdmpv71wq5BQmnvZ6Mqk9fiQa3D1") {
      results = "\nThis is a number36 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rapMUL11cnMqa3hiYp9XS5LieVNYsVWCbE") {
      results = "\nThis is a number37 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r9ewmx6W7an3Hi41n8JYhSVbfiS7zph7w3") {
      results = "\nThis is a number38 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rfbziFZkupKshiYGt4UnhYCG8E8wiGQetd") {
      results = "\nThis is a number39 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rdJYeZFWLojf52hugAXh2DN5ALcdPUwKE") {
      results = "\nThis is a number40 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rKhsWYAVuxhXNwAtwpj6Bpa8jfucUSZw6T") {
      results = "\nThis is a number41 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r4QS1ShbV4YFZUFrVU5gngZWFuyUAncGpM") {
      results = "\nThis is a number42 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rpsYZbPj4M9JM7GzEz56erRTuMhVgt2JiG") {
      results = "\nThis is a number43 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rE73xmMeKmQiTs99qgn3PsDBc8DeQqE3Gx") {
      results = "\nThis is a number44 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rDp7T9kfLUVksZUrDhxcsK3wDQcnmYriJS") {
      results = "\nThis is a number45 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rKFar4TmpiT5fEiL2fv84UbSY5Vv6umkhP") {
      results = "\nThis is a number46 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rM296NisYjypgCCJvL4YyBJjx4JygLDi2k") {
      results = "\nThis is a number47 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r488rhYNsHUGyzsqpZrELcWLz6CSXhwSca") {
      results = "\nThis is a number48 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "raigwQ2uSx2nTZFyCQHR6XFWjR9FJw7goe") {
      results = "\nThis is a number49 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rfzFsapZH4L4ybUpk1qwCzmf93ZsBnh3UC") {
      results = "\nThis is a number50 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r957yeMPXNqJz2Ne2E5v7mTb3Z5vv4SKKM") {
      results = "\nThis is a number51 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwRDExhxSKBriXgvyDvWH8K9qKb3pfX9pn") {
      results = "\nThis is a number52 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rLP87gQbzJUGesjgwMkSJ42WLp7Ty76ckr") {
      results = "\nThis is a number53 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rstLJ9AHiedXTeoTwn4cD7a6nSxQwkonUB") {
      results = "\nThis is a number54 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rD7vmJnFxWCoooPQa3KUfpT6u6gRd8FbKJ") {
      results = "\nThis is a number55 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r95gi24S3FK7vkV6keu2CKfocCbdyCskZ9") {
      results = "\nThis is a number56 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rJCtVSQ6vmmdfy33W583zhzcFqrVzn5Z1d") {
      results = "\nThis is a number57 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rMWunTj1oGj6GJJc2X4BihVTeTacTEyLTa") {
      results = "\nThis is a number58 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsVYAtkWxKTFifLKcc2D76eNVB4ArU4Shg") {
      results = "\nThis is a number59 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rGn4fsB5KU3xZ3VDB88aK9w265nru6bNwQ") {
      results = "\nThis is a number60 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHuCdCw3bqtAxVebc17QJ45wnEkGhAx5YL") {
      results = "\nThis is a number61 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rdYLywuQkF2mB4K3msgtmZWZoVTqJYEw3") {
      results = "\nThis is a number62 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rpyj1JSJvBKoTsyP6WkcRB3P9NSJaQZQ11") {
      results = "\nThis is a number63 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rh73VvU9dNSLmcypTV128v7w4szSjMAM2o") {
      results = "\nThis is a number64 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rBywuLcQsAZbFKfNZevwDmt8LNatr6dGjj") {
      results = "\nThis is a number65 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rM4JQdPvavuRWSpBxRP7x1U11YuHRooBVF") {
      results = "\nThis is a number66 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsHkAvX4nDsjbf64zFXLXEcbeiiPYBM8L8") {
      results = "\nThis is a number67 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rBa7KLLKeNXu4XNhH3ptbS87Tmzv56ap8w") {
      results = "\nThis is a number68 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r3ejUsBW3hVYZ2DrcxbrRLtNxxv6iL14UE") {
      results = "\nThis is a number69 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rNq3ef7KdUBGP7snB2YCJ5FwDheaknD1mw") {
      results = "\nThis is a number70 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rnj3qkjqa5tRTwurgHwmgsCG9MExoEvGNg") {
      results = "\nThis is a number71 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHHTWDyosapZ4yMCf2xTAY1uaw1Dt8KBWq") {
      results = "\nThis is a number72 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHqhTZ3sScJkLpT8Q46V2FsbHrE1eQwQkP") {
      results = "\nThis is a number73 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHrfvNRwnxxfDEs2d15umeyFqmMp4TNY3E") {
      results = "\nThis is a number74 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rKv6sjM28hjEnvbNpsdVmAVFrM8ZrSMz6S") {
      results = "\nThis is a number75 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsd9KB8wy89hxZK7xovrwUBnm3BDM9L36B") {
      results = "\nThis is a number76 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rH57UJYTB1x8PUpxVYFyZGpEFQ6EvNaEBd") {
      results = "\nThis is a number77 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r4GKhqihzzj9dcrkgzTpv9xXiL9bWtTG9P") {
      results = "\nThis is a number78 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rR3T3wbZgXAbph5N8KpM2rX6NoUsmzPqR") {
      results = "\nThis is a number79 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rw6sdKfcorntaQ1SB4LRfKxEeu2e3nNoN3") {
      results = "\nThis is a number80 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHfUSnEnHMBSXeF27H9q63tLYiUcE49AET") {
      results = "\nThis is a number81 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rEVFpqdoZqGkZmAyNFJ93ScjHG8BtRc5cs") {
      results = "\nThis is a number82 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwPmmJiSgcBtwv1RYeCfydFLZpn5G8BSj") {
      results = "\nThis is a number83 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rhbLdF8iJ9qm78fi6Lwz9EMCh9MieBNPFg") {
      results = "\nThis is a number84 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rccXvBrc6Tdqc6ZESk9aRd5RpYmc4PbPa") {
      results = "\nThis is a number85 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHoPhg8txJQyFNzNSwV2BXQQ8e9HPNr3P8") {
      results = "\nThis is a number86 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rfjuiehRwRVe3p6KVQBFNz6ZC9EboFiuRB") {
      results = "\nThis is a number87 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwSfnjTUrDzRSXk7r5LaEDroKzALbewWfa") {
      results = "\nThis is a number88 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rLCPBeGu2MPkDMFKE4DjWgkANkPeS9RfuJ") {
      results = "\nThis is a number89 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r4VGSC2gAqMHgN4hxf5PtTqGjn5xGG4Y9d") {
      results = "\nThis is a number90 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rNKv9YRvcg9APo3sqrusnSYxG1afXTxwrM") {
      results = "\nThis is a number91 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHo7EogvYofhVmKz5vEhQUd74DybwL67Py") {
      results = "\nThis is a number92 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rpu5L6Ef35d1nQ1VNsfhFMM2w8Aea9soZv") {
      results = "\nThis is a number93 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rE7Ngd5f3aGC6CTGjLqAaaZnvZjvez1cBq") {
      results = "\nThis is a number94 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r4gFE4tkhNNSW4jwtdVFcoFdeMXEriuYgR") {
      results = "\nThis is a number95 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rp4ahHP1b6ez9pVHBFCjY1ehhwu6z1us9s") {
      results = "\nThis is a number96 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rhzbXUKpPiKEBE9siW5Qu52YZgbYXDwDzS") {
      results = "\nThis is a number97 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHSMXvBK1TdnHm3eoBXbuthnpT9fcfKwYU") {
      results = "\nThis is a number98 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rBneGziBh2i24bwPjAutSGtjSrb9sk5DjK") {
      results = "\nThis is a number99 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rwtDAR2oGivPeZ3utWVDUhMwv2oAQSJj1M") {
      results = "\nThis is a number100 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rJ8yKZj4JkMA2euJZq4vc5VtA7AYbrjL9K") {
      results = "\nThis is a number101 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r3PHZXHLB5F2dnTNXe9b5f8dqHJsqBd9vS") {
      results = "\nThis is a number102 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsmzA6HFPumovk6asRTe6ayK54zxtEvMnW") {
      results = "\nThis is a number103 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rUyjCKJAivHhnWEG1A31muwc8FhtYJ8EJ5") {
      results = "\nThis is a number104 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rGazqHbNQx4J7MravYuq3EuaX7iKvzyeut") {
      results = "\nThis is a number105 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rLaTSW1X5nCiWJXrUYAQcDzyGUx1pVVqx") {
      results = "\nThis is a number106 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rhdfjXDuhn6ZrYgzWJP2fGjyTTo5k4ahLM") {
      results = "\nThis is a number107 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rsojYoSWpQFp2SQqy81jJhZRwyjPFovvmw") {
      results = "\nThis is a number108 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rHVyg5sFw62LMvAvZiPhEqBDuXYWGaYe7w") {
      results = "\nThis is a number109 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rBpg2g5ZtAscEqwjebUaRj2cQMoXoFfsi2") {
      results = "\nThis is a number110 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rNyMjk9e4zvPKzpsK5s5qtDMhGjidUue3v") {
      results = "\nThis is a number111 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "r49g8ae8665sSG3AFWc4jjg1TiSm2RBdEi") {
      results = "\nThis is a number112 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rKVwZJXf89HMsYGcLFya9g1KqFtxydvPFt") {
      results = "\nThis is a number113 NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rK4tKY7zgUvEwh8FfuBGSDjT7WxQHyTSF1") {
      results = "\nThis is numberLogo NFT card";
      document.getElementById("resultField").value += results;
    }
  for (let i = 0; i < allNfts.length; i++)
    if (allNfts[i].Issuer === "rJ2R9qKb2Ctrp9Nna2N8QqSrtU3XoTgkM1") {
      results = "\nThis is RWRipplers NFT card";
      document.getElementById("resultField").value += results;
    } else {
      results = "\nThis NFT is not a number NFT\n";
      //document.getElementById("resultField").value += results;
    }

  if (allNfts.length > 88) {
    results =
      "\n\nWarning: This number Deck contains more than 88 NFTs. A number Deck shouldn't contain more than 88 NFTs. Please, consider reducing your deck. Thanks!\n";
    document.getElementById("resultField").value += results;
  }
  if (allNfts.length < 66) {
    results =
      "\n\nWarning: This number Deck contains less than 66 NFTs. A number Deck shouldn't contain less than 66 NFTs. Please, consider increasing the number of number NFTs. Thanks!\n";
    document.getElementById("resultField").value += results;
  }

  const r1 = allNfts.filter(
    (n) => n.Issuer == "rwXtered5xDwifU1LDAEira2zQVN57gTBG"
  );
  if (r1.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number1 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r2 = allNfts.filter(
    (n) => n.Issuer == "r4WACvo5MF4F67WNYgVbrBRBxUbvYQo3t5"
  );
  if (r2.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number2 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r3 = allNfts.filter(
    (n) => n.Issuer == "rpeUegPQ7phkPDt3i6LaMcHd27jnPpJoPJ"
  );
  if (r3.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number3 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r4 = allNfts.filter(
    (n) => n.Issuer == "rMAThnVnax3WcXLuYZ94ZtpNtiCvL4SQYZ"
  );
  if (r4.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number4 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r5 = allNfts.filter(
    (n) => n.Issuer == "rfBjAa63uJic3Xyz3tPnZwH93qj2ftL7w5"
  );
  if (r5.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number5 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r6 = allNfts.filter(
    (n) => n.Issuer == "rpjufc2JYgWZiQeJHoNhzBzRmEQ1JbqzmV"
  );
  if (r6.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number6 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r7 = allNfts.filter(
    (n) => n.Issuer == "rPNYYKaDw4R1rwDs579S37wFZ18aNxT9wW"
  );
  if (r7.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number7 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r8 = allNfts.filter(
    (n) => n.Issuer == "r9s4EQeCDg3dDnC2qVcdwisYnkQkWppAne"
  );
  if (r8.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number8 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r9 = allNfts.filter(
    (n) => n.Issuer == "rn8ZodJs2LpHkZVg2QFd2BT7i9ZfUhF5sd"
  );
  if (r9.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number9 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r10 = allNfts.filter(
    (n) => n.Issuer == "rwkACvvYqhHGFvJicCPXJju9oW1sYmwVcL"
  );
  if (r10.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number10 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r11 = allNfts.filter(
    (n) => n.Issuer == "rLVuEP27kZ8WzJC5N6xtygspG4GgmMJ3qk"
  );
  if (r11.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number11 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r12 = allNfts.filter(
    (n) => n.Issuer == "rJrxMyDFJX1BWkuobT2VCTdhkAGJxYd8Pw"
  );
  if (r12.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number12 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r13 = allNfts.filter(
    (n) => n.Issuer == "rnKg6vS9iFS5T2CbCVRnMLBU41yKVZH2hz"
  );
  if (r13.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number13 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r14 = allNfts.filter(
    (n) => n.Issuer == "rDYwhBym9p1Ds7xKhj1xhLNJMGYHMdbcw8"
  );
  if (r14.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number14 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r15 = allNfts.filter(
    (n) => n.Issuer == "rsLVeC3HQhz7z8KNvRfTG42Tfp4JnMEwMG"
  );
  if (r15.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number15 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r16 = allNfts.filter(
    (n) => n.Issuer == "r3h24pJzo6ed3WMsYVRX7kU9pDWkxuCygr"
  );
  if (r16.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number16 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r17 = allNfts.filter(
    (n) => n.Issuer == "rLfPYWnYrqWUHz1N7mtrBzoRkrdMPPLHHX"
  );
  if (r17.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number17 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r18 = allNfts.filter(
    (n) => n.Issuer == "rwfcm3F2xxfjAdizUU2R3ddFH4KasAecgv"
  );
  if (r18.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number18 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r19 = allNfts.filter(
    (n) => n.Issuer == "rHKPVGYVpWminFDbbfKFzG6LmdYYjYP9fB"
  );
  if (r19.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number19 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r20 = allNfts.filter(
    (n) => n.Issuer == "rDQHs2X7nQGFCx2Jd2XiKn6Zavebz76TT4"
  );
  if (r20.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number20 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r21 = allNfts.filter(
    (n) => n.Issuer == "r456WbTdQLkDnrvHGUmY7PcULAAX3upCPV"
  );
  if (r21.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number21 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r22 = allNfts.filter(
    (n) => n.Issuer == "rEG5DvJP2q9TrQZpYaijs6NP9PhWdr9brV"
  );
  if (r22.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number22 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r23 = allNfts.filter(
    (n) => n.Issuer == "rHSLoFTELgAwpMzFM8sZq6pdWeEWxiSdQQ"
  );
  if (r23.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number23 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r24 = allNfts.filter(
    (n) => n.Issuer == "rBGYPSiM5wmvbjHL9nMvfjEJWWRv2ZAkRs"
  );
  if (r24.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number24 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r25 = allNfts.filter(
    (n) => n.Issuer == "rUtjuVgKzDQFJcAZgeX4NC6UE9jfYRGR4u"
  );
  if (r25.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number25 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r26 = allNfts.filter(
    (n) => n.Issuer == "rUAF7WhpZd7QTkBbqZSECUos1eCpBDwv3w"
  );
  if (r26.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number26 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r27 = allNfts.filter(
    (n) => n.Issuer == "rGw4ryUroPK7xrMyYkc7DKe4cjiuAseNfb"
  );
  if (r27.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number27 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r28 = allNfts.filter(
    (n) => n.Issuer == "rsVH14CjsFgBsoZMxzs2swmP5HxewdNddB"
  );
  if (r28.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number28 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r29 = allNfts.filter(
    (n) => n.Issuer == "rESq3xxje1rQxX3Ss3LEjbXq4GRTS949o3"
  );
  if (r29.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number29 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r30 = allNfts.filter(
    (n) => n.Issuer == "rsrsg86KCnqESPdzV2swuqwXXNyCNqjR1x"
  );
  if (r30.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number30 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r31 = allNfts.filter(
    (n) => n.Issuer == "rnEHGwHsCegzorExTgG35t8isdPbVd7862"
  );
  if (r31.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number31 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r32 = allNfts.filter(
    (n) => n.Issuer == "r4BYNXdS6cGk4NhkhHU6Dke63bJzNgqLYN"
  );
  if (r32.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number32 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r33 = allNfts.filter(
    (n) => n.Issuer == "rpeGpMRhWQ9cKHRQba8WeN3buhnJbZXbs5"
  );
  if (r33.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number33 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r47 = allNfts.filter(
    (n) => n.Issuer == "rM296NisYjypgCCJvL4YyBJjx4JygLDi2k"
  );
  if (r47.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number47 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r48 = allNfts.filter(
    (n) => n.Issuer == "r488rhYNsHUGyzsqpZrELcWLz6CSXhwSca"
  );
  if (r48.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number48 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r49 = allNfts.filter(
    (n) => n.Issuer == "raigwQ2uSx2nTZFyCQHR6XFWjR9FJw7goe"
  );
  if (r49.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number49 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r50 = allNfts.filter(
    (n) => n.Issuer == "rfzFsapZH4L4ybUpk1qwCzmf93ZsBnh3UC"
  );
  if (r50.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number50 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r51 = allNfts.filter(
    (n) => n.Issuer == "r957yeMPXNqJz2Ne2E5v7mTb3Z5vv4SKKM"
  );
  if (r51.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number51 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r52 = allNfts.filter(
    (n) => n.Issuer == "rwRDExhxSKBriXgvyDvWH8K9qKb3pfX9pn"
  );
  if (r52.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number52 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r53 = allNfts.filter(
    (n) => n.Issuer == "rLP87gQbzJUGesjgwMkSJ42WLp7Ty76ckr"
  );
  if (r53.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number53 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r54 = allNfts.filter(
    (n) => n.Issuer == "rstLJ9AHiedXTeoTwn4cD7a6nSxQwkonUB"
  );
  if (r54.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number54 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r55 = allNfts.filter(
    (n) => n.Issuer == "rD7vmJnFxWCoooPQa3KUfpT6u6gRd8FbKJ"
  );
  if (r55.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number55 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r56 = allNfts.filter(
    (n) => n.Issuer == "r95gi24S3FK7vkV6keu2CKfocCbdyCskZ9"
  );
  if (r56.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number56 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r57 = allNfts.filter(
    (n) => n.Issuer == "rJCtVSQ6vmmdfy33W583zhzcFqrVzn5Z1d"
  );
  if (r57.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number57 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r58 = allNfts.filter(
    (n) => n.Issuer == "rMWunTj1oGj6GJJc2X4BihVTeTacTEyLTa"
  );
  if (r58.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number58 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r59 = allNfts.filter(
    (n) => n.Issuer == "rsVYAtkWxKTFifLKcc2D76eNVB4ArU4Shg"
  );
  if (r59.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number59 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r60 = allNfts.filter(
    (n) => n.Issuer == "rGn4fsB5KU3xZ3VDB88aK9w265nru6bNwQ"
  );
  if (r60.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number60 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r61 = allNfts.filter(
    (n) => n.Issuer == "rHuCdCw3bqtAxVebc17QJ45wnEkGhAx5YL"
  );
  if (r61.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number61 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r62 = allNfts.filter(
    (n) => n.Issuer == "rdYLywuQkF2mB4K3msgtmZWZoVTqJYEw3"
  );
  if (r62.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number62 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r63 = allNfts.filter(
    (n) => n.Issuer == "rpyj1JSJvBKoTsyP6WkcRB3P9NSJaQZQ11"
  );
  if (r63.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number63 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r64 = allNfts.filter(
    (n) => n.Issuer == "rh73VvU9dNSLmcypTV128v7w4szSjMAM2o"
  );
  if (r64.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number64 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r65 = allNfts.filter(
    (n) => n.Issuer == "rBywuLcQsAZbFKfNZevwDmt8LNatr6dGjj"
  );
  if (r65.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number65 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r66 = allNfts.filter(
    (n) => n.Issuer == "rM4JQdPvavuRWSpBxRP7x1U11YuHRooBVF"
  );
  if (r66.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number66 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r67 = allNfts.filter(
    (n) => n.Issuer == "rsHkAvX4nDsjbf64zFXLXEcbeiiPYBM8L8"
  );
  if (r67.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number67 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r68 = allNfts.filter(
    (n) => n.Issuer == "rBa7KLLKeNXu4XNhH3ptbS87Tmzv56ap8w"
  );
  if (r68.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number68 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r69 = allNfts.filter(
    (n) => n.Issuer == "r3ejUsBW3hVYZ2DrcxbrRLtNxxv6iL14UE"
  );
  if (r69.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number69 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r70 = allNfts.filter(
    (n) => n.Issuer == "rNq3ef7KdUBGP7snB2YCJ5FwDheaknD1mw"
  );
  if (r70.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number70 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r71 = allNfts.filter(
    (n) => n.Issuer == "rnj3qkjqa5tRTwurgHwmgsCG9MExoEvGNg"
  );
  if (r71.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number71 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r72 = allNfts.filter(
    (n) => n.Issuer == "rHHTWDyosapZ4yMCf2xTAY1uaw1Dt8KBWq"
  );
  if (r72.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number72 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r73 = allNfts.filter(
    (n) => n.Issuer == "rHqhTZ3sScJkLpT8Q46V2FsbHrE1eQwQkP"
  );
  if (r73.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number73 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r74 = allNfts.filter(
    (n) => n.Issuer == "rHrfvNRwnxxfDEs2d15umeyFqmMp4TNY3E"
  );
  if (r74.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number74 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r75 = allNfts.filter(
    (n) => n.Issuer == "rKv6sjM28hjEnvbNpsdVmAVFrM8ZrSMz6S"
  );
  if (r75.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number75 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r76 = allNfts.filter(
    (n) => n.Issuer == "rsd9KB8wy89hxZK7xovrwUBnm3BDM9L36B"
  );
  if (r76.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number76 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r77 = allNfts.filter(
    (n) => n.Issuer == "rH57UJYTB1x8PUpxVYFyZGpEFQ6EvNaEBd"
  );
  if (r77.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number77 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r78 = allNfts.filter(
    (n) => n.Issuer == "r4GKhqihzzj9dcrkgzTpv9xXiL9bWtTG9P"
  );
  if (r78.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number78 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r79 = allNfts.filter(
    (n) => n.Issuer == "rR3T3wbZgXAbph5N8KpM2rX6NoUsmzPqR"
  );
  if (r79.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number79 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r80 = allNfts.filter(
    (n) => n.Issuer == "rw6sdKfcorntaQ1SB4LRfKxEeu2e3nNoN3"
  );
  if (r80.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number80 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r81 = allNfts.filter(
    (n) => n.Issuer == "rHfUSnEnHMBSXeF27H9q63tLYiUcE49AET"
  );
  if (r81.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number81 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r82 = allNfts.filter(
    (n) => n.Issuer == "rEVFpqdoZqGkZmAyNFJ93ScjHG8BtRc5cs"
  );
  if (r82.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number82 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r83 = allNfts.filter(
    (n) => n.Issuer == "rwPmmJiSgcBtwv1RYeCfydFLZpn5G8BSj"
  );
  if (r83.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number83 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r84 = allNfts.filter(
    (n) => n.Issuer == "rhbLdF8iJ9qm78fi6Lwz9EMCh9MieBNPFg"
  );
  if (r84.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number84 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r85 = allNfts.filter(
    (n) => n.Issuer == "rccXvBrc6Tdqc6ZESk9aRd5RpYmc4PbPa"
  );
  if (r85.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number85 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r86 = allNfts.filter(
    (n) => n.Issuer == "rHoPhg8txJQyFNzNSwV2BXQQ8e9HPNr3P8"
  );
  if (r86.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number86 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r87 = allNfts.filter(
    (n) => n.Issuer == "rfjuiehRwRVe3p6KVQBFNz6ZC9EboFiuRB"
  );
  if (r87.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number87 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r88 = allNfts.filter(
    (n) => n.Issuer == "rwSfnjTUrDzRSXk7r5LaEDroKzALbewWfa"
  );
  if (r88.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number88 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r89 = allNfts.filter(
    (n) => n.Issuer == "rLCPBeGu2MPkDMFKE4DjWgkANkPeS9RfuJ"
  );
  if (r89.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number89 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r90 = allNfts.filter(
    (n) => n.Issuer == "r4VGSC2gAqMHgN4hxf5PtTqGjn5xGG4Y9d"
  );
  if (r90.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number90 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r91 = allNfts.filter(
    (n) => n.Issuer == "rNKv9YRvcg9APo3sqrusnSYxG1afXTxwrM"
  );
  if (r91.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number91 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r92 = allNfts.filter(
    (n) => n.Issuer == "rHo7EogvYofhVmKz5vEhQUd74DybwL67Py"
  );
  if (r92.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number92 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r93 = allNfts.filter(
    (n) => n.Issuer == "rpu5L6Ef35d1nQ1VNsfhFMM2w8Aea9soZv"
  );
  if (r93.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number93 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r94 = allNfts.filter(
    (n) => n.Issuer == "rE7Ngd5f3aGC6CTGjLqAaaZnvZjvez1cBq"
  );
  if (r94.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number94 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r95 = allNfts.filter(
    (n) => n.Issuer == "r4gFE4tkhNNSW4jwtdVFcoFdeMXEriuYgR"
  );
  if (r95.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number95 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r96 = allNfts.filter(
    (n) => n.Issuer == "rp4ahHP1b6ez9pVHBFCjY1ehhwu6z1us9s"
  );
  if (r96.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number96 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r97 = allNfts.filter(
    (n) => n.Issuer == "rhzbXUKpPiKEBE9siW5Qu52YZgbYXDwDzS"
  );
  if (r97.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number97 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r98 = allNfts.filter(
    (n) => n.Issuer == "rHSMXvBK1TdnHm3eoBXbuthnpT9fcfKwYU"
  );
  if (r98.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number98 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r99 = allNfts.filter(
    (n) => n.Issuer == "rBneGziBh2i24bwPjAutSGtjSrb9sk5DjK"
  );
  if (r99.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number99 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r100 = allNfts.filter(
    (n) => n.Issuer == "rwtDAR2oGivPeZ3utWVDUhMwv2oAQSJj1M"
  );
  if (r100.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number100 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r101 = allNfts.filter(
    (n) => n.Issuer == "rJ8yKZj4JkMA2euJZq4vc5VtA7AYbrjL9K"
  );
  if (r101.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number101 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r102 = allNfts.filter(
    (n) => n.Issuer == "r3PHZXHLB5F2dnTNXe9b5f8dqHJsqBd9vS"
  );
  if (r102.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number102 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r103 = allNfts.filter(
    (n) => n.Issuer == "rsmzA6HFPumovk6asRTe6ayK54zxtEvMnW"
  );
  if (r103.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number103 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r104 = allNfts.filter(
    (n) => n.Issuer == "rUyjCKJAivHhnWEG1A31muwc8FhtYJ8EJ5"
  );
  if (r104.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number104 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r105 = allNfts.filter(
    (n) => n.Issuer == "rGazqHbNQx4J7MravYuq3EuaX7iKvzyeut"
  );
  if (r105.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number105 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r106 = allNfts.filter(
    (n) => n.Issuer == "rLaTSW1X5nCiWJXrUYAQcDzyGUx1pVVqx"
  );
  if (r106.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number106 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r107 = allNfts.filter(
    (n) => n.Issuer == "rhdfjXDuhn6ZrYgzWJP2fGjyTTo5k4ahLM"
  );
  if (r107.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number107 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r108 = allNfts.filter(
    (n) => n.Issuer == "rsojYoSWpQFp2SQqy81jJhZRwyjPFovvmw"
  );
  if (r108.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number108 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r109 = allNfts.filter(
    (n) => n.Issuer == "rHVyg5sFw62LMvAvZiPhEqBDuXYWGaYe7w"
  );
  if (r109.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number109 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r110 = allNfts.filter(
    (n) => n.Issuer == "rBpg2g5ZtAscEqwjebUaRj2cQMoXoFfsi2"
  );
  if (r110.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number110 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r111 = allNfts.filter(
    (n) => n.Issuer == "rNyMjk9e4zvPKzpsK5s5qtDMhGjidUue3v"
  );
  if (r111.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number111 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r112 = allNfts.filter(
    (n) => n.Issuer == "r49g8ae8665sSG3AFWc4jjg1TiSm2RBdEi"
  );
  if (r112.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number112 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }
  const r113 = allNfts.filter(
    (n) => n.Issuer == "rKVwZJXf89HMsYGcLFya9g1KqFtxydvPFt"
  );
  if (r113.length > 3) {
    results =
      "\n\nWarning: This deck has more than 3 number113 NFT cards. Just a maximum of 3 NFT cards of the same type are allowed. Please, consider reducing them to fit the requirements. Thanks!";
    document.getElementById("resultField").value += results;
  }

  client.disconnect();
}
