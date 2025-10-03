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

// New NFT images
import PixelHeroesImg from '../../assets/Pixel_Heroes.jpg';
import CryptoKittiesImg from '../../assets/CryptoKitties.jpg';
import ArtBlocksImg from '../../assets/ArtBlocks.jpg';
import BoredMummyImg from '../../assets/Bored_Mummy.jpg';
import MutantCatImg from '../../assets/Mutant_Cat.jpg';
import NeonApesImg from '../../assets/Neon_Apes.jpg';
import GalacticOwlsImg from '../../assets/Galactic_Owls.jpg';
import RoboMonkeysImg from '../../assets/Robo_Monkeys.jpg';

export const mockNFTs: NFT[] = [
  // ----------------- Existing NFTs -----------------
  // Bored Ape Yacht Club
  {
    id: 'bayc-1',
    name: 'Bored Ape #4232',
    description: 'Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
    image: BoredApeImg,
    price: 93.2,
    currency: 'ETH',
    creator: { name: 'Yuga Labs', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Bored Ape Yacht Club', floorPrice: 94.3 },
    rarity: 'Legendary',
    likes: 4822,
    views: 33422,
    lastSale: 45.4,
    onSale: true
  },
  // Azuki
  {
    id: 'azuki-1',
    name: 'Azuki #4464',
    description: 'A brand for the metaverse built by Chiru Labs. Take the red bean to join the garden.',
    image: AzukiImg,
    price: 28.4,
    currency: 'ETH',
    creator: { name: 'Chiru Labs', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Azuki', floorPrice: 27.5 },
    rarity: 'Epic',
    likes: 3423,
    views: 9328,
    lastSale: 22.2,
    onSale: true
  },
  // Pudgy Penguins
  {
    id: 'pudgy-1',
    name: 'Pudgy Penguin #7272',
    description: 'Pudgy Penguins is a collection of 8,888 NFTs waddling around on the Ethereum blockchain.',
    image: PudgyPenguinsImg,
    price: 9.2,
    currency: 'ETH',
    creator: { name: 'Pudgy Penguins', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Pudgy Penguins', floorPrice: 7.2 },
    rarity: 'Rare',
    likes: 3647,
    views: 10383,
    lastSale: 6.3,
    onSale: true
  },
  // CryptoPunks
  {
    id: 'punk-1',
    name: 'CryptoPunk #3728',
    description: '7,777 unique collectible characters with proof of ownership stored on the Ethereum blockchain.',
    image: CryptoPunksImg,
    price: 65.4,
    currency: 'ETH',
    creator: { name: 'Larva Labs', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'CryptoPunks', floorPrice: 66.0 },
    rarity: 'Legendary',
    likes: 8483,
    views: 38284,
    lastSale: 55.7,
    onSale: true,
    auction: { endTime: new Date(Date.now() + 3 * 60 * 60 * 1000), highestBid: 83.6 }
  },
  // Doodles
  {
    id: 'doodle-1',
    name: 'Doodle #7574',
    description: 'A community-driven collectibles project featuring art by Burnt Toast.',
    image: DoodlesImg,
    price: 4.6,
    currency: 'ETH',
    creator: { name: 'Doodles', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Doodles', floorPrice: 2.4 },
    rarity: 'Rare',
    likes: 854,
    views: 8473,
    lastSale: 2.0,
    onSale: true
  },
  // Moonbirds
  {
    id: 'moonbird-1',
    name: 'Moonbirds #9999',
    description: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse ecosystem of rarity-powered traits.',
    image: MoonbirdsImg,
    price: 1.9,
    currency: 'ETH',
    creator: { name: 'PROOF', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Moonbirds', floorPrice: 2.8 },
    rarity: 'Epic',
    likes: 858,
    views: 4657,
    lastSale: 2.4,
    onSale: true
  },
  // CloneX
  {
    id: 'clonex-1',
    name: 'CloneX #8888',
    description: 'Next-gen Avatars, combining the worlds of fashion, gaming, and culture.',
    image: CloneXImg,
    price: 5.6,
    currency: 'ETH',
    creator: { name: 'RTFKT x Takashi Murakami', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'CloneX', floorPrice: 5.3 },
    rarity: 'Epic',
    likes: 4838,
    views: 29484,
    lastSale: 3.6,
    onSale: true
  },
  // DeGods
  {
    id: 'degods-1',
    name: 'DeGod #1088',
    description: 'A digital art collective of 10,000 hand-drawn gods with world-class artists.',
    image: DeGodImg,
    price: 8.5,
    currency: 'ETH',
    creator: { name: 'DeGods', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b765?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'DeGods', floorPrice: 8.4 },
    rarity: 'Legendary',
    likes: 7777,
    views: 10349,
    lastSale: 7.5,
    onSale: true,
    auction: { endTime: new Date(Date.now() + 2 * 60 * 60 * 1000), highestBid: 9.2 }
  },
  // Mutant Ape Yacht Club
  {
    id: 'mayc-1',
    name: 'Mutant Ape #3383',
    description: 'A collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM.',
    image: MutantApeImg,
    price: 23.4,
    currency: 'ETH',
    creator: { name: 'Yuga Labs', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Mutant Ape Yacht Club', floorPrice: 19.5 },
    rarity: 'Epic',
    likes: 3748,
    views: 9383,
    lastSale: 12.4,
    onSale: true
  },
  // Meebits
  {
    id: 'meebit-1',
    name: 'Meebit #8585',
    description: '20,000 unique 3D voxel characters, created by a custom generative algorithm.',
    image: MeebitImg,
    price: 1.4,
    currency: 'ETH',
    creator: { name: 'Larva Labs', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Meebits', floorPrice: 2.3 },
    rarity: 'Rare',
    likes: 483,
    views: 5362,
    lastSale: 1.6,
    onSale: true
  },
  // VeeFriends
  {
    id: 'veefriends-1',
    name: 'VeeFriends #2222',
    description: 'VeeFriends Series 1 characters designed by Gary Vaynerchuk.',
    image: VeeFriendsImg,
    price: 4.5,
    currency: 'ETH',
    creator: { name: 'Gary Vaynerchuk', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'VeeFriends', floorPrice: 8.3 },
    rarity: 'Rare',
    likes: 1048,
    views: 5002,
    lastSale: 7.3,
    onSale: true
  },
  // Cool Cats
  {
    id: 'coolcats-1',
    name: 'Cool Cat #1000',
    description: 'Cool Cats is a collection of 9,999 randomly generated and stylistically curated NFTs.',
    image: CoolCatImg,
    price: 2.2,
    currency: 'ETH',
    creator: { name: 'Cool Cats', avatar: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Cool Cats NFT', floorPrice: 2.9 },
    rarity: 'Rare',
    likes: 483,
    views: 2483,
    lastSale: 2.8,
    onSale: true
  },
  // World of Women
  {
    id: 'wow-1',
    name: 'World of Women #4738',
    description: 'World of Women is a collection of 10,000 diverse and powerful women NFTs.',
    image: WorldOfWomenImg,
    price: 5.8,
    currency: 'ETH',
    creator: { name: 'World of Women', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b765?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'World of Women', floorPrice: 7.8 },
    rarity: 'Epic',
    likes: 837,
    views: 4848,
    lastSale: 7.2,
    onSale: true
  },
  // Cyber Warrior
  {
    id: 'cyber-1',
    name: 'Cyber Warrior #32',
    description: 'A futuristic collection blending cyberpunk aesthetics with digital art.',
    image: CyberWarriorImg,
    price: 9.3,
    currency: 'ETH',
    creator: { name: 'Cyber Studios', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Cyber Warriors', floorPrice: 19.3 },
    rarity: 'Epic',
    likes: 2949,
    views: 8393,
    lastSale: 18.4,
    onSale: true
  },
  // Abstract Realm
  {
    id: 'abstract-1',
    name: 'Abstract Realm #1002',
    description: 'Mind-bending abstract digital art from renowned crypto artists.',
    image: AbstractRealmImg,
    price: 6.6,
    currency: 'ETH',
    creator: { name: 'Abstract Collective', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Abstract Realms', floorPrice: 8.8 },
    rarity: 'Epic',
    likes: 583,
    views: 3828,
    lastSale: 7.5,
    onSale: true,
    auction: { endTime: new Date(Date.now() + 4 * 60 * 60 * 1000), highestBid: 7.8 }
  },

  // ----------------- New NFTs -----------------
  {
    id: 'pixel-1',
    name: 'Pixel Hero #505',
    description: 'Classic pixel art heroes ready for adventure.',
    image: PixelHeroesImg,
    price: 1.7,
    currency: 'ETH',
    creator: { name: 'Pixel Labs', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Pixel Heroes', floorPrice: 1.5 },
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
    creator: { name: 'CryptoKitties Inc.', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'CryptoKitties', floorPrice: 0.8 },
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
    creator: { name: 'Art Blocks', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Art Blocks', floorPrice: 3.2 },
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
    creator: { name: 'Mummy Labs', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Bored Mummy', floorPrice: 2.5 },
    rarity: 'Rare',
    likes: 678,
    views: 3210,
    lastSale: 2.6,
    onSale: true
  },
  {
    id: 'mutantcat-1',
    name: 'Mutant Cat #210',
    description: 'Cyber-mutated cats from the future, blending art and technology.',
    image: MutantCatImg,
    price: 2.2,
    currency: 'ETH',
    creator: { name: 'Mutant Labs', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Mutant Cats', floorPrice: 2.0 },
    rarity: 'Rare',
    likes: 345,
    views: 1982,
    lastSale: 2.0,
    onSale: true
  },
  {
    id: 'neon-apes-1',
    name: 'Neon Ape #909',
    description: 'Glowing neon apes roaming the digital cityscape.',
    image: NeonApesImg,
    price: 4.1,
    currency: 'ETH',
    creator: { name: 'Neon Labs', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Neon Apes', floorPrice: 3.8 },
    rarity: 'Epic',
    likes: 789,
    views: 4123,
    lastSale: 3.9,
    onSale: true
  },
  {
    id: 'galactic-owls-1',
    name: 'Galactic Owl #88',
    description: 'Owls from another galaxy, guarding the secrets of space.',
    image: GalacticOwlsImg,
    price: 1.8,
    currency: 'ETH',
    creator: { name: 'Galaxy Studio', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Galactic Owls', floorPrice: 1.5 },
    rarity: 'Rare',
    likes: 267,
    views: 1345,
    lastSale: 1.6,
    onSale: true
  },
  {
    id: 'robo-monkey-1',
    name: 'Robo Monkey #33',
    description: 'Mechanical monkeys exploring virtual worlds and digital jungles.',
    image: RoboMonkeysImg,
    price: 3.3,
    currency: 'ETH',
    creator: { name: 'Robo Labs', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces', verified: true },
    collection: { name: 'Robo Monkeys', floorPrice: 3.0 },
    rarity: 'Epic',
    likes: 543,
    views: 2764,
    lastSale: 3.1,
    onSale: true
  }
];
