
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PawPrint, ClipboardCopy, Check, Rocket, ExternalLink, InfinityIcon, Zap, Users, ShieldCheck, HeartHandshake, Gamepad2, Coins } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { QRCodeSVG } from "qrcode.react";
import GameCanvas from '@/components/GameCanvas';

const Dog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#ff9933" stroke="black" strokeWidth="1" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14v-2.5c0-1.38 1.12-2.5 2.5-2.5h-1c-1.38 0-2.5-1.12-2.5-2.5S9.62 6.5 11 6.5s2.5 1.12 2.5 2.5V11h1c1.38 0 2.5 1.12 2.5 2.5V16h-2v-2.5c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5V16h-2z" />
    <path d="M9 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm6 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
  </svg>
);


const PillIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ff0000" stroke="black" strokeWidth="1" {...props}>
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
        <path d="m8.5 8.5 7 7"/>
    </svg>
);


const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
    {children}
  </Link>
);

const DexScreenerEmbed = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <iframe
      src="https://dexscreener.com/osmosis/1943-factory_osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3_alloyed_allBTC-ibc_498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4?embed=1&loadChartSettings=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartStyle=0&chartType=usd&interval=15"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        border: 0,
      }}
      allow="clipboard-write"
      allowFullScreen
    />
  </div>
);

const tokenomicsData = [
  { name: 'Public Sale', value: 12, tokens: '120M' },
  { name: 'Private Contributors', value: 10, tokens: '100M' },
  { name: 'Team & Advisors', value: 16, tokens: '160M' },
  { name: 'Ecosystem/Collaborations', value: 18, tokens: '180M' },
  { name: 'Community Incentives', value: 24, tokens: '240M' },
  { name: 'Treasury', value: 15, tokens: '150M' },
  { name: 'Marketing & Liquidity', value: 5, tokens: '50M' },
];

