// Import the blended background image for cards
// Use public folder path for Netlify hosting
const cardBg = "/attached_assets/generated_images/nacl about  without bg.png";
// client/src/pages/MenuPage.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navbar";

// Non-veg menu data (sections and items)
const nonVegMenu = [
	{
		section: "Soups – Asian & Indian",
		items: [
			"Chicken Clear Soup",
			"Chicken Tom Yum Soup",
			"Chicken Manchow Soup",
			"Chicken Lemon Coriander Soup",
			"Chicken Jade Soup",
			"Paya Soup",
			"Mutton Kalimirch Shorba",
		],
	},
	{
		section: "Salads",
		items: [
			"Grilled Chicken & Capsicum Salad",
			"Chicken Caesar Salad",
		],
	},
	{
		section: "Tawa & Fry",
		items: [
			"Tawa Fried Surmai",
			"Fish Koliwada",
			"Mutton Chapali Kebab",
			"Gosht Galouti Kebab",
			"Gosht Shammi Kebab",
			"Murgh Kathi Roll",
			"Mutton Keema Kathi Roll",
			"Fried Pomfret",
		],
	},
	{
		section: "Asian Starters",
		items: [
			"Chicken Spring Rolls",
			"Chicken Lollipop",
			"Chicken Chilli",
			"Chicken Manchurian",
			"Chicken 65",
			"Chicken Black Pepper",
			"Chicken Lollipop in Schezwan Sauce",
			"Crispy Chicken in Sambal Oelek Sauce",
			"Chicken Momos (Steam/Fried/Tandoori)",
			"Chilli Prawns",
		],
	},
	{
		section: "Tandoori Starters",
		items: [
			"Murgh Tikka",
			"Murgh Seekh Kebab",
			"Murgh Malai Kebab",
			"Murgh Noorani Tikka",
			"Gulabi Murgh Tikka",
			"Bhardari Murgh Tikka",
			"Murgh Reshmi Kebab",
			"Afghani Tangdi Kebab",
			"Gosht Gilafi Seekh Kebab",
			"Dwari Seekh Kebab",
			"Boti Ke Kebab",
			"Tandoori Murgh",
			"Machli Tikka",
			"Tandoori Jhinga",
			"Tandoori Pomfret",
			"Non-Veg Platter",
		],
	},
	{
		section: "Western Starters",
		items: [
			"BBQ Chicken Wings",
			"KFC Chicken Popcorn",
			"Chicken Mayo Cigar",
			"KFC Fish Popcorn",
			"Fish Fingers",
		],
	},
	{
		section: "Indian Non-Veg Main Course – Chicken",
		items: [
			"Murgh Handi",
			"Murgh Lababdar",
			"Murgh Chingari",
			"Murgh Bhuna Masala",
			"Murgh Dehati",
			"Dhaba Murgh",
			"Kadai Murgh",
			"Murgh Angra",
			"Murgh Tikka Masala",
			"Murgh Makhani (Butter Chicken)",
			"Dum Ka Murgh",
			"Hyderabadi Murgh Tangdi",
		],
	},
	{
		section: "Indian Non-Veg Main Course – Mutton",
		items: [
			"Rara Gosht",
			"Dalcha Gosht",
			"Mutton Rogan Josh",
			"Mutton Chingari",
			"Mutton Angara",
			"Mutton Handi",
			"Mutton Mughlai",
			"Hyderabadi Mutton Keema",
		],
	},
	{
		section: "Machali Ka Swad",
		items: [
			"Surmai Ka Swad",
			"Bengali Fish Curry",
			"Kadai Jhinga Masala",
		],
	},
	{
		section: "Rice & Biryani",
		items: [
			"Anda Biryani",
			"Murgh Tikka Biryani",
			"Hyderabadi Murgh Dum Biryani",
			"Hyderabadi Mutton Dum Biryani",
			"Prawn Biryani",
		],
	},
	{
		section: "Sandwiches & Burgers",
		items: [
			"Egg and Cheese Sandwich",
			"Chicken Cheese Sandwich",
			"Tandoori Chicken Sandwich",
			"BBQ Chicken Sandwich",
			"Peri Peri Chicken Sandwich",
			"NACL Chicken Club Sandwich",
			"Crispy Chicken Burger",
			"Grilled Chicken Burger",
			"Mutton Pattie Burger",
		],
	},
	{
		section: "Pizza & Pasta",
		items: [
			"Chicken Tikka Pizza",
			"Peri Peri Chicken Pizza",
			"Kulhad Chicken Pizza",
			"Chicken Chilli Pizza",
			"Chicken Pasta (Red & White Sauce)",
			"Chicken Burst Pizza",
		],
	},
	{
		section: "Asian Rice & Noodles",
		items: [
			"Smoked Chicken Hakka Noodles",
			"Schezwan Noodles (Chicken, Prawns)",
			"Egg Fried Rice",
			"Hong Kong Chicken Fried Rice",
			"Chicken Fried Rice",
			"Chicken Chilli Fried Rice",
			"Crispy Chicken Rice",
			"Peri Peri Chicken Fried Rice",
			"Chicken Triple Fried Rice",
			"Prawn Fried Rice",
		],
	},
	{
		section: "Indian Desserts",
		items: [
			"Shrikhand",
			"Amrakhand",
			"Gulab Jamun",
			"Rasgulla",
			"Moong Dal Halwa",
			"Rasmalai",
			"Gajar Ka Halwa",
			"Samudra Bhog",
			"Rabdi",
		],
	},
	{
		section: "Western Desserts",
		items: [
			"Baked Yogurt",
			"Tiramisu",
			"Choco Lava Cake",
			"Baked Cheese Cake",
			"Nutella Cheese Cake",
			"Blueberry Parfait",
			"Citrus Panna Cotta (Sugar Free)",
			"Brownie Ice-cream Cake",
			"Chocolate Mousse Sandwich",
			"Chocolate Brownie with Vanilla Ice Cream",
			"Apple Pie with Vanilla Ice Cream",
			"Double Chocolate Mousse Cake",
			"Dark Chocolate Mocha Fudge",
			"Lotus Biscoff Cheese Cake",
		],
	},
	{
		section: "Mocktails & Drinks",
		items: [
			"Mint Lime Soda",
			"Jal Jeera",
			"Lassi (Sweet / Salted)",
			"Cranberry Mojito",
			"Virgin Mojito",
			"Chili Gauva Martini",
			"Fruit Punch",
			"Milkshakes (Mango, Kiwi, Strawberry, Chocolate, Oreo)",
		],
	},
	{
		section: "Fresh Fruit Juices",
		items: [
			"Watermelon Juice",
			"Pineapple Juice",
			"Seasonal Fruits Juice",
			"Pomegranate Juice",
			"Orange Juice",
			"ABC Juice (Apple, Beetroot, Carrot)",
		],
	},
];

