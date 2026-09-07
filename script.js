// ============================================
// KLINTH EATS - COMPLETE RECIPE DATABASE
// 53 Recipes with Full Ingredients & Instructions
// ============================================

const recipes = [
    // ========== KHMER / CAMBODIAN RECIPES (30) ==========
    
    // 1. Nom Banh Chok
    {
        name: "Nom Banh Chok",
        cuisine: "Khmer",
        category: "khmer",
        description: "Khmer noodles with green fish gravy, fresh herbs, and edible flowers",
        image: "images/Authentic-Nom-Banh-Chok-Recipe-Cambodian-Khmer-Noodles-Copyright-2021-Terence-Carter-Grantourismo.jpg.webp",
        ingredients: [
            "500g fresh Khmer noodles (or rice noodles)",
            "300g fish (snakehead or catfish)",
            "2 cups coconut milk",
            "Lemon grass, galangal, turmeric (kroeung paste)",
            "Fresh herbs: basil, mint, cilantro",
            "Banana flower, cucumber, bean sprouts",
            "2 tbsp fish sauce",
            "1 tbsp prahok (fermented fish paste)",
            "Garlic, shallots, kaffir lime leaves"
        ],
        instructions: [
            "Make kroeung paste by blending lemongrass, galangal, turmeric, garlic, and shallots.",
            "Boil fish until cooked, then flake the meat. Reserve the broth.",
            "In a pot, sauté kroeung paste with coconut milk and prahok.",
            "Add fish broth and flaked fish. Simmer for 15 minutes.",
            "Add fish sauce to taste. The gravy should be thick and green.",
            "Pour gravy over fresh noodles.",
            "Garnish with banana flower slices, cucumber, bean sprouts, and fresh herbs.",
            "Serve with edible flowers and green beans."
        ]
    },
    // 2. Fish Amok
    {
        name: "Fish Amok (Amok Trey)",
        cuisine: "Khmer",
        category: "khmer",
        description: "Steamed coconut fish curry in banana leaves — Cambodia's national dish",
        image: "images/amok-trey-a8f3e.webp",
        ingredients: [
            "500g white fish fillet (snapper or catfish)",
            "1 ½ cups coconut milk",
            "3 tbsp kroeung paste",
            "2 eggs",
            "2 tbsp fish sauce",
            "1 tsp shrimp paste",
            "Kaffir lime leaves, thinly sliced",
            "Banana leaves (for wrapping)",
            "Red chili slices (for garnish)",
            "Coconut cream (for topping)"
        ],
        instructions: [
            "Make or prepare kroeung paste by blending lemongrass, galangal, turmeric, garlic, shallots, and kaffir lime leaves.",
            "Slice fish into bite-sized pieces. Season with fish sauce.",
            "In a bowl, mix coconut milk, eggs, fish sauce, shrimp paste, and kroeung paste.",
            "Add fish pieces to the mixture. Stir gently.",
            "Prepare banana leaves by briefly heating them over flame to make them pliable.",
            "Form banana leaves into small cups using toothpicks or string.",
            "Pour the amok mixture into banana leaf cups.",
            "Top with coconut cream and kaffir lime leaves.",
            "Steam for 20-25 minutes until firm.",
            "Garnish with red chili slices and serve with rice."
        ]
    },
    // 3. Bai Sach Chrouk
    {
        name: "Bai Sach Chrouk",
        cuisine: "Khmer",
        category: "khmer",
        description: "Grilled pork with rice, pickled vegetables, and scallion oil",
        image: "images/BSC-7.jpg",
        ingredients: [
            "500g pork shoulder, thinly sliced",
            "3 cloves garlic, minced",
            "2 tbsp soy sauce",
            "2 tbsp fish sauce",
            "2 tbsp sugar",
            "1 tbsp honey",
            "1 tsp black pepper",
            "2 cups jasmine rice",
            "Scallion oil: chopped scallions in warm oil",
            "Pickled vegetables: carrots, daikon, cucumber",
            "Fried eggs (optional)"
        ],
        instructions: [
            "Marinate pork with garlic, soy sauce, fish sauce, sugar, honey, and pepper for 2+ hours.",
            "Make pickled vegetables: soak sliced carrots and daikon in vinegar, sugar, and salt.",
            "Cook jasmine rice.",
            "Grill or pan-fry pork until caramelized and cooked through.",
            "Make scallion oil: pour warm oil over chopped scallions.",
            "Serve pork over rice with pickled vegetables, scallion oil, and fried egg on top."
        ]
    },
    // 4. Beef Lok Lak
    {
        name: "Beef Lok Lak",
        cuisine: "Khmer",
        category: "khmer",
        description: "Stir-fried beef with lime pepper sauce, lettuce, tomatoes, and onion",
        image: "images/BeefLokLak-scaled.jpg",
        ingredients: [
            "500g beef tenderloin, cut into bite-sized pieces",
            "4 cloves garlic, minced",
            "2 tbsp oyster sauce",
            "1 tbsp soy sauce",
            "1 tbsp fish sauce",
            "1 tsp sugar",
            "1 tsp black pepper",
            "2 tbsp butter",
            "Lettuce leaves",
            "2 tomatoes, sliced",
            "1 onion, sliced",
            "Lime pepper dip: lime juice + black pepper + salt"
        ],
        instructions: [
            "Marinate beef with garlic, oyster sauce, soy sauce, fish sauce, sugar, and black pepper for 30 minutes.",
            "Prepare lime pepper dip by mixing lime juice, black pepper, and a pinch of salt.",
            "In a hot pan, melt butter and stir-fry beef until browned but still tender.",
            "Serve beef over a bed of lettuce, tomatoes, and onion slices.",
            "Drizzle lime pepper dip over the beef or serve on the side.",
            "Best eaten with a fried egg and rice."
        ]
    },
    // 5. Samlor Korkor
    {
        name: "Samlor Korkor",
        cuisine: "Khmer",
        category: "khmer",
        description: "Traditional Khmer vegetable soup with prahok and pumpkin",
        image: "images/2-Samlor-Korkor-1024x640.webp",
        ingredients: [
            "300g pork or chicken, cut into pieces",
            "2 cups pumpkin or winter melon, cubed",
            "1 cup green papaya, julienned",
            "1 cup water spinach (morning glory)",
            "2 tbsp prahok (fermented fish paste)",
            "1 tbsp fish sauce",
            "1 tsp sugar",
            "Fresh black pepper",
            "2 cloves garlic",
            "Kaffir lime leaves",
            "Fresh chilies"
        ],
        instructions: [
            "In a pot, boil meat until tender (about 20 minutes).",
            "Add pumpkin, green papaya, and continue boiling until soft.",
            "In a small bowl, dissolve prahok in water and strain to remove solids.",
            "Add prahok water, fish sauce, and sugar to the soup.",
            "Add water spinach and cook for 2 more minutes.",
            "Season with black pepper and garnish with kaffir lime leaves and fresh chilies.",
            "Serve hot with rice."
        ]
    },
    // 6. Kuy Teav
    {
        name: "Kuy Teav",
        cuisine: "Khmer",
        category: "khmer",
        description: "Cambodian noodle soup with pork or beef and slow-cooked broth",
        image: "images/Kuy-Teav-Phnom-Penh-768x768.webp",
        ingredients: [
            "1kg pork bones or beef bones",
            "300g pork or beef, sliced thin",
            "200g rice noodles",
            "2 tbsp fish sauce",
            "1 tsp sugar",
            "Garlic, minced",
            "Bean sprouts",
            "Fresh herbs: cilantro, Thai basil",
            "Green onions",
            "Lime wedges",
            "Fried garlic",
            "Chili sauce"
        ],
        instructions: [
            "Boil bones for 4-6 hours to make rich broth. Skim off impurities.",
            "Season broth with fish sauce and sugar.",
            "Cook rice noodles according to package instructions.",
            "Blanch sliced meat in hot broth until cooked.",
            "Place noodles in a bowl, top with meat, and pour hot broth over.",
            "Garnish with bean sprouts, fresh herbs, green onions, and fried garlic.",
            "Serve with lime wedges and chili sauce on the side."
        ]
    },
    // 7. Bai Cha
    {
        name: "Bai Cha",
        cuisine: "Khmer",
        category: "khmer",
        description: "Fried rice with egg, Chinese sausage, garlic, and green onions",
        image: "images/654c5918827b9.jpg",
        ingredients: [
            "4 cups day-old jasmine rice",
            "2 Chinese sausages (lop cheong), sliced",
            "3 eggs, beaten",
            "4 cloves garlic, minced",
            "3 green onions, chopped",
            "2 tbsp soy sauce",
            "1 tbsp fish sauce",
            "1 tsp sugar",
            "2 tbsp vegetable oil",
            "Cucumber slices for garnish"
        ],
        instructions: [
            "Heat oil in a wok or large pan over high heat.",
            "Scramble the eggs until just cooked, remove and set aside.",
            "In the same pan, fry Chinese sausage until crispy.",
            "Add garlic and fry until golden.",
            "Add rice and stir-fry to break up clumps.",
            "Add soy sauce, fish sauce, and sugar. Mix well.",
            "Add scrambled eggs and green onions. Stir-fry for 1 more minute.",
            "Garnish with cucumber slices and serve hot."
        ]
    },
    // 8. Lort Cha
    {
        name: "Lort Cha",
        cuisine: "Khmer",
        category: "khmer",
        description: "Stir-fried short rice noodles with beef, egg, and bean sprouts",
        image: "images/20190816_122439-01-scaled.jpeg",
        ingredients: [
            "400g fresh short rice noodles (lort)",
            "300g beef, thinly sliced",
            "2 eggs",
            "2 cups bean sprouts",
            "3 green onions, cut into 2-inch pieces",
            "4 cloves garlic, minced",
            "2 tbsp soy sauce",
            "1 tbsp oyster sauce",
            "1 tbsp fish sauce",
            "1 tsp sugar",
            "3 tbsp vegetable oil"
        ],
        instructions: [
            "Heat oil in a wok over high heat. Add garlic and fry until golden.",
            "Add beef and stir-fry until browned.",
            "Push beef to the side. Crack eggs into the wok and scramble.",
            "Add noodles and stir-fry to combine.",
            "Add soy sauce, oyster sauce, fish sauce, and sugar.",
            "Add bean sprouts and green onions. Stir-fry for 1-2 minutes.",
            "Serve hot with lime wedges and chili sauce."
        ]
    },
       // 9. Cha Khnhey (Khmer Ginger Stir-fry)
    {
        name: "Cha Khnhey (Khmer Ginger Stir-fry)",
        cuisine: "Khmer",
        category: "khmer",
        description: "Stir-fried chicken or beef with fresh ginger, black pepper, and scallions",
        image: "images/images11.jpeg",
        time: "25 min",
        difficulty: "easy",
        diet: "meat",
        ingredients: [
            "400g chicken thigh or beef sirloin, thinly sliced",
            "100g fresh young ginger, julienned",
            "4 cloves garlic, minced",
            "2 shallots, sliced",
            "2 green onions, cut into 2-inch pieces",
            "2 tbsp fish sauce",
            "1 tbsp oyster sauce",
            "1 tsp sugar",
            "1/2 tsp black Kampot pepper (coarsely ground)",
            "2 tbsp vegetable oil",
            "Fresh cilantro for garnish",
            "Steamed jasmine rice for serving"
        ],
        instructions: [
            "Slice meat thinly against the grain. Peel and julienne fresh ginger into matchstick pieces.",
            "Heat oil in a wok or large pan over high heat.",
            "Add garlic and shallots, stir-fry until fragrant (30 seconds).",
            "Add meat and stir-fry until browned and nearly cooked through (3-4 minutes).",
            "Add julienned ginger and stir-fry for 1-2 minutes until fragrant but still crisp.",
            "Add fish sauce, oyster sauce, sugar, and coarsely ground Kampot pepper.",
            "Toss to combine everything well.",
            "Add green onions and stir-fry for 30 more seconds.",
            "Taste and adjust seasoning with more fish sauce or pepper if needed.",
            "Garnish with fresh cilantro. Serve hot with steamed jasmine rice."
        ]
    },
    // 10. Samlor Kari
    {
        name: "Samlor Kari",
        cuisine: "Khmer",
        category: "khmer",
        description: "Cambodian chicken curry with potatoes, coconut milk, and lemongrass",
        image: "images/khmer-curry-bandeau-webp.webp",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "3 potatoes, cubed",
            "2 cups coconut milk",
            "3 tbsp red curry paste",
            "2 tbsp fish sauce",
            "1 tbsp sugar",
            "1 onion, sliced",
            "4 cloves garlic",
            "1 piece galangal",
            "1 stalk lemongrass",
            "Kaffir lime leaves",
            "Sweet basil"
        ],
        instructions: [
            "Sauté curry paste, garlic, shallots, galangal, and lemongrass until fragrant.",
            "Add chicken and cook until browned.",
            "Add coconut milk, fish sauce, and sugar. Bring to simmer.",
            "Add potatoes and cook until tender (about 20 minutes).",
            "Add kaffir lime leaves and sweet basil.",
            "Serve with rice or baguette (Num Pang)."
        ]
    },
       // 11. Samlor Mju Youn (Vietnamese-style Sour Soup)
    {
        name: "Samlor Mju Youn (Khmer Sour Soup)",
        cuisine: "Khmer",
        category: "khmer",
        description: "Cambodian adaptation of Vietnamese sour soup with fish, pineapple, and herbs",
        image: "images/Pineapple-Sweet-Sour-Soup-Flavourfully-Good.jpg.webp",
        time: "35 min",
        difficulty: "medium",
        diet: "seafood",
        ingredients: [
            "400g white fish fillet (snakehead or catfish), cut into chunks",
            "200g shrimp, peeled and deveined",
            "4 cups tamarind broth (tamarind paste mixed with water)",
            "2 cups pineapple chunks",
            "2 tomatoes, quartered",
            "1 cup bean sprouts",
            "1 cup water spinach (morning glory), cut into 2-inch pieces",
            "2 stalks lemongrass, bruised",
            "3 kaffir lime leaves",
            "2 tbsp fish sauce",
            "1 tbsp sugar",
            "3 cloves garlic, minced",
            "2 red chilies, sliced",
            "Fresh herbs: cilantro, mint, Thai basil",
            "Fried garlic for garnish"
        ],
        instructions: [
            "Prepare tamarind broth by mixing 4 cups water with 3 tbsp tamarind paste. Strain. Bring to a simmer in a pot.",
            "Add lemongrass, kaffir lime leaves, and garlic to the broth. Simmer for 5 minutes.",
            "Add fish and shrimp. Cook for 3-4 minutes until almost done.",
            "Add pineapple, tomatoes, bean sprouts, and water spinach. Cook for 2-3 minutes.",
            "Season with fish sauce and sugar. Adjust sourness by adding more tamarind if desired.",
            "Add sliced chilies and fresh herbs just before serving.",
            "Garnish with fried garlic. Serve hot with steamed rice."
        ]
    },
          // 12. Bobor (Cambodian Rice Porridge)
    {
        name: "Bobor (Cambodian Rice Porridge)",
        cuisine: "Khmer",
        category: "khmer",
        description: "Comforting rice porridge with chicken or pork — perfect for breakfast or when feeling under the weather",
        image: "images/images12.jpeg",
        time: "45 min",
        difficulty: "easy",
        diet: "meat",
        ingredients: [
            "1 cup jasmine rice (uncooked)",
            "6 cups chicken or pork broth (or water)",
            "300g chicken thighs or ground pork",
            "2 tbsp fish sauce",
            "1 tsp sugar",
            "1/2 tsp white pepper",
            "4 cloves garlic, minced",
            "1 inch ginger, julienned",
            "3 green onions, chopped",
            "Fried garlic for garnish",
            "Fresh cilantro for garnish",
            "Lime wedges for serving",
            "Fried shallots for topping"
        ],
        instructions: [
            "Rinse rice thoroughly until water runs clear. Drain well.",
            "In a large pot, bring broth to a boil. Add rice and reduce heat to medium-low.",
            "Simmer for 30-40 minutes, stirring occasionally to prevent sticking, until rice breaks down into porridge consistency.",
            "While porridge cooks, season meat with 1 tbsp fish sauce and sugar.",
            "In a separate pan, cook meat until browned and fully cooked.",
            "When porridge is thick and creamy, add cooked meat, remaining fish sauce, and white pepper.",
            "Simmer for 5 more minutes. Add more broth if too thick.",
            "Ladle into bowls. Top with ginger, green onions, fried garlic, fried shallots, and cilantro.",
            "Serve hot with lime wedges on the side.",
            "Optional: Add a soft-boiled egg or Chinese donut (you tiao) on the side."
        ]
    },
    // 13. Soup Ko (Cambodian Beef Soup)
    {
        name: "Soup Ko (Cambodian Beef Soup)",
        cuisine: "Khmer",
        category: "khmer",
        description: "Traditional Cambodian beef soup with vegetables, herbs, and aromatic spices",
        image: "images/Beef-shank-and-green-papaya-soup.jpg",
        time: "50 min",
        difficulty: "medium",
        diet: "meat",
        ingredients: [
            "500g beef brisket or beef shank, cubed",
            "6 cups beef broth or water",
            "2 carrots, sliced",
            "2 potatoes, cubed",
            "1 daikon radish, sliced",
            "1 onion, quartered",
            "4 cloves garlic, crushed",
            "2 star anise",
            "1 cinnamon stick",
            "2 tbsp fish sauce",
            "1 tsp sugar",
            "1/2 tsp black pepper",
            "2 green onions, chopped",
            "Fresh cilantro for garnish",
            "Fried shallots for topping"
        ],
        instructions: [
            "In a large pot, bring broth or water to a boil. Add beef and skim off any foam.",
            "Add star anise, cinnamon stick, garlic, and onion. Simmer for 30-40 minutes until beef is tender.",
            "Add carrots, potatoes, and daikon. Cook for 15-20 minutes until vegetables are soft.",
            "Season with fish sauce, sugar, and black pepper.",
            "Remove star anise and cinnamon stick before serving.",
            "Garnish with green onions, cilantro, and fried shallots.",
            "Serve hot with steamed rice or fresh bread."
        ]
    },
    // 14. Samlor Machu Trey
    {
        name: "Samlor Machu Trey",
        cuisine: "Khmer",
        category: "khmer",
        description: "Sweet and sour fish soup with tamarind, pineapple, and herbs",
        image: "images/cambodian-samlor-machu-trey.webp",
        ingredients: [
            "500g fish (snakehead or catfish), cut into steaks",
            "2 cups tamarind juice",
            "1 cup pineapple chunks",
            "2 tomatoes, quartered",
            "1 cup bean sprouts",
            "Fresh herbs: cilantro, mint, Thai basil",
            "2 tbsp fish sauce",
            "1 tsp sugar",
            "3 cloves garlic",
            "Bird's eye chilies"
        ],
        instructions: [
            "In a pot, bring 4 cups water and tamarind juice to boil.",
            "Add fish and cook for 5-7 minutes.",
            "Add pineapple, tomatoes, and bean sprouts.",
            "Season with fish sauce and sugar.",
            "Add garlic and chilies.",
            "Garnish generously with fresh herbs.",
            "Serve hot with rice."
        ]
    },
    // 15. Samlor Machu Kroeung
    {
        name: "Samlor Machu Kroeung",
        cuisine: "Khmer",
        category: "khmer",
        description: "Herbal sour soup with beef or pork and lemongrass paste",
        image: "images/Lemongrass-Sour-Soup-Flavourfully-Good.jpg",
        ingredients: [
            "400g beef or pork, thinly sliced",
            "2 cups tamarind juice",
            "3 tbsp kroeung paste",
            "2 tbsp fish sauce",
            "1 tsp sugar",
            "4 cups water",
            "Fresh herbs: sawtooth coriander, mint",
            "Bird's eye chilies"
        ],
        instructions: [
            "Bring water and tamarind juice to boil.",
            "Add kroeung paste and stir well.",
            "Add meat and cook until tender (10-15 minutes).",
            "Season with fish sauce and sugar.",
            "Add fresh herbs just before serving.",
            "Serve hot with chilies on the side."
        ]
    },
    // 16. Banh Chao
    {
        name: "Banh Chao",
        cuisine: "Khmer",
        category: "khmer",
        description: "Khmer crepe with shrimp, pork, bean sprouts, and coconut milk",
        image: "images/banh_xeo-300x224.jpg",
        ingredients: [
            "1 cup rice flour",
            "1 cup coconut milk",
            "1 cup water",
            "1 tsp turmeric powder",
            "200g shrimp, peeled",
            "200g pork belly, sliced thin",
            "2 cups bean sprouts",
            "2 green onions, chopped",
            "Lettuce, mint, Thai basil for wrapping",
            "Fish sauce dip"
        ],
        instructions: [
            "Mix rice flour, coconut milk, water, turmeric, and salt for batter.",
            "Fry pork and shrimp in a hot pan until cooked. Remove.",
            "Pour thin layer of batter into the pan. Swirl to spread.",
            "Sprinkle bean sprouts, green onions, pork, and shrimp on half of the crepe.",
            "Fold the other half over. Cook until crispy.",
            "Serve with lettuce, fresh herbs, and fish sauce dip."
        ]
    },
    // 17. Kdam Chaa
    {
        name: "Cha Kdam",
        cuisine: "Khmer",
        category: "khmer",
        description: "Stir-fried crab with Kampot peppercorns and scallions",
        image: "images/img_8047.jpg.webp",
        ingredients: [
            "4 fresh crabs, cleaned and cracked",
            "2 tbsp Kampot peppercorns (crushed)",
            "4 cloves garlic, minced",
            "2 green onions, chopped",
            "2 tbsp oyster sauce",
            "1 tbsp fish sauce",
            "1 tsp sugar",
            "2 tbsp vegetable oil"
        ],
        instructions: [
            "Heat oil in a wok, fry garlic until golden.",
            "Add crabs and stir-fry until shells turn red.",
            "Add oyster sauce, fish sauce, sugar, and crushed Kampot pepper.",
            "Add 1/4 cup water and cover to steam for 5 minutes.",
            "Add green onions and stir-fry for 1 more minute.",
            "Serve with rice and lime wedges."
        ]
    },
    // 18. Cha Kdau
    {
        name: "Cha Kdau",
        cuisine: "Khmer",
        category: "khmer",
        description: "Stir-fried beef with bitter melon and garlic",
        image: "images/RAK_9827.jpg",
        ingredients: [
            "400g beef, thinly sliced",
            "2 bitter melons, seeded and sliced",
            "4 cloves garlic, minced",
            "2 tbsp oyster sauce",
            "1 tbsp soy sauce",
            "1 tsp sugar",
            "2 tbsp vegetable oil"
        ],
        instructions: [
            "Salt sliced bitter melon and let sit for 15 minutes. Rinse to reduce bitterness.",
            "Heat oil in wok, fry garlic until golden.",
            "Add beef and stir-fry until browned.",
            "Add bitter melon and stir-fry for 2-3 minutes.",
            "Add oyster sauce, soy sauce, and sugar. Mix well.",
            "Serve hot with rice."
        ]
    },
    // 19. Sach Ko Ang
    {
        name: "Sach Ko Ang",
        cuisine: "Khmer",
        category: "khmer",
        description: "Grilled lemongrass beef skewers served with dipping sauce",
        image: "images/images2.jpeg",
        ingredients: [
            "500g beef, thinly sliced",
            "3 stalks lemongrass, minced",
            "4 cloves garlic, minced",
            "2 tbsp fish sauce",
            "1 tbsp sugar",
            "1 tsp black pepper",
            "Bamboo skewers"
        ],
        instructions: [
            "Mix beef with lemongrass, garlic, fish sauce, sugar, and pepper.",
            "Marinate for 2+ hours.",
            "Thread beef onto bamboo skewers.",
            "Grill over charcoal or pan-fry until charred and cooked.",
            "Serve with dipping sauce (lime juice + black pepper + salt)."
        ]
    },
    // 20. Mouan Ang
    {
        name: "Mouan Ang",
        cuisine: "Khmer",
        category: "khmer",
        description: "Grilled lemongrass chicken with honey and garlic glaze",
        image: "images/istockphoto-883555628-170667a.jpg",
        ingredients: [
            "1 whole chicken or 4 thighs",
            "3 stalks lemongrass, minced",
            "4 cloves garlic, minced",
            "2 tbsp fish sauce",
            "1 tbsp honey",
            "1 tbsp soy sauce",
            "1 tsp black pepper"
        ],
        instructions: [
            "Mix all marinade ingredients.",
            "Marinate chicken for 4+ hours or overnight.",
            "Grill over medium heat until skin is crispy and meat is cooked.",
            "Serve with rice and dipping sauce."
        ]
    },
    // 21. Cha Kreung Sach Ko
    {
        name: "Cha Kreung Sach Ko",
        cuisine: "Khmer",
        category: "khmer",
        description: "Beef stir-fried with lemongrass kroeung paste and chilies",
        image: "images/Cambodian-Lemongrass-Chicken-Stir-Fry-Recipe-Copyright-2022-Terence-Carter-Grantourismo-T.jpg.webp",
        ingredients: [
            "400g beef, thinly sliced",
            "3 tbsp kroeung paste",
            "2 red chilies, sliced",
            "2 tbsp fish sauce",
            "1 tsp sugar",
            "1 onion, sliced",
            "2 tbsp vegetable oil"
        ],
        instructions: [
            "Heat oil in wok, add kroeung paste and fry until fragrant.",
            "Add beef and stir-fry until browned.",
            "Add onion, chilies, fish sauce, and sugar.",
            "Stir-fry for 2-3 more minutes.",
            "Serve hot with rice."
        ]
    },
    // 22. Trey Cha
    {
        name: "Trey Jian",
        cuisine: "Khmer",
        category: "khmer",
        description: "Fried fish with pepper, scallions, and sweet fish sauce",
        image: "images/images4.jpeg",
        ingredients: [
            "1 whole fish (snapper or tilapia), scored",
            "4 cloves garlic, minced",
            "2 tbsp fish sauce",
            "1 tbsp sugar",
            "1 tsp black pepper",
            "3 green onions, chopped",
            "Oil for frying"
        ],
        instructions: [
            "Season fish with salt and pepper. Deep fry until crispy and golden.",
            "In a separate pan, make sauce: fry garlic, add fish sauce, sugar, and pepper.",
            "Pour sauce over fried fish.",
            "Garnish with green onions.",
            "Serve hot with rice."
        ]
    },
    // 23. Nhoam Svay
    {
        name: "Nhoam Svay",
        cuisine: "Khmer",
        category: "khmer",
        description: "Green mango salad with dried shrimp, peanuts, and mint",
        image: "images/images5.jpeg",
        ingredients: [
            "2 green mangoes, julienned",
            "1/4 cup dried shrimp",
            "1/4 cup roasted peanuts, crushed",
            "2 shallots, thinly sliced",
            "Fresh mint and cilantro",
            "Dressing: fish sauce, lime juice, sugar, garlic, chili"
        ],
        instructions: [
            "Make dressing: mix fish sauce, lime juice, sugar, minced garlic, and chopped chili.",
            "In a bowl, combine mango, dried shrimp, shallots, and herbs.",
            "Pour dressing over and toss well.",
            "Top with crushed peanuts.",
            "Serve immediately."
        ]
    },
    // 24. Nhoam Trakuon
    {
        name: "Banana Blossom Salad",
        cuisine: "Khmer",
        category: "khmer",
        description: "Banana blossom salad with chicken or pork and fresh herbs",
        image: "images/img_5717.jpg.webp",
        ingredients: [
            "1 banana blossom, thinly sliced",
            "200g chicken or pork, boiled and shredded",
            "1/4 cup roasted peanuts",
            "Fresh herbs: mint, Thai basil, cilantro",
            "Dressing: fish sauce, lime juice, sugar, garlic, chili"
        ],
        instructions: [
            "Soak sliced banana blossom in water with lemon juice.",
            "Make dressing: mix fish sauce, lime juice, sugar, garlic, and chili.",
            "Drain banana blossom and combine with shredded meat and herbs.",
            "Pour dressing over and toss well.",
            "Top with crushed peanuts and serve."
        ]
    },
    // 25. Pleah Sach Ko
    {
        name: "Pleah Sach Ko",
        cuisine: "Khmer",
        category: "khmer",
        description: "Cambodian beef ceviche with lemongrass, lime, and shallots",
        image: "images/images៦.jpeg",
        ingredients: [
            "400g beef tenderloin, very thinly sliced",
            "1/2 cup lime juice (cooks the beef)",
            "2 tbsp fish sauce",
            "1 tbsp sugar",
            "2 shallots, thinly sliced",
            "1 stalk lemongrass, minced",
            "Fresh mint and cilantro",
            "Roasted peanuts"
        ],
        instructions: [
            "In a bowl, combine beef with lime juice. Let sit 15-20 minutes until opaque.",
            "Drain excess lime juice.",
            "Add fish sauce, sugar, shallots, lemongrass, and herbs.",
            "Mix well and top with roasted peanuts.",
            "Serve with fresh vegetables and prawn crackers."
        ]
    },
       // 26. Bok Lhong (Cambodian Green Papaya Salad)
    {
        name: "Bok Lhong (Green Papaya Salad)",
        cuisine: "Khmer",
        category: "khmer",
        description: "Fresh, tangy, and spicy Cambodian green papaya salad with dried shrimp, peanuts, and lime dressing",
        image: "images/Green-Papaya-Salad-Recipe-Cambodian-Bok-Lahong-Copyright-2022-Terence-Carter-Grantourismo-T.jpg",
        time: "20 min",
        difficulty: "easy",
        diet: "seafood",
        ingredients: [
            "3 cups green papaya, shredded or julienned",
            "1 cup carrot, julienned (optional)",
            "1/4 cup dried shrimp, soaked in warm water for 10 minutes",
            "1/4 cup roasted peanuts, crushed",
            "2-3 bird's eye chilies (adjust to taste)",
            "3 cloves garlic",
            "2 tbsp fish sauce",
            "2 tbsp palm sugar or brown sugar",
            "3 tbsp fresh lime juice",
            "2 tbsp tamarind juice (optional, for extra sourness)",
            "2 tomatoes, cut into wedges",
            "1/4 cup long beans, cut into 1-inch pieces",
            "Fresh herbs: mint, Thai basil, cilantro"
        ],
        instructions: [
            "Peel green papaya and carrot. Shred or julienne into thin strips using a mandoline or sharp knife.",
            "Soak shredded papaya and carrot in cold water for 10 minutes to keep them crisp. Drain well.",
            "In a large mortar and pestle (or bowl), pound chilies and garlic until fragrant.",
            "Add dried shrimp and lightly pound to release flavor.",
            "Add fish sauce, palm sugar, lime juice, and tamarind juice. Mix until sugar dissolves.",
            "Add shredded papaya, carrot, long beans, and tomato wedges.",
            "Use the pestle to gently pound and toss the salad, mixing everything evenly.",
            "Add most of the crushed peanuts and herbs. Toss again.",
            "Taste and adjust seasoning — more fish sauce for saltiness, lime juice for sourness, sugar for sweetness.",
            "Transfer to a serving plate. Top with remaining peanuts and fresh herbs.",
            "Serve immediately with fresh cabbage, cucumber slices, and rice."
        ]
    },
    // 27. Num Pang
    {
        name: "Num Pang Pate",
        cuisine: "Khmer",
        category: "khmer",
        description: "Cambodian baguette sandwich with pâté, cold cuts, and pickled vegetables",
        image: "images/28297dfa-81de-422a-b4dd-b303ced19492-pork-meatball-num-pang.jpg",
        ingredients: [
            "1 fresh baguette",
            "2 tbsp pork pâté",
            "2 kinds of cold cuts (ham, pork roll)",
            "Pickled carrots and daikon",
            "Cucumber slices",
            "Cilantro",
            "Soy sauce and chili sauce"
        ],
        instructions: [
            "Slice baguette lengthwise but not all the way through.",
            "Spread pâté on both sides.",
            "Layer cold cuts, pickled vegetables, cucumber, and cilantro.",
            "Drizzle with soy sauce and chili sauce.",
            "Close the sandwich and press lightly.",
            "Enjoy immediately."
        ]
    },
    // 28. Num Plae Ai
    {
        name: "Num Plae Ai",
        cuisine: "Khmer",
        category: "khmer",
        description: "Cambodian stuffed rice balls with palm sugar and coconut",
        image: "images/images8.jpeg",
        ingredients: [
            "2 cups glutinous rice flour",
            "1/2 cup coconut milk",
            "1/4 cup water",
            "Palm sugar, cut into small cubes",
            "Grated coconut for topping"
        ],
        instructions: [
            "Mix rice flour with coconut milk and water to form a dough.",
            "Take a small piece of dough, flatten, and place a palm sugar cube inside.",
            "Roll into a ball.",
            "Boil in water until they float to the surface.",
            "Roll in grated coconut."
        ]
    },
    // 29. Ansom Chek
    {
        name: "Ansom Chek",
        cuisine: "Khmer",
        category: "khmer",
        description: "Banana leaf-wrapped sticky rice with banana and coconut",
        image: "images/images9.jpeg",
        ingredients: [
            "2 cups glutinous rice",
            "1 cup coconut milk",
            "1 ripe banana, sliced",
            "1/2 cup palm sugar",
            "Banana leaves",
            "String for tying"
        ],
        instructions: [
            "Soak glutinous rice in water for 4 hours or overnight.",
            "Mix rice with coconut milk and palm sugar.",
            "Place a banana leaf square, add rice mixture and banana slices.",
            "Fold banana leaf into a packet and tie with string.",
            "Steam for 45-60 minutes."
        ]
    },
    // 30. Ansom Chrouk
    {
        name: "Ansom Chrouk",
        cuisine: "Khmer",
        category: "khmer",
        description: "Banana leaf-wrapped sticky rice with pork belly and mung beans",
        image: "images/Num-Ansom-Chrouk-Cooked-Flavourfully-Good-1024x683.jpg.webp",
        ingredients: [
            "2 cups glutinous rice",
            "300g pork belly, sliced thin",
            "1 cup mung beans (split, skinned)",
            "1 cup coconut milk",
            "1 tbsp fish sauce",
            "Banana leaves",
            "String for tying"
        ],
        instructions: [
            "Soak glutinous rice and mung beans separately in water for 4 hours.",
            "Marinate pork in fish sauce and salt.",
            "Layer in banana leaf: rice, mung beans, pork, then more rice.",
            "Fold and tie securely.",
            "Steam for 60-90 minutes.",
            "Serve warm."
        ]
    },

    // ========== JAPANESE RECIPES ==========
    {
        name: "Sushi",
        cuisine: "Japanese",
        category: "asian",
        description: "Vinegared rice with fresh fish and vegetables",
        image: "images/nigiri-sushi-1200.jpg",
        ingredients: [
            "2 cups sushi rice",
            "2 cups water",
            "1/3 cup rice vinegar",
            "2 tbsp sugar",
            "1 tsp salt",
            "Fresh raw fish (salmon, tuna)",
            "Nori (seaweed sheets)",
            "Cucumber, avocado"
        ],
        instructions: [
            "Cook sushi rice.",
            "Mix vinegar, sugar, salt, then fold into rice.",
            "Place nori on bamboo mat. Spread rice on nori.",
            "Add fillings in a line on the rice.",
            "Roll tightly with bamboo mat.",
            "Slice into pieces with a sharp knife."
        ]
    },
    {
        name: "Ramen",
        cuisine: "Japanese",
        category: "asian",
        description: "Japanese noodle soup with rich pork or chicken broth",
        image: "images/csm_1101-recipe-page-Authentic-Japanese-soy-sauce-ramen_mobile_c83e83c70c.webp",
        ingredients: [
            "4 cups pork or chicken broth",
            "200g ramen noodles",
            "2 soft-boiled eggs",
            "200g chashu pork",
            "Nori seaweed",
            "Green onions",
            "Soy sauce, mirin, sesame oil"
        ],
        instructions: [
            "Make broth by simmering bones for 6-8 hours.",
            "Cook ramen noodles according to package.",
            "Season broth with soy sauce, mirin, and sesame oil.",
            "Assemble: noodles, broth, chashu pork, egg, nori, green onions.",
            "Serve hot."
        ]
    },
    {
        name: "Okonomiyaki",
        cuisine: "Japanese",
        category: "asian",
        description: "Savory Japanese pancake with cabbage and toppings",
        image: "images/images13.jpeg",
        ingredients: [
            "1 cup flour",
            "1/2 cup dashi or water",
            "2 eggs",
            "2 cups shredded cabbage",
            "100g pork belly or shrimp",
            "Okonomiyaki sauce",
            "Mayonnaise",
            "Bonito flakes"
        ],
        instructions: [
            "Mix flour, dashi, eggs into batter.",
            "Add cabbage and mix.",
            "Pour batter onto a hot griddle.",
            "Top with pork or shrimp.",
            "Cook until golden brown, then flip.",
            "Brush with okonomiyaki sauce, drizzle mayo, top with bonito flakes."
        ]
    },
    {
        name: "Tempura",
        cuisine: "Japanese",
        category: "asian",
        description: "Lightly battered and deep-fried seafood and vegetables",
        image: "images/Tempura_01.jpg",
        ingredients: [
            "1 cup flour",
            "1 egg yolk",
            "1 cup ice water",
            "Shrimp, sweet potato, eggplant, mushroom",
            "Oil for frying",
            "Tempura dipping sauce (tentsuyu)"
        ],
        instructions: [
            "Mix flour, egg yolk, and ice water quickly (lumps are fine).",
            "Dip ingredients in batter.",
            "Deep fry at 350°F until light golden.",
            "Drain on paper towels.",
            "Serve immediately with dipping sauce."
        ]
    },
    {
        name: "Matcha Cheesecake",
        cuisine: "Japanese",
        category: "asian",
        description: "Creamy cheesecake with Japanese green tea",
        image: "images/20250812152413-matcha-20cheesecake-20recipe.webp",
        ingredients: [
            "500g cream cheese",
            "3 eggs",
            "1/2 cup sugar",
            "1/4 cup heavy cream",
            "2 tbsp matcha powder",
            "1 tsp vanilla"
        ],
        instructions: [
            "Soften cream cheese, beat with sugar.",
            "Add eggs one at a time.",
            "Add heavy cream, vanilla, and sifted matcha powder.",
            "Bake at 320°F for 40 minutes in water bath.",
            "Cool and refrigerate overnight."
        ]
    },

    // ========== KOREAN RECIPES ==========
    {
        name: "Bibimbap",
        cuisine: "Korean",
        category: "asian",
        description: "Mixed rice with vegetables, egg, and gochujang",
        image: "images/Dolsot-bibimbap.jpg",
        ingredients: [
            "2 cups rice",
            "Assorted vegetables (carrots, spinach, bean sprouts, zucchini, shiitake)",
            "200g beef bulgogi",
            "1 egg",
            "Gochujang (Korean chili paste)",
            "Sesame oil, sesame seeds"
        ],
        instructions: [
            "Cook rice. Prepare each vegetable separately, lightly sautéed.",
            "Cook beef bulgogi.",
            "Fry egg sunny side up.",
            "Assemble: rice in bowl, arrange vegetables and beef around.",
            "Place egg in center. Add gochujang, sesame oil, sesame seeds.",
            "Mix everything together and eat."
        ]
    },
    {
        name: "Kimchi Jjigae",
        cuisine: "Korean",
        category: "asian",
        description: "Kimchi stew with pork and tofu",
        image: "images/kimchijjigae.jpg",
        ingredients: [
            "2 cups aged kimchi",
            "200g pork belly",
            "1 block tofu",
            "1 onion",
            "2 green onions",
            "1 tbsp gochugaru (Korean chili flakes)",
            "1 tbsp gochujang",
            "2 cups water"
        ],
        instructions: [
            "Sauté pork in pot until browned.",
            "Add kimchi and stir-fry for 5 minutes.",
            "Add water, gochugaru, gochujang. Simmer for 20 minutes.",
            "Add tofu and onions. Cook 5 more minutes.",
            "Garnish with green onions and serve with rice."
        ]
    },
    {
        name: "Bulgogi",
        cuisine: "Korean",
        category: "asian",
        description: "Marinated grilled beef with soy sauce and sesame",
        image: "images/afbbc11b-e75e-4a08-bd59-878fe7e5b5d2.jpg.avif",
        ingredients: [
            "500g beef ribeye, thinly sliced",
            "1/2 cup soy sauce",
            "2 tbsp sugar",
            "1 tbsp honey",
            "2 tbsp sesame oil",
            "4 cloves garlic",
            "1 onion",
            "Sesame seeds"
        ],
        instructions: [
            "Mix all marinade ingredients.",
            "Marinate beef for 2+ hours.",
            "Grill or pan-fry over high heat until caramelized.",
            "Garnish with sesame seeds.",
            "Serve with lettuce for wrapping."
        ]
    },
    {
        name: "Korean Fried Chicken",
        cuisine: "Korean",
        category: "asian",
        description: "Crispy double-fried chicken with sweet gochujang sauce",
        image: "images/maxresdefault.jpg",
        ingredients: [
            "1kg chicken wings",
            "1 cup potato starch",
            "Oil for frying",
            "Sauce: gochujang, ketchup, honey, garlic, soy sauce"
        ],
        instructions: [
            "Coat chicken in potato starch.",
            "Fry at 325°F for 8 minutes.",
            "Let rest 2 minutes.",
            "Fry again at 350°F for 3-4 minutes until extra crispy.",
            "Mix sauce ingredients in a pan.",
            "Toss chicken in sauce or serve on the side."
        ]
    },

    // ========== CHINESE RECIPES ==========
    {
        name: "Kung Pao Chicken",
        cuisine: "Chinese",
        category: "asian",
        description: "Stir-fried chicken with peanuts, chili, and Sichuan pepper",
        image: "images/Gluten-Free-Kung-Pao-Chicken-Dairy-Free_Featured-Image-1200-x-1200_2.jpg",
        ingredients: [
            "500g chicken, cubed",
            "1/2 cup roasted peanuts",
            "Dried red chilies",
            "Sichuan peppercorns",
            "Sauce: soy sauce, vinegar, sugar, cornstarch"
        ],
        instructions: [
            "Marinate chicken in soy sauce and cornstarch.",
            "Stir-fry chili and Sichuan peppercorns in oil.",
            "Add chicken and stir-fry until cooked.",
            "Add sauce and peanuts.",
            "Stir-fry 1 more minute and serve with rice."
        ]
    },
    {
        name: "Mapo Tofu",
        cuisine: "Chinese",
        category: "asian",
        description: "Spicy tofu and minced pork in chili bean paste",
        image: "images/mapo-tofu-in-bowl-thumbnail.jpg",
        ingredients: [
            "1 block soft tofu",
            "150g minced pork",
            "2 tbsp doubanjiang (chili bean paste)",
            "1 tbsp fermented black beans",
            "Sichuan peppercorns",
            "Green onions"
        ],
        instructions: [
            "Sauté minced pork until browned.",
            "Add doubanjiang and fermented black beans.",
            "Add water and simmer.",
            "Gently add cubed tofu.",
            "Simmer for 5 minutes, thicken with cornstarch.",
            "Garnish with Sichuan peppercorns and green onions."
        ]
    },
   

    // ========== VIETNAMESE RECIPES ==========
    {
        name: "Pho",
        cuisine: "Vietnamese",
        category: "asian",
        description: "Aromatic rice noodle soup with beef or chicken",
        image: "images/Vietnamese-Pho-Recipe-1200-x-1200.jpg",
        ingredients: [
            "2kg beef bones",
            "200g rice noodles",
            "300g beef sirloin, thinly sliced",
            "1 onion, 1 ginger",
            "Star anise, cinnamon, cloves",
            "Fish sauce, sugar",
            "Herbs: cilantro, Thai basil, mint",
            "Bean sprouts, lime, chili"
        ],
        instructions: [
            "Char onion and ginger. Boil bones for 8 hours.",
            "Toast star anise, cinnamon, cloves. Add to broth.",
            "Season broth with fish sauce and sugar.",
            "Cook rice noodles.",
            "Place noodles in bowl, top with raw beef slices.",
            "Pour hot broth over to cook beef.",
            "Garnish with herbs, bean sprouts, lime, chili."
        ]
    },
    {
        name: "Banh Mi",
        cuisine: "Vietnamese",
        category: "asian",
        description: "Crispy baguette sandwich with pickled vegetables and protein",
        image: "images/images14.jpeg",
        ingredients: [
            "1 fresh baguette",
            "Pâté, mayonnaise",
            "Cold cuts or grilled pork",
            "Pickled carrots and daikon",
            "Cucumber, cilantro",
            "Fresh chili, soy sauce"
        ],
        instructions: [
            "Slice baguette lengthwise.",
            "Spread pâté and mayonnaise.",
            "Layer meat, pickled vegetables, cucumber, cilantro, chili.",
            "Drizzle with soy sauce.",
            "Close sandwich and press lightly.",
            "Serve immediately."
        ]
    },
   

    // ========== EUROPEAN RECIPES ==========
    {
        name: "Pizza Margherita",
        cuisine: "Italian",
        category: "european",
        description: "Classic Italian pizza with tomato, mozzarella, and basil",
        image: "images/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg.webp",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella",
            "Fresh basil leaves",
            "Olive oil",
            "Salt"
        ],
        instructions: [
            "Preheat oven to 500°F with pizza stone.",
            "Stretch dough into circle.",
            "Top with tomato sauce, torn mozzarella, basil leaves.",
            "Drizzle olive oil and sprinkle salt.",
            "Bake 8-10 minutes until bubbly and charred."
        ]
    },
    {
        name: "Pasta Carbonara",
        cuisine: "Italian",
        category: "european",
        description: "Creamy Italian pasta with eggs, cheese, and pancetta",
        image: "images/pasta-a-la-carbonara.jpg",
        ingredients: [
            "400g spaghetti",
            "150g pancetta or guanciale",
            "3 eggs",
            "1 cup Pecorino Romano, grated",
            "Black pepper"
        ],
        instructions: [
            "Cook pasta in salted water.",
            "Fry pancetta until crispy.",
            "Whisk eggs and cheese together.",
            "Drain pasta, reserving some water.",
            "Mix hot pasta with pancetta, then egg mixture off heat.",
            "Add pasta water to create creamy sauce.",
            "Top with black pepper and more cheese."
        ]
    },
      {
        name: "Brownie",
        cuisine: "American / European",
        category: "european",
        description: "Rich, fudgy chocolate brownie with a crackly top and soft center",
        image: "images/Southern-Living-Homemade_Brownies_023-3c582f0fba1842dd918a3d9c26c1ab59.jpg",
        time: "35 min",
        difficulty: "easy",
        diet: "vegetarian",
        ingredients: [
            "1 cup unsalted butter (225g)",
            "2 cups white sugar (400g)",
            "4 large eggs",
            "1 tsp vanilla extract",
            "1 cup all-purpose flour (120g)",
            "1 cup cocoa powder (80g)",
            "1/2 tsp salt",
            "1/2 tsp baking powder",
            "1 cup chocolate chips or chopped dark chocolate (optional)"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease a 9x13 inch baking pan or line with parchment paper.",
            "In a microwave-safe bowl, melt butter in 30-second intervals until fully melted.",
            "Stir sugar into melted butter until well combined.",
            "Add eggs one at a time, mixing well after each addition. Stir in vanilla extract.",
            "In a separate bowl, whisk together flour, cocoa powder, salt, and baking powder.",
            "Gradually add dry ingredients to wet mixture, stirring just until combined. Do not overmix.",
            "Fold in chocolate chips if using.",
            "Pour batter into prepared pan and spread evenly.",
            "Bake for 20-25 minutes. A toothpick inserted should come out with a few moist crumbs (not wet batter).",
            "Cool completely in pan before cutting into squares.",
            "For fudgier brownies, bake on the shorter side (20 min). For cake-like brownies, bake longer (25-28 min)."
        ]

        
    },
        // ========== MY KITCHEN (PERSONAL RECIPES) ==========
    {
        name: "My Gooey Brownie",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Rich, fudgy, and gooey brownie with deep chocolate flavor — not too sweet, just perfect",
        image: "images/IMG_4444.Jpg",
        time: "35 min",
        difficulty: "easy",
        diet: "vegetarian",
        story: "This is my go-to brownie recipe. I experimented with less sugar and more chocolate until it tasted just right — fudgy, gooey, and not overly sweet. Perfect with a glass of cold milk.",
        ingredients: [
            "1 cup (225g) unsalted butter",
            "80g brown sugar (about 1/2 cup, lightly packed)",
            "3 large eggs",
            "1 tsp vanilla extract (optional)",
            "1 cup (120g) all-purpose flour",
            "1/2 cup (50g) cocoa powder",
            "1 cup (180g) chocolate chips",
            "1/4 tsp salt"
        ],
        instructions: [
            "Preheat oven to 325°F (165°C). Line a 9x9 inch pan with parchment paper.",
            "Melt butter in a microwave or on the stove. Let it cool slightly.",
            "In a large bowl, mix melted butter with brown sugar until smooth.",
            "Add eggs one at a time, mixing well after each. Add vanilla if using.",
            "In a separate bowl, whisk together flour, cocoa powder, and salt.",
            "Gradually add dry ingredients to wet mixture. Stir until just combined — don't overmix.",
            "Fold in chocolate chips gently.",
            "Pour batter into prepared pan. Spread evenly.",
            "Bake for 20-25 minutes. For gooey brownies, bake 20 minutes.",
            "A toothpick should come out with moist crumbs, not wet batter.",
            "Cool in pan for 15 minutes before cutting. Serve warm for extra gooeyness."
        ]
    
    },
        {
        name: "Burnt Cheesecake",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Creamy, rich, and caramelized on top — a simple yet elegant cheesecake with a burnt finish",
        image: "images/IMG_4448.JPG",
        time: "60 min",
        difficulty: "medium",
        diet: "vegetarian",
        story: "I discovered burnt cheesecake during lockdown. It looked burnt on top but was perfectly creamy inside. After many tries, I finally got it right. Now it's my signature dessert.",
        ingredients: [
            "250g cream cheese (room temperature)",
            "2 large eggs (room temperature)",
            "150g heavy cream or whipping cream",
            "60g sugar",
            "2 tbsp all-purpose flour",
            "1 tsp vanilla extract (optional)",
            "Pinch of salt"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C). Line a 6-inch cake pan with parchment paper, crumpling it first for rustic edges.",
            "In a large bowl, soften cream cheese with a spatula until smooth.",
            "Add sugar and mix well until fully combined.",
            "Add eggs one at a time, mixing well after each addition.",
            "Add heavy cream and vanilla extract (if using). Mix until smooth.",
            "Sift in flour and salt. Gently fold until just combined — don't overmix.",
            "Pour batter into prepared pan.",
            "Bake for 35-40 minutes until the top is dark brown (almost burnt) and the center is still jiggly.",
            "Let cool completely in the pan (it will deflate and crack — that's normal).",
            "Refrigerate for at least 4 hours or overnight before serving.",
            "Serve cold. The inside should be creamy and custard-like."
        ]
    },
        {
        name: "Simple Mapo Tofu",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Easy, quick, and delicious — creamy tofu in spicy sauce ready in 20 minutes",
        image: "images/IMG_4484.JPG",
        time: "20 min",
        difficulty: "easy",
        diet: "meat",
        story: "This is my simplified version of Mapo Tofu. Fewer ingredients but still so tasty! Perfect for busy weeknights.",
        ingredients: [
            "1 block soft tofu (400g), cut into cubes",
            "150g minced pork (or skip for vegetarian)",
            "2 tbsp doubanjiang (spicy bean paste)",
            "2 cloves garlic, minced",
            "1 cup water or chicken broth",
            "1 tbsp soy sauce",
            "1 tsp sugar",
            "1 tbsp cornstarch mixed with 2 tbsp water",
            "1 tbsp oil",
            "Green onions for garnish"
        ],
        instructions: [
            "Heat oil in a pan. Add minced pork and cook until browned (3-4 minutes).",
            "Add garlic and doubanjiang. Stir-fry for 1 minute until fragrant.",
            "Add water, soy sauce, and sugar. Bring to a simmer.",
            "Gently add tofu cubes. Simmer for 5 minutes.",
            "Stir cornstarch mixture and pour in. Cook for 1-2 minutes until sauce thickens.",
            "Garnish with green onions. Serve hot with rice."
        ]
    },
        {
        name: "My Simple Fried Chicken",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Juicy, crispy fried chicken — soaked in milk for tenderness, then fried to golden perfection",
        image: "images/IMG_4486.jpg",
        time: "40 min (plus soaking time)",
        difficulty: "medium",
        diet: "meat",
        story: "I learned the milk soak trick from a friend. It makes the chicken so soft inside while staying crispy outside. Now I never skip this step!",
        ingredients: [
            "500g chicken thighs or drumsticks (or chicken breast cut into strips)",
            "1 cup milk (any milk works)",
            "1 cup all-purpose flour",
            "1 tsp salt",
            "1 tsp black pepper",
            "1 tsp garlic powder",
            "1 tsp paprika (optional)",
            "Oil for frying",
            "1 egg (optional, for extra crispy)"
        ],
        instructions: [
            "Soak chicken in milk for at least 30 minutes (or up to 4 hours in the fridge). This makes the chicken tender.",
            "In a bowl, mix flour, salt, pepper, garlic powder, and paprika.",
            "Remove chicken from milk. Let excess drip off.",
            "Optional: For extra crispy, dip chicken in beaten egg first, then flour.",
            "Coat chicken in flour mixture. Press firmly so flour sticks well.",
            "Heat oil in a pan over medium heat (about 350°F/175°C).",
            "Carefully place chicken in hot oil. Don't overcrowd.",
            "Fry for 5-7 minutes per side until golden brown and cooked through.",
            "Remove and place on paper towels to drain excess oil.",
            "Serve hot with rice or as a snack."
        ]
    },
        {
        name: "French Fries",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Crispy on the outside, soft on the inside — simple homemade French fries",
        image: "images/IMG_4487.jpg",
        time: "30 min",
        difficulty: "easy",
        diet: "vegetarian",
        story: "Homemade fries are so much better than frozen. Double frying makes them extra crispy! Perfect with burgers or just ketchup.",
        ingredients: [
            "3 large potatoes (Russet or Idaho)",
            "4 cups cold water (for soaking)",
            "2 tbsp salt (for soaking water)",
            "Oil for frying (vegetable or canola oil)",
            "1 tsp salt for seasoning",
            "Optional: paprika, garlic powder, or black pepper"
        ],
        instructions: [
            "Peel potatoes (or leave skin on for rustic fries). Cut into thin, even strips (about 1/4 inch thick).",
            "Soak cut potatoes in cold salted water for 30 minutes. This removes excess starch for crispier fries.",
            "Drain and pat potatoes completely dry with paper towels.",
            "Heat oil in a deep pot to 325°F (160°C).",
            "First fry: Fry potatoes in batches for 3-4 minutes until soft but not brown. Remove and drain on paper towels.",
            "Let potatoes rest for 10 minutes.",
            "Increase oil temperature to 375°F (190°C).",
            "Second fry: Fry potatoes again for 2-3 minutes until golden brown and crispy.",
            "Remove and drain on paper towels.",
            "Sprinkle with salt and any other seasonings while hot.",
            "Serve immediately with ketchup, mayonnaise, or your favorite dipping sauce."
        ]
    },
        {
        name: "Chocolate Churros",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Crispy, golden churros rolled in cinnamon sugar — served with warm chocolate sauce",
        image: "images/IMG_4488 2.JPG",
        time: "35 min",
        difficulty: "medium",
        diet: "vegetarian",
        story: "I fell in love with churros at a street fair. Crispy on the outside, soft inside, dipped in thick chocolate — pure happiness! This is my homemade version.",
        ingredients: [
            "For the churros:",
            "1 cup water",
            "1/2 cup unsalted butter",
            "2 tbsp brown sugar",
            "1/4 tsp salt",
            "1 cup all-purpose flour",
            "2 large eggs",
            "1/2 tsp vanilla extract",
            "",
            "For coating:",
            "1/2 cup white sugar",
            "1 tsp ground cinnamon",
            "",
            "For chocolate sauce:",
            "1/2 cup heavy cream",
            "1/2 cup dark chocolate chips",
            "1 tbsp butter (optional)"
        ],
        instructions: [
            "Make churro dough: In a pot, combine water, butter, brown sugar, and salt. Bring to a boil.",
            "Remove from heat. Add flour all at once and stir vigorously until dough forms a ball.",
            "Let cool for 5 minutes. Add eggs one at a time, mixing well after each. Add vanilla.",
            "Heat oil in a deep pot to 350°F (175°C).",
            "Transfer dough to a piping bag with a star tip (or a ziploc bag with a corner cut off).",
            "Pipe 4-5 inch strips of dough into hot oil. Cut with scissors.",
            "Fry 2-3 minutes per side until golden brown and crispy.",
            "Remove and drain on paper towels.",
            "Mix white sugar and cinnamon in a shallow bowl.",
            "Roll hot churros in cinnamon sugar mixture.",
            "Make chocolate sauce: Heat heavy cream until hot (not boiling). Pour over chocolate chips. Let sit 2 minutes, then stir until smooth. Add butter if desired.",
            "Serve churros warm with chocolate sauce for dipping."
        ]
    },
        {
        name: "Simple Jajangmyeon",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Korean black bean noodles with savory, slightly sweet sauce — easy homemade version",
        image: "images/IMG_4489.jpg",
        time: "30 min",
        difficulty: "easy",
        diet: "meat",
        story: "I love Jajangmyeon from Korean restaurants. This is my simple home version — easy ingredients, big flavor! Perfect for comfort food nights.",
        ingredients: [
            "200g fresh or dried jajangmyeon noodles (or thick wheat noodles)",
            "200g pork belly or minced pork",
            "3 tbsp black bean paste (chunjang)",
            "1 tbsp sugar",
            "1 tbsp oyster sauce (optional)",
            "1 onion, diced",
            "1 zucchini, diced (optional)",
            "2 cloves garlic, minced",
            "1 cup water",
            "1 tbsp cornstarch mixed with 2 tbsp water (slurry)",
            "1 tbsp vegetable oil",
            "Cucumber strips for garnish"
        ],
        instructions: [
            "Cook noodles according to package instructions. Drain and rinse briefly. Set aside.",
            "Heat oil in a pan over medium heat. Add pork and cook until browned (3-4 minutes).",
            "Add garlic and onion. Stir-fry for 2 minutes until soft.",
            "Add zucchini if using. Cook for 2 more minutes.",
            "Push meat and vegetables to one side. Add black bean paste and fry for 1-2 minutes until fragrant.",
            "Mix black bean paste with meat and vegetables. Add sugar and oyster sauce (if using).",
            "Add water. Bring to a simmer and cook for 3-4 minutes.",
            "Stir cornstarch slurry and pour in. Cook until sauce thickens (1-2 minutes).",
            "Pour sauce over cooked noodles.",
            "Garnish with cucumber strips.",
            "Mix everything together and enjoy!"
        ]
    },
        {
        name: "Bay Moan Chien (Cambodian Fried Chicken with Rice)",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Juicy marinated fried chicken (no flour) served with white or turmeric yellow rice",
        image: "images/IMG_4494.jpg",
        time: "50 min (includes marinating)",
        difficulty: "easy",
        diet: "meat",
        story: "This is how I make fried chicken at home — no flour, just a simple marinade of chicken bouillon, oyster sauce, palm sugar, and oil. Let it sit for 30 minutes, then fry. Serve with rice — white or yellow rice with turmeric. So simple but so delicious!",
        ingredients: [
            "For the marinated fried chicken:",
            "500g chicken (thighs or drumsticks)",
            "1 tbsp chicken bouillon powder",
            "1 tbsp oyster sauce",
            "1 tsp palm sugar (or brown sugar)",
            "1 tbsp vegetable oil",
            "Oil for frying",
            "",
            "For the rice (choose one):",
            "White rice: 2 cups jasmine rice + 2 1/2 cups water",
            "Yellow rice: 2 cups jasmine rice + 2 1/2 cups water + 1 tsp turmeric powder"
        ],
        instructions: [
            "Marinate chicken: In a bowl, mix chicken with chicken bouillon, oyster sauce, palm sugar, and oil.",
            "Rub seasoning into chicken. Let marinate for 30 minutes (or up to 4 hours in fridge).",
            "While chicken marinates, cook rice: Rinse rice. Cook with water (add turmeric if making yellow rice).",
            "Heat oil in a pan for frying (about 350°F / 175°C).",
            "Fry marinated chicken for 5-7 minutes per side until golden brown and cooked through.",
            "Remove chicken and place on paper towels to drain excess oil.",
            "Serve hot chicken with rice on the side.",
            "Garnish with cucumber slices and tomato if desired."
        ]
    },
        {
        name: "Simple Carbonara Pasta",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Creamy, easy carbonara with milk instead of eggs — bacon, black pepper, and olive oil",
        image: "images/IMG_4082.jpg",
        time: "20 min",
        difficulty: "easy",
        diet: "meat",
        story: "This is my lazy carbonara — no eggs, no complicated technique. Just bacon, milk, black pepper, and olive oil. So creamy and so good when I want pasta fast.",
        ingredients: [
            "200g spaghetti or any pasta",
            "150g bacon, chopped into small pieces",
            "2 cloves garlic, minced (optional)",
            "1 cup milk (whole milk is best)",
            "1 tsp black pepper (lots of pepper! carbonara needs it)",
            "2 tbsp olive oil",
            "1/2 tsp salt (go easy — bacon is already salty)",
            "Parmesan cheese for topping (optional)"
        ],
        instructions: [
            "Cook pasta according to package instructions. Reserve 1/2 cup pasta water before draining.",
            "While pasta cooks, heat olive oil in a pan over medium heat.",
            "Add bacon and cook until crispy (about 5 minutes).",
            "Add garlic if using. Cook for 30 seconds until fragrant.",
            "Reduce heat to low. Add milk and black pepper. Stir gently.",
            "Let sauce warm up for 1-2 minutes — don't boil.",
            "Add drained pasta to the pan with the sauce.",
            "Toss everything together. Add a little pasta water if sauce is too thick.",
            "Taste and add salt only if needed (bacon is already salty).",
            "Serve hot with more black pepper on top and Parmesan if desired."
        ]
    },
        {
        name: " Tiramisu (Milk Version)",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Kid-friendly tiramisu — no coffee, just creamy mascarpone, milk, and cocoa powder",
        image: "images/IMG_5535.jpg",
        time: "20 min (plus 4 hours chilling)",
        difficulty: "easy",
        diet: "vegetarian",
        story: "I don't drink coffee, so I made this version with milk instead. Same creamy texture, same delicious taste. Perfect for kids or anyone who doesn't like coffee!",
        ingredients: [
            "250g mascarpone cheese (room temperature)",
            "1 cup heavy whipping cream (cold)",
            "2 eggs (separate yolks and whites)",
            "3 tbsp sugar",
            "1 cup milk (for dipping ladyfingers)",
            "20-24 ladyfinger biscuits (savoiardi)",
            "1 tbsp cocoa powder for dusting",
            "1/2 tsp vanilla extract (optional)"
        ],
        instructions: [
            "Separate egg yolks from whites into two bowls.",
            "Beat egg yolks with sugar until pale and creamy (about 2-3 minutes).",
            "Add mascarpone cheese and vanilla to yolks. Mix until smooth.",
            "In another bowl, beat egg whites until stiff peaks form.",
            "In a separate bowl, beat whipping cream until soft peaks form.",
            "Gently fold beaten egg whites and whipped cream into the mascarpone mixture. Be gentle to keep it fluffy.",
            "Pour milk into a shallow bowl.",
            "Quickly dip each ladyfinger into milk (1-2 seconds per side — don't soak!).",
            "Arrange a layer of dipped ladyfingers in a dish (8x8 inch).",
            "Spread half of the cream mixture over the ladyfingers.",
            "Add another layer of dipped ladyfingers.",
            "Spread remaining cream mixture on top.",
            "Cover and refrigerate for at least 4 hours (overnight is best).",
            "Dust with cocoa powder before serving."
        ]
    },
        {
        name: "Khor Ko (Mom's Cambodian Beef Stew)",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Mom's authentic Khor Ko — homemade beef bone broth, her special spice paste, slow-cooked to perfection",
        image: "images/IMG_4493.jpg",
        time: "4+ hours (includes broth)",
        difficulty: "medium",
        diet: "meat",
        story: "This is my mom's real Khor Ko. She boils beef bones for 3-4 hours to make rich broth. Her special paste has red onion, turmeric, dried chili paste, lemongrass, chili oil, and more — all blended together. When she cooks this, the whole house smells amazing. This recipe is her gift to me. Serve with fresh baguette.",
        ingredients: [
            "For the beef broth (3-4 hours):",
            "2kg beef bones (marrow bones or knuckles)",
            "4 liters water",
            "1 onion, charred",
            "2 inches ginger, smashed",
            "Salt to taste",
            "",
            "For Mom's Khor Ko paste (blend together):",
            "4 red onions or shallots",
            "1 tbsp turmeric powder (or fresh turmeric)",
            "2 tbsp dried chili paste (or 5 dried chilies, soaked)",
            "3 stalks lemongrass, white part only, sliced",
            "2 tbsp chili oil",
            "5 cloves garlic",
            "1 tbsp shrimp paste (optional)",
            "1 tbsp fish sauce",
            "1 tsp sugar",
            "2 tbsp water (to help blend)",
            "",
            "For the stew:",
            "500g beef brisket or chuck, cut into chunks",
            "3 tbsp Mom's Khor Ko paste (from above)",
            "2 cups homemade beef broth (from above)",
            "2 cups coconut milk",
            "2 tbsp fish sauce",
            "1 tbsp sugar",
            "2 potatoes, cubed",
            "2 carrots, sliced",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Make beef broth: Put beef bones in a large pot. Cover with water. Bring to a boil, then drain and rinse bones (removes impurities).",
            "Return bones to clean pot. Add 4 liters fresh water, charred onion, and smashed ginger.",
            "Bring to a boil, then reduce heat to low. Simmer for 3-4 hours. Skim off foam occasionally.",
            "Strain broth. Keep 2 cups for the stew. Save remaining broth for another use.",
            "",
            "Make Mom's Khor Ko paste: Put all paste ingredients in a blender. Blend until smooth. Add a little water if needed.",
            "",
            "Make the stew: In a large pot, heat a little oil. Add beef chunks and brown on all sides.",
            "Add 3 tbsp of Mom's Khor Ko paste. Stir-fry for 2-3 minutes until fragrant and oil separates.",
            "Add 2 cups homemade beef broth, coconut milk, fish sauce, and sugar. Stir well.",
            "Bring to a boil, then reduce heat to low. Cover and simmer for 45-60 minutes until beef is tender.",
            "Add potatoes and carrots. Cook for 20 more minutes until soft.",
            "Taste and add more fish sauce or sugar if needed.",
            "Garnish with fresh cilantro. Serve hot with fresh baguette for dipping."
        ]
    },
        {
        name: "Kuy Teav Phnom Penh (Mom's Pork Noodle Soup)",
        cuisine: "My Kitchen",
        category: "myrecipes",
        description: "Mom's authentic Cambodian noodle soup — pork bone broth with star anise, cinnamon, and aromatic seeds",
        image: "images/IMG_4485.jpg",
        time: "4+ hours (includes broth)",
        difficulty: "medium",
        diet: "meat",
        story: "This is my mom's Kuy Teav. She boils pork bones for hours with onion, star anise, cinnamon, and wheat seeds (fennel seeds). The broth is so fragrant and comforting. She serves it with rice noodles, pork slices, and fresh herbs. Every bowl tastes like home.",
        ingredients: [
            "For the pork bone broth (4+ hours):",
            "2kg pork bones (neck bones or marrow bones)",
            "4 liters water",
            "2 onions, charred",
            "1 head garlic (cut in half horizontally, charred)",
            "4 star anise",
            "2 cinnamon sticks",
            "1 tbsp fennel seeds (or coriander seeds)",
            "1 tbsp salt",
            "2 tbsp fish sauce",
            "1 tbsp sugar",
            "",
            "For serving:",
            "400g dried rice noodles (or fresh Kuy Teav noodles)",
            "300g pork (tenderloin or pork belly), thinly sliced",
            "200g shrimp (optional)",
            "Bean sprouts",
            "Green onions, chopped",
            "Cilantro",
            "Fried garlic and garlic oil",
            "Lime wedges",
            "Chili sauce or fresh chilies",
            "Fish sauce (for individual seasoning)"
        ],
        instructions: [
            "Make the broth: Put pork bones in a large pot. Cover with water. Bring to a boil, then drain and rinse bones (removes impurities).",
            "Return bones to clean pot. Add 4 liters fresh water. Bring to a boil, then reduce heat to low.",
            "Skim off any foam. Add charred onions, charred garlic, star anise, cinnamon sticks, and fennel seeds.",
            "Simmer for 4-5 hours. The longer, the better.",
            "Season broth with salt, fish sauce, and sugar. Stir well.",
            "Strain broth through a fine sieve. Keep hot.",
            "",
            "Prepare noodles: Cook rice noodles according to package instructions. Drain and set aside.",
            "Blanch pork slices in hot broth for 1-2 minutes until cooked.",
            "If using shrimp, blanch in broth for 1 minute.",
            "",
            "Assemble bowls: Divide noodles into serving bowls.",
            "Top with pork slices and shrimp (if using).",
            "Ladle hot broth over everything.",
            "Garnish with bean sprouts, green onions, cilantro, and fried garlic.",
            "Serve with lime wedges and chili sauce on the side.",
            "Each person can add fish sauce, more chili, or lime to taste."
        ]
    },
];
// ============================================
// SEARCH FUNCTION
// ============================================

