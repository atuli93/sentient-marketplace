# Sentient Marketplace

Welcome to **Sentient Marketplace**, a modern NFT marketplace built with **React**, **TypeScript**, and **Vite**. Explore and showcase a variety of NFT collections, including Bored Ape Yacht Club, Azuki, CryptoPunks, Doodles, and many more. This project also features mock NFT data, real-time stats, and an AI-powered chat interface.  

---

## Features

- Browse multiple NFT collections with real-time data
- Detailed NFT pages with creator info, rarity, and last sale
- Mock NFT data for easy development and testing
- Responsive design for mobile and desktop
- Integrated AI chatbot (powered by Gemini API)
- Auction and on-sale indicators for NFTs
- Clean and modern UI with CSS/React styling

---

## Links

- **Website:** [https://sentient-marketplace-io.netlify.app/](https://sentient-marketplace-io.netlify.app/)  
- **Twitter:** [https://x.com/Chief_atul](https://x.com/Chief_atul)  

---

## 🗂 Project Structure
```bash
sentient-marketplace/
├─ public/ # Static assets served directly
│ ├─ assets/ # All NFT images and logos
│ │ ├─ Bored_Ape_Yacht_Club.jpg
│ │ ├─ Azuki.jpg
│ │ ├─ CryptoPunks.jpg
│ │ ├─ Doodles.jpg
│ │ └─ ... (all NFT images)
│ ├─ favicon.ico
│ └─ sentient-logo.svg
│
├─ src/ # Source code
│ ├─ assets/ # Images imported in code
│ ├─ components/ # React components
│ ├─ config/ # App configuration
│ ├─ contexts/ # React Context API
│ ├─ data/mock/ # Mock NFT data
│ ├─ layout/ # Layout components
│ ├─ pages/ # Pages (Home, NFT detail, etc.)
│ ├─ routes/ # App routing
│ ├─ services/api/ # API services (HuggingFace, Gemini)
│ ├─ styles/ # CSS/SCSS files
│ ├─ types/ # TypeScript types
│ ├─ utils/ # Utility functions
│ ├─ App.css
│ ├─ App.tsx
│ ├─ index.css
│ └─ main.tsx
│
├─ .env.example # Environment variables template
├─ .gitignore # Git ignore rules
├─ GEMINI_SETUP.md # Gemini API setup guide
├─ README.md # Project README
├─ eslint.config.js # ESLint configuration
├─ index.html # Main HTML template
├─ netlify.toml # Netlify deployment config
├─ package-lock.json # npm lock file
├─ package.json # Project dependencies & scripts
├─ tsconfig.app.json # TypeScript app config
├─ tsconfig.json # TypeScript base config
├─ tsconfig.node.json # TypeScript Node config
├─ vite.config.ts # Vite configuration
└─ roma-ai-chatbot@0.0.0 # Project version info
```

---

## Installation  

1. **Clone the repository**   
```bash
git clone https://github.com/your-username/sentient-marketplace.git
cd sentient-marketplace
```

2. **Install dependencies**  
```bash
npm install
```

3. **Set up environment variables**  

○ Copy ```.env.example``` to ```.env```   
○ Add your API keys (Gemini, Ethereum, etc.)  
```bash
cp .env.example .env
```

4. **Run the development server**
```bash
npm run dev
```
○ Open your browser at [http://localhost:5173](http://localhost:5173)  

---

## Build for Production
○ ```npm run dev``` – Run development server    
○ ```npm run build``` – Build production-ready files     
○ ```npm run preview``` – Preview production build locally    
○ ```npm run lint``` – Run ESLint     


## NFT Collections Included

Bored Ape Yacht Club  
Azuki   
Pudgy Penguins   
CryptoPunks   
Doodles   
Moonbirds   
CloneX   
DeGods   
Mutant Ape   
Meebits   
VeeFriends   
Cool Cats\   
World of Women   
Cyber Warrior   
Abstract Realm    
(More collections can be easily added in ```src/data/mock/mockNFTs.ts```)    


## Adding New NFTs

1. Add the NFT image in ```public/assets/```               

2. Import it in ```src/data/mock/mockNFTs.ts```      
 
3. Add a new object to the ```mockNFTs``` array with properties:   
```bash
{
  id: 'new-id',
  name: 'NFT Name',
  description: 'NFT description',
  image: NewNFTImg,
  price: 1.0,
  currency: 'ETH',
  creator: { name: 'Creator Name', avatar: 'Avatar URL', verified: true },
  collection: { name: 'Collection Name', floorPrice: 1.0 },
  rarity: 'Rare',
  likes: 100,
  views: 500,
  lastSale: 0.9,
  onSale: true
}
```

## Technology Stack

- React 18   
- TypeScript   
- Vite   
- Netlify (for deployment)    
- CSS Modules / Vanilla CSS             
- Gemini AI / HuggingFace API (optional)    

## Contributing

- Fork the repository   
- Create a new branch (git checkout -b feature/new-feature)   
- Commit your changes (git commit -m 'Add new feature')   
- Push to the branch (git push origin feature/new-feature)   
- Open a Pull Request   

## License
MIT License – free to use, modify, and share.  

## Contact
Developed with ❤️ by [Your Name]([https://github.com/atuli93](https://github.com/atuli93))


