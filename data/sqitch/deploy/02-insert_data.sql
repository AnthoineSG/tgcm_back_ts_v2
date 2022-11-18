-- Deploy the-good-choice-market:02-insert_data to pg

BEGIN;

SET "client_encoding" TO "UTF8"; -- Fix les accent et les caractères speciaux

INSERT INTO "public"."company"
("name", "city", "address", "phone_number", "email", "siret_number")
VALUES
('La compagnie créole', 'Fort de France', '12 avenue de la banane plantain', '0405957582', 'compagniecreole@plantain.com', 02598423675412),
('La compagnie meubles', 'Bern', '94 boulevard des helvetiques', '0022533835', 'contact@compagniedemeubles.ch', 02945832514789),
('Compa-NY', 'Paris', '15 Rue Rivoli', '0123154589', 'contact-us@compa-ny.com', 02589636658412);

INSERT INTO "public"."brand"
("brand_name", "slogan", "logo", "activity_field", "delivery_cost", "company_id")
VALUES
('Les gourmands verts','tout est bon dans le végétal', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600411/Logo/autres/Les%20gourmands%20verts.png', 'cours de cuisine', 0, 1),
('Yoggy Studio','venez apprendre le yoga', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600037/Logo/autres/Maison%20Marc%C3%A9.png', 'cours de yoga', 0, 1),
('Stone Ceramics','la ceramique c''est fantastique!', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600808/Logo/autres/Stone%20Ceramics.png', 'cours de ceramique', 0, 1),
('WoodFurnitures','des meubles resistants en bois', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600037/Logo/autres/Maison%20Marc%C3%A9.png', 'meubles', 29, 2),
('Les Bomeubles','des meubles beaux et confortables', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659603325/Logo/autres/Capture_d_e%CC%81cran_2022-08-04_a%CC%80_09.50.05_rw8pqk.png', 'meubles', 29, 2),
('Maison Marcé','your hair will be fantastic', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600037/Logo/autres/Maison%20Marc%C3%A9.png', 'soin des cheveux', 2.99, 3),
('Fluxe Beauté','your make-up will be fantastic', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600037/Logo/autres/Maison%20Marc%C3%A9.png', 'maquillage', 2.99, 3),
('Lavish & Squalor','your skin will be fantastic', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1659600034/Logo/autres/Lavish%20et%20Squalor.png', 'soin de la peau', 2.99, 3);

INSERT INTO "public"."user"
("firstname", "lastname", "birthday", "email", "password", "phone_number", "address", "postal_code", "city", "country")
VALUES
('Steven', 'pasparla', '10/01/1974', 'pasparla@wanadoo.fr', '$2a$12$H2ulzRV8dJQBJGxwuJWQve9ED1VLWi32GVcBPSeQbd5z3YY1s52nW', '0697016300', '46 rue de la porte dà coté', '75007', 'Paris', 'France'),
('Georgette', 'labicyclette', '27/05/1966', 'glabicyclette@free.fr', '$2a$12$H2ulzRV8dJQBJGxwuJWQve9ED1VLWi32GVcBPSeQbd5z3YY1s52nW', '0178995412', '3 rue lhonnoré', '13005', 'Marseille', 'France');

INSERT INTO "public"."tva"
("rate")
VALUES
(2.5),
(5.5),
(8.5),
(10),
(20);

INSERT INTO "public"."category"
("name")
VALUES
('alimentation'),
('mode'),
('beaute'),
('loisirs'),
('maison'),
('services');

INSERT INTO "public"."sub_category"
("name","category_id")
VALUES
('Epicerie salée', 1),
('Epicerie sucrée', 1),
('Frais', 1),
('Homme', 2),
('Femme', 2),
('Enfants', 2),
('Soin', 3),
('Maquillage', 3),
('Parfum', 3),
('Compléments alimentaires', 3),
('Poterie', 4),
('Céramique', 4),
('Cuisine', 4),
('Bien-être', 4),
('Meubles', 5),
('Literie', 5),
('Linge de maison', 5),
('Décoration', 5),
('Coiffure', 6),
('Esthétique', 6),
('Sport', 6);

-- Ne pas oublier de changer les prix ht avec de vrai values apres l'apo

INSERT INTO "public"."product"
("name", "description", "image", "location", "barcode", "expiration_date", "height", "width", "depth", "weight", "size", "price_ht", "price_promo", "price_kg", "tva_id", "brand_id", "sub_category_id")
VALUES
-- ? Epicerie salée
('Chips', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667397238/Anthoine%20test%20front/chips.jpg', null, null, '31/12/2023', null, null, null, '100 g', null, 3.99, null, 12, 4, 1, 1),
('Pizza', 'Une superbe pizza', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667397304/Anthoine%20test%20front/pizza.jpg', null, null, '31/12/2023', null, null, null, '250 g', null, 11.00, null, 40, 4, 1, 1),
('Cracker', 'Pti sachet de crackers', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667397339/Anthoine%20test%20front/crackers.jpg', null, null, '31/12/2023', null, null, null, '50 g', null, 2.9, null, 10.00, 4, 1, 1),
-- ? Epicerie sucrée
('Bonbon', 'Pack de bonbon', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667397555/Anthoine%20test%20front/bonbon.jpg', null, null, '31/12/2023', null, null, null, '10 g', null, 3.00, null, 10.00, 4, 1, 2),
('TicTac', 'Pack de ticTac', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667397587/Anthoine%20test%20front/tic-tac.jpg', null, null, '31/12/2023', null, null, null, '5 g', null, 3.90, null, 10.00, 4, 1, 2),
('Sucette', 'Ptit sucette', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667397681/Anthoine%20test%20front/sucette.webp', null, null, '31/12/2023', null, null, null, '2 g', null, 1.00, null, 10.00, 4, 1, 2),
-- ? Frais
('Tofu fumé', 'Pack de tofu', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667397721/Anthoine%20test%20front/tofufume.jpg', null, null, '31/12/2023', null, null, null, '200 g', null, 4.99, null, 13.00, 4, 1, 3),
('Yaourt nature', 'Pack de 6 yaourt nature', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667398036/Anthoine%20test%20front/yaourtNature.png', null, null, '31/12/2023', null, null, null, '10 ml', null, 3.50, null, 10.00, 4, 1, 3),
('Yaourt au soja', 'Pack de 6 yaourt au soja', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667398051/Anthoine%20test%20front/yaourtsoja.png', null, null, '31/12/2023', null, null, null, '10 ml', null, 3.50, null, 10.00, 4, 1, 3),
-- ? Homme
('T-shirt', 'T-shirt moche', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667398125/Anthoine%20test%20front/tshirt.avif', null, '23874635', null, null, null, null, null, 'M', 28.99, null, null, 5, 7, 4),
('String kangourou', 'String kangourou de ouf', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667400152/Anthoine%20test%20front/slip.jpg', null, '9874567823456', null, null, null, null, null, 'L', 44.99, null, null, 5, 7, 4),
('Caleçon', 'Caleçon a fleurs x5', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667399565/Anthoine%20test%20front/cale%C3%A7on.webp', null, '876654876', null, null, null, null, null, 'XL', 5.99, null, null, 5, 7, 4),
-- ? Femme
('Soutien gorge', 'Soutien gorge sans armature en metal', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667399641/Anthoine%20test%20front/soutiengorge.webp', null, '8763546737895', null, null, null, null, null, 'B', 9.99, null, null, 5, 7, 5),
('Culotte', 'Culotte classique', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667399679/Anthoine%20test%20front/culotte.jpg', null, '8763546737895', null, null, null, null, null, 'S', 5.99, null, null, 5, 7, 5),
('Robe', 'Robe a fleurs', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667399806/Anthoine%20test%20front/robe.jpg', null, '8763546737895', null, null, null, null, null, 'M', 45.99, null, null, 5, 7, 5),
-- ? Enfants
('Casquette', 'Casquette a helice', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667399845/Anthoine%20test%20front/Casquette.webp', null, '34567893', null, null, null, null, null, null, 15.00, null, null, 5, 7, 6),
('Sweat', 'Sweat a capuche', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667399877/Anthoine%20test%20front/sweat.jpg', null, '34567893', null, null, null, null, null, 'XS', 55.99, null, null, 5, 7, 6),
('Chaussure', 'Chaussure a fleurs', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667399968/Anthoine%20test%20front/chaussure.jpg', null, '34567893', null, null, null, null, null, '35', 69.99, null, null, 5, 7, 6),
-- ? Soin
('Masque cheveux secs', 'À vous les cheveux hydratés, souples et brillants ! Le HYDRATATION MASK est un véritable 2 en 1, un soin avant votre shampoing et au quotidien en après shampoing. Un vrai concentré d''hydratation et nutrition pour vos cheveux. Finis les cheveux secs et ternes, à vous les cheveux de déesse! Les huiles végétales nourrissent les cheveux et leur apportent douceur et brillance. Son parfum amande 100% naturel inspiré de la colle Cléopâtre vous accompagnera pendant votre routine capillaire et vous transportera en enfance.', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906716/visuels%20produits/Beaut%C3%A9/Maison%20Marc%C3%A9/MasqueCheveux_miniature_rqybee.jpg', null, 9581354265423, null, null, null,null, '250 g', null, 25.00, null, null, 5, 6, 7),
('Rouge à lèvres - Mat', 'C''est un rouge à lèvres mat', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906660/visuels%20produits/Beaut%C3%A9/Fluxe%20beaut%C3%A9/RougeALevres_miniature_xpyicf.jpg', null, 1258665842365, null, null, null, null,'3,5 g', null, 9.9, 9.9, null, 5, 7, 7),
('Fond de teint - couvrant', 'c''est un fond de teint couvrant', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906660/visuels%20produits/Beaut%C3%A9/Fluxe%20beaut%C3%A9/FondDeTeint_miniature_zocjxc.jpg', null, 12548635, null, null, null, null ,'30 ml', null, 19.00, null, null, 5, 7, 7),
('Huile hydratation visage', 'c''est une huile hydratante pour le visage', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906692/visuels%20produits/Beaut%C3%A9/Lavish%20et%20Squalor/huileVisage_miniature_po2zyx.jpg', null, 12548635, null, null, null, null, '30 ml', null, 29.00, null, null, 5, 8, 7),
-- ? Maquillage
('Mascara', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401351/Anthoine%20test%20front/mascara.jpg', null, '34567893', null, null, null, null, '1 g', null, 10.50, null, null, 5, 8, 8),
('Miroir de poche', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401499/Anthoine%20test%20front/miroir.jpg', null, '34567893', null, null, null, null, null, null, 20.90, null, null, 5, 8, 8),
('Crayon lèvres', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401534/Anthoine%20test%20front/crayon-levres.jpg', null, '34567893', null, null, null, null, '2 g', null, 5.99, null, null, 5, 8, 8),
-- ? Parfum
('Hugo Boss', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401567/Anthoine%20test%20front/hugoboss.jpg', null, '34567893', null, null, null, null, '100 ml', null, 65.99, null, 130.00, 5, 8, 9),
('Burburry', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401594/Anthoine%20test%20front/burburry.jpg', null, '34567893', null, null, null, null, '100 ml', null, 65.99, null, 130.00, 5, 8, 9),
('Lancome', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401614/Anthoine%20test%20front/lancome.jpg', null, '34567893', null, null, null, null, '100 ml', null, 65.99, null, 130.00, 5, 8, 9),
-- ? Compléments alimentaires
('Proteines', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401634/Anthoine%20test%20front/prot.webp', null, '34567893', '31/12/2023', null, null, null, '1 kg', null, 10.99, null, 10.99, 2, 1, 10),
('Proteines plus', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401634/Anthoine%20test%20front/prot.webp', null, '34567893', '31/12/2023', null, null, null, '1 kg', null, 10.99, null, 10.99, 2, 1, 10),
('Proteines plusplus', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401634/Anthoine%20test%20front/prot.webp', null, '34567893', '31/12/2023', null, null, null, '1 kg', null, 10.99, null, 10.99, 2, 1, 10),
-- ? Poterie
('Pots', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401656/Anthoine%20test%20front/pots.jpg', null, '34567893', null, '30 cm', '10 cm', null, '60 g', null, 16.90, null, null, 4, 3, 11),
('Pots', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401656/Anthoine%20test%20front/pots.jpg', null, '34567893', null, '30 cm', '10 cm', null, '60 g', null, 16.90, null, null, 4, 3, 11),
('Pots', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401656/Anthoine%20test%20front/pots.jpg', null, '34567893', null, '30 cm', '10 cm', null, '60 g', null, 16.90, null, null, 4, 3, 11),
-- ? Céramique
('Pots', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401656/Anthoine%20test%20front/pots.jpg', null, '34567893', null, '30 cm', '10 cm', null, '60 g', null, 16.90, null, null, 4, 3, 12),
('Pots', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401656/Anthoine%20test%20front/pots.jpg', null, '34567893', null, '30 cm', '10 cm', null, '60 g', null, 16.90, null, null, 4, 3, 12),
('Pots', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401656/Anthoine%20test%20front/pots.jpg', null, '34567893', null, '30 cm', '10 cm', null, '60 g', null, 16.90, null, null, 4, 3, 12),
-- ? Cuisine
('Cours de cuisine végétales', 'Durée 3H. Lors de cet atelier de 3 heures, le/la Chef vous apprend à réaliser 3 salades originales et végétales, à partir de produits non transformés et à indice bas carbone.', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906849/visuels%20produits/Loisirs/Les%20gourmands%20Verts/coursCuisine_miniature_wsv61x.jpg', 'Toulouse', null, null, null, null, null, null, null, 99.00, null, null, 5, 1, 13),
('Cours de cuisine végétales - kids', 'Durée 1H30', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906849/visuels%20produits/Loisirs/Les%20gourmands%20Verts/CoursCuisineKids_miniature_mjiagn.jpg','Toulouse', null, null, null, null, null, null, null, 89.00, 89, null, 2, 1, 13),
('Cours de yoga - débutant', 'Durée 1H', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906835/visuels%20produits/Loisirs/Yoggy%20Studio/CoursYoga_miniature_qhnig7.jpg','Bordeaux', null, null, null, null, null, null, null, 25.00, null, null, 2, 2, 13),
('Cours de céramique', 'Durée 2H30', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906844/visuels%20produits/Loisirs/Stone%20Ceramics/CoursCeramique_miniature_hkennc.jpg','Fort de France', null, null, null, null, null, null, null, 29.00, null, null, 2, 3, 13),
-- ? Bien-être
('Cure', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401704/Anthoine%20test%20front/detente.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 8, 14),
('Regime', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402081/Anthoine%20test%20front/regime.avif', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 8, 14),
('Detente', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667401704/Anthoine%20test%20front/detente.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 8, 14),
-- ? Meubles
('Fauteuil velours - Bleu', 'Enveloppant, confortable et compact, le fauteuil en velours bleu fera chavirer les amateurs d''intérieur art déco et de joli meuble tout simplement. Description Revêtement : Velours 100% polyester Structure en mélèze massif et multiplis', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906793/visuels%20produits/Meubles/Bomeubles/Fauteuil_miniature_ls6aom.jpg', null, null, null, 80, 75, 80, null, null, 149.00, null, null, 5, 5, 15),
('Table et ses deux tabourets', 'En bois', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906769/visuels%20produits/Meubles/Wood%20furnitures/tableBancs_miniature_blr0ua.jpg', null, null, null, 120, 60, 100, null, null, 399.00, 399, null, 5, 4, 15),
('Commode en bois', 'En bois', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906769/visuels%20produits/Meubles/Wood%20furnitures/commodeBois_miniature_ffupid.jpg', null, null, null, 150, 35, 70, null, null, 249.00, null, null, 5, 4, 15),
('Buffet vert', 'De couleur verte', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1658906793/visuels%20produits/Meubles/Bomeubles/buffetVert_miniature_oxbiy5.jpg', null, null, null, 180, 40, 100, null, null, 299.00, null, null, 5, 5, 15),
-- ? Literie
('Drap', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402117/Anthoine%20test%20front/drap.jpg', null, '34567893', null, '2.10 m', '1.70 m', null, null, null, 9.99, null, null, 5, 4, 16),
('Drap', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402117/Anthoine%20test%20front/drap.jpg', null, '34567893', null, '2.10 m', '1.70 m', null, null, null, 9.99, null, null, 5, 4, 16),
('Drap', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402117/Anthoine%20test%20front/drap.jpg', null, '34567893', null, '2.10 m', '1.70 m', null, null, null, 9.99, null, null, 5, 4, 16),
-- ? Linge de maison
('Drap', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402117/Anthoine%20test%20front/drap.jpg', null, '34567893', null, '2.10 m', '1.70 m', null, null, null, 9.99, null, null, 5, 4, 17),
('Drap', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402117/Anthoine%20test%20front/drap.jpg', null, '34567893', null, '2.10 m', '1.70 m', null, null, null, 9.99, null, null, 5, 4, 17),
('Drap', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402117/Anthoine%20test%20front/drap.jpg', null, '34567893', null, '2.10 m', '1.70 m', null, null, null, 9.99, null, null, 5, 4, 17),
-- ? Décoration
('Tableau', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402140/Anthoine%20test%20front/tableau.jpg', null, null, null, '50 cm', '30 cm', null, '1 kg', null, 250.00, null, null, 5, 4, 18),
('Tapis', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402158/Anthoine%20test%20front/tapis.jpg', null, null, null, '2 m', '1.50 m', null, '3 kg', null, 49.90, null, null, 5, 4, 18),
('Rideau', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402175/Anthoine%20test%20front/rideau.jpg', null, null, null, '2.50 m', '1 m', null, '0.8 kg', null, 9.99, null, null, 5, 4, 18),
-- ? Coiffure
('Teinture', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402219/Anthoine%20test%20front/cheveuxbleu.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 6, 19),
('Coupe', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402229/Anthoine%20test%20front/coupe.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 6, 19),
('Lissage', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402247/Anthoine%20test%20front/lissage.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 6, 19),
-- ? Esthétique
('Manucure', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402264/Anthoine%20test%20front/manucure.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 8, 20),
('Spa', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402282/Anthoine%20test%20front/spa.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 8, 20),
('Hammam', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402306/Anthoine%20test%20front/hammam.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 8, 20),
-- ? Sport
('Muscu', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402329/Anthoine%20test%20front/musculation.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 7, 21),
('Course', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402348/Anthoine%20test%20front/course.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 7, 21),
('Escalade', 'Pack de chips', 'https://res.cloudinary.com/drjw8g2yn/image/upload/v1667402367/Anthoine%20test%20front/escalade.jpg', '23 rue de paris', null, null, null, null, null, null, null, 50.99, null, null, 5, 7, 21);

INSERT INTO "public"."buy"
("user_id", "product_id")
VALUES
(1, 1),
(1, 2),
(1, 4),
(2, 3),
(2, 4),
(2, 2);

COMMIT;