function searchRecipes() {
    const term = document.getElementById('search-input').value.toLowerCase();
    const allRecipes = recipes;
    
    if (term === '') {
        displayRecipes();
        return;
    }
    
    const filtered = allRecipes.filter(r => 
        r.name.toLowerCase().includes(term) ||
        r.cuisine.toLowerCase().includes(term) ||
        r.description.toLowerCase().includes(term)
    );
    
    const section = getCurrentSection();
    
    if (section === 'khmer') {
        displayRecipeGrid('khmer-full-recipes', filtered.filter(r => r.category === 'khmer'));
    } else if (section === 'asian') {
        displayRecipeGrid('asian-full-recipes', filtered.filter(r => r.category === 'asian'));
    } else if (section === 'european') {
        displayRecipeGrid('european-full-recipes', filtered.filter(r => r.category === 'european'));
    } else if (section === 'myrecipes') {
        displayRecipeGrid('myrecipes-recipes', filtered.filter(r => r.category === 'myrecipes'));
    } else {
        displayRecipeGrid('khmer-recipes', filtered.filter(r => r.category === 'khmer').slice(0, 4));
        displayRecipeGrid('asian-recipes', filtered.filter(r => r.category === 'asian').slice(0, 4));
        displayRecipeGrid('european-recipes', filtered.filter(r => r.category === 'european').slice(0, 4));
    }
}

