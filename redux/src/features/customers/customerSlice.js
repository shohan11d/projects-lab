function deposit(amount) {
   return { type: 'account/deposit', payload: amount };
}
function withdraw(amount) {
   return { type: 'account/withdraw', payload: amount };
}
function requestLoan(amount, purpose) {
   return {
      type: 'account/requestLoan',
      payload: { amount, purpose },
   };
}
function payLoan() {
   return { type: 'account/payLoan' };
}