
        /* --- APPLICATION DATA (PRODUCTS DATABASE) --- */
        const PRODUCTS = [
            { id: 1, name: 'Macha', category: 'hot', price: 5.99, tag: 'Best Seller', description: 'Silky smooth espresso espresso with signature creamy cat-shaped foam art garnish.', image:'./Images/Hot Coffee/Macha.jpg'},
            { id: 2, name: 'Latte', category: 'hot', price: 6.49, tag: 'Trending', description: 'Steeped for 24 hours naturally, garnished with high density sweet vanilla cream foam.', image:'./Images/Hot Coffee/Latte.jpg'},
            { id: 3, name: 'Macchiato', category: 'hot', price: 5.25, tag: 'Sweet', description: 'Pure dark cocoa mixed flawlessly with premium natural espresso and raspberry shavings.', image:'./Images/Hot Coffee/Macchiato.jpg'},
            { id: 4, name: 'Flat White', category: 'hot', price: 5.89, tag: 'Signature', description: 'Blended luxury espresso with natural ice crystals and topped with colorful sprinkles.', image:'./Images/Hot Coffee/Flat White.jpg'},
            { id: 5, name: 'Espresso', category: 'hot', price: 4.50, tag: 'Classic', description: 'Unadulterated single-origin pour over coffee for true dark bean connoisseurs.', image:'./Images/Hot Coffee/Espresso.jpg'},
            { id: 6, name: 'Cold Brew', category: 'hot', price: 6.75, tag: 'Organic', description: 'Add desired amount of ice cubes and instant coffee powder to the mixer bowl.', image:'./Images/Hot Coffee/Cold Brew.jpg'},
            { id: 7, name: 'Cappuccino', category: 'hot', price: 4.55, tag: 'Humonoide', description: 'Espresso topped with steamed milk and foam, balanced between strong and creamy.', image:'./Images/Hot Coffee/Cappuccino.jpg'},
            { id: 8, name: 'Americano', category: 'hot', price: 3.65, tag: 'Organic', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Hot Coffee/Americano.jpg'},
            { id: 9, name: 'Affogato', category: 'hot', price: 4.45, tag: 'Unique', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Hot Coffee/Affogato.jpg'},
            { id: 10, name: 'Chocolate Brew', category: 'cold', price: 6.15, tag: 'Sweet', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Chocolate Brew.jpg'},
            { id: 11, name: 'Bro_Sug Coffee', category: 'cold', price: 5.55, tag: 'Organic', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Bro_Sug Coffee.jpg' },
            { id: 12, name: 'Cold Affogato', category: 'cold', price: 6.15, tag: 'Classic', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Cold Affogato.jpg' },
            { id: 13, name: 'Cold Mazoto', category: 'cold', price: 4.85, tag: 'Tarro', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/cold mazoto.jpg' },
            { id: 14, name: 'Cold Mint', category: 'cold', price: 3.95, tag: 'Special', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/cold mint.jpg' },
            { id: 15, name: 'Dalgona Coffee', category: 'cold', price: 6.65, tag: 'Signature', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Dalgona Coffee.jpg' },
            { id: 16, name: 'Honey Latte', category: 'cold', price: 5.35, tag: 'Organic', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Honey Latte.jpg' },
            { id: 17, name: 'Iced Classic', category: 'cold', price: 6.25, tag: 'Sthatics', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Iced Classic.jpg' },
            { id: 18, name: 'Iced Mocha', category: 'cold', price: 5.75, tag: 'Organic', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/iced Mocha.jpg' },
            { id: 19, name: 'Java Plum Coffee', category: 'cold', price: 6.55, tag: 'Trending', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Java Plum Coffee.jpg' },
            { id: 20, name: 'Vanilla coffee', category: 'cold', price: 4.75, tag: 'Desi', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Vanilla Coffee.jpg' },
            { id: 21, name: 'Iced Americano', category: 'cold', price: 6.75, tag: 'Organic', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Iced Americano.jpg' },
            { id: 22, name: 'Taro Latte', category: 'cold', price: 6.75, tag: 'Bro-Code', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Taro Latte.jpg' },
            { id: 23, name: 'Hazelnut Latte', category: 'cold', price: 6.75, tag: 'Landmark', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Hazelnut Latte.jpg' },
            { id: 24, name: 'Coffe Aren', category: 'cold', price: 6.75, tag: 'Countery Side', description: 'Pure ceremonial stone-ground matcha layered over sweetened farm-fresh cold whole milk.', image:'./Images/Cold Coffee/Coffe Aren.jpg' },
            { id: 25, name: 'Ristretto', category: 'hot', price: 6.75, tag: 'Signature', description: 'A short, concentrated espresso shot, richer in flavor but less bitter than espresso', image:'./Images/Hot Coffee/Ristretto.jpg' },
            { id: 26, name: 'Turkish-Coffee', category: 'hot', price: 6.75, tag: 'Special', description: 'Traditional coffee boiled with fine grounds, known for strong flavor and foam.', image:'./Images/Hot Coffee/Turkish-Coffee.jpg' },
            { id: 27, name: 'Flat-White', category: 'hot', price: 6.75, tag: 'Organic', description: 'Espresso topped with micro-foamed milk, offering creamy texture and stronger coffee taste.', image:'./Images/Hot Coffee/Flat-White.jpg' },
        ];

        // Global Cart State Array Variable
        let cart = [];

        /* --- CONTROLLERS & INITIALIZATION --- */
        document.addEventListener('DOMContentLoaded', () => {
            initializeProductsGrid();
            setupThemeToggle();
            setupMobileMenu();
            setupScrollAnimations();
            handleUrlHashRouting();
            
            // Hide application preloader fluidly
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 500);
            }, 800);
        });

        /* --- SPA ROUTER NAVIGATION COMPONENT --- */
        function navigateToPage(pageId) {
            // Update active state in CSS layout views
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active-page');
            });
            const targetedSection = document.getElementById(pageId);
            if(targetedSection) targetedSection.classList.add('active-page');

            // Update header main menu navbar tracking styles
            document.querySelectorAll('.nav-link-item').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${pageId}`) {
                    link.classList.add('active');
                }
            });

            // Handle clean closing of mobile responsive viewport slide panel menu
            document.getElementById('navLinks').classList.remove('active-menu');
            
            // Render specific template dynamically if entering system checkout layout
            if(pageId === 'cart') {
                renderCartLayout();
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function handleUrlHashRouting() {
            const hash = window.location.hash.replace('#', '');
            if(['home', 'menu', 'about', 'gallery', 'cart'].includes(hash)) {
                navigateToPage(hash);
            }
        }
        window.addEventListener('hashchange', handleUrlHashRouting);

        /* --- RENDERING ENGINE FOR THE MENU ECOMMERCE STORE --- */
        function initializeProductsGrid() {
            renderProducts(PRODUCTS);
        }

        function renderProducts(productsList) {
            const container = document.getElementById('productsGridContainer');
            if(!container) return;
            
            container.innerHTML = productsList.map(item => `
                <div class="coffee-card fade-in-element is-visible">
                    <div class="card-img-wrapper">
                        <span class="card-tag">${item.tag}</span>
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="card-body">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="card-footer">
                            <span class="card-price">$${item.price.toFixed(2)}</span>
                            <button class="add-to-cart-btn" aria-label="Add ${item.name} to order" onclick="addItemToCart(${item.id})">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts(category) {
            // Update filter controls presentation styles
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if(btn.textContent.toLowerCase().includes(category)) btn.classList.add('active');
                if(category === 'all' && btn.textContent === 'All') btn.classList.add('active');
            });

            if(category === 'all') {
                renderProducts(PRODUCTS);
            } else {
                const filtered = PRODUCTS.filter(p => p.category === category);
                renderProducts(filtered);
            }
        }

        /* --- SHOPPING CART CORE BUSINESS LOGIC --- */
        function addItemToCart(productId) {
            const match = PRODUCTS.find(p => p.id === productId);
            const existingItem = cart.find(item => item.product.id === productId);

            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ product: match, quantity: 1 });
            }
            updateCartCounterUI();
            
            // Subtle interactive feedback micro-interaction
            const badge = document.getElementById('cartBadgeCount');
            badge.style.transform = 'scale(1.4)';
            setTimeout(() => badge.style.transform = 'scale(1)', 200);
        }

        function updateCartCounterUI() {
            const count = cart.reduce((total, current) => total + current.quantity, 0);
            document.getElementById('cartBadgeCount').textContent = count;
        }

        function alterQuantity(productId, alteration) {
            const targetedItem = cart.find(item => item.product.id === productId);
            if(!targetedItem) return;

            targetedItem.quantity += alteration;
            if(targetedItem.quantity <= 0) {
                cart = cart.filter(item => item.product.id !== productId);
            }
            updateCartCounterUI();
            renderCartLayout();
        }

        function removeProductFromCart(productId) {
            cart = cart.filter(item => item.product.id !== productId);
            updateCartCounterUI();
            renderCartLayout();
        }

        function renderCartLayout() {
            const wrapper = document.getElementById('cartContentWrapper');
            if(!wrapper) return;

            if(cart.length === 0) {
                wrapper.innerHTML = `
                    <div class="empty-cart-message">
                        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 15px; color: var(--primary);"></i>
                        <p>Your shopping cart looks completely empty! Grab a sweet ship to refresh your mind!</p>
                        <a href="#menu" class="btn-primary" style="margin-top:20px;" onclick="navigateToPage('menu')">Go To Menu</a>
                    </div>
                `;
                return;
            }

            const runningTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

            let tableRowsHtml = cart.map(item => `
                <tr>
                    <td>
                        <div class="cart-item-info">
                            <img src="${item.product.image}" alt="${item.product.name}">
                            <div>
                                <h4 style="font-family:'Fredoka'; font-size:1.1rem;">${item.product.name}</h4>
                                <span style="font-size:0.85rem; color:var(--text-muted);">$${item.product.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="qty-control">
                            <button class="qty-btn" onclick="alterQuantity(${item.product.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="alterQuantity(${item.product.id}, 1)">+</button>
                        </div>
                    </td>
                    <td><strong style="color:var(--accent);">$${(item.product.price * item.quantity).toFixed(2)}</strong></td>
                    <td>
                        <button class="remove-item-btn" aria-label="Delete item from cart" onclick="removeProductFromCart(${item.product.id})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `).join('');

            wrapper.innerHTML = `
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Item Details</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRowsHtml}
                    </tbody>
                </table>
                <div class="cart-summary">
                    <h3>Grand Total: <span style="color:var(--accent);">$${runningTotal.toFixed(2)}</span></h3>
                    <button class="btn-primary" onclick="processCheckoutFinalization()">Proceed To Checkout &nbsp;<i class="fa-solid fa-credit-card"></i></button>
                </div>
            `;
        }

        function processCheckoutFinalization() {
            alert('🐱 Meow! Thank you for your production order! Your refreshing garnished coffee ship is heading your way!');
            cart = [];
            updateCartCounterUI();
            navigateToPage('home');
        }

        /* --- LIGHTBOX GALLERY VIEWPORT INTERACTION CONTROLLER --- */
        function openLightbox(imgSrc) {
            const modal = document.getElementById('lightboxModal');
            const activeImg = document.getElementById('lightboxActiveImg');
            activeImg.src = imgSrc;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Lock scrolling actions
        }

        function closeLightbox() {
            document.getElementById('lightboxModal').style.display = 'none';
            document.body.style.overflow = 'auto'; // Unlock browser scrolling views
        }

        /* --- UTILITY / INTERACTION CONFIGURATORS --- */
        function setupThemeToggle() {
            const btn = document.getElementById('themeToggleBtn');
            btn.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                const isDark = document.body.classList.contains('dark-theme');
                btn.innerHTML = isDark ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
            });
        }

        function setupMobileMenu() {
            const menuBtn = document.getElementById('hamburgerMenuBtn');
            const navLinks = document.getElementById('navLinks');
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active-menu');
            });
        }

        function setupScrollAnimations() {
            const elementsToAnimate = document.querySelectorAll('.fade-in-element');
            const observerConfiguration = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

            const scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Performance optimization optimization
                    }
                });
            }, observerConfiguration);

            elementsToAnimate.forEach(element => scrollObserver.observe(element));
        }
    