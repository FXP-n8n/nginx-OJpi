// 4-Eyes Luxury Spa Website - Main JavaScript
// Professional interactions and functionality

// ===========================
// Translation System
// ===========================
const translations = {
    en: {
        // Navigation
        tagline: "AI for Wellness",
        nav: {
            home: "Home",
            product: "Product",
            benefits: "Benefits",
            howItWorks: "How It Works",
            pricing: "Pricing",
            contact: "Contact Us"
        },
        
        // Hero Section
        hero: {
            title1: "Elevate Your Spa Experience",
            title2: "With Intelligent Conversation",
            subtitle: "The dual-personality AI chatbot designed exclusively for luxury wellness centers. Deliver exceptional guest service 24/7 while your team focuses on what matters most.",
            cta1: "Schedule a Consultation",
            cta2: "Discover 4-Eyes",
            stat1: "Guest Support",
            stat2: "Staff Time Saved",
            stat3: "Booking Conversion",
            scrollText: "Scroll to explore"
        },
        
        // Problems Section
        problems: {
            title: "The Challenge Facing Luxury Wellness Centers",
            description: "Your guests expect immediate, personalized responses. Your staff deserves to focus on delivering exceptional in-person experiences, not answering repetitive inquiries.",
            card1: {
                title: "After-Hours Inquiries",
                text: "Miss bookings when guests research services outside business hours"
            },
            card2: {
                title: "Repetitive Questions",
                text: "Staff spend hours answering the same service and pricing questions"
            },
            card3: {
                title: "International Guests",
                text: "Language barriers create friction in the luxury guest experience"
            },
            card4: {
                title: "Lost Opportunities",
                text: "No insights into what guests are asking about before they book"
            }
        },
        
        // Product Section
        product: {
            label: "The Solution",
            title: "Meet 4-Eyes: Your Dual-Personality AI Assistant",
            description: "Not just another chatbot. 4-Eyes is specifically designed for the wellness industry, with two distinct personalities that adapt to your guests' journey.",
            preSales: {
                badge: "Pre-Sales",
                title: "The Wellness Concierge",
                description: "Engages prospective guests with detailed information about your services, treatments, packages, and wellness journeys. Answers questions about pricing, availability, and helps guests discover the perfect experience.",
                feature1: "Service catalog expertise",
                feature2: "Treatment recommendations",
                feature3: "Package comparisons",
                feature4: "Availability inquiries",
                feature5: "Pricing transparency"
            },
            divider: "Seamlessly Transitions",
            postSales: {
                badge: "Post-Sales",
                title: "The Operations Officer",
                description: "Handles operational needs for confirmed guests. Manages appointment modifications, provides booking status updates, handles arrival notifications, and addresses service-related questions.",
                feature1: "Booking status updates",
                feature2: "Appointment modifications",
                feature3: "Arrival notifications",
                feature4: "Special requests handling",
                feature5: "Service follow-ups"
            }
        },
        
        // Features Section
        features: {
            label: "Capabilities",
            title: "Built for Luxury Wellness",
            feature1: {
                title: "Seamless Integration",
                description: "Connects effortlessly with your existing spa management systems. No expensive overhauls, no technical headaches."
            },
            feature2: {
                title: "Business-Friendly Customization",
                description: "Update services, pricing, and responses yourself. No coding required, no waiting for developers."
            },
            feature3: {
                title: "Multi-Language Support",
                description: "Serve international guests in their preferred language. Expand your reach without hiring multilingual staff."
            },
            feature4: {
                title: "Analytics Dashboard",
                description: "Understand what guests ask about most. Identify trends, optimize offerings, and make data-driven decisions."
            },
            feature5: {
                title: "Privacy & Security",
                description: "GDPR compliant and built with wellness industry privacy standards. Your guests' data is protected."
            },
            feature6: {
                title: "Instant Responses",
                description: "Never keep a potential guest waiting. Provide immediate, accurate answers any time of day or night."
            }
        },
        
        // Benefits Section
        benefits: {
            label: "Value Proposition",
            title: "Transform Your Guest Experience & Operations",
            item1: {
                title: "Capture More Bookings",
                description: "Convert curious browsers into confirmed guests. 4-Eyes engages visitors instantly, answers their questions comprehensively, and guides them toward booking—even at 3 AM when your staff is offline.",
                point1: "24/7 availability captures after-hours opportunities",
                point2: "Instant responses prevent visitors from going to competitors",
                point3: "Personalized recommendations increase package upsells"
            },
            item2: {
                title: "Free Your Staff's Time",
                description: "Let 4-Eyes handle the routine inquiries while your team focuses on delivering the exceptional in-person experiences that define luxury wellness. Reduce repetitive tasks by up to 60%.",
                point1: "Automate FAQs about services, pricing, and policies",
                point2: "Handle booking modifications without staff intervention",
                point3: "Reduce phone interruptions during treatments"
            },
            item3: {
                title: "Enhance Guest Satisfaction",
                description: "Modern luxury means convenience. Guests expect instant, accurate information delivered seamlessly. 4-Eyes provides the immediate, personalized attention that elevates your brand.",
                point1: "Consistent, accurate information every time",
                point2: "Multi-language support for international clientele",
                point3: "Proactive updates on booking status and arrivals"
            },
            item4: {
                title: "Gain Business Intelligence",
                description: "Every conversation is a data point. Understand what guests are truly interested in, identify trending treatments, and spot opportunities to optimize your service offerings.",
                point1: "Track most-asked questions and popular services",
                point2: "Identify gaps in your service information",
                point3: "Measure conversion patterns and optimize messaging"
            }
        },
        
        // How It Works Section
        howItWorks: {
            label: "Implementation",
            title: "From Consultation to Conversation in Weeks",
            description: "We've streamlined the implementation process to minimize disruption while maximizing value for your wellness center.",
            step1: {
                title: "Discovery & Customization",
                description: "We learn about your services, brand voice, and unique offerings. Together, we configure 4-Eyes to reflect your spa's personality and expertise."
            },
            step2: {
                title: "Seamless Integration",
                description: "Our team connects 4-Eyes with your existing spa management system. No disruption to your operations, no technical burden on your staff."
            },
            step3: {
                title: "Training & Testing",
                description: "We train 4-Eyes on your specific services, policies, and workflows. Rigorous testing ensures accuracy before launch. You maintain full control over customization."
            },
            step4: {
                title: "Launch & Optimization",
                description: "Go live and start capturing more bookings. We monitor performance, gather insights, and continuously optimize based on real guest interactions."
            }
        },
        
        // Pricing Section
        pricing: {
            label: "Investment",
            title: "Custom Solutions for Your Wellness Center",
            description: "Every luxury spa is unique. We create tailored pricing based on your specific needs, guest volume, and integration requirements.",
            card: {
                title: "Let's Design Your Perfect Solution",
                subtitle: "Our pricing considers:",
                factor1: "Number of locations and treatment rooms",
                factor2: "Expected conversation volume",
                factor3: "Integration complexity with your existing systems",
                factor4: "Language support requirements",
                factor5: "Customization and training needs",
                ctaText: "Schedule a consultation to discuss your needs and receive a custom proposal.",
                ctaButton: "Get Custom Pricing"
            }
        },
        
        // Contact Section
        contact: {
            label: "Get Started",
            title: "Schedule Your Consultation",
            description: "Discover how 4-Eyes can transform your guest experience and operations. We'll discuss your specific needs and show you exactly how our dual-personality AI can drive results for your wellness center.",
            email: {
                label: "Email"
            },
            expect: {
                title: "What to Expect:",
                item1: "30-minute personalized demo",
                item2: "Discussion of your specific needs and challenges",
                item3: "Custom pricing proposal",
                item4: "Implementation timeline",
                item5: "ROI analysis for your wellness center"
            }
        },
        
        // Form Section
        form: {
            name: {
                label: "Your Name *",
                placeholder: "Jane Smith"
            },
            business: {
                label: "Spa/Business Name *",
                placeholder: "Serenity Wellness Spa"
            },
            email: {
                label: "Email Address *",
                placeholder: "jane@serenity-spa.com"
            },
            phone: {
                label: "Phone Number (Optional)",
                placeholder: "+1 (555) 123-4567"
            },
            message: {
                label: "Tell Us About Your Needs",
                placeholder: "What challenges are you facing? What would you like to learn about 4-Eyes?"
            },
            submit: "Schedule Consultation"
        },
        
        // Footer Section
        footer: {
            tagline: "AI for Wellness",
            description: "Intelligent conversation technology designed exclusively for luxury spa and wellness centers.",
            productTitle: "Product",
            features: "Features",
            benefits: "Benefits",
            howItWorks: "How It Works",
            pricing: "Pricing",
            contactTitle: "Contact",
            schedule: "Schedule Consultation",
            emailUs: "Email Us",
            copyright: "© 2025 4-Eyes. All rights reserved."
        },
        
        // Chatbot Section
        chatbot: {
            toggleBadge: "Try 4-Eyes",
            title: "4-Eyes AI Assistant",
            subtitle: "AI for Wellness",
            welcome: "Welcome to Serenity Spa. I'm here to guide you through our wellness sanctuary and help you discover the perfect treatment for your needs. Whether you're seeking relaxation, rejuvenation, or a transformative spa experience, I'm delighted to assist you with booking support, services, and personalized recommendations.",
            hint: "How may I assist you with your wellness journey today?",
            quickReply1: "What can you help me with?",
            quickReply2: "Tell me about your services",
            quickReply3: "How do I book an appointment?",
            placeholder: "Type your message..."
        }
    },
    
    fr: {
        // Navigation
        tagline: "IA pour le Bien-être",
        nav: {
            home: "Accueil",
            product: "Produit",
            benefits: "Avantages",
            howItWorks: "Fonctionnement",
            pricing: "Tarifs",
            contact: "Nous Contacter"
        },
        
        // Hero Section
        hero: {
            title1: "Révolutionnez Votre Expérience Spa",
            title2: "Avec une Conversation Intelligente",
            subtitle: "Le chatbot IA à double personnalité conçu exclusivement pour les centres de bien-être de luxe. Offrez un service client exceptionnel 24h/24 et 7j/7 pendant que votre équipe se concentre sur l'essentiel.",
            cta1: "Planifier une Consultation",
            cta2: "Découvrir 4-Eyes",
            stat1: "Support Client",
            stat2: "Temps Économisé",
            stat3: "Conversion Réservations",
            scrollText: "Faire défiler pour explorer"
        },
        
        // Problems Section
        problems: {
            title: "Le Défi des Centres de Bien-être de Luxe",
            description: "Vos clients attendent des réponses immédiates et personnalisées. Votre équipe mérite de se concentrer sur la création d'expériences en personne exceptionnelles, pas sur la réponse aux demandes répétitives.",
            card1: {
                title: "Demandes en Heures Fermées",
                text: "Manquez des réservations quand les clients recherchent des services en dehors des heures d'ouverture"
            },
            card2: {
                title: "Questions Répétitives",
                text: "L'équipe passe des heures à répondre aux mêmes questions sur les services et les tarifs"
            },
            card3: {
                title: "Clients Internationaux",
                text: "Les barrières linguistiques créent des frictions dans l'expérience client de luxe"
            },
            card4: {
                title: "Opportunités Manquées",
                text: "Aucune visibilité sur ce que les clients demandent avant de réserver"
            }
        },
        
        // Product Section
        product: {
            label: "La Solution",
            title: "Rencontrez 4-Eyes : Votre Assistant IA à Double Personnalité",
            description: "Pas qu'un simple chatbot. 4-Eyes est spécifiquement conçu pour l'industrie du bien-être, avec deux personnalités distinctes qui s'adaptent au parcours de vos clients.",
            preSales: {
                badge: "Pré-Vente",
                title: "Le Concierge Bien-être",
                description: "Engage les clients potentiels avec des informations détaillées sur vos services, traitements, forfaits et parcours de bien-être. Répond aux questions sur les tarifs, la disponibilité et aide les clients à découvrir l'expérience parfaite.",
                feature1: "Expertise du catalogue de services",
                feature2: "Recommandations de traitements",
                feature3: "Comparaisons de forfaits",
                feature4: "Demandes de disponibilité",
                feature5: "Transparence tarifaire"
            },
            divider: "Transitions Fluides",
            postSales: {
                badge: "Post-Vente",
                title: "L'Officier Opérationnel",
                description: "Gère les besoins opérationnels des clients confirmés. Gère les modifications de rendez-vous, fournit des mises à jour sur l'état des réservations, gère les notifications d'arrivée et répond aux questions relatives aux services.",
                feature1: "Mises à jour de l'état des réservations",
                feature2: "Modifications de rendez-vous",
                feature3: "Notifications d'arrivée",
                feature4: "Gestion des demandes spéciales",
                feature5: "Suivis de services"
            }
        },
        
        // Features Section
        features: {
            label: "Capacités",
            title: "Conçu pour le Bien-être de Luxe",
            feature1: {
                title: "Intégration Transparente",
                description: "Se connecte sans effort à vos systèmes de gestion spa existants. Pas de refontes coûteuses, pas de maux de tête techniques."
            },
            feature2: {
                title: "Personnalisation Adaptée aux Entreprises",
                description: "Mettez à jour vos services, tarifs et réponses vous-même. Aucun codage requis, pas besoin d'attendre les développeurs."
            },
            feature3: {
                title: "Support Multilingue",
                description: "Servez les clients internationaux dans leur langue préférée. Élargissez votre portée sans embaucher de personnel multilingue."
            },
            feature4: {
                title: "Tableau de Bord Analytique",
                description: "Comprenez ce que les clients demandent le plus. Identifiez les tendances, optimisez vos offres et prenez des décisions basées sur les données."
            },
            feature5: {
                title: "Vie Privée & Sécurité",
                description: "Conforme RGPD et construit selon les normes de confidentialité de l'industrie du bien-être. Les données de vos clients sont protégées."
            },
            feature6: {
                title: "Réponses Instantanées",
                description: "Ne laissez jamais attendre un client potentiel. Fournissez des réponses immédiates et précises à toute heure du jour ou de la nuit."
            }
        },
        
        // Benefits Section
        benefits: {
            label: "Proposition de Valeur",
            title: "Transformez l'Expérience Client et les Opérations",
            item1: {
                title: "Capturez Plus de Réservations",
                description: "Convertissez les navigateurs curieux en clients confirmés. 4-Eyes engage les visiteurs instantanément, répond à leurs questions de manière exhaustive et les guide vers la réservation—even à 3h du matin quand votre équipe est hors ligne.",
                point1: "La disponibilité 24h/24 capture les opportunités après les heures",
                point2: "Les réponses instantanées empêchent les visiteurs d'aller chez les concurrents",
                point3: "Les recommandations personnalisées augmentent les ventes de forfaits"
            },
            item2: {
                title: "Libérez le Temps de Votre Équipe",
                description: "Laissez 4-Eyes gérer les demandes routinières pendant que votre équipe se concentre sur la livraison d'expériences en personne exceptionnelles qui définissent le bien-être de luxe. Réduisez les tâches répétitives jusqu'à 60%.",
                point1: "Automatisez les FAQ sur les services, tarifs et politiques",
                point2: "Gérez les modifications de réservation sans intervention du personnel",
                point3: "Réduisez les interruptions téléphoniques pendant les traitements"
            },
            item3: {
                title: "Améliorez la Satisfaction Client",
                description: "Le luxe moderne signifie commodité. Les clients attendent des informations instantanées et précises livrées de manière transparente. 4-Eyes fournit l'attention immédiate et personnalisée qui élève votre marque.",
                point1: "Informations cohérentes et précises à chaque fois",
                point2: "Support multilingue pour la clientèle internationale",
                point3: "Mises à jour proactives sur l'état des réservations et les arrivées"
            },
            item4: {
                title: "Obtenez des Informations Métier",
                description: "Chaque conversation est un point de données. Comprenez ce qui intéresse vraiment les clients, identifiez les traitements tendance et repérez les opportunités d'optimiser vos offres de services.",
                point1: "Suivez les questions les plus posées et les services populaires",
                point2: "Identifiez les lacunes dans vos informations de service",
                point3: "Mesurez les modèles de conversion et optimisez les messages"
            }
        },
        
        // How It Works Section
        howItWorks: {
            label: "Implémentation",
            title: "De la Consultation à la Conversation en Semaines",
            description: "Nous avons rationalisé le processus d'implémentation pour minimiser les perturbations tout en maximisant la valeur pour votre centre de bien-être.",
            step1: {
                title: "Découverte & Personnalisation",
                description: "Nous apprenons vos services, votre voix de marque et vos offres uniques. Ensemble, nous configurons 4-Eyes pour refléter la personnalité et l'expertise de votre spa."
            },
            step2: {
                title: "Intégration Transparente",
                description: "Notre équipe connecte 4-Eyes à votre système de gestion spa existant. Aucune perturbation de vos opérations, aucune charge technique sur votre personnel."
            },
            step3: {
                title: "Formation & Test",
                description: "Nous formons 4-Eyes sur vos services, politiques et flux de travail spécifiques. Des tests rigoureux garantissent la précision avant le lancement. Vous maintenez un contrôle total sur la personnalisation."
            },
            step4: {
                title: "Lancement & Optimisation",
                description: "Passez en direct et commencez à capturer plus de réservations. Nous surveillons les performances, rassemblons des informations et optimisons continuellement basés sur les interactions client réelles."
            }
        },
        
        // Pricing Section
        pricing: {
            label: "Investissement",
            title: "Solutions Personnalisées pour Votre Centre de Bien-être",
            description: "Chaque spa de luxe est unique. Nous créons des tarifs personnalisés basés sur vos besoins spécifiques, le volume de clients et les exigences d'intégration.",
            card: {
                title: "Concevons Votre Solution Parfaite",
                subtitle: "Nos tarifs prennent en compte :",
                factor1: "Nombre de locaux et salles de traitement",
                factor2: "Volume de conversations attendu",
                factor3: "Complexité d'intégration avec vos systèmes existants",
                factor4: "Exigences de support multilingue",
                factor5: "Besoins de personnalisation et formation",
                ctaText: "Planifiez une consultation pour discuter de vos besoins et recevoir une proposition personnalisée.",
                ctaButton: "Obtenir des Tarifs Personnalisés"
            }
        },
        
        // Contact Section
        contact: {
            label: "Commencer",
            title: "Planifiez Votre Consultation",
            description: "Découvrez comment 4-Eyes peut transformer votre expérience client et vos opérations. Nous discuterons de vos besoins spécifiques et vous montrerons exactement comment notre IA à double personnalité peut générer des résultats pour votre centre de bien-être.",
            email: {
                label: "Email"
            },
            expect: {
                title: "À quoi s'attendre :",
                item1: "Démonstration personnalisée de 30 minutes",
                item2: "Discussion de vos besoins et défis spécifiques",
                item3: "Proposition de tarifs personnalisée",
                item4: "Calendrier de mise en œuvre",
                item5: "Analyse ROI pour votre centre de bien-être"
            }
        },
        
        // Form Section
        form: {
            name: {
                label: "Votre Nom *",
                placeholder: "Jean Dupont"
            },
            business: {
                label: "Nom du Spa/Entreprise *",
                placeholder: "Spa Sérénité Bien-être"
            },
            email: {
                label: "Adresse Email *",
                placeholder: "jean@spa-serenite.com"
            },
            phone: {
                label: "Numéro de Téléphone (Optionnel)",
                placeholder: "+33 6 12 34 56 78"
            },
            message: {
                label: "Parlez-nous de Vos Besoins",
                placeholder: "Quels défis rencontrez-vous ? Que souhaitez-vous apprendre sur 4-Eyes ?"
            },
            submit: "Planifier une Consultation"
        },
        
        // Footer Section
        footer: {
            tagline: "IA pour le Bien-être",
            description: "Technologie de conversation intelligente conçue exclusivement pour les centres de spa et de bien-être de luxe.",
            productTitle: "Produit",
            features: "Fonctionnalités",
            benefits: "Avantages",
            howItWorks: "Fonctionnement",
            pricing: "Tarifs",
            contactTitle: "Contact",
            schedule: "Planifier une Consultation",
            emailUs: "Envoyez-nous un Email",
            copyright: "© 2025 4-Eyes. Tous droits réservés."
        },
        
        // Chatbot Section
        chatbot: {
            toggleBadge: "Essayer 4-Eyes",
            title: "Assistant IA 4-Eyes",
            subtitle: "IA pour le Bien-être",
            welcome: "Bienvenue au Serenity Spa. Je suis ici pour vous guider à travers notre sanctuaire de bien-être et vous aider à découvrir le traitement parfait pour vos besoins. Que vous recherchiez la relaxation, le rajeunissement ou une expérience spa transformatrice, je suis ravi de vous assister avec le support de réservation, les services et les recommandations personnalisées.",
            hint: "Comment puis-je vous assister dans votre parcours bien-être aujourd'hui ?",
            quickReply1: "En quoi pouvez-vous m'aider ?",
            quickReply2: "Parlez-moi de vos services",
            quickReply3: "Comment prendre un rendez-vous ?",
            placeholder: "Tapez votre message..."
        }
    },
    
    nl: {
        // Navigation
        tagline: "AI voor Welzijn",
        nav: {
            home: "Home",
            product: "Product",
            benefits: "Voordelen",
            howItWorks: "Hoe het Werkt",
            pricing: "Prijzen",
            contact: "Contact Opnemen"
        },
        
        // Hero Section
        hero: {
            title1: "Verhoog Uw Spa Ervaring",
            title2: "Met Intelligente Conversatie",
            subtitle: "De dual-persoonlijkheid AI-chatbot ontworpen exclusief voor luxe wellnesscentra. Bied uitzonderlijke gastenservice 24/7 terwijl uw team zich richt op wat het meest telt.",
            cta1: "Plan een Consultatie",
            cta2: "Ontdek 4-Eyes",
            stat1: "Gastenondersteuning",
            stat2: "Tijd Bespaard",
            stat3: "Boeking Conversie",
            scrollText: "Scroll om te verkennen"
        },
        
        // Problems Section
        problems: {
            title: "De Uitdaging voor Luxe Wellnesscentra",
            description: "Uw gasten verwachten onmiddellijke, gepersonaliseerde reacties. Uw personeel verdient het om zich te richten op het leveren van uitzonderlijke persoonlijke ervaringen, niet op het beantwoorden van repetitieve vragen.",
            card1: {
                title: "Vragen Buiten Openingstijden",
                text: "Mis boekingen wanneer gasten services onderzoeken buiten openingstijden"
            },
            card2: {
                title: "Herhalende Vragen",
                text: "Personeel besteedt uren aan het beantwoorden van dezelfde service- en prijsvragen"
            },
            card3: {
                title: "Internationale Gasten",
                text: "Taalbarrières creëren wrijving in de luxe gastenervaring"
            },
            card4: {
                title: "Gemiste Kansen",
                text: "Geen inzicht in wat gasten vragen voordat ze boeken"
            }
        },
        
        // Product Section
        product: {
            label: "De Oplossing",
            title: "Maak Kennis met 4-Eyes: Uw Dual-Persoonlijkheid AI Assistent",
            description: "Niet zomaar een chatbot. 4-Eyes is specifiek ontworpen voor de wellness-industrie, met twee verschillende persoonlijkheden die zich aanpassen aan de reis van uw gasten.",
            preSales: {
                badge: "Pre-Sales",
                title: "De Wellness Concierge",
                description: "Betrokt potentiële gasten met gedetailleerde informatie over uw services, behandelingen, pakketten en wellness-reizen. Beantwoordt vragen over prijzen, beschikbaarheid en helpt gasten de perfecte ervaring te ontdekken.",
                feature1: "Service catalogus expertise",
                feature2: "Behandelingsaanbevelingen",
                feature3: "Pakketvergelijkingen",
                feature4: "Beschikbaarheidsvragen",
                feature5: "Prijstransparantie"
            },
            divider: "Naadloze Overgangen",
            postSales: {
                badge: "Post-Sales",
                title: "De Operations Officer",
                description: "Beheert operationele behoeften voor bevestigde gasten. Beheert afspraakmodificaties, biedt boekingsstatusupdates, behandelt aankomstmeldingen en adresseert service-gerelateerde vragen.",
                feature1: "Boekingsstatusupdates",
                feature2: "Afspraakmodificaties",
                feature3: "Aankomstmeldingen",
                feature4: "Speciale verzoeken afhandeling",
                feature5: "Service follow-ups"
            }
        },
        
        // Features Section
        features: {
            label: "Mogelijkheden",
            title: "Gebouwd voor Luxe Wellness",
            feature1: {
                title: "Naadloze Integratie",
                description: "Koppelt moeiteloos aan uw bestaande spa-beheersystemen. Geen dure herstructureringen, geen technische hoofdpijn."
            },
            feature2: {
                title: "Zakelijk-Vriendelijke Aanpassing",
                description: "Update services, prijzen en reacties zelf. Geen codering vereist, geen wachten op ontwikkelaars."
            },
            feature3: {
                title: "Meertalige Ondersteuning",
                description: "Bedien internationale gasten in hun voorkeurstaal. Vergroot uw bereik zonder meertalig personeel in te huren."
            },
            feature4: {
                title: "Analytics Dashboard",
                description: "Begrijp waar gasten het meest naar vragen. Identificeer trends, optimaliseer aanbiedingen en neem datagestuurde beslissingen."
            },
            feature5: {
                title: "Privacy & Beveiliging",
                description: "GDPR-conform en gebouwd met privacy-standaarden van de wellness-industrie. De gegevens van uw gasten zijn beschermd."
            },
            feature6: {
                title: "Directe Reacties",
                description: "Laat nooit een potentiële gast wachten. Bied onmiddellijke, nauwkeurige antwoorden op elk moment van de dag of nacht."
            }
        },
        
        // Benefits Section
        benefits: {
            label: "Waardepropositie",
            title: "Transformeer Uw Gastenervaring & Operaties",
            item1: {
                title: "Meer Boekingen Capture",
                description: "Converteer nieuwsgierige browsers naar bevestigde gasten. 4-Eyes betrekt bezoekers onmiddellijk, beantwoordt hun vragen uitgebreid en begeleidt hen naar boeking—zelfs om 3 uur 's nachts wanneer uw personeel offline is.",
                point1: "24/7 beschikbaarheid vangt na-uren kansen",
                point2: "Directe reacties voorkomen dat bezoekers naar concurrenten gaan",
                point3: "Gepersonaliseerde aanbevelingen verhogen pakket upsells"
            },
            item2: {
                title: "Bevrijd de Tijd van Uw Personeel",
                description: "Laat 4-Eyes de routine-vragen afhandelen terwijl uw team zich richt op het leveren van de uitzonderlijke persoonlijke ervaringen die luxe wellness definiëren. Verminder repetitieve taken tot 60%.",
                point1: "Automatiseer FAQ's over services, prijzen en beleid",
                point2: "Behandel boekingsmodificaties zonder personeelsinterventie",
                point3: "Verminder telefoononderbrekingen tijdens behandelingen"
            },
            item3: {
                title: "Verbeter Gastentevredenheid",
                description: "Moderne luxe betekent gemak. Gasten verwachten directe, nauwkeurige informatie naadloos geleverd. 4-Eyes biedt de onmiddellijke, gepersonaliseerde aandacht die uw merk verheft.",
                point1: "Consistente, nauwkeurige informatie elke keer",
                point2: "Meertalige ondersteuning voor internationale klanten",
                point3: "Proactieve updates over boekingsstatus en aankomsten"
            },
            item4: {
                title: "Verkrijg Bedrijfsinlichtingen",
                description: "Elk gesprek is een gegevenspunt. Begrijp waar gasten echt in geïnteresseerd zijn, identificeer trending behandelingen en spot kansen om uw serviceaanbiedingen te optimaliseren.",
                point1: "Volg meestgestelde vragen en populaire services",
                point2: "Identificeer hiaten in uw service-informatie",
                point3: "Meet conversiepatronen en optimaliseer messaging"
            }
        },
        
        // How It Works Section
        howItWorks: {
            label: "Implementatie",
            title: "Van Consultatie naar Conversatie in Weken",
            description: "We hebben het implementatieproces gestroomlijnd om verstoringen te minimaliseren terwijl we waarde maximaliseren voor uw wellnesscentrum.",
            step1: {
                title: "Ontdekking & Aanpassing",
                description: "We leren over uw services, merkstem en unieke aanbiedingen. Samen configureren we 4-Eyes om de persoonlijkheid en expertise van uw spa weer te geven."
            },
            step2: {
                title: "Naadloze Integratie",
                description: "Ons team verbindt 4-Eyes met uw bestaande spa-beheersysteem. Geen verstoring van uw operaties, geen technische last voor uw personeel."
            },
            step3: {
                title: "Training & Testen",
                description: "We trainen 4-Eyes op uw specifieke services, beleid en workflows. Rigoureuze testen zorgt voor nauwkeurigheid voor lancering. U behoudt volledige controle over aanpassing."
            },
            step4: {
                title: "Lancering & Optimalisatie",
                description: "Ga live en begin met het binnenhalen van meer boekingen. We monitoren prestaties, verzamelen inzichten en optimaliseren continu gebaseerd op echte gasteninteracties."
            }
        },
        
        // Pricing Section
        pricing: {
            label: "Investering",
            title: "Aangepaste Oplossingen voor Uw Wellnesscentrum",
            description: "Elke luxe spa is uniek. We creëren aangepaste prijzen gebaseerd op uw specifieke behoeften, gastenvolume en integratie-eisen.",
            card: {
                title: "Laten We Uw Perfecte Oplossing Ontwerpen",
                subtitle: "Onze prijzen houden rekening met:",
                factor1: "Aantal locaties en behandelkamers",
                factor2: "Verwacht conversatievolume",
                factor3: "Integratiecomplexiteit met uw bestaande systemen",
                factor4: "Taalondersteuning eisen",
                factor5: "Aanpassings- en trainingsbehoeften",
                ctaText: "Plan een consultatie om uw behoeften te bespreken en een aangepast voorstel te ontvangen.",
                ctaButton: "Krijg Aangepaste Prijzen"
            }
        },
        
        // Contact Section
        contact: {
            label: "Aan de Slag",
            title: "Plan Uw Consultatie",
            description: "Ontdek hoe 4-Eyes uw gastenervaring en operaties kan transformeren. We bespreken uw specifieke behoeften en laten u precies zien hoe onze dual-persoonlijkheid AI resultaten kan drijven voor uw wellnesscentrum.",
            email: {
                label: "Email"
            },
            expect: {
                title: "Wat te Verwachten:",
                item1: "30-minuten gepersonaliseerde demo",
                item2: "Bespreking van uw specifieke behoeften en uitdagingen",
                item3: "Aangepast prijsvoorstel",
                item4: "Implementatietijdlijn",
                item5: "ROI-analyse voor uw wellnesscentrum"
            }
        },
        
        // Form Section
        form: {
            name: {
                label: "Uw Naam *",
                placeholder: "Jan de Vries"
            },
            business: {
                label: "Spa/Bedrijfsnaam *",
                placeholder: "Sereniteit Wellness Spa"
            },
            email: {
                label: "Email Adres *",
                placeholder: "jan@sereniteit-spa.com"
            },
            phone: {
                label: "Telefoonnummer (Optioneel)",
                placeholder: "+31 6 12 34 56 78"
            },
            message: {
                label: "Vertel Over Uw Behoeften",
                placeholder: "Welke uitdagingen ondervindt u? Wat wilt u leren over 4-Eyes?"
            },
            submit: "Plan Consultatie"
        },
        
        // Footer Section
        footer: {
            tagline: "AI voor Welzijn",
            description: "Intelligente conversatietechnologie ontworpen exclusief voor luxe spa en wellnesscentra.",
            productTitle: "Product",
            features: "Functies",
            benefits: "Voordelen",
            howItWorks: "Hoe het Werkt",
            pricing: "Prijzen",
            contactTitle: "Contact",
            schedule: "Plan Consultatie",
            emailUs: "Email Ons",
            copyright: "© 2025 4-Eyes. Alle rechten voorbehouden."
        },
        
        // Chatbot Section
        chatbot: {
            toggleBadge: "Probeer 4-Eyes",
            title: "4-Eyes AI Assistent",
            subtitle: "AI voor Welzijn",
            welcome: "Welkom bij Serenity Spa. Ik ben hier om u te begeleiden door ons wellness-heiligdom en u te helpen de perfecte behandeling voor uw behoeften te ontdekken. Of u nu op zoek bent naar ontspanning, verjonging of een transformerende spa-ervaring, ik help u graag met boekingsondersteuning, diensten en gepersonaliseerde aanbevelingen.",
            hint: "Hoe kan ik u vandaag assisteren met uw wellnessreis?",
            quickReply1: "Waarmee kunt u me helpen?",
            quickReply2: "Vertel over uw services",
            quickReply3: "Hoe boek ik een afspraak?",
            placeholder: "Typ uw bericht..."
        }
    }
};

