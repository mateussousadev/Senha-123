/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.vue', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Cores principais
        primary: {
          DEFAULT: '#4A90E2', // Azul
          dark: '#0054A3', // Azul escuro
          light: '#B2D4F6' // Azul claro
        },
        // Cores de destaque
        accent: {
          DEFAULT: '#F05945', // Vermelho
          dark: '#9C3C2F', // Vermelho escuro
          light: '#F2B6AD' // Vermelho claro
        },
        // Cores de fundo
        background: {
          DEFAULT: '#F8F8F8', // Cinza claro
          dark: '#E0E0E0' // Cinza escuro
        },
        // Cores de texto
        text: {
          DEFAULT: '#333333', // Preto
          light: '#666666', // Cinza médio
          dark: '#222222' // Preto escuro
        },
        // Cores de botão
        button: {
          DEFAULT: '#6CBF73', // Verde
          dark: '#4F8F4F', // Verde escuro
          light: '#B8E3BE' // Verde claro
        }
      }
    }
  },
  plugins: []
}
