const LoyaltyTier = Object.freeze({
  DIAMOND: 10,
  GOLD: 5,
  SILVER: 3,
  getDiscount(tier) {
    return LoyaltyTier[tier];
  },
});

module.exports = {
  LoyaltyTier,
};
