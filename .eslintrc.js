module.exports = {
  parserOptions: {
    ecmaVersion: 2021, // Sử dụng phiên bản ECMAScript 2021
    sourceType: 'module', // Sử dụng kiểu module
  },
  env: {
    browser: true, // Cho biết mã sẽ chạy trong trình duyệt
    es2021: true, // Cho biết sử dụng ECMAScript 2021
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'], // Sử dụng cấu hình mặc định của ESLint và tích hợp với Prettier
};