const vegMenu = [
	{
		section: " Starters & Appetizers",
		items: [
			"Fried Garlic Chana",
			"Hara Bhara Kebab",
			"Chatpata Aloo",
			"Paneer Pakoda",
			"Paneer Corn Tikki",
			
			"Papad Fry",
			"Masala Papad",
			"Nagali Papad",
		],
	},
	{
		section: " Soups",
		items: [
			"Tomato Dhaniya Shorba",
			"Tarkari Shorba",
			"Lemon Coriander Soup",
			"Veg Hot & Sour",
			"Veg Manchow Soup",
			"Tom Yum Soup",
			"Tomato Basil Soup",
			"Soupy Noodles",
		],
	},
	{
		section: " Salads",
		items: [
			"Green Garden Salad",
			"Corn & Paneer Capsicum Salad",
			"Steamed Sweet Corn Salad",
			"Caesar Salad",
		],
	},
	{
		section: " Tandoori Starters",
		items: [
			"Tandoori Vegetable",
			"Mix Veg Seekh Kebab",
			"Makai Malai Sheek Kebab",
			"Awadhi Bharwan Aloo",
			"Malai Paneer Tikka",
			"Paneer Tikka Amritsari",
			"Noorani Paneer Tikka",
			"Paneer Kali Mirch Tikka",
			"Hyderabadi Paneer Tikka",
			"Paneer Papad Roll",
			"Sufyani Paneer Tikka",
			"Paneer Kathi Roll",
			"Tandoori Platter (Combination of items)",
		],
	},
	{
		section: " Asian Starters",
		items: [
			"Maggie Masala",
			"Chilli Garlic Maggie",
			"Veg Manchurian",
			"Vegetable Spring Rolls",
			"Honey Chilli Potato",
			"Crispy Corn",
			"Schezwan Fried Babycorn",
			"Paneer 65",
			"Chilli Paneer",
			"Paneer In Black Pepper Sauce",
			"Crispy Paneer In Sambal Oelek Sauce",
			"Veg Momos (Steam/Fried/Tandoori)",
			"Chinese Sizzler Combo",
		],
	},
	{
		section: " South Indian Corner (10:30 AM to 7 PM)",
		items: [
			"Plain Uttapam",
			"Onion Uttapam",
			"Masala Uttapam",
			"Plain Dosa",
			"Masala Dosa",
			"Mysore Masala Dosa",
			"Schezwan Masala Dosa",
			"Paneer Dosa",
		],
	},
	{
		section: " Western Starters",
		items: [
			"Masala French Fries",
			"Kulhad Pizza",
			"Corn Cheese Balls",
			"Vegetable Croquettes",
			"Jalapeno Cheese Cigar",
		],
	},
	{
		section: " Main Course – Indian",
		items: [
			"Aloo Matar",
			"Kurkuri Bhindi",
			"Rajma Masala",
			"Dum Subz Handi",
			"Dum Aloo Banarasi",
			"Veg Angara",
			"Veg Chingari",
			"Jahangiri Kofta",
			"Malai Kofta",
			"Matar Paneer",
			"Paneer Lababdar",
			"Paneer Makhani (Butter Paneer)",
			"Paneer Khurchan",
			"Paneer Tikka Masala",
			"Kadhai Paneer",
			"Kaju Paneer",
			"Paneer Chingari",
			"Paneer Angara",
			"Palak Paneer",
			"Mushroom Cheese Masala",
			"Pav Bhaji",
		],
	},
	{
		section: " Burhanpur Ka Sawad",
		items: ["Sev Tomato Ki Subzi", "Kaju Curry"],
	},
	{
		section: " Dal Varieties",
		items: [
			"Sadabhar Dal (Plain Dal)",
			"Dal Double Tadka",
			"Dal Dhaba",
			"Dal Makhani",
			"Dal Palak",
			"Deg Wali Dal",
		],
	},
	{
		section: " Roti & Breads",
		items: [
			"Tandoori Roti Plain",
			"Tandoori Roti Butter",
			"Missi Roti / Jawar / Bajra",
			"Laccha Paratha",
			"Plain Paratha",
			"Rumali Roti",
			"Tandoori Naan Plain",
			"Tandoori Naan Butter",
			"Garlic Naan",
			"Cheese Chilli Garlic Naan",
			"Cheese Kulcha",
			"Vegetable Kulcha",
			"Paneer Kulcha",
			"Aloo Kulcha",
			"Roti Ki Tokri (Combination of items)",
		],
	},
	{
		section: " Rice & Noodles – Indian Style",
		items: [
			"Plain Rice",
			"Jeera Rice",
			"Vegetable Pulao",
			"Vegetable Biryani",
			"Paneer Tikka Biryani",
			"Lapeta",
		],
	},
	{
		section: "Rice & Noodles – Asian Style",
		items: [
			"Veg Noodles",
			"Schezwan Noodles",
			"Veg Fried Rice",
			"Schezwan Fried Rice",
			"Burnt Chilli Garlic Rice",
			"Thai Basil Fried Rice",
			"Manchurian Fried Rice",
			"Vegetable Triple Fried Rice",
			"Vegetable Crispy Rice",
		],
	},
	{
		section: " Raita & Curd",
		items: [
			"Vegetable Raita",
			"Boondi Raita",
			"Mix Fruits Raita",
			"Pineapple Raita",
			"Plain Curd",
		],
	},
	{
		section: " Indian Desserts",
		items: [
			"Shrikhand",
			"Amrakhand",
			"Gulab Jamun",
			"Rasgulla",
			"Moong Dal Halwa",
			"Rasmalai",
			"Gajar Ka Halwa",
			"Samudra Bhog",
			"Rabdi",
		],
	},
	{
		section: " Western Desserts",
		items: [
			"Baked Yogurt",
			"Tiramisu",
			"Choco Lava Cake",
			"Baked Cheese Cake",
			"Nutella Cheese Cake",
			"Blueberry Parfait",
			"Citrus Panna Cotta (Sugar Free)",
			"Brownie Ice-cream Cake",
			"Chocolate Mousse Sandwich",
			"Chocolate Brownie With Vanilla Ice Cream",
			"Apple Pie With Vanilla Ice Cream",
			"Double Chocolate Mousse Cake",
			"Dark Chocolate Mocha Fudge",
			"Lotus Biscoff Cheese Cake",
		],
	},
	{
		section: "Sandwiches & Burgers",
		items: [
			"Bombay Sandwich",
			"Veg Masala Cheese Sandwich",
			"Corn & Capsicum Sandwich",
			"Peri Peri Paneer Sandwich",
			"Paneer BBQ Sandwich",
			"Mix Veg Pattie Burger",
			"Margherita Pizza",
			"Paneer Tikka Burger",
			"Veg Cheese Pizza",
			"Paneer Tikka Pizza",
			"Cajun Spiced Paneer Pizza",
			"Chilli Paneer Pizza",
		],
	},
	{
		section: "Pasta & Waffles",
		items: [
			"Pasta (Red & White Sauce)",
			"Waffles (Served with Nutella Maple Syrup)",
			"Pancakes (Served with Nutella Whipped Cream)",
		],
	},
	{
		section: " Mocktails & Drinks",
		items: [
			"Mint Lime Soda",
			"Jal Jeera",
			"Lassi (Sweet / Salted)",
			"Cranberry Mojito",
			"Virgin Mojito",
			"Chili Gauva Martini",
			"Fruit Punch",
			"Milkshakes (Mango, Kiwi, Strawberry, Chocolate, Oreo)",
		],
	},
	{
		section: " Fresh Fruit Juices",
		items: [
			"Watermelon Juice",
			"Pineapple Juice",
			"Seasonal Fruits Juice",
			"Pomegranate Juice",
			"Orange Juice",
			"ABC Juice (Apple, Beetroot, Carrot)",
		],
	},
	{
		section: "Tea & Coffee",
		items: [
			"Vision Masala Chai",
			"Indian Style Coffee",
			"Black Coffee (Espresso)",
			"Cappuccino",
			"Latte",
			"Cold Coffee",
		],
	},
];


const placeholderImg = "https://placehold.co/120x120?text=Image";