// Translation system functions
function initLanguageSystem() {
    const languageSelector = document.querySelector('.language-selector');
    const languageToggle = document.querySelector('.language-toggle');
    const languageOptions = document.querySelectorAll('.language-option');
    const languageCurrent = document.querySelector('.language-current');
    
    if (!languageSelector || !languageToggle) return;
    
    // Get saved language or default to English
    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    setLanguage(savedLanguage);
    
    // Toggle dropdown
    languageToggle.addEventListener('click', function(e) {
        e.preventDefault();
        languageSelector.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageSelector.contains(e.target)) {
            languageSelector.classList.remove('active');
        }
    });
    
    // Language option handlers
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
            languageSelector.classList.remove('active');
        });
    });
    
    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, falling back to English`);
            lang = 'en';
        }
        
        // Update active states
        languageOptions.forEach(option => {
            option.classList.toggle('active', option.getAttribute('data-lang') === lang);
        });
        
        if (languageCurrent) {
            languageCurrent.textContent = lang.toUpperCase();
        }
        
        // Save preference
        localStorage.setItem('preferred-language', lang);
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Apply translations
        applyTranslations(lang);
    }
    
    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = getNestedTranslation(translations[lang], key);
            
            if (translation) {
                element.textContent = translation;
            } else {
                console.warn(`Translation not found for key: ${key} in language: ${lang}`);
            }
        });
        
        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = getNestedTranslation(translations[lang], key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });
    }
    
    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }
}

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('4-Eyes website loaded successfully');

    // Configure marked.js for safe markdown rendering
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            breaks: true,        // Convert \n to <br>
            gfm: true,          // GitHub Flavored Markdown
            sanitize: false,    // We'll sanitize manually
            headerIds: false,   // Don't add IDs to headers
            mangle: false       // Don't escape email addresses
        });
    }

    // Initialize all features
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initContactForm();
    initScrollAnimations();
    initChatbot();
    initLanguageSystem();
});

// ===========================
// Mobile Menu Toggle
// ===========================
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// ===========================
// Smooth Scrolling & Active Nav
// ===========================
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') {
                e.preventDefault();
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();

                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const navbarHeight = document.getElementById('navbar').offsetHeight;

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Navbar Scroll Effect
// ===========================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===========================
// Contact Form Handling
// ===========================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                business: document.getElementById('business').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value || 'Not provided',
                message: document.getElementById('message').value || 'No message provided'
            };

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            try {
                // Send form data to n8n webhook
                const response = await fetch('https://www.n8n.4-eyes.eu/webhook/97e2b3b9-e0e4-4104-b5c7-e1689e40fb0f', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    showFormStatus('success', 'Thank you! Your consultation request has been sent. We\'ll be in touch within 24 hours.');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }

            } catch (error) {
                console.error('Form submission error:', error);
                showFormStatus('error', 'Oops! Something went wrong. Please try again or email us directly at francois-xavier.peers@4-eyes.eu');
            } finally {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
}

function showFormStatus(type, message) {
    const formStatus = document.getElementById('form-status');

    if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;

        // Auto-hide after 8 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 8000);
    }
}

// ===========================
// Scroll Animations
// ===========================
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.problem-card, .feature-card, .step, .benefit-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===========================
// Utility Functions
// ===========================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===========================
// Performance Enhancements
// ===========================

// Optimize scroll event listeners
const optimizedScroll = throttle(updateActiveNav, 100);
window.addEventListener('scroll', optimizedScroll);

// Preload critical images (if you add actual images later)
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Example: preloadImages(['assets/images/hero.jpg', 'assets/images/spa.jpg']);

// ===========================
// Analytics & Tracking (Optional)
// ===========================

// Track consultation button clicks
document.querySelectorAll('a[href="#contact"]').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Consultation CTA clicked:', this.textContent);
        // Add Google Analytics or other tracking here
        // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'Schedule Consultation' });
    });
});

// Track external link clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Email link clicked:', this.href);
        // Add tracking here if needed
    });
});

// ===========================
// Accessibility Enhancements
// ===========================

// Add focus visible polyfill for better keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// ===========================
// Progressive Enhancement
// ===========================

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-base', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// ===========================
// Chatbot Functionality
// ===========================
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotFullscreen = document.getElementById('chatbot-fullscreen');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const quickReplyBtns = document.querySelectorAll('.quick-reply-btn');

    // Webhook configuration
    const WEBHOOK_URL = 'https://www.n8n.4-eyes.eu/webhook/25f18fb3-44ce-4178-bfc1-080a2edc28fc';
    const MAX_RETRIES = 3;
    const RETRY_DELAY = 1000; // milliseconds

    // Generate or retrieve unique session ID
    let sessionId = sessionStorage.getItem('chatbot-session-id');
    if (!sessionId) {
        // Generate new session ID: timestamp + random string
        sessionId = Date.now().toString(36) + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem('chatbot-session-id', sessionId);
    }
    console.log('Chatbot session ID:', sessionId);

    // Toggle chatbot open
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.add('active');
            chatbotToggle.style.display = 'none';
            chatbotInput.focus();
        });
    }

    // Close chatbot
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
            chatbotContainer.classList.remove('fullscreen');
            chatbotToggle.style.display = 'flex';
            updateFullscreenIcon(false);
        });
    }

    // Toggle fullscreen
    if (chatbotFullscreen) {
        chatbotFullscreen.addEventListener('click', function() {
            const isFullscreen = chatbotContainer.classList.toggle('fullscreen');
            updateFullscreenIcon(isFullscreen);
        });
    }

    // Update fullscreen button icon
    function updateFullscreenIcon(isFullscreen) {
        const maximizeIcon = chatbotFullscreen.querySelector('.icon-maximize');
        const minimizeIcon = chatbotFullscreen.querySelector('.icon-minimize');

        if (isFullscreen) {
            maximizeIcon.style.display = 'none';
            minimizeIcon.style.display = 'block';
            chatbotFullscreen.setAttribute('title', 'Exit fullscreen');
        } else {
            maximizeIcon.style.display = 'block';
            minimizeIcon.style.display = 'none';
            chatbotFullscreen.setAttribute('title', 'Fullscreen');
        }
    }

    // Handle quick reply clicks
    quickReplyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Use textContent to get the translated text instead of data-message
            const message = this.textContent.trim();
            sendMessage(message);
        });
    });

    // Send message function
    async function sendMessage(messageText) {
        if (!messageText || !messageText.trim()) return;

        // Add user message to chat
        addUserMessage(messageText);

        // Clear input
        if (chatbotInput) {
            chatbotInput.value = '';
        }

        // Show typing indicator
        showTypingIndicator();

        // Call webhook with retry logic
        let response = await callWebhookWithRetry(messageText, MAX_RETRIES);

        // Hide typing indicator
        hideTypingIndicator();

        // Display response
        if (response.success) {
            addBotMessage(response.message);
        } else {
            addBotMessage(response.error);
        }
    }

    // Call webhook with automatic retry
    async function callWebhookWithRetry(message, retriesLeft) {
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    sessionId: sessionId
                }),
                timeout: 30000 // 30 second timeout
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Log response for debugging
            console.log('Webhook response:', data);

            // Extract text from various possible response formats
            let responseText = '';

            if (typeof data === 'string') {
                // Response is plain text
                responseText = data;
            } else if (data.response) {
                // Response has 'response' field
                responseText = data.response;
            } else if (data.message) {
                // Response has 'message' field
                responseText = data.message;
            } else if (data.text) {
                // Response has 'text' field
                responseText = data.text;
            } else if (data.output) {
                // Response has 'output' field
                responseText = data.output;
            } else if (data.reply) {
                // Response has 'reply' field
                responseText = data.reply;
            } else {
                // Fallback: look for first string value in the object
                const firstStringValue = Object.values(data).find(val => typeof val === 'string');
                responseText = firstStringValue || 'I received your message but had trouble understanding the response format.';
            }

            return {
                success: true,
                message: responseText
            };

        } catch (error) {
            console.error('Webhook error:', error);

            // Retry logic
            if (retriesLeft > 1) {
                console.log(`Retrying... (${retriesLeft - 1} attempts left)`);
                await sleep(RETRY_DELAY);
                return callWebhookWithRetry(message, retriesLeft - 1);
            } else {
                return {
                    success: false,
                    error: "I'm having trouble connecting right now. Please try again in a moment, or contact us directly at francois-xavier.peers@4-eyes.eu for immediate assistance."
                };
            }
        }
    }

    // Sleep utility for retry delay
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Add user message to chat
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">🧘</div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Add bot message to chat
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot-message';

        // Parse markdown if marked.js is available
        let formattedMessage;
        if (typeof marked !== 'undefined') {
            // Use marked.js to parse markdown
            formattedMessage = marked.parse(message);
            // Sanitize to prevent XSS while keeping markdown formatting
            formattedMessage = sanitizeHtml(formattedMessage);
        } else {
            // Fallback to plain text with HTML escaping
            formattedMessage = `<p>${escapeHtml(message)}</p>`;
        }

        messageDiv.innerHTML = `
            <div class="message-avatar">👀</div>
            <div class="message-content markdown-content">
                ${formattedMessage}
            </div>
        `;
        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot-message typing-indicator-message';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">👀</div>
            <div class="message-content typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        chatbotMessages.appendChild(typingDiv);
        scrollToBottom();
    }

    // Hide typing indicator
    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Scroll to bottom of messages
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Sanitize HTML while allowing safe markdown formatting
    function sanitizeHtml(html) {
        // Create a temporary div to parse HTML
        const temp = document.createElement('div');
        temp.innerHTML = html;

        // List of allowed tags for markdown
        const allowedTags = ['p', 'br', 'strong', 'b', 'em', 'i', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td'];

        // List of allowed attributes
        const allowedAttributes = {
            'a': ['href', 'title', 'target'],
            '*': ['class']
        };

        // Recursively clean elements
        function cleanNode(node) {
            // Handle text nodes
            if (node.nodeType === 3) {
                return node.cloneNode(false);
            }

            // Handle element nodes
            if (node.nodeType === 1) {
                const tagName = node.tagName.toLowerCase();

                // If tag is not allowed, return its content only
                if (!allowedTags.includes(tagName)) {
                    const fragment = document.createDocumentFragment();
                    Array.from(node.childNodes).forEach(child => {
                        const cleaned = cleanNode(child);
                        if (cleaned) fragment.appendChild(cleaned);
                    });
                    return fragment;
                }

                // Create clean element
                const cleaned = document.createElement(tagName);

                // Copy allowed attributes
                const allowedAttrs = allowedAttributes[tagName] || [];
                const globalAttrs = allowedAttributes['*'] || [];
                const allAllowed = [...allowedAttrs, ...globalAttrs];

                Array.from(node.attributes).forEach(attr => {
                    if (allAllowed.includes(attr.name)) {
                        // Special handling for href to prevent javascript: URLs
                        if (attr.name === 'href' && attr.value.trim().toLowerCase().startsWith('javascript:')) {
                            return;
                        }
                        cleaned.setAttribute(attr.name, attr.value);
                    }
                });

                // Make external links open in new tab
                if (tagName === 'a' && !cleaned.hasAttribute('target')) {
                    cleaned.setAttribute('target', '_blank');
                    cleaned.setAttribute('rel', 'noopener noreferrer');
                }

                // Recursively clean children
                Array.from(node.childNodes).forEach(child => {
                    const cleanedChild = cleanNode(child);
                    if (cleanedChild) cleaned.appendChild(cleanedChild);
                });

                return cleaned;
            }

            return null;
        }

        // Clean the entire tree
        const cleaned = document.createDocumentFragment();
        Array.from(temp.childNodes).forEach(child => {
            const cleanedChild = cleanNode(child);
            if (cleanedChild) cleaned.appendChild(cleanedChild);
        });

        // Convert back to HTML string
        const result = document.createElement('div');
        result.appendChild(cleaned);
        return result.innerHTML;
    }

    // Send message on button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', function() {
            const message = chatbotInput.value;
            sendMessage(message);
        });
    }

    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const message = chatbotInput.value;
                sendMessage(message);
            }
        });
    }
}

// ===========================
// Console Easter Egg (Optional)
// ===========================
console.log('%c👀 4-Eyes - AI for Wellness', 'font-size: 20px; font-weight: bold; color: #2C5F5D;');
console.log('%cInterested in how this website works? We\'d love to chat about AI solutions for your spa!', 'color: #8A8A8A;');
console.log('%cEmail: francois-xavier.peers@4-eyes.eu', 'color: #C9A468;');