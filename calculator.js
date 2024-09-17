const sqrt = require('bigint-isqrt');

const PRECISION = BigInt(1e18);
const PRECISION_FIX = BigInt(1e9);

function calculateVotingPowerFromBurnedAmount(amount) {
    // 将输入转换为 BigInt
    amount = BigInt(amount);

    // 计算 306.25 + 30*x
    const innerValue = BigInt(30625) * BigInt(1e16) + BigInt(30) * amount;

    // 计算 2*SQRT(306.25 + 30*x)
    const sqrtPart = BigInt(2) * sqrt(innerValue) * PRECISION_FIX;

    // 计算 (2*SQRT(306.25+30*x)-5)/30 - 1
    const result = (sqrtPart - BigInt(5) * PRECISION) / BigInt(30) - PRECISION;

    return result;
}

function calculateIncrementedVotingPower(incrementedAmount, currentBurnedAmount) {
    const newTotal = calculateVotingPowerFromBurnedAmount(BigInt(incrementedAmount) + BigInt(currentBurnedAmount));
    const current = calculateVotingPowerFromBurnedAmount(currentBurnedAmount);
    return newTotal - current;
}

function calculateIncrementedBurningAmount(incrementedVotingPower, currentVotingPower) {
    const newTotal = calculateBurningAmountFromVotingPower(BigInt(currentVotingPower) + BigInt(incrementedVotingPower));
    const current = calculateBurningAmountFromVotingPower(currentVotingPower);
    return newTotal - current;
}

function calculateBurningAmountFromVotingPower(votingPowerAmount) {
    // 将输入转换为 BigInt
    votingPowerAmount = BigInt(votingPowerAmount);

    // 计算 y = (15*x^2+35*x)/2
    const term = (BigInt(15) * votingPowerAmount * votingPowerAmount) / PRECISION + BigInt(35) * votingPowerAmount;
    const result = term / BigInt(2);

    return result;
}

module.exports = {
    calculateVotingPowerFromBurnedAmount,
    calculateIncrementedVotingPower,
    calculateIncrementedBurningAmount,
    calculateBurningAmountFromVotingPower
};
