export const getLayout = (title: string, content: string, activePage: string = 'home') => {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - Linkx-AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-white">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 py-4 shadow-lg">
            <div class="container mx-auto px-6 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <a href="/" class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                            <i class="fas fa-link text-white text-xl"></i>
                        </div>
                        <span class="text-white text-xl font-bold">Linkx-AI</span>
                    </a>
                </div>
                
                <div class="hidden md:flex items-center space-x-8 text-white">
                    <a href="/" class="hover:text-purple-400 transition ${activePage === 'home' ? 'text-purple-400 font-semibold' : ''}">Home</a>
                    <a href="/about" class="hover:text-purple-400 transition ${activePage === 'about' ? 'text-purple-400 font-semibold' : ''}">About</a>
                    <a href="/services" class="hover:text-purple-400 transition ${activePage === 'services' ? 'text-purple-400 font-semibold' : ''}">Services</a>
                    <a href="/products" class="hover:text-purple-400 transition ${activePage === 'products' ? 'text-purple-400 font-semibold' : ''}">Products</a>
                    <a href="/pricing" class="hover:text-purple-400 transition ${activePage === 'pricing' ? 'text-purple-400 font-semibold' : ''}">Pricing</a>
                </div>
                
                <div class="flex items-center space-x-4">
                    <a href="/signin" class="text-white hover:text-purple-400 transition">Sign In</a>
                    <a href="/get-started" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
                        Get Started Free
                    </a>
                </div>
            </div>
        </nav>

        <!-- Content -->
        <main class="pt-20">
            ${content}
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-400 py-12">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-5 gap-8 mb-12">
                    <div>
                        <div class="flex items-center space-x-2 mb-6">
                            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                                <i class="fas fa-link text-white"></i>
                            </div>
                            <span class="text-white text-xl font-bold">Linkx-AI</span>
                        </div>
                        <p class="mb-4">
                            Empowering businesses with AI-driven tools for smarter growth, better relationships, and data-driven decisions.
                        </p>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:hello@linkx-ai.com">hello@linkx-ai.com</a>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-phone"></i>
                                <a href="tel:+15555551234567">+1 (555) 123-4567</a>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Product</h4>
                        <ul class="space-y-2">
                            <li><a href="/products" class="hover:text-purple-400 transition">AI Email</a></li>
                            <li><a href="/products" class="hover:text-purple-400 transition">SRM</a></li>
                            <li><a href="/products" class="hover:text-purple-400 transition">Data Mining</a></li>
                            <li><a href="/services" class="hover:text-purple-400 transition">Automation</a></li>
                            <li><a href="/services" class="hover:text-purple-400 transition">Analytics</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Company</h4>
                        <ul class="space-y-2">
                            <li><a href="/about" class="hover:text-purple-400 transition">About Us</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Careers</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Blog</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Press</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Partners</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Resources</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Documentation</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Help Center</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Community</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Tutorials</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">API Reference</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Terms of Service</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Cookie Policy</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">GDPR</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2026 Linkx-AI. All rights reserved.</p>
                    
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" class="hover:text-purple-400 transition">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

        <script src="/static/app.js"></script>
    </body>
    </html>
  `;
};
