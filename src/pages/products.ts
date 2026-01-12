export const productsPage = `
  <section class="hero-section py-20">
    <div class="container mx-auto px-6 text-center">
      <span class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <span>Nos Produits</span>
      </span>
      
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
        Outils IA Puissants pour<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Transformer Votre Entreprise</span>
      </h1>
      
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Trois produits de pointe travaillant ensemble pour automatiser votre marketing, renforcer les relations clients et débloquer une croissance basée sur les données.
      </p>
    </div>
  </section>
  
  <section class="py-20 bg-gradient-to-b from-white to-purple-50">
    <div class="container mx-auto px-6">
      <!-- Linkx Mail -->
      <div id="linkx-mail" class="mb-32 scroll-mt-20">
        <div class="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div class="inline-flex items-center space-x-3 mb-4">
                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-envelope text-white text-2xl"></i>
                </div>
                <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Le Plus Populaire</span>
              </div>
              
              <h3 class="text-4xl font-bold mb-4">Linkx Mail</h3>
              <h4 class="text-2xl text-purple-600 font-semibold mb-4">Email Marketing Intelligent</h4>
              
              <p class="text-gray-600 mb-6 text-lg">
                Créez des campagnes email personnalisées propulsées par l'IA. Notre système intelligent rédige des objets captivants, optimise les heures d'envoi et augmente les taux d'ouverture de 40%.
              </p>
              
              <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
                <div class="flex items-center space-x-4">
                  <i class="fas fa-clock text-purple-600 text-3xl"></i>
                  <div>
                    <div class="text-3xl font-bold">20 hrs</div>
                    <div class="text-sm text-gray-500">Économisées par Semaine</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative">
              <img src="/static/images/linkx-mail-new.png" alt="Linkx Mail" class="rounded-2xl shadow-2xl">
            </div>
          </div>
          
          <!-- Spécifications détaillées -->
          <div class="bg-white rounded-2xl p-8 mb-8">
            <h5 class="text-2xl font-bold mb-6 text-gray-800">Spécifications & Fonctionnalités</h5>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h6 class="font-semibold text-purple-600 mb-4 flex items-center">
                  <i class="fas fa-robot mr-2"></i> IA & Automation
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Génération de contenu par IA</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Optimisation automatique des objets</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Meilleur timing d'envoi</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Tests A/B automatisés</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Segmentation intelligente</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-600 mb-4 flex items-center">
                  <i class="fas fa-chart-line mr-2"></i> Analytics & Insights
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Tableaux de bord en temps réel</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Analyse prédictive</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>ROI tracking</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Rapports personnalisables</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Alertes intelligentes</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-600 mb-4 flex items-center">
                  <i class="fas fa-plug mr-2"></i> Intégrations
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>CRM majeurs (Salesforce, HubSpot)</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>E-commerce (Shopify, WooCommerce)</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Zapier & API REST</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Google Analytics</li>
                  <li class="flex items-start"><i class="fas fa-check text-purple-600 mr-2 mt-1"></i>Webhooks personnalisés</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Plans tarifaires Linkx Mail -->
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
            <h5 class="text-2xl font-bold mb-6">Plans Tarifaires Linkx Mail</h5>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h6 class="font-semibold text-lg mb-2">Starter</h6>
                <div class="text-3xl font-bold mb-4">29€<span class="text-lg font-normal">/mois</span></div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>5 000 emails/mois</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>3 campagnes actives</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Segmentation basique</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Support email</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-purple-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Commencer</a>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div class="bg-white text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">Populaire</div>
                <h6 class="font-semibold text-lg mb-2">Professional</h6>
                <div class="text-3xl font-bold mb-4">79€<span class="text-lg font-normal">/mois</span></div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>50 000 emails/mois</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Campagnes illimitées</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Segmentation avancée</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Tests A/B illimités</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Support prioritaire</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-purple-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Commencer</a>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h6 class="font-semibold text-lg mb-2">Enterprise</h6>
                <div class="text-3xl font-bold mb-4">Sur mesure</div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Volume illimité</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Toutes les fonctionnalités</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>IP dédiée</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Account manager</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>SLA garanti</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-purple-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Nous Contacter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Linkx Mining -->
      <div id="linkx-mining" class="mb-32 scroll-mt-20">
        <div class="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div class="order-2 md:order-1 relative">
              <img src="/static/images/linkx-mining-new.png" alt="Linkx Mining" class="rounded-2xl shadow-2xl">
            </div>
            
            <div class="order-1 md:order-2">
              <div class="inline-flex items-center space-x-3 mb-4">
                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-chart-bar text-white text-2xl"></i>
                </div>
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">IA Avancée</span>
              </div>
              
              <h3 class="text-4xl font-bold mb-4">Linkx Mining</h3>
              <h4 class="text-2xl text-purple-600 font-semibold mb-4">Gestion des Opérations</h4>
              
              <p class="text-gray-600 mb-6 text-lg">
                Visibilité et contrôle complets sur vos opérations. Surveillez les performances, optimisez les workflows et réduisez les temps d'arrêt avec des insights en temps réel.
              </p>
              
              <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
                <div class="flex items-center space-x-4">
                  <i class="fas fa-arrow-trend-up text-purple-600 text-3xl"></i>
                  <div>
                    <div class="text-3xl font-bold">30%</div>
                    <div class="text-sm text-gray-500">Réduction des Temps d'Arrêt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Spécifications détaillées -->
          <div class="bg-white rounded-2xl p-8 mb-8">
            <h5 class="text-2xl font-bold mb-6 text-gray-800">Spécifications & Fonctionnalités</h5>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h6 class="font-semibold text-blue-600 mb-4 flex items-center">
                  <i class="fas fa-gauge-high mr-2"></i> Surveillance en Temps Réel
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Monitoring 24/7</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Alertes personnalisables</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Tableaux de bord multi-sites</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Métriques de performance</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Logs d'activité détaillés</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-blue-600 mb-4 flex items-center">
                  <i class="fas fa-brain mr-2"></i> IA Prédictive
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Maintenance prédictive</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Détection d'anomalies</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Optimisation automatique</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Prévisions de charge</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Recommandations IA</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-blue-600 mb-4 flex items-center">
                  <i class="fas fa-shield-halved mr-2"></i> Sécurité & Conformité
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Chiffrement de bout en bout</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Conformité ISO 27001</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Audit trails complets</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Contrôle d'accès granulaire</li>
                  <li class="flex items-start"><i class="fas fa-check text-blue-600 mr-2 mt-1"></i>Backups automatiques</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Plans tarifaires Linkx Mining -->
          <div class="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white mb-8">
            <h5 class="text-2xl font-bold mb-6">Plans Tarifaires Linkx Mining</h5>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h6 class="font-semibold text-lg mb-2">Basic</h6>
                <div class="text-3xl font-bold mb-4">99€<span class="text-lg font-normal">/mois</span></div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Jusqu'à 5 sites</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Monitoring basique</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Rapports hebdomadaires</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Support email</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-blue-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Commencer</a>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div class="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">Recommandé</div>
                <h6 class="font-semibold text-lg mb-2">Advanced</h6>
                <div class="text-3xl font-bold mb-4">249€<span class="text-lg font-normal">/mois</span></div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Jusqu'à 25 sites</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Monitoring avancé + IA</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Maintenance prédictive</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Rapports quotidiens</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Support 24/7</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-blue-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Commencer</a>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h6 class="font-semibold text-lg mb-2">Enterprise</h6>
                <div class="text-3xl font-bold mb-4">Sur mesure</div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Sites illimités</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Toutes les fonctionnalités</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Infrastructure dédiée</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Account manager dédié</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>SLA personnalisé</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-blue-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Nous Contacter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Linkx SRM -->
      <div id="linkx-srm" class="scroll-mt-20">
        <div class="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div class="inline-flex items-center space-x-3 mb-4">
                <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-users text-white text-2xl"></i>
                </div>
                <span class="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">Enterprise Ready</span>
              </div>
              
              <h3 class="text-4xl font-bold mb-4">Linkx SRM</h3>
              <h4 class="text-2xl text-purple-600 font-semibold mb-4">Découverte de Fournisseurs</h4>
              
              <p class="text-gray-600 mb-6 text-lg">
                Trouvez le fournisseur parfait en quelques minutes, pas des jours. Notre plateforme propulsée par l'IA vous connecte avec des fournisseurs vérifiés et simplifie votre processus d'approvisionnement.
              </p>
              
              <div class="bg-white rounded-xl p-6 mb-6 inline-block shadow-lg">
                <div class="flex items-center space-x-4">
                  <i class="fas fa-gauge-high text-purple-600 text-3xl"></i>
                  <div>
                    <div class="text-3xl font-bold">90%</div>
                    <div class="text-sm text-gray-500">Plus Rapide</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative">
              <img src="/static/images/linkx-srm-new.png" alt="Linkx SRM" class="rounded-2xl shadow-2xl">
            </div>
          </div>
          
          <!-- Spécifications détaillées -->
          <div class="bg-white rounded-2xl p-8 mb-8">
            <h5 class="text-2xl font-bold mb-6 text-gray-800">Spécifications & Fonctionnalités</h5>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h6 class="font-semibold text-pink-600 mb-4 flex items-center">
                  <i class="fas fa-search mr-2"></i> Recherche & Matching
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Matching IA avancé</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Base de 100K+ fournisseurs</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Vérification instantanée</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Filtres intelligents</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Recommandations personnalisées</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-pink-600 mb-4 flex items-center">
                  <i class="fas fa-handshake mr-2"></i> Gestion & Collaboration
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Négociations automatisées</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Gestion des contrats</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Onboarding simplifié</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Messagerie intégrée</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Documents partagés</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-pink-600 mb-4 flex items-center">
                  <i class="fas fa-chart-pie mr-2"></i> Performance & Risques
                </h6>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Évaluation continue</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Analyse de risques</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>KPIs en temps réel</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Alertes de conformité</li>
                  <li class="flex items-start"><i class="fas fa-check text-pink-600 mr-2 mt-1"></i>Rapports d'audit</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Plans tarifaires Linkx SRM -->
          <div class="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h5 class="text-2xl font-bold mb-6">Plans Tarifaires Linkx SRM</h5>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h6 class="font-semibold text-lg mb-2">Starter</h6>
                <div class="text-3xl font-bold mb-4">149€<span class="text-lg font-normal">/mois</span></div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>10 fournisseurs actifs</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Recherche de base</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>5 utilisateurs</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Support email</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-pink-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Commencer</a>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div class="bg-white text-pink-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">Populaire</div>
                <h6 class="font-semibold text-lg mb-2">Business</h6>
                <div class="text-3xl font-bold mb-4">399€<span class="text-lg font-normal">/mois</span></div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Fournisseurs illimités</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Matching IA avancé</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>25 utilisateurs</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Analyse de risques</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Support prioritaire</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-pink-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Commencer</a>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h6 class="font-semibold text-lg mb-2">Enterprise</h6>
                <div class="text-3xl font-bold mb-4">Sur mesure</div>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Volume illimité</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Toutes les fonctionnalités</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Utilisateurs illimités</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Intégrations personnalisées</li>
                  <li class="flex items-start"><i class="fas fa-check mr-2 mt-1"></i>Support dédié 24/7</li>
                </ul>
                <a href="/get-started" class="block mt-4 bg-white text-pink-600 text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Nous Contacter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
        Prêt à Transformer Votre Entreprise ?
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Rejoignez plus de 10 000 entreprises qui utilisent nos solutions pour automatiser leurs processus et accélérer leur croissance.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/get-started" class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-flex items-center justify-center">
          Commencer Gratuitement
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
        <a href="/watch-demo" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition inline-flex items-center justify-center">
          <i class="fas fa-play mr-2"></i>
          Voir la Démo
        </a>
      </div>
    </div>
  </section>
`;