const tokenomicsCardsData = [
    { name: 'Public Sale', value: '12%' },
    { name: 'Private Contributors', value: '10%' },
    { name: 'Team & Advisors', value: '16%' },
    { name: 'Ecosystem/ Collaborations', value: '18%' },
    { name: 'Community Incentives', value: '24%' },
    { name: 'Treasury', value: '15%' },
    { name: 'Marketing & Liquidity', value: '5%' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

export default function Home() {
  const contractAddress = "------COMING SOON------";
  const ownerWalletAddress = "------COMING SOON------"; // TODO: Replace with your wallet address
  const [copied, setCopied] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [dogAnimation, setDogAnimation] = useState('animate-move-from-left');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonVideoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    // Pre-load audio
    audioRef.current = new Audio('https://res.cloudinary.com/ds0ifdrhk/video/upload/v1760085459/crack-sound_h1l6j8.mp3');
  }, []);

  const handleIntroClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    if (buttonVideoRef.current) {
        buttonVideoRef.current.play();
    }
    setDogAnimation('animate-move-to-right');
  };

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 500); // Wait for fade out animation
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const memeImages = [
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759480609/WhatsApp_Image_2025-10-03_at_1.28.50_PM_1_m39tjc.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759480609/WhatsApp_Image_2025-10-03_at_1.27.41_PM_p8mhlb.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759480609/WhatsApp_Image_2025-10-03_at_1.28.50_PM_ebrg3x.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759480609/WhatsApp_Image_2025-10-03_at_1.29.37_PM_lueqip.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759480609/WhatsApp_Image_2025-10-03_at_1.28.50_PM_2_vuh344.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759350977/WhatsApp_Image_2025-10-02_at_12.54.08_AM_xcufit.jpg",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const label = tokenomicsData[index].name;
    const words = label.replace('/', '/ ').split(' ');

    if (words.length > 1 && (label.length > 10 || label.includes('/'))) {
        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="10">
                {words.map((word, i) => (
                    <tspan key={i} x={x} dy={i === 0 ? 0 : 12}>{word}</tspan>
                ))}
            </text>
        );
    }

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominant-baseline="central" fontSize="10">
        {label}
      </text>
    );
  };

  if (showIntro) {
    return (
      <div 
        className={`flex flex-col items-center justify-center min-h-screen w-full overflow-hidden transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: "url('https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759602517/WhatsApp_Image_2025-10-04_at_11.25.25_PM_tctbpy.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`w-64 h-64 ${dogAnimation}`}>
           <Image
            src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759480609/WhatsApp_Image_2025-10-03_at_1.27.41_PM_p8mhlb.jpg"
            alt="Intro Dog"
            data-ai-hint="dog mascot"
            width={256}
            height={256}
            className="rounded-full animate-juggle"
            priority
          />
        </div>
        <div 
            onClick={handleIntroClick}
            className="relative w-64 h-24 cursor-pointer"
        >
            <video 
                ref={buttonVideoRef}
                muted 
                playsInline
                onEnded={handleVideoEnd}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                style={{ mixBlendMode: 'screen', filter: 'brightness(1.9)'}}
            >
                <source src="https://res.cloudinary.com/ds0ifdrhk/video/upload/v1759602959/WhatsApp_Video_2025-10-04_at_10.38.05_PM_wyzrc7.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 flex items-center justify-center h-full mt-5">
                <span className="text-black text-xl font-display">Start the CHASE</span>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen text-lg text-foreground bg-transparent">
       <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className="container mx-4 sm:mx-auto">
          <nav className="flex items-center justify-between p-3 bg-[#1e1c2a]/80 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
              <PawPrint className="text-2xl" />
              $CHASE
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <NavLink href="#about">Our Story</NavLink>
              <NavLink href="#meme-gallery">Artwork</NavLink>
              <NavLink href="#tokenomics">Tokenomics</NavLink>
              <NavLink href="#mission">Mission</NavLink>
              <NavLink href="#roadmap">Roadmap</NavLink>
              <NavLink href="#hall-of-fame">Hall of Fame</NavLink>
              <NavLink href="#game">Game</NavLink>
              {/* <NavLink href="#faq">FAQ</NavLink> */}
            </div>
            <Button>
              <Link href="#how-to-buy">
                Join us! 👍
              </Link>
            </Button>
          </nav>
        </div>
      </header>


      <main className="container mx-auto px-4 pt-32 overflow-x-hidden">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 items-center justify-center py-16 md:py-24 gap-4 text-left">
            <div className="flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20">
                <Rocket className="w-4 h-4" />
                Now on Base
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary">
                The <br /> <span className="text-foreground">$CHASE</span> <br /> Revolution
              </h1>

              <p className="mt-2 text-lg md:text-xl text-muted-foreground max-w-xl font-body">
              Join the most based pixel army in the metaverse. Community driven. Zero tax. Diamond hands only. 
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                  <Link href="#how-to-buy" className="rounded-full p-0.5" style={{ background: 'linear-gradient(to right, hsl(var(--button-green)) 50%, hsl(var(--button-white)) 50%)' }}>
                    <div className="flex items-center justify-center gap-2 text-lg py-3 px-8 font-body rounded-full" style={{ background: 'linear-gradient(to right, hsl(var(--button-green)) 50%, hsl(var(--button-white)) 50%)' }}>
                      <PawPrint className="w-6 h-6 text-red-500 fill-red-500" />
                      <span className="text-white font-bold">BUY</span>
                      <span className="text-black font-bold">$CHASE</span>
                    </div>
                  </Link>
                  <Button asChild size="lg" variant="outline" className="text-base py-7 px-6 border-foreground/50 bg-foreground/10 hover:bg-foreground/20 font-body">
                      <a href="https://t.me/chase_login_portal" target="_blank" rel="noopener noreferrer">Telegram</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base py-7 px-6 border-foreground/50 bg-foreground/10 hover:bg-foreground/20 font-body">
                    <a href="https://x.com/ChaseThePill?t=ZXkA0bsyUblwQbPWCYMG8A&s=09" target="_blank" rel="noopener noreferrer">Twitter/X</a>
                  </Button>
              </div>

              <div className="relative w-full max-w-md mt-6">
                <p className="text-xs text-muted-foreground mb-1">Contract Address</p>
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value={contractAddress}
                    className="w-full bg-input border border-border rounded-md p-3 pr-12 font-mono text-sm text-foreground"
                  />
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={() => copyToClipboard(contractAddress)}
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <ClipboardCopy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-xl mt-8">
                <div className="text-center">
                  <p className="text-2xl font-bold">1B</p>
                  <p className="text-sm text-muted-foreground">Total Supply</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">0%</p>
                  <p className="text-sm text-muted-foreground">Tax</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Community</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold"><InfinityIcon className="inline-block w-6 h-6"/></p>
                  <p className="text-sm text-muted-foreground">Potential</p>
                </div>
              </div>

            </div>
            
            <div className="flex justify-center items-center">
                <Image
                src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759433872/WhatsApp_Image_2025-10-03_at_1.01.43_AM_wmgvns.jpg"
                alt="$CHASE"
                data-ai-hint="logo abstract"
                width={400}
                height={400}
                className="rounded-full border-4 border-primary shadow-[0_0_20px_theme(colors.primary)] opacity-80"
                priority
                />
            </div>
        </section>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-24 max-w-2xl mx-auto">
          <h2 className="font-display text-5xl text-primary mb-12 text-center">How to Buy $CHASE</h2>
          <Card className="bg-card/50 border-2 border-primary/50">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <p className="text-muted-foreground mb-4 font-body">Send ETH to the following address to buy $CHASE tokens.</p>
              
              <div className="bg-background/50 rounded-lg p-4 mb-6">
                <QRCodeSVG
                  value={ownerWalletAddress}
                  size={128}
                  bgColor="hsl(var(--background))"
                  fgColor="hsl(var(--foreground))"
                  level="L"
                  className="rounded-md"
                />
              </div>

              <p className="text-muted-foreground text-sm mb-2 font-body">Owner's Wallet Address:</p>
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  readOnly
                  value={ownerWalletAddress}
                  className="w-full bg-input border border-border rounded-md p-2 pr-12 font-mono text-sm text-foreground"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => copyToClipboard(ownerWalletAddress)}
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <ClipboardCopy className="w-4 h-4" />}
                </Button>
              </div>

              <div className="w-full max-w-md mt-6">
                <Button 
                  size="lg" 
                  className="text-lg py-6 w-full font-body"
                  onClick={() => window.location.href = `ethereum:${ownerWalletAddress}`}
                >
                  <PawPrint className="mr-2 h-5 w-5" />
                  Buy with Wallet
                </Button>
              </div>

              <div className="text-left mt-8 space-y-4 text-muted-foreground font-body">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <p>Click the "Buy with Wallet" button, or copy the address above, or scan the QR code.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <p>Open your preferred crypto wallet (e.g., MetaMask, Trust Wallet).</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <p>Paste the address and enter the amount of ETH you wish to contribute.</p>
                </div>
                 <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <p>Your $CHASE tokens will be airdropped to your wallet after the presale ends.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Meme Gallery Section */}
        <section id="meme-gallery" className="py-24 max-w-6xl mx-auto">
          <h2 className="font-display text-5xl text-primary mb-12 text-center">$CHASE MEME GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memeImages.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border-2 border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_5px_hsl(var(--primary))] hover:scale-105">
                <Image
                  src={src}
                  alt={`Meme ${i + 1}`}
                  data-ai-hint="funny meme dog"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <h2 className="font-display text-5xl text-primary mb-5 text-center">TRADE $CHASE</h2>
        <section id="about" className="py-24 grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <Card className="bg-card/50 border-2 border-primary/50">
              <CardHeader>
                <CardTitle className="font-display text-primary">WHY $CHASE?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 font-body text-lg">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Solana Speed</h3>
                    <p className="text-muted-foreground">Lightning-fast transactions on the most efficient blockchain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Community Driven</h3>
                    <p className="text-muted-foreground">Built by the people, for the people. Pure decentralization.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Zero Tax Policy</h3>
                    <p className="text-muted-foreground">No hidden fees, no surprises. What you see is what you get.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <HeartHandshake className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Based & Authentic</h3>
                    <p className="text-muted-foreground">No corporate BS, just raw pixel power and meme energy.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground">Join thousands of diamond hands already holding $CHASE. This isn't just a token, it's a movement.</p>
                </div>
              </CardContent>
            </Card>
            <div className="h-[550px] w-full">
                <DexScreenerEmbed />
            </div>
        </section>


        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-24 max-w-6xl mx-auto">
          <h2 className="font-display text-5xl text-primary mb-12 text-center">TOKENOMICS</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4 font-body">
              <Table className="bg-card/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-display text-accent">Allocation</TableHead>
                    <TableHead className="font-display text-accent text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokenomicsData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex items-center gap-2">
                       <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                      {item.name}
                    </TableCell>
                    <TableCell className="text-right">{item.value}%</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-center text-muted-foreground mt-4">Total Supply: 1,000,000,000 $CHASE</p>
            </div>
          </div>
        </section>
        
        {/* Token Distribution Section */}
        <section id="token-distribution" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-display text-5xl text-primary mb-12 text-center">Token Distribution</h2>
          <p className="text-center text-2xl text-muted-foreground mb-12 font-body">Total Supply: 1,000,000,000 $CHASE</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenomicsCardsData.map((item, index) => (
              <div
                key={index}
                className="p-1 rounded-lg"
                style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))' }}
              >
                <div className="bg-background rounded-md p-6 h-full flex flex-col justify-center">
                  <p className="text-lg text-foreground/80 break-words font-body">{item.name}</p>
                  <p className="text-2xl font-bold text-primary">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 max-w-6xl mx-auto">
          <h2 className="font-display text-5xl text-primary mb-12 text-center">$CHASE ROADMAP</h2>
          <div className="overflow-x-auto font-body">
            <Table className="w-full text-left bg-card/50">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-display text-accent w-1/4">Timeline</TableHead>
                  <TableHead className="font-display text-accent w-1/4">Technical & Protocol Development</TableHead>
                  <TableHead className="font-display text-accent w-1/4">Ecosystem & Growth</TableHead>
                  <TableHead className="font-display text-accent w-1/4">Community & DAO Governance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold">Q3 2025<br/><span className="font-normal text-muted-foreground">Phase 1: The Genesis Grove</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mainnet Beta Launch</li>
                      <li>Bamboo Consensus (PoSA)</li>
                      <li>Native Staking & Delegation</li>
                      <li>Comprehensive Security Audit</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Seedling Listings</li>
                      <li>DEX Listings on Base & Ethereum</li>
                      <li>Tier 1 CEX Applications Submitted</li>
                      <li>Initial Liquidity Partnerships</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>The First Council</li>
                      <li>Genesis NFT Airdrop to Early Holders</li>
                      <li>$CHASE Ambassador Program Launch</li>
                      <li>Litepaper v2 Publication</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q4 2025<br/><span className="font-normal text-muted-foreground">Phase 2: Strengthening the Roots</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cross-Chain Canopy Bridges</li>
                      <li>Bridges to Ethereum & BSC Live</li>
                      <li>Bridge Security Audit Completion</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>The Grove Grant Program</li>
                      <li>$500k Ecosystem Fund Established</li>
                      <li>First 3 dApps Funded & Onboarded</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>DAO Governance v1: The Panda Council</li>
                      <li>Snapshot Voting Live</li>
                      <li>First Community Treasury Proposal</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q1 2026<br/><span className="font-normal text-muted-foreground">Phase 3: The Great Expansion</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>zk-Rollup Testnet: "Pandascale"</li>
                      <li>Testnet Release</li>
                      <li>SDK & Developer Toolkit Launch</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tier 1 CEX Listing</li>
                      <li>Major Top-10 Exchange Listing</li>
                      <li>Strategic DeFi Partnership Announcements</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Global Hackathon: "Build the Grove"</li>
                      <li>$100k Prize Pool</li>
                      <li>Focus on DeFi & Gaming dApps</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q2 2026<br/><span className="font-normal text-muted-foreground">Phase 4: Ecosystem Flourish</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mainnet Upgrade: "The Pandamonium Fork"</li>
                      <li>zk-Rollup Mainnet Activation</li>
                      <li>{'>'}90% Reduction in Gas Fees</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>dApp Incubator Program</li>
                      <li>10+ Live dApps on Network</li>
                      <li>Native DEX: "PandaSwap" Launch</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Token Utility Expansion</li>
                      <li>NFT Marketplace: "Bamboo Gallery"</li>
                      <li>$CHASE Merch Store Integration</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q3 2026<br/><span className="font-normal text-muted-foreground">Phase 5: Optimizing the Realm</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Layer 2 Scaling & Data Availability</li>
                      <li>Advanced Data Availability Layer</li>
                      <li>Enhanced Throughput (10k+ TPS)</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Enterprise Outreach: "Whitelabel Jungle"</li>
                      <li>B2B Blockchain Solutions</li>
                      <li>Public API Suite Release</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside spacey-1">
                      <li>Governance v2: On-Chain Democracy</li>
                      <li>On-Chain Voting Implementation</li>
                      <li>Community Treasury Management Live</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q4 2026<br/><span className="font-normal text-muted-foreground">Phase 6: The Sovereign Grove</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>$CHASE 2.0 Vision Paper</li>
                      <li>Research into AI Integration & Privacy</li>
                      <li>Long-term Tech Vision Published</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mass Adoption Campaign</li>
                      <li>Target: 1M+ Active Wallet Addresses</li>
                      <li>Global Marketing Initiatives</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Full Decentralization</li>
                      <li>Core Team Token Lock & Vesting</li>
                      <li>Community-Led Foundation Established</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Hall of Fame Section */}
        <section id="hall-of-fame" className="py-24 text-center">
          <h2 className="font-display text-5xl text-primary mb-6">Hall of Fame</h2>
          <div className="inline-block bg-card/50 border border-primary/30 rounded-lg px-4 py-2 mb-8">
            <p className="text-lg text-muted-foreground">Get a chance to be in our website every week 💪🔥</p>
          </div>
          <div className="relative max-w-2xl mx-auto border-4 border-primary rounded-lg p-4 h-[400px] flex items-center justify-center bg-card/20">
            <Image
              src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1759483335/OIG4_1_j7c9k9.png"
              alt="Crown"
              width={150}
              height={150}
              className="absolute -top-16"
              data-ai-hint="crown icon"
            />
            <Image
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZtYnp0aDNpYmtjbHMxenU2MDJqYnZ6ZDRzYmY2dHY0c2J6ZGRwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJYmK8MA4dM4w/giphy.gif"
              alt="Hall of Fame GIF"
              layout="fill"
              objectFit="contain"
              className="rounded-lg p-2"
              data-ai-hint="funny gif"
            />
          </div>
        </section>

        {/* Game Section */}
        <section id="game" className="py-24 text-center">
          <h2 className="font-display text-5xl text-primary mb-12">$CHASE: The Game</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg border-4 bg-blue-200 border-primary shadow-[0_0_20px_theme(colors.primary)] overflow-hidden">
                <GameCanvas DogIcon={Dog} PillIcon={PillIcon} />
            </div>
            <div className="text-left space-y-8">
              <p className="text-xl text-muted-foreground font-body">Get ready for an adventure! In this Mario-style platformer, you'll take control of the one and only $CHASE dog. Your mission: navigate through challenging levels, stomp on the FUD pills, and collect as many coins as you can.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-card/50 border-primary/50">
                    <CardHeader className="flex-row items-center gap-4">
                        <Dog className="w-10 h-10 text-primary"/>
                        <CardTitle className="font-display text-primary">Play as $CHASE</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground font-body">Run, jump, and bark your way to victory as the heroic dog.</p>
                    </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/50">
                    <CardHeader className="flex-row items-center gap-4">
                        <PillIcon className="w-10 h-10 text-destructive"/>
                        <CardTitle className="font-display text-destructive">Defeat the Pills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground font-body">The nefarious pills are spreading FUD. Stomp them out!</p>
                    </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/50 col-span-1 sm:col-span-2">
                    <CardHeader className="flex-row items-center gap-4">
                        <Coins className="w-10 h-10 text-yellow-400"/>
                        <CardTitle className="font-display text-yellow-400">Collect & Win</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground font-body">Gather coins, unlock power-ups, and get the highest score in the $CHASE ecosystem.</p>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full text-center py-8 mt-12 border-t border-primary/20 bg-transparent">
        <p className="text-muted-foreground font-body">&copy; {new Date().getFullYear()} $CHASE. All data loaded. This coin is for entertainment purposes only.</p>
      </footer>
    </div>
  );
}
    


    

    



    
