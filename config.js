module.exports = {
  APP_NAME: 'Pennies for Progress',
  PLAID: {
    CLIENT_ID: '5a25fd8bbdc6a4494a7c7f70',
    SECRET: '11a8f6f4e4e42912d21a33ce67d9f9',
    PUBLIC_KEY: 'fc0c3b87ad657003cfedb41be91409',
    WEBHOOK_URI: 'https://legate-request-bin.herokuapp.com/1agjr801'
  },
  ROUTES: {
    CLIENT: {
      LOGIN: '/login',
      SIGNUP: '/register',
      TRANSACTIONS: '/transactions',
      ACCOUNTS: '/accounts'
    },
    ADMIN: {
      GET_ACCESS_TOKEN: '/admin/get_access_token',
      TRANSACTIONS: '/admin/transactions',
    }
  }
};
