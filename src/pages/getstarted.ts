export const getstartedPage = `
  <style>
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    .floating-shape {
      animation: float 6s ease-in-out infinite;
    }
    .floating-shape-delayed {
      animation: float 8s ease-in-out infinite 1s;
    }
    .pulse-circle {
      animation: pulse-glow 4s ease-in-out infinite;
    }
  </style>
  
  <section class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 py-12 relative overflow-hidden">
    <!-- Animated background shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-shape absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div class="floating-shape-delayed absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div class="pulse-circle absolute top-1/3 right-1/4 w-80 h-80 bg-pink-400/5 rounded-full blur-2xl"></div>
      
      <!-- Floating icons -->
      <div class="floating-shape absolute top-24 right-1/3 text-white/10">
        <i class="fas fa-rocket text-7xl"></i>
      </div>
      <div class="floating-shape-delayed absolute bottom-24 left-1/4 text-white/10">
        <i class="fas fa-chart-line text-6xl"></i>
      </div>
      <div class="pulse-circle absolute top-1/2 left-1/3 text-white/10">
        <i class="fas fa-users text-5xl"></i>
      </div>
      <div class="floating-shape absolute bottom-1/3 right-1/3 text-white/10">
        <i class="fas fa-envelope text-5xl"></i>
      </div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform hover:scale-110 transition-transform">
            <i class="fas fa-rocket text-white text-4xl"></i>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">Commencez Gratuitement</h1>
          <p class="text-xl text-gray-200">Rejoignez 10 000+ entreprises utilisant Linkx-AI</p>
        </div>
        
        <div class="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-[1.01] transition-transform">
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i class="fas fa-user text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Jean"
                    class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                    required
                  >
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i class="fas fa-user text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Dupont"
                    class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                    required
                  >
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email Professionnel</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i class="fas fa-envelope text-gray-400"></i>
                </div>
                <input 
                  type="email" 
                  placeholder="vous@entreprise.fr"
                  class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  required
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nom de l'Entreprise</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i class="fas fa-building text-gray-400"></i>
                </div>
                <input 
                  type="text" 
                  placeholder="Votre Entreprise SAS"
                  class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  required
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Taille de l'Entreprise</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i class="fas fa-users text-gray-400"></i>
                </div>
                <select class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition appearance-none">
                  <option>1-10 employés</option>
                  <option>11-50 employés</option>
                  <option>51-200 employés</option>
                  <option>201-500 employés</option>
                  <option>501+ employés</option>
                </select>
                <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <i class="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Mot de Passe</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <input 
                  type="password" 
                  placeholder="Créez un mot de passe sécurisé"
                  class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition"
                  required
                >
              </div>
              <p class="text-sm text-gray-500 mt-1 flex items-center">
                <i class="fas fa-info-circle mr-1"></i>
                Au moins 8 caractères
              </p>
            </div>
            
            <div class="flex items-start space-x-3">
              <input type="checkbox" class="w-5 h-5 mt-1 text-purple-600 border-gray-300 rounded focus:ring-purple-500" required>
              <label class="text-sm text-gray-600">
                J'accepte les <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">Conditions d'Utilisation</a> et la <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">Politique de Confidentialité</a>
              </label>
            </div>
            
            <button 
              type="submit" 
              class="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-lg transition font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <i class="fas fa-rocket mr-2"></i>
              Démarrez Votre Essai Gratuit
            </button>
          </form>
          
          <div class="mt-6 text-center">
            <p class="text-gray-600">
              Vous avez déjà un compte ? 
              <a href="/signin" class="text-purple-600 hover:text-purple-700 font-semibold">Se Connecter</a>
            </p>
          </div>
          
          <div class="mt-8 pt-6 border-t border-gray-200">
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="bg-purple-50 rounded-lg p-4 text-center">
                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i class="fas fa-calendar-check text-purple-600"></i>
                </div>
                <div class="text-xs font-semibold text-gray-700">Essai de 14 jours</div>
              </div>
              <div class="bg-purple-50 rounded-lg p-4 text-center">
                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i class="fas fa-credit-card text-purple-600"></i>
                </div>
                <div class="text-xs font-semibold text-gray-700">Sans carte bancaire</div>
              </div>
              <div class="bg-purple-50 rounded-lg p-4 text-center">
                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i class="fas fa-times-circle text-purple-600"></i>
                </div>
                <div class="text-xs font-semibold text-gray-700">Annulation facile</div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="flex -space-x-2">
                    <img src="https://i.pravatar.cc/150?img=47" alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                    <img src="https://i.pravatar.cc/150?img=12" alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                    <img src="https://i.pravatar.cc/150?img=32" alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                    <img src="https://i.pravatar.cc/150?img=20" alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  </div>
                  <div class="text-sm">
                    <div class="font-bold text-gray-800">10 000+ utilisateurs actifs</div>
                    <div class="text-gray-600">ont déjà rejoint Linkx-AI</div>
                  </div>
                </div>
                <div class="flex items-center space-x-1 bg-white rounded-lg px-3 py-1">
                  <i class="fas fa-star text-yellow-400 text-sm"></i>
                  <span class="font-bold text-sm">4.9</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Trust badges -->
          <div class="mt-8 flex items-center justify-center space-x-6 text-xs text-gray-500">
            <div class="flex items-center space-x-1">
              <i class="fas fa-shield-halved text-purple-600"></i>
              <span>Données Sécurisées</span>
            </div>
            <div class="flex items-center space-x-1">
              <i class="fas fa-lock text-purple-600"></i>
              <span>SSL Chiffré</span>
            </div>
            <div class="flex items-center space-x-1">
              <i class="fas fa-check-circle text-purple-600"></i>
              <span>RGPD Conforme</span>
            </div>
          </div>
        </div>
        
        <!-- Social proof logos -->
        <div class="mt-12 text-center">
          <p class="text-white/80 text-sm mb-6">Entreprises qui nous font confiance</p>
          <div class="flex items-center justify-center space-x-8 opacity-60">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <i class="fas fa-building text-white text-2xl"></i>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <i class="fas fa-industry text-white text-2xl"></i>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <i class="fas fa-hospital text-white text-2xl"></i>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <i class="fas fa-graduation-cap text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
