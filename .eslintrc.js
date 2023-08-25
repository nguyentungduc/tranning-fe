module.exports = {
  parser: '@typescript-eslint/parser', // Sử dụng parser cho TypeScript
  plugins: ['@typescript-eslint', 'react'], // Sử dụng các plugin cần thiết
  extends: [
    'eslint:recommended', // Sử dụng cấu hình cơ bản của ESLint
    'plugin:@typescript-eslint/recommended', // Sử dụng cấu hình quy tắc khuyến nghị cho TypeScript
    'plugin:react/recommended', // Sử dụng cấu hình quy tắc khuyến nghị cho React
  ],
  rules: {
    // Các quy tắc riêng của bạn có thể thêm ở đây
    // Ví dụ: 'no-unused-vars': 'error'
  },
  settings: {
    react: {
      version: '18', // Chỉ định phiên bản React bạn đang sử dụng
    },
  },
};