// Map of veg item names to image paths
const vegImages: Record<string, string> = {
	"Maggie Masala": "/assets/Veg Menu/masala_maggie.jpg",
	"Chilli Garlic Maggie": "/assets/Veg Menu/garlic_chilli_magiie.jpg",
	"Chocolate Brownie With Vanilla Ice Cream": "/assets/Veg Menu/Chocolate Brownie with Vanilla Ice Cream.jpg",
	"Apple Pie With Vanilla Ice Cream": "/assets/Veg Menu/Apple Pie with Vanilla Ice Cream.jpg",
	"Black Coffee (Espresso)": "/assets/Veg Menu/Black Coffee (Espresso).jpg",
	"Indian Style Coffee": "/assets/Veg Menu/Indian Style Coffee.jpg",
	"Vision Masala Chai": "/assets/Veg Menu/Vision Masala Chai.jpg",
	"Cold Coffee": "/assets/Veg Menu/Cold Coffee.jpg",
	"Latte": "/assets/Veg Menu/Latte.jpg",
	"Cappuccino": "/assets/Veg Menu/Cappuccino.jpg",
	"Margherita Pizza": "/assets/Veg Menu/Margherita Pizza.jpg",
	"Mix Veg Pattie Burger": "/assets/Veg Menu/Mix Veg Pattie Burger.jpg",
	"Paneer BBQ Sandwich": "/assets/Veg Menu/Paneer BBQ Sandwich.jpg",
	"Peri Peri Paneer Sandwich": "/assets/Veg Menu/Peri Peri Paneer Sandwich.jpg",
	"Corn & Capsicum Sandwich": "/assets/Veg Menu/Corn & Capsicum Sandwich.jpg",
	"Veg Masala Cheese Sandwich": "/assets/Veg Menu/Veg Masala Cheese Sandwich.jpg",
	"Bombay Sandwich": "/assets/Veg Menu/Bombay Sandwich.jpg",
	"Plain Curd": "/assets/Veg Menu/Plain Curd.jpg",
	"Pineapple Raita": "/assets/Veg Menu/Pineapple Raita.jpg",
	"Mix Fruits Raita": "/assets/Veg Menu/Mix Fruits Raita.jpg",
	"Boondi Raita": "/assets/Veg Menu/Boondi Raita.jpg",
	"Vegetable Raita": "/assets/Veg Menu/Vegetable Raita.jpg",
	"Vegetable Crispy Rice": "/assets/Veg Menu/Vegetable Crispy Rice.jpg",
	"Vegetable Triple Fried Rice": "/assets/Veg Menu/Vegetable Triple Fried Rice.jpg",
	"Manchurian Fried Rice": "/assets/Veg Menu/Manchurian Fried Rice.jpg",
	"Thai Basil Fried Rice": "/assets/Veg Menu/Thai Basil Fried Rice.jpg",
	"Burnt Chilli Garlic Rice": "/assets/Veg Menu/Burnt Chilli Garlic Rice.jpg",
	"Schezwan Fried Rice": "/assets/Veg Menu/Schezwan Fried Rice.jpg",
	"Veg Fried Rice": "/assets/Veg Menu/Veg Fried Rice.jpg",
	"Schezwan Noodles": "/assets/Veg Menu/Schezwan Noodles.jpg",
	"Veg Noodles": "/assets/Veg Menu/Veg Noodles.jpg",
	"Lapeta": "/assets/Veg Menu/Lapeta.jpg",
	"Paneer Tikka Biryani": "/assets/Veg Menu/Paneer Tikka Biryani.jpg",
	"Vegetable Biryani": "/assets/Veg Menu/Vegetable Biryani.jpg",
	"Vegetable Pulao": "/assets/Veg Menu/Vegetable Pulao.jpg",
	"Jeera Rice": "/assets/Veg Menu/Jeera Rice.jpg",
	"Pancakes (Served with Nutella Whipped Cream)": "/assets/Veg Menu/Pancakes (Served with Nutella Whipped Cream).jpg",
	"Waffles (Served with Nutella Maple Syrup)": "/assets/Veg Menu/Waffles (Served with Nutella Maple Syrup).jpg",
	"Pasta (Red & White Sauce)": "/assets/Veg Menu/Pasta (Red & White Sauce).jpg",
	"Chilli Paneer Pizza": "/assets/Veg Menu/Chilli Paneer Pizza.jpg",
	"Cajun Spiced Paneer Pizza": "/assets/Veg Menu/Cajun Spiced Paneer Pizza.jpg",
	"Paneer Tikka Pizza": "/assets/Veg Menu/Paneer Tikka Pizza.jpg",
	"Veg Cheese Pizza": "/assets/Veg Menu/Veg Cheese Pizza.jpg",
	"Paneer Tikka Burger": "/assets/Veg Menu/Paneer Tikka Burger.jpg",
	"Malai Paneer Tikka": "/assets/Veg Menu/Malai Paneer Tikka.jpg",
	"Awadhi Bharwan Aloo": "/assets/Veg Menu/Awadhi Bharwan Aloo.jpg",
	"Makai Malai Sheek Kebab": "/assets/Veg Menu/Makai Malai Sheek Kebab.jpg",
	"Mix Veg Seekh Kebab": "/assets/Veg Menu/Mix Veg Seekh Kebab.jpg",
	"Tandoori Vegetable": "/assets/Veg Menu/Tandoori Vegetable.jpg",
	"Caesar Salad": "/assets/Veg Menu/Caesar Salad.jpg",
	"Steamed Sweet Corn Salad": "/assets/Veg Menu/Steamed Sweet Corn Salad.jpg",
	"Corn & Paneer Capsicum Salad": "/assets/Veg Menu/Corn & Paneer Capsicum Salad.jpg",
	"Green Garden Salad": "/assets/Veg Menu/Green Garden Salad.jpg",
	"Soupy Noodles": "/assets/Veg Menu/Soupy Noodles.jpg",
	"Tomato Basil Soup": "/assets/Veg Menu/Tomato Basil Soup.jpg",
	"Tom Yum Soup": "/assets/Veg Menu/Tom Yum Soup.jpg",
	"Veg Manchow Soup": "/assets/Veg Menu/Veg Manchow Soup.jpg",
	"Veg Hot & Sour": "/assets/Veg Menu/Veg Hot & Sour.jpg",
	"Lemon Coriander Soup": "/assets/Veg Menu/Lemon Coriander Soup.jpg",
	"Tarkari Shorba": "/assets/Veg Menu/Tarkari Shorba.jpg",
	"Tomato Dhaniya Shorba": "/assets/Veg Menu/Tomato Dhaniya Shorba.jpg",
	"Nagali Papad": "/assets/Veg Menu/Nagali Papad.jpg",
	"Masala Papad": "/assets/Veg Menu/Masala Papad.jpg",
	"Papad Fry": "/assets/Veg Menu/Papad Fry.jpg",
	"Paneer Corn Tikki": "/assets/Veg Menu/Paneer Corn Tikki.jpg",
	"Paneer Pakoda": "/assets/Veg Menu/Paneer Pakoda.jpg",
	"Chatpata Aloo": "/assets/Veg Menu/Chatpata Aloo.jpg",
	"Hara Bhara Kebab": "/assets/Veg Menu/Hara Bhara Kebab.jpg",
	"Fried Garlic Chana": "/assets/Veg Menu/Fried Garlic Chana.jpg",
	"Nutella Cheese Cake": "/assets/Veg Menu/Nutella Cheese Cake.jpg",
	"Baked Cheese Cake": "/assets/Veg Menu/Baked Cheese Cake.jpg",
	"Choco Lava Cake": "/assets/Veg Menu/Choco Lava Cake.jpg",
	"Tiramisu": "/assets/Veg Menu/Tiramisu.jpg",
	"Baked Yogurt": "/assets/Veg Menu/Baked Yogurt.jpg",
	"Samudra Bhog": "/assets/Veg Menu/Samudra Bhog.jpg",
	"Gajar Ka Halwa": "/assets/Veg Menu/Gajar Ka Halwa.jpg",
	"Rasmalai": "/assets/Veg Menu/Rasmalai.jpg",
	"Moong Dal Halwa": "/assets/Veg Menu/Moong Dal Halwa.jpg",
	"Rasgulla": "/assets/Veg Menu/Rasgulla.jpg",
	"Gulab Jamun": "/assets/Veg Menu/Gulab Jamun.jpg",
	"Shrikhand": "/assets/Veg Menu/Shrikhand.jpg",
	"Tandoori Platter (Combination of items)": "/assets/Veg Menu/Tandoori Platter (Combination of items).jpg",
	"Paneer Kathi Roll": "/assets/Veg Menu/Paneer Kathi Roll.jpg",
	"Sufyani Paneer Tikka": "/assets/Veg Menu/Sufyani Paneer Tikka.jpg",
	"Paneer Papad Roll": "/assets/Veg Menu/Paneer Papad Roll.jpg",
	"Hyderabadi Paneer Tikka": "/assets/Veg Menu/Hyderabadi Paneer Tikka.jpg",
	"Paneer Kali Mirch Tikka": "/assets/Veg Menu/Paneer Kali Mirch Tikka.jpg",
	"Noorani Paneer Tikka": "/assets/Veg Menu/Noorani Paneer Tikka.jpg",
	"Paneer Tikka Amritsari": "/assets/Veg Menu/Paneer Tikka Amritsari.jpg",
	"Orange Juice": "/assets/Veg Menu/Orange Juice.jpg",
	"Seasonal Fruits Juice": "/assets/Veg Menu/Seasonal Fruits Juice.jpg",
	"Milkshakes (Mango, Kiwi, Strawberry, Chocolate, Oreo)": "/assets/Veg Menu/Milkshakes (Mango, Kiwi, Strawberry, Chocolate, Oreo).jpg",
	"Chili Gauva Martini": "/assets/Veg Menu/Chili Gauva Martini.jpg",
	"Virgin Mojito": "/assets/Veg Menu/Virgin Mojito.jpg",
	"Cranberry Mojito": "/assets/Veg Menu/Cranberry Mojito.jpg",
	"Lassi (Sweet / Salted)": "/assets/Veg Menu/Lassi (Sweet _Salted).jpg",
	"Jal Jeera": "/assets/Veg Menu/Jal Jeera.jpg",
	"Mint Lime Soda": "/assets/Veg Menu/Mint Lime Soda.jpg",
	"Apple Pie with Vanilla Ice Cream": "/assets/Veg Menu/Apple Pie with Vanilla Ice Cream.jpg",
	"Chocolate Brownie with Vanilla Ice Cream": "/assets/Veg Menu/Chocolate Brownie with Vanilla Ice Cream.jpg",
	"Chocolate Mousse Sandwich": "/assets/Veg Menu/Chocolate Mousse Sandwich.jpg",
	"Citrus Panna Cotta (Sugar Free)": "/assets/Veg Menu/Citrus Panna Cotta (Sugar Free).jpg",
	"Blueberry Parfait": "/assets/Veg Menu/Blueberry Parfait.jpg",
	"Brownie Ice-cream Cake": "/assets/Veg Menu/Brownie Ice-cream Cake.jpg",
	"Dark Chocolate Mocha Fudge": "/assets/Veg Menu/Dark Chocolate Mocha Fudge.jpg",
	"Double Chocolate Mousse Cake": "/assets/Veg Menu/Double Chocolate Mousse Cake.jpg",
	"Lotus Biscoff Cheese Cake": "/assets/Veg Menu/Lotus Biscoff Cheese Cake.jpg",
	"Fruit Punch": "/assets/Veg Menu/Fruit Punch.jpg",
	"Pineapple Juice": "/assets/Veg Menu/Pineapple Juice.jpg",
	"Watermelon Juice": "/assets/Veg Menu/Watermelon Juice.jpg",
	"Pomegranate Juice": "/assets/Veg Menu/Pomegranate Juice.jpg",
	"ABC Juice (Apple, Beetroot, Carrot)": "/assets/Veg Menu/ABC Juice (Apple, Beetroot, Carrot).jpg",
	"Plain Dosa": "/assets/Veg Menu/Plain Dosa.jpg",
	"Plain Paratha": "/assets/Veg Menu/Plain Paratha.jpg",
	"Plain Uttapam": "/assets/Veg Menu/Plain Uttapam.jpg",
	"Rajma Masala": "/assets/Veg Menu/Rajma Masala.jpg",
	"Roti Ki Tokri (Combination of items)": "/assets/Veg Menu/Roti Ki Tokri (Combination of items).jpg",
	"Rumali Roti": "/assets/Veg Menu/Rumali Roti.jpg",
	"Sadabhar Dal (Plain Dal)": "/assets/Veg Menu/Sadabhar Dal (Plain Dal).jpg",
	"Schezwan Fried Babycorn": "/assets/Veg Menu/Schezwan Fried Babycorn.jpg",
	"Schezwan Masala Dosa": "/assets/Veg Menu/Schezwan Masala Dosa.jpg",
	"Sev Tomato Ki Subzi": "/assets/Veg Menu/Sev Tomato Ki Subzi.jpg",
	"Tandoori Naan Butter": "/assets/Veg Menu/Tandoori Naan Butter.jpg",
	"Tandoori Naan Plain": "/assets/Veg Menu/Tandoori Naan Plain.jpg",
	"Tandoori Roti Butter": "/assets/Veg Menu/Tandoori Roti Butter.jpg",
	"Tandoori Roti Plain": "/assets/Veg Menu/Tandoori Roti Plain.jpg",
	"Veg Angara": "/assets/Veg Menu/Veg Angara.jpg",
	"Veg Chingari": "/assets/Veg Menu/Veg Chingari.jpg",
	"Veg Manchurian": "/assets/Veg Menu/Veg Manchurian.jpg",
	"Veg Momos (Steam/Fried/Tandoori)": "/assets/Veg Menu/Veg Momos.jpg",
	"Vegetable Croquettes": "/assets/Veg Menu/Vegetable Croquettes.jpg",
	"Vegetable Kulcha": "/assets/Veg Menu/Vegetable Kulcha.jpg",
	"Vegetable Spring Rolls": "/assets/Veg Menu/Vegetable Spring Rolls.jpg",
	"Aloo Kulcha": "/assets/Veg Menu/Aloo Kulcha.jpg",
	"Aloo Matar": "/assets/Veg Menu/Aloo Matar.jpg",
	"Rabdi": "/assets/Veg Menu/Rabdi.jpg",
	"Amrakhand": "/assets/Veg Menu/Amrakhand.jpg",
	"Paneer Dosa": "/assets/Veg Menu/Paneer Dosa.jpg",
	"Paneer In Black Pepper Sauce": "/assets/Veg Menu/Paneer In Black Pepper Sauce.jpg",
	"Paneer Khurchan": "/assets/Veg Menu/Paneer Khurchan.jpg",
	"Paneer Kulcha": "/assets/Veg Menu/Paneer Kulcha.jpg",
	"Paneer Lababdar": "/assets/Veg Menu/Paneer Lababdar.jpg",
	"Paneer Makhani (Butter Paneer)": "/assets/Veg Menu/Paneer Makhani (Butter Paneer).jpg",
	"Paneer Tikka Masala": "/assets/Veg Menu/Paneer Tikka Masala.jpg",
	"Pav Bhaji": "/assets/Veg Menu/Pav Bhaji.jpg",
	"Crispy Paneer In Sambal Oelek Sauce": "/assets/Veg Menu/Crispy Paneer In Sambal Oelek Sauce.jpg",
	"Dal Dhaba": "/assets/Veg Menu/Dal Dhaba.jpg",
	"Dal Double Tadka": "/assets/Veg Menu/Dal Double Tadka.jpg",
	"Dal Makhani": "/assets/Veg Menu/Dal Makhani.jpg",
	"Dal Palak": "/assets/Veg Menu/Dal Palak.jpg",
	"Deg Wali Dal": "/assets/Veg Menu/Deg Wali Dal.jpg",
	"Dum Aloo Banarasi": "/assets/Veg Menu/Dum Aloo Banarasi.jpg",
	"Dum Subz Handi": "/assets/Veg Menu/Dum Subz Handi.jpg",
	"Garlic Naan": "/assets/Veg Menu/Garlic Naan.jpg",
	"garlic_chilli_magiie": "/assets/Veg Menu/garlic_chilli_magiie.jpg",
	"Honey Chilli Potato": "/assets/Veg Menu/Honey Chilli Potato.jpg",
	"Jahangiri Kofta": "/assets/Veg Menu/Jahangiri Kofta.jpg",
	"Jalapeno Cheese Cigar": "/assets/Veg Menu/Jalapeno Cheese Cigar.jpg",
	"Kadhai Paneer": "/assets/Veg Menu/Kadhai Paneer.jpg",
	"Kaju Curry": "/assets/Veg Menu/Kaju Curry.jpg",
	"Kaju Paneer": "/assets/Veg Menu/Kaju Paneer.jpg",
	"Kulhad Pizza": "/assets/Veg Menu/Kulhad Pizza.jpg",
	"Kurkuri Bhindi": "/assets/Veg Menu/Kurkuri Bhindi.jpg",
	"Laccha Paratha": "/assets/Veg Menu/Laccha Paratha.jpg",
	"Malai Kofta": "/assets/Veg Menu/Malai Kofta.jpg",
	"Masala Dosa": "/assets/Veg Menu/Masala Dosa.jpg",
	"Masala French Fries": "/assets/Veg Menu/Masala French Fries.jpg",
	"Masala Uttapam": "/assets/Veg Menu/Masala Uttapam.jpg",
	"masala_maggie": "/assets/Veg Menu/masala_maggie.jpg",
	"Matar Paneer": "/assets/Veg Menu/Matar Paneer.jpg",
	"Missi Roti / Jawar / Bajra": "/assets/Veg Menu/Missi Roti Jawar Bajra.jpg",
	"Mushroom Cheese Masala": "/assets/Veg Menu/Mushroom Cheese Masala.jpg",
	"Mysore Masala Dosa": "/assets/Veg Menu/Mysore Masala Dosa.jpg",
	"Onion Uttapam": "/assets/Veg Menu/Onion Uttapam.jpg",
	"Palak Paneer": "/assets/Veg Menu/Palak Paneer.jpg",
	"Paneer 65": "/assets/Veg Menu/Paneer 65.jpg",
	"Paneer Angara": "/assets/Veg Menu/Paneer Angara.jpg",
	"Paneer Chingari": "/assets/Veg Menu/Paneer Chingari.jpg",
	"Plain Rice": "/assets/Veg Menu/Plain Rice.jpg",
	"Cheese Chilli Garlic Naan": "/assets/Veg Menu/Cheese Chilli Garlic Naan.jpg",
	"Cheese Kulcha": "/assets/Veg Menu/Cheese Kulcha.jpg",
	"Chilli Paneer": "/assets/Veg Menu/Chilli Paneer.jpg",
	"Chinese Sizzler Combo": "/assets/Veg Menu/Chinese Sizzler Combo.jpg",
	"Corn Cheese Balls": "/assets/Veg Menu/Corn Cheese Balls.jpg",
	"Crispy Corn": "/assets/Veg Menu/Crispy Corn.jpg",
};

