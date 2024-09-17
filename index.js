const {
    calculateVotingPowerFromBurnedAmount,
    calculateIncrementedVotingPower,
    calculateIncrementedBurningAmount,
    calculateBurningAmountFromVotingPower
} = require('./calculator');

function main() {
    ////////////////////////////////////////////////////////////////////////////    
    // =========== testing calculateVotingPowerFromBurnedAmount ============= //
    ////////////////////////////////////////////////////////////////////////////
    const incrementedAmount = 3340n * BigInt(1e18);  // Increase by 3,340 tokens
    const currentBurnedAmount = 0n * BigInt(1e18);  // Currently burned 0 tokens
    const increasedVotingPower = calculateIncrementedVotingPower(incrementedAmount, currentBurnedAmount);
    console.log(`Increased voting power: ${increasedVotingPower}`);
    // Actual result: 19968480468933333333

    const incrementedAmount2 = 3340n * BigInt(1e18);  // Increase by 3,340 tokens
    const currentBurnedAmount2 = 30n * BigInt(1e18);  // Currently burned 30 tokens
    const increasedVotingPower2 = calculateIncrementedVotingPower(incrementedAmount2, currentBurnedAmount2);
    console.log(`Increased voting power 2: ${increasedVotingPower2}`);
    // Actual result: 18914158006533333334

    const incrementedAmount3 = 19600n * BigInt(1e18);  // Increase by 19,600 tokens
    const currentBurnedAmount3 = 50n * BigInt(1e18);  // Currently burned 50 tokens
    const increasedVotingPower3 = calculateIncrementedVotingPower(incrementedAmount3, currentBurnedAmount3);
    console.log(`Increased voting power 3: ${increasedVotingPower3}`);
    // Actual result: 48365896261533333334

    const incrementedAmount4 = 765n * BigInt(1e18);  // Increase by 765 tokens
    const currentBurnedAmount4 = 370n * BigInt(1e18);  // Currently burned 370 tokens
    const increasedVotingPower4 = calculateIncrementedVotingPower(incrementedAmount4, currentBurnedAmount4);
    console.log(`Increased voting power 4: ${increasedVotingPower4}`);
    // Actual result: 5236956231600000000

    const incrementedAmount5 = 15000n * BigInt(1e18);  // Increase by 15,000 tokens
    const currentBurnedAmount5 = 1000n * BigInt(1e18);  // Currently burned 1,000 tokens
    const increasedVotingPower5 = calculateIncrementedVotingPower(incrementedAmount5, currentBurnedAmount5);
    console.log(`Increased voting power 5: ${increasedVotingPower5}`);
    // Actual result: 34596960073333333334

    const incrementedAmount6 = 9260n * BigInt(1e18);  // Increase by 9,260 tokens
    const currentBurnedAmount6 = 4000n * BigInt(1e18);  // Currently burned 4,000 tokens
    const increasedVotingPower6 = calculateIncrementedVotingPower(incrementedAmount6, currentBurnedAmount6);
    console.log(`Increased voting power 6: ${increasedVotingPower6}`);
    // Actual result: 18940313422933333334

    ////////////////////////////////////////////////////////////////////////////
    // =========== testing calculateBurningAmountFromVotingPower ============ //
    ////////////////////////////////////////////////////////////////////////////
    const votingPowerAmount = 20n * BigInt(1e18);  // 20 voting power
    const burningAmount = calculateBurningAmountFromVotingPower(votingPowerAmount);
    console.log(`Burning amount (${votingPowerAmount / BigInt(1e18)} voting power): ${burningAmount / BigInt(1e18)}`);
    // Actual result: 3350

    const incrementedVotingPower = 5n * BigInt(1e18);  // Increase by 5 voting power
    const currentVotingPower = 15n * BigInt(1e18);  // Current 15 voting power
    const incrementedBurningAmount = calculateIncrementedBurningAmount(incrementedVotingPower, currentVotingPower);
    console.log(`Increased burning amount: ${incrementedBurningAmount}`);
    // Actual result: 1400000000000000000000

    const incrementedVotingPower1 = 99n * BigInt(1e17);
    const currentVotingPower1 = 0n * BigInt(1e17);
    const incrementedBurningAmount1 = calculateIncrementedBurningAmount(incrementedVotingPower1, currentVotingPower1);
    console.log(`Increased burning amount 1: ${incrementedBurningAmount1}`);
    // Actual result: 908325000000000000000

    const incrementedVotingPower2 = 10n * BigInt(1e18);
    const currentVotingPower2 = 0n * BigInt(1e18);
    const incrementedBurningAmount2 = calculateIncrementedBurningAmount(incrementedVotingPower2, currentVotingPower2);
    console.log(`Increased burning amount 2: ${incrementedBurningAmount2}`);
    // Actual result: 925000000000000000000

    const incrementedVotingPower3 = 1n * BigInt(1e18);
    const currentVotingPower3 = 49n * BigInt(1e18);
    const incrementedBurningAmount3 = calculateIncrementedBurningAmount(incrementedVotingPower3, currentVotingPower3);
    console.log(`Increased burning amount 3: ${incrementedBurningAmount3}`);
    // Actual result: 1715000000000000000000

    const incrementedVotingPower4 = 101n * BigInt(1e17);
    const currentVotingPower4 = 3022n * BigInt(1e16);
    const incrementedBurningAmount4 = calculateIncrementedBurningAmount(incrementedVotingPower4, currentVotingPower4);
    console.log(`Increased burning amount 4: ${incrementedBurningAmount4}`);
    // Actual result: 5520155000000000000000

    const incrementedVotingPower5 = 151n * BigInt(1e17);
    const currentVotingPower5 = 2522n * BigInt(1e16);
    const incrementedBurningAmount5 = calculateIncrementedBurningAmount(incrementedVotingPower5, currentVotingPower5);
    console.log(`Increased burning amount 5: ${incrementedBurningAmount5}`);
    // Actual result: 7686655000000000000000
}

main();
