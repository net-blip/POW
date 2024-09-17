function calculateBitcoinSupply() {
    let totalSupply = 0;
    let blockReward = 50;
    const blocksPerHalving = 210000;

    for (let i = 0; i < 33; i++) { // 32 halvings + recompensa inicial
        totalSupply += blocksPerHalving * blockReward;
        console.log(`Halving ${i}: Recompensa por bloque = ${blockReward} BTC, Suministro total = ${totalSupply} BTC`);
        blockReward /= 2;
    }

    return totalSupply;
}

console.log(`Oferta total de Bitcoin: ${calculateBitcoinSupply()} BTC`);