// Map of non-veg item names to image paths
// Map of non-veg item names to image paths
const nonVegImages: Record<string, string> = {
	"Fried Pomfret": "/assets/nonveg menu/Fried Pomfret.jpg",
	"Chicken Caesar Salad": "/assets/nonveg menu/Chicken Caesar Salad.jpg",
	"Grilled Chicken & Capsicum Salad": "/assets/nonveg menu/Grilled Chicken & Capsicum Salad.jpg",
	"Mutton Kalimirch Shorba": "/assets/nonveg menu/Mutton Kalimirch Shorba.jpg",
	"Paya Soup": "/assets/nonveg menu/Paya Soup.jpg",
	"Chicken Jade Soup": "/assets/nonveg menu/Chicken Jade Soup.jpg",
	"Chicken Lemon Coriander Soup": "/assets/nonveg menu/Chicken Lemon Coriander Soup.jpg",
	"Chicken Manchow Soup": "/assets/nonveg menu/Chicken Manchow Soup.jpg",
	"Chicken Tom Yum Soup": "/assets/nonveg menu/Chicken Tom Yum Soup.jpg",
	"Chicken Clear Soup": "/assets/nonveg menu/Chicken Clear Soup.jpg",
	"Chilli Prawns": "/assets/nonveg menu/Chilli Prawns.jpg",
	"Chicken Momos (Steam/Fried/Tandoori)": "/assets/nonveg menu/Chicken Momos.jpg",
	"Crispy Chicken in Sambal Oelek Sauce": "/assets/nonveg menu/Crispy Chicken in Sambal Oelek Sauce.jpg",
	"Chicken Lollipop in Schezwan Sauce": "/assets/nonveg menu/Chicken Lollipop in Schezwan Sauce.jpg",
	"Chicken Black Pepper": "/assets/nonveg menu/Chicken Black Pepper.jpg",
	"Chicken 65": "/assets/nonveg menu/Chicken 65.jpg",
	"Chicken Manchurian": "/assets/nonveg menu/Chicken Manchurian.jpg",
	"Chicken Chilli": "/assets/nonveg menu/Chicken Chilli.jpg",
	"Chicken Lollipop": "/assets/nonveg menu/Chicken Lollipop.jpg",
	"Chicken Spring Rolls": "/assets/nonveg menu/Chicken Spring Rolls.jpg",
	"Mutton Keema Kathi Roll": "/assets/nonveg menu/Mutton Keema Kathi Roll.jpg",
	"Murgh Kathi Roll": "/assets/nonveg menu/Murgh Kathi Roll.jpg",
	"Gosht Shammi Kebab": "/assets/nonveg menu/Gosht Shammi Kebab.jpg",
	"Gosht Galouti Kebab": "/assets/nonveg menu/Gosht Galouti Kebab.jpg",
	"Mutton Chapali Kebab": "/assets/nonveg menu/Mutton Chapali Kebab.jpg",
	"Fish Koliwada": "/assets/nonveg menu/Fish Koliwada.jpg",
	"Tawa Fried Surmai": "/assets/nonveg menu/Tawa Fried Surmai.jpg",
	"Tandoori Pomfret": "/assets/nonveg menu/Tandoori Pomfret.jpg",
	"Tandoori Jhinga": "/assets/nonveg menu/Tandoori Jhinga.jpg",
	"Machli Tikka": "/assets/nonveg menu/Machli Tikka.jpg",
	"Tandoori Murgh": "/assets/nonveg menu/Tandoori Murgh.jpg",
	"Boti Ke Kebab": "/assets/nonveg menu/Boti Ke Kebab.jpg",
	"Dwari Seekh Kebab": "/assets/nonveg menu/Dwari Seekh Kebab.jpg",
	"Gosht Gilafi Seekh Kebab": "/assets/nonveg menu/Gosht Gilafi Seekh Kebab.jpg",
	"Afghani Tangdi Kebab": "/assets/nonveg menu/Afghani Tangdi Kebab.jpg",
	"Murgh Reshmi Kebab": "/assets/nonveg menu/Murgh Reshmi Kebab.jpg",
	"Bhardari Murgh Tikka": "/assets/nonveg menu/Bhardari Murgh Tikka.jpg",
	"Gulabi Murgh Tikka": "/assets/nonveg menu/Gulabi Murgh Tikka.jpg",
	"Murgh Noorani Tikka": "/assets/nonveg menu/Murgh Noorani Tikka.jpg",
	"Murgh Malai Kebab": "/assets/nonveg menu/Murgh Malai Kebab.jpg",
	"Murgh Seekh Kebab": "/assets/nonveg menu/Murgh Seekh Kebab.jpg",
	"Murgh Tikka": "/assets/nonveg menu/Murgh Tikka.jpg",
	"Fish Fingers": "/assets/nonveg menu/Fish Fingers.jpg",
	"KFC Fish Popcorn": "/assets/nonveg menu/KFC Fish Popcorn.jpg",
	"Chicken Mayo Cigar": "/assets/nonveg menu/Chicken Mayo Cigar.jpg",
	"KFC Chicken Popcorn": "/assets/nonveg menu/KFC Chicken Popcorn.jpg",
	"BBQ Chicken Wings": "/assets/nonveg menu/BBQ Chicken Wings.jpg",
		"Non-Veg Platter": "/assets/nonveg menu/Non-Veg Platter.jpg",
		"Hyderabadi Murgh Tangdi": "/assets/nonveg menu/Hyderabadi Murgh Tangdi.jpg",
		"Dum Ka Murgh": "/assets/nonveg menu/Dum Ka Murgh.jpg",
		"Murgh Makhani (Butter Chicken)": "/assets/nonveg menu/Murgh Makhani (Butter Chicken).jpg",
		"Murgh Tikka Masala": "/assets/nonveg menu/Murgh Tikka Masala.jpg",
		"Murgh Angra": "/assets/nonveg menu/Murgh Angra.jpg",
		"Kadai Murgh": "/assets/nonveg menu/Kadai Murgh.jpg",
		"Dhaba Murgh": "/assets/nonveg menu/Dhaba Murgh.jpg",
		"Murgh Dehati": "/assets/nonveg menu/Murgh Dehati.jpg",
		"Murgh Bhuna Masala": "/assets/nonveg menu/Murgh Bhuna Masala.jpg",
		"Murgh Chingari": "/assets/nonveg menu/Murgh Chingari.jpg",
		"Murgh Lababdar": "/assets/nonveg menu/Murgh Lababdar.jpg",
		"Murgh Handi": "/assets/nonveg menu/Murgh Handi.jpg",
		"Kadai Jhinga Masala": "/assets/nonveg menu/Kadai Jhinga Masala.jpg",
		"Bengali Fish Curry": "/assets/nonveg menu/Bengali Fish Curry.jpg",
		"Surmai Ka Swad": "/assets/nonveg menu/Surmai Ka Swad.jpg",
		"Hyderabadi Mutton Keema": "/assets/nonveg menu/Hyderabadi Mutton Keema.jpg",
		"Mutton Mughlai": "/assets/nonveg menu/Mutton Mughlai.jpg",
		"Mutton Handi": "/assets/nonveg menu/Mutton Handi.jpg",
		"Mutton Angara": "/assets/nonveg menu/Mutton Angara.jpg",
		"Mutton Chingari": "/assets/nonveg menu/Mutton Chingari.jpg",
		"Mutton Rogan Josh": "/assets/nonveg menu/Mutton Rogan Josh.jpg",
		"Dalcha Gosht": "/assets/nonveg menu/Dalcha Gosht.jpg",
			"Rara Gosht": "/assets/nonveg menu/Rara Gosht.jpg",
			"Crispy Chicken Burger": "/assets/nonveg menu/Crispy Chicken Burger.jpg",
			"NACL Chicken Club Sandwich": "/assets/nonveg menu/NACL Chicken Club Sandwich.jpg",
			"Peri Peri Chicken Sandwich": "/assets/nonveg menu/Peri Peri Chicken Sandwich.jpg",
			"BBQ Chicken Sandwich": "/assets/nonveg menu/BBQ Chicken Sandwich.jpg",
			"Tandoori Chicken Sandwich": "/assets/nonveg menu/Tandoori Chicken Sandwich.jpg",
			"Chicken Cheese Sandwich": "/assets/nonveg menu/Chicken Cheese Sandwich.jpg",
			"Egg and Cheese Sandwich": "/assets/nonveg menu/Egg and Cheese Sandwich.jpg",
			"Prawn Biryani": "/assets/nonveg menu/Prawn Biryani.jpg",
			"Hyderabadi Mutton Dum Biryani": "/assets/nonveg menu/Hyderabadi Mutton Dum Biryani.jpg",
			"Hyderabadi Murgh Dum Biryani": "/assets/nonveg menu/Hyderabadi Murgh Dum Biryani.jpg",
			"Murgh Tikka Biryani": "/assets/nonveg menu/Murgh Tikka Biryani.jpg",
			"Anda Biryani": "/assets/nonveg menu/Anda Biryani.jpg",
			"Chicken Burst Pizza": "/assets/nonveg menu/Chicken Burst Pizza.jpg",
			"Chicken Pasta (Red & White Sauce)": "/assets/nonveg menu/Chicken Pasta (Red & White Sauce).jpg",
			"Chicken Chilli Pizza": "/assets/nonveg menu/Chicken Chilli Pizza.jpg",
			"Kulhad Chicken Pizza": "/assets/nonveg menu/Kulhad Chicken Pizza.jpg",
			"Peri Peri Chicken Pizza": "/assets/nonveg menu/Peri Peri Chicken Pizza.jpg",
			"Chicken Tikka Pizza": "/assets/nonveg menu/Chicken Tikka Pizza.jpg",
			"Mutton Pattie Burger": "/assets/nonveg menu/Mutton Pattie Burger.jpg",
				"Grilled Chicken Burger": "/assets/nonveg menu/Grilled Chicken Burger.jpg",
				"Crispy Chicken Rice": "/assets/nonveg menu/Crispy Chicken Rice.jpg",
					"Chicken Chilli Fried Rice": "/assets/nonveg menu/Chicken chilli Fried Rice.jpg",
				"Chicken Fried Rice": "/assets/nonveg menu/Chicken Fried Rice.jpg",
				"Hong Kong Chicken Fried Rice": "/assets/nonveg menu/Hong Kong Chicken Fried Rice.jpg",
				"Egg Fried Rice": "/assets/nonveg menu/Egg Fried Rice.jpg",
				"Schezwan Noodles (Chicken, Prawns)": "/assets/nonveg menu/Schezwan Noodles (Chicken, Prawns).jpg",
				"Smoked Chicken Hakka Noodles": "/assets/nonveg menu/Smoked Chicken Hakka Noodles.jpg",
				"ABC Juice (Apple, Beetroot, Carrot)": "/assets/nonveg menu/ABC Juice (Apple, Beetroot, Carrot).jpg",
				"Orange Juice": "/assets/nonveg menu/Orange Juice.jpg",
				"Pomegranate Juice": "/assets/nonveg menu/Pomegranate Juice.jpg",
				"Seasonal Fruits Juice": "/assets/nonveg menu/Seasonal Fruits Juice.jpg",
				"Pineapple Juice": "/assets/nonveg menu/Pineapple Juice.jpg",
				"Watermelon Juice": "/assets/nonveg menu/Watermelon Juice.jpg",
				"Milkshakes (Mango, Kiwi, Strawberry, Chocolate, Oreo)": "/assets/nonveg menu/Milkshakes (Mango, Kiwi, Strawberry, Chocolate, Oreo).jpg",
				"Fruit Punch": "/assets/nonveg menu/Fruit Punch.jpg",
				"Chili Gauva Martini": "/assets/nonveg menu/Chili Gauva Martini.jpg",
				"Virgin Mojito": "/assets/nonveg menu/Virgin Mojito.jpg",
				"Cranberry Mojito": "/assets/nonveg menu/Cranberry Mojito.jpg",
				"Lassi (Sweet / Salted)": "/assets/nonveg menu/Lassi (Sweet _Salted).jpg",
				"Jal Jeera": "/assets/nonveg menu/Jal Jeera.jpg",
				"Mint Lime Soda": "/assets/nonveg menu/Mint Lime Soda.jpg",
				"Lotus Biscoff Cheese Cake": "/assets/nonveg menu/Lotus Biscoff Cheese Cake.jpg",
				"Dark Chocolate Mocha Fudge": "/assets/nonveg menu/Dark Chocolate Mocha Fudge.jpg",
				"Double Chocolate Mousse Cake": "/assets/nonveg menu/Double Chocolate Mousse Cake.jpg",
				"Apple Pie with Vanilla Ice Cream": "/assets/nonveg menu/Apple Pie with Vanilla Ice Cream.jpg",
				"Chocolate Brownie with Vanilla Ice Cream": "/assets/nonveg menu/Chocolate Brownie with Vanilla Ice Cream.jpg",
				"Chocolate Mousse Sandwich": "/assets/nonveg menu/Chocolate Mousse Sandwich.jpg",
				"Brownie Ice-cream Cake": "/assets/nonveg menu/Brownie Ice-cream Cake.jpg",
				"Citrus Panna Cotta (Sugar Free)": "/assets/nonveg menu/Citrus Panna Cotta (Sugar Free).jpg",
				"Blueberry Parfait": "/assets/nonveg menu/Blueberry Parfait.jpg",
				"Nutella Cheese Cake": "/assets/nonveg menu/Nutella Cheese Cake.jpg",
				"Baked Cheese Cake": "/assets/nonveg menu/Baked Cheese Cake.jpg",
				"Choco Lava Cake": "/assets/nonveg menu/Choco Lava Cake.jpg",
				"Tiramisu": "/assets/nonveg menu/Tiramisu.jpg",
				"Baked Yogurt": "/assets/nonveg menu/Baked Yogurt.jpg",
				"Rabdi": "/assets/nonveg menu/Rabdi.jpg",
				"Samudra Bhog": "/assets/nonveg menu/Samudra Bhog.jpg",
				"Gajar Ka Halwa": "/assets/nonveg menu/Gajar Ka Halwa.jpg",
				"Rasmalai": "/assets/nonveg menu/Rasmalai.jpg",
				"Moong Dal Halwa": "/assets/nonveg menu/Moong Dal Halwa.jpg",
				"Rasgulla": "/assets/nonveg menu/Rasgulla.jpg",
				"Gulab Jamun": "/assets/nonveg menu/Gulab Jamun.jpg",
				"Amrakhand": "/assets/nonveg menu/Amrakhand.jpg",
				"Shrikhand": "/assets/nonveg menu/Shrikhand.jpg",
				"Prawn Fried Rice": "/assets/nonveg menu/Prawn Fried Rice.jpg",
				"Chicken Triple Fried Rice": "/assets/nonveg menu/Chicken Triple Fried Rice.jpg",
				"Peri Peri Chicken Fried Rice": "/assets/nonveg menu/Peri Peri Chicken Fried Rice.jpg",
};

