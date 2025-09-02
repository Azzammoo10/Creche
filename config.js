// Configuration de l'application Hadanati
const HADANATI_CONFIG = {
  // Mot de passe par défaut
  DEFAULT_PASSWORD: '123@123',
  
  // Nom de l'application
  APP_NAME: 'Hadanati - نظام إدارة حضانة الثوبة',
  
  // Version
  VERSION: '2.0.0',
  
  // Limite d'enfants
  MAX_CHILDREN: 40,
  
  // Montant par défaut des paiements (en dirhams)
  DEFAULT_PAYMENT_AMOUNT: 2000,
  
  // Configuration des thèmes
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark'
  },
  
  // Configuration des langues
  LANGUAGES: {
    AR: 'ar',
    EN: 'en'
  },
  
  // Messages par défaut
  MESSAGES: {
    WELCOME: 'مرحباً بك في نظام إدارة حضانة الثوبة!',
    DEFAULT_PASSWORD_INFO: 'كلمة المرور الافتراضية: 123@123',
    SETUP_SUCCESS: 'تم إعداد النظام بنجاح!',
    LOGIN_SUCCESS: 'تم تسجيل الدخول بنجاح!',
    LOGOUT_SUCCESS: 'تم تسجيل الخروج بنجاح!'
  },
  
  // Configuration des notifications
  NOTIFICATIONS: {
    DEFAULT_DURATION: 5000,
    SUCCESS_DURATION: 4000,
    ERROR_DURATION: 6000
  }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HADANATI_CONFIG;
}