function getCurrentSection() {
    if (document.getElementById('khmer-section') && document.getElementById('khmer-section').style.display === 'block') return 'khmer';
    if (document.getElementById('asian-section') && document.getElementById('asian-section').style.display === 'block') return 'asian';
    if (document.getElementById('european-section') && document.getElementById('european-section').style.display === 'block') return 'european';
    if (document.getElementById('myrecipes-section') && document.getElementById('myrecipes-section').style.display === 'block') return 'myrecipes';
    return 'home';
}

// ============================================
// FILTER FUNCTION
// ============================================

let currentDietFilter = 'all';

function filterByDiet(type) {
    currentDietFilter = type;
    
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) event.target.classList.add('active');
    
    const section = getCurrentSection();
    let recipesToFilter = [];
    
    if (section === 'khmer') {
        recipesToFilter = recipes.filter(r => r.category === 'khmer');
    } else if (section === 'asian') {
        recipesToFilter = recipes.filter(r => r.category === 'asian');
    } else if (section === 'european') {
        recipesToFilter = recipes.filter(r => r.category === 'european');
    } else if (section === 'myrecipes') {
        recipesToFilter = recipes.filter(r => r.category === 'myrecipes');
    } else {
        recipesToFilter = recipes;
    }
    
    let filtered = recipesToFilter;
    
    if (type !== 'all') {
        filtered = recipesToFilter.filter(r => r.diet && r.diet === type);
    }
    
    if (section === 'khmer') {
        displayRecipeGrid('khmer-full-recipes', filtered);
    } else if (section === 'asian') {
        displayRecipeGrid('asian-full-recipes', filtered);
    } else if (section === 'european') {
        displayRecipeGrid('european-full-recipes', filtered);
    } else if (section === 'myrecipes') {
        displayRecipeGrid('myrecipes-recipes', filtered);
    } else {
        displayRecipeGrid('khmer-recipes', filtered.filter(r => r.category === 'khmer').slice(0, 4));
        displayRecipeGrid('asian-recipes', filtered.filter(r => r.category === 'asian').slice(0, 4));
        displayRecipeGrid('european-recipes', filtered.filter(r => r.category === 'european').slice(0, 4));
    }
}