// ✅ Define the component
export default function MenuPage() {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("veg");

	// Menu selection logic
	let menuToShow = vegMenu;
	if (filter === "nonveg") {
		menuToShow = nonVegMenu;
	}


	// Filtered menus for each type
	const filteredVegMenu = vegMenu
		.map((section) => ({
			...section,
			items: section.items.filter((item) =>
				item.toLowerCase().includes(search.toLowerCase())
			),
		}))
		.filter((section) => section.items.length > 0);

	const filteredNonVegMenu = nonVegMenu
		.map((section) => ({
			...section,
			items: section.items.filter((item) =>
				item.toLowerCase().includes(search.toLowerCase())
			),
		}))
		.filter((section) => section.items.length > 0);

	const filteredMenu = menuToShow
		.map((section) => ({
			...section,
			items: section.items.filter((item) =>
				item.toLowerCase().includes(search.toLowerCase())
			),
		}))
		.filter((section) => section.items.length > 0);

	// Scroll to top when filter changes
	const handleFilterChange = (newFilter: string) => {
		setFilter(newFilter);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="min-h-screen bg-[#fffbe9]">
			{/* Main Navbar at the top */}
			<Navigation />

			{/* Sticky search/filter controls below navbar */}
			   <nav className="fixed top-16 left-0 w-full z-50 border-b border-[#b8956f]/20 bg-transparent px-0 py-0" style={{background: 'none'}}>
				   <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-2 sm:px-4 py-2">
					   <input
						   type="text"
						   placeholder="Search Item By Name..."
						   value={search}
						   onChange={(e) => setSearch(e.target.value)}
						   className="border border-[#b8956f] rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#b8956f] bg-white mb-2 sm:mb-0"
					   />
					   <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
						   <Button
							   onClick={() => { handleFilterChange("all"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
							   className={`min-w-[70px] bg-white border-2 border-green-600 text-green-700 font-bold transition-all duration-150
								   ${filter === "all" ? "bg-green-600 text-white border-green-600" : "hover:bg-green-50"}`}
						   >
							   All
						   </Button>
						   <Button
							   onClick={() => { handleFilterChange("veg"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
							   className={`min-w-[70px] bg-white border-2 border-green-600 text-green-700 font-bold transition-all duration-150
								   ${filter === "veg" ? "bg-green-600 text-white border-green-600" : "hover:bg-green-50"}`}
						   >
							   Veg
						   </Button>
						   <Button
							   onClick={() => { handleFilterChange("nonveg"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
							   className={`min-w-[70px] bg-white border-2 border-red-600 text-red-700 font-bold transition-all duration-150
								   ${filter === "nonveg" ? "bg-red-600 text-white border-red-600" : "hover:bg-red-50"}`}
						   >
							   Non-Veg
						   </Button>
					   </div>
				   </div>
			   </nav>

						{/* Menu Sections */}
						{filter === "all" ? (
							<div className="max-w-6xl mx-auto py-8 px-2 sm:px-4">
								{/* Headings moved to above each menu column below */}
								<div className="flex flex-col md:flex-row gap-8 md:gap-0 relative">
									{/* Center dividing line only on desktop, below headings */}
									<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[120px] h-[calc(100%-120px)] w-px bg-[#b8956f]/30 z-10"></div>
									{/* Veg Menu (Left) */}
									<div className="w-full md:w-1/2 pr-0 md:pr-6">
										{/* Divider line (desktop) */}
										<div className="hidden md:block w-full h-px bg-[#b8956f]/30 mb-2"></div>
										<div className="flex items-center gap-2 mb-6 mt-40 md:mt-24">
											<span className="inline-flex items-center">
												<svg width="36" height="36" viewBox="0 0 36 36" className="mr-2" aria-label="Veg Symbol">
													<rect x="2" y="2" width="32" height="32" rx="4" fill="#fff" stroke="#388e3c" strokeWidth="3"/>
													<circle cx="18" cy="18" r="10" fill="#388e3c" />
												</svg>
											</span>
											<h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#7c4a13] tracking-tight" style={{ letterSpacing: "-0.01em" }}>
												Vegetarian
											</h1>
										</div>
										{filteredVegMenu.length === 0 ? (
											<div className="text-center text-lg text-gray-500 mt-16">No items found.</div>
										) : (
											filteredVegMenu.map((section, idx) => (
												<div key={section.section} className="mb-10">
													<div className={"w-full flex items-center" + (idx === 0 ? " mt-8" : " mt-6") }>
														<h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#7c4a13] mb-4 border-b border-[#b8956f]/30 pb-2 flex items-center gap-2 w-full">
															{section.section}
														</h2>
													</div>
													<div className="grid grid-cols-2 gap-4 sm:gap-5 justify-items-center">
														{section.items.map((item) => {
															let imgSrc = placeholderImg;
															if (vegImages[item]) {
																imgSrc = vegImages[item];
															}
															return (
																<div key={item} className="bg-[#f7ecd7] shadow flex flex-col items-center p-4 aspect-square min-h-[170px] max-w-[220px] w-full border-2 border-[#7c4a13] rounded-xl relative overflow-hidden" style={{ borderRadius: "1rem", aspectRatio: '1/1', minWidth: 0 }}>
																	<img src={cardBg} alt="bg" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none" style={{ zIndex: 0, borderRadius: "1rem", filter: "blur(1px) brightness(1.1)", transform: "scale(0.98)" }} />
																	<div className="relative z-10 flex flex-col items-center w-full">
																		<div
																			style={{
																				width: '100%',
																				height: '7.5em',
																				display: 'flex',
																				alignItems: 'center',
																				justifyContent: 'center',
																				background: 'rgba(255,255,255,0.6)',
																				borderRadius: '0.75rem',
																				overflow: 'hidden',
																				marginBottom: 0,
																			}}
																		>
																			<img
																				src={imgSrc}
																				alt={item}
																				style={{
																					width: '100%',
																					height: '100%',
																					objectFit: 'cover',
																					borderRadius: '0.75rem',
																					display: 'block',
																				}}
																			/>
																		</div>
																		<div className="font-bold text-center mt-2 mb-1 break-words w-full"
																			 style={{
																				 color: "#7c4a13",
																				 wordBreak: "break-word",
																				 overflowWrap: "anywhere",
																				 fontSize:
																					 item.length > 38
																						 ? "0.80rem"
																						 : item.length > 28
																							 ? "0.89rem"
																							 : "0.98rem",
																				 lineHeight: "1.15",
																				 maxWidth: "100%",
																				 display: "-webkit-box",
																				 WebkitLineClamp: 3,
																				 WebkitBoxOrient: "vertical",
																				 overflow: "hidden",
																			 }}>
																			{item}
																		</div>
																	</div>
																</div>
															);
														})}
													</div>
												</div>
											))
										)}
									</div>
									{/* Non-Veg Menu (Right) */}
									<div className="w-full md:w-1/2 pl-0 md:pl-6 mt-8 md:mt-0">
										{/* Divider line (desktop) */}
										<div className="hidden md:block w-full h-px bg-[#b8956f]/30 mb-2"></div>
										<div className="flex items-center gap-2 mb-6 mt-40 md:mt-24">
											<span className="inline-flex items-center">
												<svg width="36" height="36" viewBox="0 0 36 36" className="mr-2" aria-label="Non Veg Symbol">
													<rect x="2" y="2" width="32" height="32" rx="4" fill="#fff" stroke="#d32f2f" strokeWidth="3"/>
													<polygon points="18,8 28,26 8,26" fill="#d32f2f" />
												</svg>
											</span>
											<h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#7c4a13] tracking-tight" style={{ letterSpacing: "-0.01em" }}>
												Non Vegetarian
											</h1>
										</div>
	{filteredNonVegMenu.length === 0 ? (
		<div className="text-center text-lg text-gray-500 mt-16">No items found.</div>
	) : (
		filteredNonVegMenu.map((section, idx) => (
			<div key={section.section} className="mb-10">
				<div className={"w-full flex items-center" + (idx === 0 ? " mt-8" : " mt-6") }>
					<h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#7c4a13] mb-4 border-b border-[#b8956f]/30 pb-2 flex items-center gap-2 w-full">
						{section.section}
					</h2>
				</div>
				<div className="grid grid-cols-2 gap-4 sm:gap-5 justify-items-center">
					{section.items.map((item) => {
						let imgSrc = placeholderImg;
						if (nonVegImages[item]) {
							imgSrc = nonVegImages[item];
						}
						return (
							<div key={item} className="bg-[#f7ecd7] shadow flex flex-col items-center p-4 aspect-square min-h-[170px] max-w-[220px] w-full border-2 border-[#7c4a13] rounded-xl relative overflow-hidden" style={{ borderRadius: "1rem", aspectRatio: '1/1', minWidth: 0 }}>
								<img src={cardBg} alt="bg" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none" style={{ zIndex: 0, borderRadius: "1rem", filter: "blur(1px) brightness(1.1)", transform: "scale(0.98)" }} />
								<div className="relative z-10 flex flex-col items-center w-full">
									<div
										style={{
											width: '100%',
											height: '7.5em',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											background: 'rgba(255,255,255,0.6)',
											borderRadius: '0.75rem',
											overflow: 'hidden',
											marginBottom: 0,
										}}
									>
										<img
											src={imgSrc}
											alt={item}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												borderRadius: '0.75rem',
												display: 'block',
											}}
										/>
									</div>
									<div className="font-bold text-center mt-2 mb-1 break-words w-full"
										 style={{
											 color: "#7c4a13",
											 wordBreak: "break-word",
											 overflowWrap: "anywhere",
											 fontSize:
												 item.length > 38
													 ? "0.80rem"
													 : item.length > 28
														 ? "0.89rem"
														 : "0.98rem",
											 lineHeight: "1.15",
											 maxWidth: "100%",
											 display: "-webkit-box",
											 WebkitLineClamp: 3,
											 WebkitBoxOrient: "vertical",
											 overflow: "hidden",
										 }}>
											{item}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		))
	)}
</div>
								</div>
							</div>
						   ) : (
							   // ...existing code...
							   <div className="max-w-6xl mx-auto py-8 px-2 sm:px-4">
								   {/* Responsive heading for menu type */}
								   <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 mt-40 sm:mt-28">
									   {/* Veg/Non-Veg symbol */}
									   {filter === "nonveg" ? (
										   <span className="inline-flex items-center">
											   <svg width="36" height="36" viewBox="0 0 36 36" className="mr-2" aria-label="Non Veg Symbol">
												   <rect x="2" y="2" width="32" height="32" rx="4" fill="#fff" stroke="#d32f2f" strokeWidth="3"/>
												   <polygon points="18,8 28,26 8,26" fill="#d32f2f" />
											   </svg>
										   </span>
									   ) : (
										   <span className="inline-flex items-center">
											   <svg width="36" height="36" viewBox="0 0 36 36" className="mr-2" aria-label="Veg Symbol">
												   <rect x="2" y="2" width="32" height="32" rx="4" fill="#fff" stroke="#388e3c" strokeWidth="3"/>
												   <circle cx="18" cy="18" r="10" fill="#388e3c" />
											   </svg>
										   </span>
									   )}
									   <h1
										   className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-center text-[#7c4a13] tracking-tight"
										   style={{ letterSpacing: "-0.01em" }}
									   >
										   {filter === "nonveg" ? "Non Vegetarian" : "Vegetarian"}
									   </h1>
								   </div>
								   {filteredMenu.length === 0 ? (
									   <div className="text-center text-lg text-gray-500 mt-16">
										   No items found.
									   </div>
								   ) : (
									   filteredMenu.map((section, idx) => (
										   <div key={section.section} className="mb-10">
											   <div
												   className={
													   "w-full flex items-center" +
													   (idx === 0 ? " mt-16" : " mt-12")
												   }
											   >
												   <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#7c4a13] mb-5 border-b border-[#b8956f]/30 pb-2 flex items-center gap-2 w-full">
													   {section.section}
												   </h2>
											   </div>
												   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
												   {section.items.map((item) => {
													   let imgSrc = placeholderImg;
													   if (filter === "veg" && vegImages[item]) {
														   imgSrc = vegImages[item];
													   } else if (filter === "nonveg" && nonVegImages[item]) {
														   imgSrc = nonVegImages[item];
													   }
													   return (
														   <div
															   key={item}
															   className="bg-[#f7ecd7] shadow flex flex-col items-center p-2 h-full min-h-[140px] border-2 border-[#7c4a13] rounded-xl relative overflow-hidden"
															   style={{ borderRadius: "1rem" }}
														   >
															   {/* Blended background image */}
															   <img
																   src={cardBg}
																   alt="bg"
																   aria-hidden="true"
																   className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
																   style={{
																	   zIndex: 0,
																	   borderRadius: "1rem",
																	   filter: "blur(1px) brightness(1.1)",
																	   transform: "scale(0.98)",
																   }}
															   />
															   {/* Card content */}
															   <div className="relative z-10 flex flex-col items-center w-full">
																   <div
																	   style={{
																		   width: '100%',
																		   height: '7.5em',
																		   display: 'flex',
																		   alignItems: 'center',
																		   justifyContent: 'center',
																		   background: 'rgba(255,255,255,0.6)',
																		   borderRadius: '0.75rem',
																		   overflow: 'hidden',
																		   marginBottom: 0,
																	   }}
																   >
																	   <img
																		   src={imgSrc}
																		   alt={item}
																		   style={{
																			   width: '100%',
																			   height: '100%',
																			   objectFit: 'cover',
																			   borderRadius: '0.75rem',
																			   display: 'block',
																		   }}
																	   />
																   </div>
																   <div
																	   className="font-bold text-center mt-2 mb-1 break-words w-full"
																	   style={{
																		   color: "#7c4a13",
																		   wordBreak: "break-word",
																		   overflowWrap: "anywhere",
																		   fontSize:
																			   item.length > 38
																				   ? "0.80rem"
																			   : item.length > 28
																				   ? "0.89rem"
																				   : "0.98rem",
																		   lineHeight: "1.15",
																		   maxWidth: "100%",
																		   display: "-webkit-box",
																		   WebkitLineClamp: 3,
																		   WebkitBoxOrient: "vertical",
																		   overflow: "hidden",
																	   }}
																   >
																	   {item}
																   </div>
															   </div>
														   </div>
													   );
												   })}
											   </div>
										   </div>
									   ))
								   )}
							   </div>
						   )}
		</div>
	);
}