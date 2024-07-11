import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@auth': resolve(__dirname, 'src/pages/auth'),
      '@bankAccounts': resolve(__dirname, 'src/pages/bank-accounts'),
      '@cards': resolve(__dirname, 'src/pages/cards'),
      '@dashboard': resolve(__dirname, 'src/pages/dashboard'),
      '@loanAccounts': resolve(__dirname, 'src/pages/loan-accounts'),
      '@loanTransaction': resolve(__dirname, 'src/pages/loan-transaction'),
      '@notifications': resolve(__dirname, 'src/pages/notifications'),
      '@transaction': resolve(__dirname, 'src/pages/transaction'),
      '@userAccount': resolve(__dirname, 'src/pages/user-account'),
      '@shared': resolve(__dirname, 'src/shared'),
      '@sharedModels': resolve(__dirname, 'src/shared/models'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@error': resolve(__dirname, 'src/pages/error'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
});