// ============================================
// MODAL & RECIPE DETAILS
// ============================================

let currentRecipe = null;

function showRecipeDetails(recipe) {
    currentRecipe = recipe;
    const modal = document.getElementById('recipe-modal');
    const detailsContainer = document.getElementById('modal-recipe-details');
    
    if (!modal || !detailsContainer) return;
    
    // Add story if exists
    let storyHTML = '';
    if (recipe.story) {
        storyHTML = `
            <div style="background: #FDF7F0; padding: 1rem; margin: 1rem 0; border-left: 3px solid #C26B4A;">
                <p style="margin: 0; font-style: italic; color: #4A4A4A;">📖 ${recipe.story}</p>
            </div>
        `;
    }
    
    detailsContainer.innerHTML = `
        <h2 style="margin-bottom: 0.25rem;">${recipe.name}</h2>
        <p style="color: #C26B4A; font-size: 0.75rem; letter-spacing: 1px; margin-bottom: 1rem;">${recipe.cuisine}</p>
        <div class="recipe-meta">
            <span class="meta-item">⏱️ ${recipe.time || '30-45 min'}</span>
            <span class="meta-item difficulty-${recipe.difficulty || 'medium'}">📊 ${recipe.difficulty || 'Medium'}</span>
        </div>
        <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; margin-bottom: 1.5rem;">
        ${storyHTML}
        <h3>Ingredients</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">${recipe.ingredients.map(i => `<li style="margin: 0.3rem 0;">${i}</li>`).join('')}</ul>
        <h3>Instructions</h3>
        <ol style="margin-bottom: 1rem; padding-left: 1.5rem;">${recipe.instructions.map(i => `<li style="margin: 0.5rem 0; line-height: 1.6;">${i}</li>`).join('')}</ol>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// PRINT FUNCTION
// ============================================

function printRecipe() {
    if (!currentRecipe) return;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${currentRecipe.name} - Klinth Eats</title>
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 2rem; line-height: 1.6; }
                h1 { color: #C26B4A; font-weight: 400; }
                h2 { margin-top: 1.5rem; font-weight: 400; }
                ul, ol { margin: 1rem 0; padding-left: 1.5rem; }
                li { margin: 0.5rem 0; }
                img { max-width: 100%; }
                .meta { color: #9A8E7F; font-size: 0.8rem; margin-bottom: 1rem; }
            </style>
        </head>
        <body>
            <h1>${currentRecipe.name}</h1>
            <div class="meta">${currentRecipe.cuisine} Cuisine · ${currentRecipe.time || '30-45 min'} · ${currentRecipe.difficulty || 'Medium'}</div>
            <img src="${currentRecipe.image}" alt="${currentRecipe.name}">
            <h2>Ingredients</h2>
            <ul>${currentRecipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
            <h2>Instructions</h2>
            <ol>${currentRecipe.instructions.map(i => `<li>${i}</li>`).join('')}</ol>
            <p style="margin-top: 2rem; font-size: 0.7rem; color: #999;">© Klinth Eats</p>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// ============================================
// BACK TO TOP
// ============================================

window.onscroll = function() {
    const btn = document.getElementById('back-to-top');
    if (btn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// CLOSE MODAL ON ESCAPE
// ============================================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function displayRecipes() {
    const khmerRecipes = recipes.filter(r => r.category === 'khmer');
    const asianRecipes = recipes.filter(r => r.category === 'asian');
    const europeanRecipes = recipes.filter(r => r.category === 'european');
    const myRecipes = recipes.filter(r => r.category === 'myrecipes');
    
    displayRecipeGrid('khmer-recipes', khmerRecipes.slice(0, 4));
    displayRecipeGrid('asian-recipes', asianRecipes.slice(0, 4));
    displayRecipeGrid('european-recipes', europeanRecipes.slice(0, 4));
    
    displayRecipeGrid('khmer-full-recipes', khmerRecipes);
    displayRecipeGrid('asian-full-recipes', asianRecipes);
    displayRecipeGrid('european-full-recipes', europeanRecipes);
    displayRecipeGrid('myrecipes-recipes', myRecipes);
    
    displayFeaturedRecipe(khmerRecipes[0]);
}

function displayRecipeGrid(containerId, recipesArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    recipesArray.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.cursor = 'pointer';
        card.onclick = () => showRecipeDetails(recipe);
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <p class="culture-label">${recipe.cuisine}</p>
        `;
        container.appendChild(card);
    });
}

