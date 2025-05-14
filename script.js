  // Hamburger Menu Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                
                // Animate hamburger to X
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.classList.toggle('active');
                });
            });
            
            // Close menu when clicking a link
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    
                    // Reset hamburger
                    const spans = hamburger.querySelectorAll('span');
                    spans.forEach(span => {
                        span.classList.remove('active');
                    });
                });
            });     
        });



         document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            const indicators = document.querySelectorAll('.indicator');
            
            let currentIndex = 0;
            let interval;
            
            // Functions
            function goToSlide(index) {
                // Remove active class from all slides and indicators
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                // Add active class to current slide and indicator
                slides[index].classList.add('active');
                indicators[index].classList.add('active');
                
                currentIndex = index;
            }
            
            function goToNextSlide() {
                let newIndex = currentIndex + 1;
                if (newIndex >= slides.length) {
                    newIndex = 0;
                }
                goToSlide(newIndex);
            }
            
            function goToPrevSlide() {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) {
                    newIndex = slides.length - 1;
                }
                goToSlide(newIndex);
            }
            
            function startAutoSlide() {
                interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
            }
            
            function stopAutoSlide() {
                clearInterval(interval);
            }
            
            // Event listeners
            prevBtn.addEventListener('click', function() {
                goToPrevSlide();
                stopAutoSlide();
                startAutoSlide(); // Restart the timer after manual navigation
            });
            
            nextBtn.addEventListener('click', function() {
                goToNextSlide();
                stopAutoSlide();
                startAutoSlide(); // Restart the timer after manual navigation
            });
            
            // Add click event for each indicator
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function() {
                    goToSlide(index);
                    stopAutoSlide();
                    startAutoSlide(); // Restart the timer after manual navigation
                });
            });
            
            // Pause auto-slide when hovering on slider
            const sliderContainer = document.querySelector('.slider-container');
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Start the auto-slide
            startAutoSlide();
        });




          // Données des appartements
        const appartements = [
            {
                id: 1,
                title: "Appartement Moderne au Centre-Ville",
                price: "950€ / mois",
                description: "Magnifique appartement moderne situé en plein cœur du centre-ville avec vue imprenable. Entièrement meublé et rénové récemment, offrant confort et praticité.",
                shortDesc: "Magnifique appartement moderne situé en plein cœur du centre-ville.",
                size: "65m²",
                rooms: "3 pièces",
                bedrooms: "2 chambres",
                bathrooms: "1 salle de bain",
                location: "Centre-ville",
                floor: "3ème étage",
                features: ["Ascenseur", "Balcon", "Cuisine équipée", "Lave-linge"],
                images: [
                    "images/Living (1).jpeg",
                    "images/Living.jpeg",
                    "images/Pop Art Style 001.jpeg"
                ],
                whatsapp: "+33612345678"
            },
            {
                id: 2,
                title: "Studio Cosy près de l'Université",
                price: "550€ / mois",
                description: "Studio parfait pour les étudiants, situé à quelques minutes à pied de l'université. Espace bien aménagé avec kitchenette et salle de bain moderne.",
                shortDesc: "Studio parfait pour les étudiants, près de l'université.",
                size: "30m²",
                rooms: "1 pièce",
                bedrooms: "Studio",
                bathrooms: "1 salle de bain",
                location: "Quartier Universitaire",
                floor: "Rez-de-chaussée",
                features: ["Internet fibre", "Chauffage", "Sécurisé"],
                images: [
                    "images/téléchargement (14).jpeg",
                    " images/téléchargement (15).jpeg",
                    "images/téléchargement (16).jpeg"
                ],
                whatsapp: "+33612345678"
            },
            {
                id: 3,
                title: "Grand Duplex Familial",
                price: "1250€ / mois",
                description: "Spacieux duplex idéal pour une famille, dans un quartier calme et résidentiel. Dispose d'un grand séjour, cuisine ouverte et jardin privé.",
                shortDesc: "Spacieux duplex idéal pour une famille, dans un quartier calme.",
                size: "95m²",
                rooms: "5 pièces",
                bedrooms: "3 chambres",
                bathrooms: "2 salles de bain",
                location: "Quartier Résidentiel",
                floor: "Duplex",
                features: ["Jardin", "Parking", "Cuisine équipée", "Buanderie"],
                images: [
                   " images/téléchargement (15).jpeg",
                    "images/téléchargement (16).jpeg",
                    "images/téléchargement (17).jpeg"
                ],
                whatsapp: "+33612345678"
            },
            {
                id: 4,
                title: "Loft Design en Zone Artistique",
                price: "1100€ / mois",
                description: "Loft moderne et spacieux situé dans le quartier artistique. Grandes fenêtres, beaux volumes et finitions haut de gamme pour un espace de vie unique.",
                shortDesc: "Loft moderne et spacieux situé dans le quartier artistique.",
                size: "80m²",
                rooms: "2 pièces",
                bedrooms: "1 chambre",
                bathrooms: "1 salle de bain",
                location: "Quartier Artistique",
                floor: "4ème étage",
                features: ["Ascenseur", "Vue dégagée", "Dressing", "Hauteur sous plafond"],
                images: [
                     "images/téléchargement (17).jpeg",
                    "images/téléchargement (18).jpeg",
                    "images/téléchargement (16).jpeg"
                    
                ],
                whatsapp: "+33612345678"
            },
            {
                id: 5,
                title: "Appartement avec Vue sur Mer",
                price: "1400€ / mois",
                description: "Sublime appartement offrant une vue imprenable sur la mer. Grande terrasse, intérieur lumineux et prestations de qualité pour un cadre de vie exceptionnel.",
                shortDesc: "Sublime appartement offrant une vue imprenable sur la mer.",
                size: "70m²",
                rooms: "3 pièces",
                bedrooms: "2 chambres",
                bathrooms: "1 salle de bain",
                location: "Front de Mer",
                floor: "5ème étage",
                features: ["Terrasse", "Ascenseur", "Climatisation", "Place de parking"],
                images: [
                    "images/téléchargement (18).jpeg",
                    "images/téléchargement (17).jpeg",
                    "images/téléchargement (14).jpeg"
                ],
                whatsapp: "+33612345678"
            },
            {
                id: 6,
                title: "Appartement Économique pour Étudiants",
                price: "450€ / mois",
                description: "Petit appartement fonctionnel idéal pour les étudiants avec un budget limité. Bien situé près des transports et des commerces.",
                shortDesc: "Petit appartement fonctionnel idéal pour les étudiants.",
                size: "25m²",
                rooms: "1 pièce",
                bedrooms: "Studio",
                bathrooms: "1 salle de bain",
                location: "Près du Campus",
                floor: "2ème étage",
                features: ["Internet", "Meublé", "Kitchenette"],
                images: [
                   " images/téléchargement (16).jpeg",
                     "images/téléchargement (14).jpeg",
                    "images/téléchargement (16).jpeg"
                    
                ],
                whatsapp: "+33612345678"
            }
        ];

        // Fonction pour créer les cartes d'appartements
        function createAppartCards() {
            const catalogue = document.getElementById('appartements-catalogue');
            
            appartements.forEach(appart => {
                const card = document.createElement('div');
                card.className = 'appart-card';
                card.dataset.id = appart.id;
                
                card.innerHTML = `
                    <img src="${appart.images[0]}" alt="${appart.title}" class="appart-img">
                    <div class="appart-info">
                        <h3 class="appart-title">${appart.title}</h3>
                        <div class="appart-price">${appart.price}</div>
                        <p class="appart-desc">${appart.shortDesc}</p>
                        <div class="appart-details">
                            <span>${appart.size}</span>
                            <span>${appart.rooms}</span>
                            <span>${appart.location}</span>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => openModal(appart.id));
                catalogue.appendChild(card);
            });
        }

        // Fonction pour ouvrir la modale
        function openModal(appartId) {
            const appart = appartements.find(a => a.id === appartId);
            const modal = document.getElementById('appart-modal');
            const slideshow = document.getElementById('modal-slideshow');
            const slideNav = document.getElementById('slide-nav');
            const modalInfo = document.getElementById('modal-info');
            
            // Créer le slideshow
            slideshow.innerHTML = `
                <div class="slide-arrow slide-prev">&#10094;</div>
                <div class="slide-arrow slide-next">&#10095;</div>
            `;
            
            slideNav.innerHTML = '';
            
            appart.images.forEach((img, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = img;
                imgElement.alt = `${appart.title} - Image ${index + 1}`;
                imgElement.className = `slideshow-img ${index === 0 ? 'active' : ''}`;
                slideshow.appendChild(imgElement);
                
                const dot = document.createElement('div');
                dot.className = `slide-dot ${index === 0 ? 'active' : ''}`;
                dot.dataset.index = index;
                dot.addEventListener('click', () => showSlide(index));
                slideNav.appendChild(dot);
            });
            
            // Ajouter les contrôles du slideshow
            slideshow.appendChild(slideNav);
            
            const prevBtn = slideshow.querySelector('.slide-prev');
            const nextBtn = slideshow.querySelector('.slide-next');
            
            prevBtn.addEventListener('click', () => changeSlide(-1));
            nextBtn.addEventListener('click', () => changeSlide(1));
            
            // Remplir les informations
            let featuresHTML = '';
            appart.features.forEach(feature => {
                featuresHTML += `<div class="detail-item">${feature}</div>`;
            });
            
            modalInfo.innerHTML = `
                <h2 class="modal-title">${appart.title}</h2>
                <div class="modal-price">${appart.price}</div>
                <p class="modal-desc">${appart.description}</p>
                <div class="modal-details">
                    <div class="detail-item">${appart.size}</div>
                    <div class="detail-item">${appart.rooms}</div>
                    <div class="detail-item">${appart.bedrooms}</div>
                    <div class="detail-item">${appart.bathrooms}</div>
                    <div class="detail-item">Étage: ${appart.floor}</div>
                    <div class="detail-item">Quartier: ${appart.location}</div>
                    ${featuresHTML}
                </div>
                <a href="https://wa.me/${appart.whatsapp}?text=Je suis intéressé(e) par l'appartement: ${appart.title}" class="reserve-btn" target="_blank">Réserver via WhatsApp</a>
            `;
            
            // Afficher la modale
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Gérer la fermeture
            const closeBtn = document.querySelector('.close-modal');
            closeBtn.addEventListener('click', closeModal);
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        // Fonction pour fermer la modale
        function closeModal() {
            const modal = document.getElementById('appart-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Fonctions pour le slideshow
        let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slideshow-img');
            const dots = document.querySelectorAll('.slide-dot');
            
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function changeSlide(direction) {
            showSlide(currentSlide + direction);
        }

        // Initialiser le catalogue
        document.addEventListener('DOMContentLoaded', createAppartCards);