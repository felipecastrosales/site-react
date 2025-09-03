// Configurações para futura integração com banco de dados

export const DATABASE_CONFIG = {
  // Configurações para diferentes ambientes
  development: {
    apiUrl: 'http://localhost:3001/api',
    enableCache: true,
    cacheTimeout: 5 * 60 * 1000, // 5 minutos
  },
  production: {
    apiUrl: process.env.REACT_APP_API_URL || 'https://api.seudominio.com',
    enableCache: true,
    cacheTimeout: 10 * 60 * 1000, // 10 minutos
  }
};

export const API_ENDPOINTS = {
  gridItems: '/grid-items',
  categories: '/categories',
  upload: '/upload'
};

// Configurações de migração para quando implementar o banco
export const MIGRATION_CONFIG = {
  // Mapeamento de campos antigos para novos
  fieldMapping: {
    'categories': 'categoryIds', // array de strings -> array de IDs
  },
  
  // Validações necessárias antes da migração
  validations: {
    requiredFields: ['title', 'imageUrl', 'categoryIds'],
    maxTitleLength: 255,
    maxDescriptionLength: 1000,
  }
};