function displayFeaturedRecipe(recipe) {
    const container = document.getElementById('featured-recipe');
    if (!container || !recipe) return;
    
    container.innerHTML = `
        <img class="featured-recipe-image" src="${recipe.image}" alt="${recipe.name}">
        <div class="featured-recipe-info">
            <span class="featured-recipe-tag">Featured</span>
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="featured-recipe-btn" onclick="showRecipeDetails(recipes.find(r => r.name === '${recipe.name}'))">View Recipe →</button>
        </div>
    `;
}

function showSection(sectionName) {
    const sections = ['home-section', 'khmer-section', 'asian-section', 'european-section', 'myrecipes-section', 'about-section'];
    sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) el.style.display = 'none';
    });
    
    if (sectionName === 'home') document.getElementById('home-section').style.display = 'block';
    else if (sectionName === 'khmer') document.getElementById('khmer-section').style.display = 'block';
    else if (sectionName === 'asian') document.getElementById('asian-section').style.display = 'block';
    else if (sectionName === 'european') document.getElementById('european-section').style.display = 'block';
    else if (sectionName === 'myrecipes') document.getElementById('myrecipes-section').style.display = 'block';
    else if (sectionName === 'about') document.getElementById('about-section').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

window.onload = function() {
    displayRecipes();
    showSection('home');
    
    // Set up modal close
    const modal = document.getElementById('recipe-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
};