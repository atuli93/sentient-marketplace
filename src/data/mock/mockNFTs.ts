import { type NFT } from '../../types/nft';

// Import local NFT images
import BoredApeImg from '../../assets/Bored_Ape_Yacht_Club.jpg';
import AzukiImg from '../../assets/Azuki.jpg';
import PudgyPenguinsImg from '../../assets/Pudgy_Penguins.jpg';
import CryptoPunksImg from '../../assets/CryptoPunks.jpg';
import DoodlesImg from '../../assets/Doodles.jpg';
import MoonbirdsImg from '../../assets/Moonbirds.jpg';
import CloneXImg from '../../assets/CloneX.jpg';
import DeGodImg from '../../assets/DeGod.jpg';
import MutantApeImg from '../../assets/Mutant_Ape.jpg';
import MeebitImg from '../../assets/Meebit.jpg';
import VeeFriendsImg from '../../assets/VeeFriends.jpg';
import CoolCatImg from '../../assets/cool_cat.png';
import WorldOfWomenImg from '../../assets/World_of_Women.jpg';
import CyberWarriorImg from '../../assets/Cyber_Warrior.jpg';
import AbstractRealmImg from '../../assets/Abstract_Realm.jpg';

// Additional NFT images
import PixelHeroesImg from '../../assets/Pixel_Heroes.jpg';
import CryptoKittiesImg from '../../assets/CryptoKitties.jpg';
import ArtBlocksImg from '../../assets/ArtBlocks.jpg';
import BoredMummyImg from '../../assets/Bored_Mummy.jpg';

export const mockNFTs: NFT[] = [
  // Existing NFTs (unchanged)
  {
    id: 'bayc-1',
    name: 'Bored Ape #4232',
    description: 'Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
    image: BoredApeImg,
    price: 93.2,
    currency: 'ETH',
    creator: {
      name: 'Yuga Labs',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces',
      verified: true
    },
    collection: {
      name: 'Bored Ape Yacht Club',
      floorPrice: 94.3
    },
    rarity: 'Legendary',
    likes: 4822,
    views: 33422,
    lastSale: 45.4,
    onSale: true
  },
  {
    id: 'azuki-1',
    name: 'Azuki #4464',
    description: 'A brand for the metaverse built by Chiru Labs. Take the red bean to join the garden.',
    image: AzukiImg,
    price: 28.4,
    currency: 'ETH',
    creator: {
      name: 'Chiru Labs',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces',
      verified: true
    },
    collection: {
      name: 'Azuki',
      floorPrice: 27.5
    },
    rarity: 'Epic',
    likes: 3423,
    views: 9328,
    lastSale: 22.2,
    onSale: true
  },
  // ... all other existing NFTs (copy exactly from your previous array)
  {
    id: 'abstract-1',
    name: 'Abstract Realm #1002',
    description: 'Mind-bending abstract digital art from renowned crypto artists.',
    image: AbstractRealmImg,
    price: 6.6,
    currency: 'ETH',
    creator: {
      name: 'Abstract Collective',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      verified: true
    },
    collection: {
      name: 'Abstract Realms',
      floorPrice: 8.8
    },
    rarity: 'Epic',
    likes: 583,
    views: 3828,
    lastSale: 7.5,
    onSale: true,
    auction: {
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
      highestBid: 7.8
    }
  },
  // New NFTs added
  {
    id: 'pixel-1',
    name: 'Pixel Hero #505',
    description: 'Classic pixel art heroes ready for adventure.',
    image: PixelHeroesImg,
    price: 1.7,
    currency: 'ETH',
    creator: {
      name: 'Pixel Labs',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces',
      verified: true
    },
    collection: {
      name: 'Pixel Heroes',
      floorPrice: 1.5
    },
    rarity: 'Rare',
    likes: 432,
    views: 2910,
    lastSale: 1.6,
    onSale: true
  },
  {
    id: 'ck-1',
    name: 'CryptoKitty #3210',
    description: 'A cute CryptoKitty from the legendary blockchain collection.',
    image: CryptoKittiesImg,
    price: 0.9,
    currency: 'ETH',
    creator: {
      name: 'CryptoKitties Inc.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces',
      verified: true
    },
    collection: {
      name: 'CryptoKitties',
      floorPrice: 0.8
    },
    rarity: 'Common',
    likes: 1245,
    views: 6543,
    lastSale: 0.85,
    onSale: true
  },
  {
    id: 'artblocks-1',
    name: 'Art Blocks #1122',
    description: 'Generative art collection featuring algorithmically created masterpieces.',
    image: ArtBlocksImg,
    price: 3.5,
    currency: 'ETH',
    creator: {
      name: 'Art Blocks',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces',
      verified: true
    },
    collection: {
      name: 'Art Blocks',
      floorPrice: 3.2
    },
    rarity: 'Epic',
    likes: 789,
    views: 4321,
    lastSale: 3.1,
    onSale: true
  },
  {
    id: 'bm-1',
    name: 'Bored Mummy #007',
    description: 'A spooky yet stylish addition to the Bored Mummy NFT collection.',
    image: BoredMummyImg,
    price: 2.8,
    currency: 'ETH',
    creator: {
      name: 'Mummy Labs',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces',
      verified: true
    },
    collection: {
      name: 'Bored Mummy',
      floorPrice: 2.5
    },
    rarity: 'Rare',
    likes: 678,
    views: 3210,
    lastSale: 2.6,
    onSale: true
  }
];
