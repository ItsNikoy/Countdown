import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';

// Pure inline SVG icons
const IconSparkles = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconCalendar = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconClock = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconHeart = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const IconGift = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
  </svg>
);

const IconParty = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const IconTree = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 14h5l-3 6h14l-3-6h5L12 2zM12 20v2" />
  </svg>
);

const IconUtensils = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V2M6 6V2m12 4V2M4 10h16M6 10v12m12-12v12" />
  </svg>
);

const IconFlame = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconBell = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconCompass = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20zm5-13l-3 7-7 3 3-7 7-3z" />
  </svg>
);

const IconSearch = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconVolume = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z" />
  </svg>
);

const IconVolumeOff = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
  </svg>
);

const IconSun = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconMoon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const IconMaximize = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const IconMinimize = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconCheck = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconGlobe = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7a2 2 0 00-2-2h-2c-.5 0-1-.2-1.414-.586L12 2.5M12 22a10 10 0 100-20 10 10 0 000 20z" />
  </svg>
);

const IconMusic = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

const IconChevronDown = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconMapper = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'Bell': return <IconBell className={className} />;
    case 'TreePine': return <IconTree className={className} />;
    case 'PartyPopper': return <IconParty className={className} />;
    case 'Flame': return <IconFlame className={className} />;
    case 'Sparkles': return <IconSparkles className={className} />;
    case 'Utensils': return <IconUtensils className={className} />;
    case 'Compass': return <IconCompass className={className} />;
    case 'Gift': return <IconGift className={className} />;
    case 'Heart': return <IconHeart className={className} />;
    case 'Globe': return <IconGlobe className={className} />;
    default: return <IconSparkles className={className} />;
  }
};

const DEFAULT_HOLIDAY_EVENTS = [
  {
    id: 'nye-day',
    title: "New Year's Day",
    category: 'global',
    date: `${new Date().getFullYear() + 1}-01-01T00:00:00`,
    icon: 'Bell',
    defaultTrack: 'song',
    description: 'Fresh beginnings, new goals, and worldwide celebrations welcoming the new year.',
    quote: 'Tomorrow is the first blank page of a 365-page book. Write a good one.',
    themeBg: 'from-amber-950 via-slate-900 to-indigo-950'
  },
  {
    id: 'lunar-ny',
    title: 'Lunar New Year',
    category: 'global',
    date: `${new Date().getFullYear()}-02-10T00:00:00`,
    icon: 'Flame',
    defaultTrack: 'ambient',
    description: 'Spring Festival celebrating family reunions, red envelopes, lanterns, and good fortune.',
    quote: 'May prosperity and happiness follow you wherever you go.',
    themeBg: 'from-red-950 via-slate-900 to-amber-950'
  },
  {
    id: 'family-day',
    title: 'Family Day',
    category: 'global',
    date: `${new Date().getFullYear()}-02-16T00:00:00`,
    icon: 'Heart',
    defaultTrack: 'ambient',
    description: 'A dedicated holiday to celebrate togetherness, appreciation, and spending quality time with loved ones.',
    quote: 'Family is not an important thing. It’s everything.',
    themeBg: 'from-sky-950 via-slate-900 to-indigo-950'
  },
  {
    id: 'valentines',
    title: "Valentine's Day",
    category: 'global',
    date: `${new Date().getFullYear()}-02-14T00:00:00`,
    icon: 'Heart',
    defaultTrack: 'ambient',
    description: 'A romantic day celebrating love, affection, chocolates, and appreciation.',
    quote: 'Where there is love there is life.',
    themeBg: 'from-rose-950 via-slate-900 to-pink-950'
  },
  {
    id: 'st-patricks',
    title: "St. Patrick's Day",
    category: 'global',
    date: `${new Date().getFullYear()}-03-17T00:00:00`,
    icon: 'Sparkles',
    defaultTrack: 'ambient',
    description: 'Celebrating Irish culture, shamrocks, parades, and all things green.',
    quote: 'May your troubles be less and your blessings be more.',
    themeBg: 'from-emerald-950 via-slate-900 to-teal-950'
  },
  {
    id: 'easter-sunday',
    title: 'Easter Sunday',
    category: 'global',
    date: '2027-03-28T00:00:00',
    icon: 'Sparkles',
    defaultTrack: 'ambient',
    description: 'A global celebration of renewal, spring, family gatherings, and egg hunts.',
    quote: 'Spring is nature’s way of saying, ‘Let’s party!’',
    themeBg: 'from-yellow-950 via-slate-900 to-emerald-950'
  },
  {
    id: 'april-fools',
    title: "April Fools' Day",
    category: 'global',
    date: `${new Date().getFullYear()}-04-01T00:00:00`,
    icon: 'PartyPopper',
    defaultTrack: 'ambient',
    description: 'A day filled with playful pranks, harmless jokes, laughter, and lighthearted trickery!',
    quote: 'Laughter is timeless, imagination has no age, and dreams are forever.',
    themeBg: 'from-purple-950 via-slate-900 to-amber-950'
  },
  {
    id: 'earth-day',
    title: 'Earth Day',
    category: 'global',
    date: `${new Date().getFullYear()}-04-22T00:00:00`,
    icon: 'Globe',
    defaultTrack: 'ambient',
    description: 'A global movement celebrating environmental protection and nature.',
    quote: 'The earth has music for those who listen.',
    themeBg: 'from-emerald-950 via-slate-900 to-blue-950'
  },
  {
    id: 'mothers-day',
    title: "Mother's Day",
    category: 'global',
    date: `${new Date().getFullYear()}-05-10T00:00:00`,
    icon: 'Heart',
    defaultTrack: 'ambient',
    description: 'A special day honoring mothers, maternal bonds, and the influential role of mothers in society.',
    quote: 'All that I am, or hope to be, I owe to my angel mother.',
    themeBg: 'from-rose-950 via-pink-900 to-slate-950'
  },
  {
    id: 'victoria-day',
    title: 'Victoria Day',
    category: 'global',
    date: `${new Date().getFullYear()}-05-18T00:00:00`,
    icon: 'PartyPopper',
    defaultTrack: 'ambient',
    description: 'Celebrating Sovereign Queen Victoria\'s birthday, marking the unofficial kickoff of summer with fireworks, outdoor gatherings, and long weekend festivities.',
    quote: 'May the sun shine warm upon your face and laughter light your holiday.',
    themeBg: 'from-indigo-950 via-purple-900 to-slate-950'
  },
  {
    id: 'dst-start',
    title: 'Daylight Saving Time Begins',
    category: 'global',
    date: `${new Date().getFullYear()}-03-08T02:00:00`,
    icon: 'Compass',
    defaultTrack: 'ambient',
    description: 'Spring forward 1 hour! Enjoy an extra hour of evening daylight as summer approaches.',
    quote: 'Spring forward, fall back — step into brighter longer days.',
    themeBg: 'from-amber-950 via-orange-950 to-slate-950'
  },
  {
    id: 'dst-end',
    title: 'Daylight Saving Time Ends',
    category: 'global',
    date: `${new Date().getFullYear()}-11-01T02:00:00`,
    icon: 'Compass',
    defaultTrack: 'ambient',
    description: 'Fall back 1 hour! Enjoy an extra hour of sleep as winter approaches.',
    quote: 'An extra hour of restful sleep as autumn settles in.',
    themeBg: 'from-slate-950 via-indigo-950 to-blue-950'
  },
  {
    id: 'fathers-day',
    title: "Father's Day",
    category: 'global',
    date: `${new Date().getFullYear()}-06-21T00:00:00`,
    icon: 'Heart',
    defaultTrack: 'ambient',
    description: 'A day honoring fathers, fatherhood, paternal bonds, and the guidance of father figures.',
    quote: 'A father is someone you look up to no matter how tall you grow.',
    themeBg: 'from-blue-950 via-slate-900 to-cyan-950'
  },
  {
    id: 'midsummer',
    title: 'Midsummer Solstice',
    category: 'seasonal',
    date: `${new Date().getFullYear()}-06-21T00:00:00`,
    icon: 'Compass',
    defaultTrack: 'ambient',
    description: 'The longest day of the year celebrated with bonfires, music, and summer warmth.',
    quote: 'Live in the sunshine, swim the sea, drink the wild air.',
    themeBg: 'from-amber-950 via-slate-900 to-yellow-950'
  },
  {
    id: 'canada-day',
    title: 'Canada Day',
    category: 'global',
    date: `${new Date().getFullYear()}-07-01T00:00:00`,
    icon: 'PartyPopper',
    defaultTrack: 'ambient',
    description: 'Celebrating the anniversary of Confederation with national pride, parades, fireworks, and festivities across the nation.',
    quote: 'Canada is the linchpin of the English-speaking world.',
    themeBg: 'from-red-950 via-slate-900 to-rose-950'
  },
  {
    id: 'thanksgiving-canada',
    title: 'Canadian Thanksgiving',
    category: 'global',
    date: `${new Date().getFullYear()}-10-12T00:00:00`,
    icon: 'Utensils',
    defaultTrack: 'ambient',
    description: 'An autumn celebration giving thanks for the autumn harvest, family gatherings, and traditions across Canada.',
    quote: 'Gratitude turns what we have into enough.',
    themeBg: 'from-red-950 via-amber-900 to-slate-950'
  },
  {
    id: 'halloween',
    title: 'Halloween',
    category: 'seasonal',
    date: `${new Date().getFullYear()}-10-31T00:00:00`,
    icon: 'Sparkles',
    defaultTrack: 'halloween',
    description: 'Spooky costumes, pumpkin carving, and trick-or-treating fun.',
    quote: 'Double, double toil and trouble; Fire burn and caldron bubble.',
    themeBg: 'from-orange-950 via-slate-900 to-purple-950'
  },
  {
    id: 'diwali',
    title: 'Diwali',
    category: 'global',
    date: `${new Date().getFullYear()}-11-08T00:00:00`,
    icon: 'Flame',
    defaultTrack: 'ambient',
    description: 'The festival of lights symbolizing victory of light over darkness.',
    quote: 'May the lights illuminate your life with happiness and prosperity.',
    themeBg: 'from-amber-900 via-rose-950 to-slate-900'
  },
  {
    id: 'remembrance-day',
    title: 'Remembrance Day',
    category: 'global',
    date: `${new Date().getFullYear()}-11-11T00:00:00`,
    icon: 'Heart',
    defaultTrack: 'ambient',
    description: 'A solemn day of honor to remember and tribute all armed forces members who died in the line of duty.',
    quote: 'Lest we forget.',
    themeBg: 'from-slate-950 via-red-950 to-slate-900'
  },
  {
    id: 'thanksgiving-us',
    title: 'US Thanksgiving',
    category: 'global',
    date: `${new Date().getFullYear()}-11-26T00:00:00`,
    icon: 'Utensils',
    defaultTrack: 'ambient',
    description: 'Expressing gratitude with family, traditional feasts, autumn football, and harvest gatherings in the United States.',
    quote: 'Give thanks for all the harvest blessings.',
    themeBg: 'from-amber-950 via-amber-900 to-slate-900'
  },
  {
    id: 'solstice',
    title: 'Winter Solstice',
    category: 'seasonal',
    date: `${new Date().getFullYear()}-12-21T00:00:00`,
    icon: 'Compass',
    defaultTrack: 'song',
    description: 'The shortest day and longest night of the year, marking the return of light.',
    quote: 'In the depth of winter, I finally learned that within me there lay an invincible summer.',
    themeBg: 'from-blue-950 via-slate-900 to-indigo-950'
  },
  {
    id: 'xmas-eve',
    title: 'Christmas Eve',
    category: 'global',
    date: `${new Date().getFullYear()}-12-24T00:00:00`,
    icon: 'TreePine',
    defaultTrack: 'song',
    description: 'The magical night before Christmas filled with anticipation, family, carols, and cozy warmth.',
    quote: 'Twas the night before Christmas...',
    themeBg: 'from-emerald-950 via-slate-900 to-rose-950'
  },
  {
    id: 'xmas',
    title: 'Christmas Day',
    category: 'global',
    date: `${new Date().getFullYear()}-12-25T00:00:00`,
    icon: 'TreePine',
    defaultTrack: 'song',
    description: 'A global festival of joy, family gatherings, giving, and festive warmth.',
    quote: 'Peace on earth and goodwill to all.',
    themeBg: 'from-emerald-900 via-slate-900 to-rose-950'
  },
  {
    id: 'boxing-day',
    title: 'Boxing Day',
    category: 'global',
    date: `${new Date().getFullYear()}-12-26T00:00:00`,
    icon: 'Gift',
    defaultTrack: 'song',
    description: 'Post-Christmas tradition of shopping deals, relaxation, and sharing blessings.',
    quote: 'Generosity is the heart of every holiday.',
    themeBg: 'from-blue-950 via-slate-900 to-teal-950'
  },
  {
    id: 'nye-eve',
    title: "New Year's Eve",
    category: 'global',
    date: `${new Date().getFullYear()}-12-31T00:00:00`,
    icon: 'Bell',
    defaultTrack: 'song',
    description: 'Countdowns, fireworks, toasts, and celebrating memories of the passing year as midnight approaches.',
    quote: 'Cheers to a new year and another chance for us to get it right.',
    themeBg: 'from-purple-950 via-amber-950 to-slate-950'
  }
];

const CHRISTMAS_MELODY_EVENTS = ["Christmas Eve", "Christmas Day", "Boxing Day"];

// "We Wish You A Merry Christmas" Melody
const MERRY_CHRISTMAS_MELODY = [
  { note: 392.00, duration: 0.4 }, { note: 523.25, duration: 0.4 }, { note: 523.25, duration: 0.2 }, { note: 587.33, duration: 0.2 },
  { note: 523.25, duration: 0.2 }, { note: 493.88, duration: 0.2 }, { note: 440.00, duration: 0.4 }, { note: 440.00, duration: 0.4 },
  { note: 440.00, duration: 0.4 }, { note: 587.33, duration: 0.4 }, { note: 587.33, duration: 0.2 }, { note: 659.25, duration: 0.2 },
  { note: 587.33, duration: 0.2 }, { note: 523.25, duration: 0.2 }, { note: 493.88, duration: 0.4 }, { note: 392.00, duration: 0.4 },
  { note: 392.00, duration: 0.4 }, { note: 659.25, duration: 0.4 }, { note: 659.25, duration: 0.2 }, { note: 698.46, duration: 0.2 },
  { note: 659.25, duration: 0.2 }, { note: 587.33, duration: 0.2 }, { note: 523.25, duration: 0.4 }, { note: 440.00, duration: 0.4 },
  { note: 392.00, duration: 0.2 }, { note: 392.00, duration: 0.2 }, { note: 440.00, duration: 0.4 }, { note: 587.33, duration: 0.4 },
  { note: 493.88, duration: 0.4 }, { note: 523.25, duration: 0.8 },
  { note: 392.00, duration: 0.4 }, { note: 523.25, duration: 0.4 }, { note: 523.25, duration: 0.4 }, { note: 523.25, duration: 0.4 },
  { note: 493.88, duration: 0.8 }, { note: 493.88, duration: 0.4 }, { note: 523.25, duration: 0.4 }, { note: 493.88, duration: 0.4 },
  { note: 440.00, duration: 0.4 }, { note: 392.00, duration: 0.8 },
  { note: 587.33, duration: 0.4 }, { note: 659.25, duration: 0.4 }, { note: 587.33, duration: 0.4 }, { note: 523.25, duration: 0.4 },
  { note: 783.99, duration: 0.4 }, { note: 392.00, duration: 0.2 }, { note: 392.00, duration: 0.2 }, { note: 440.00, duration: 0.4 },
  { note: 587.33, duration: 0.4 }, { note: 493.88, duration: 0.4 }, { note: 523.25, duration: 0.8 }
];

// Authentic "Spooky Scary Skeletons" Piano Motif (C Minor)
const SPOOKY_SKELETONS_MELODY = [
  { note: 392.00, duration: 0.22 }, { note: 392.00, duration: 0.22 },
  { note: 415.30, duration: 0.22 }, { note: 349.23, duration: 0.22 },
  { note: 392.00, duration: 0.28 }, { note: 311.13, duration: 0.28 },
  { note: 293.66, duration: 0.55 }, { note: 0.001,  duration: 0.15 },

  { note: 392.00, duration: 0.22 }, { note: 392.00, duration: 0.22 },
  { note: 415.30, duration: 0.22 }, { note: 349.23, duration: 0.22 },
  { note: 293.66, duration: 0.28 }, { note: 311.13, duration: 0.28 },
  { note: 261.63, duration: 0.55 }, { note: 0.001,  duration: 0.20 },

  { note: 392.00, duration: 0.22 }, { note: 392.00, duration: 0.22 },
  { note: 415.30, duration: 0.22 }, { note: 349.23, duration: 0.22 },
  { note: 392.00, duration: 0.28 }, { note: 311.13, duration: 0.28 },
  { note: 293.66, duration: 0.55 }, { note: 0.001,  duration: 0.15 },

  { note: 392.00, duration: 0.22 }, { note: 349.23, duration: 0.22 },
  { note: 311.13, duration: 0.22 }, { note: 293.66, duration: 0.28 },
  { note: 261.63, duration: 0.70 }, { note: 0.001,  duration: 0.35 }
];

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Dashboard Error Caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="p-4 rounded-full bg-rose-500/20 text-rose-400 mb-4">
            <IconSparkles className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Display Reset Required</h2>
          <p className="text-slate-400 text-sm max-w-md mb-6">
            A state conflict caused the render tree to pause. Click below to refresh.
          </p>
          <button 
            onClick={this.handleReset}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl shadow-lg transition"
          >
            Reset Dashboard State
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// React Portal for overlaying toast notifications seamlessly
const ToastPortal = ({ message }) => {
  if (!message || typeof document === 'undefined') return null;
  
  return ReactDOM.createPortal(
    <div 
      style={{ zIndex: 2147483647 }} 
      className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-5 duration-200"
    >
      <IconCheck className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="text-xs font-semibold tracking-wide">{message}</span>
    </div>,
    document.body
  );
};

function MainApp() {
  const [events] = useState(DEFAULT_HOLIDAY_EVENTS);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('earliest');
  const [targetTimeMode, setTargetTimeMode] = useState('AM'); // 'AM' (12 AM Midnight) or 'PM' (12 PM Noon)
  const [fullscreenEventId, setFullscreenEventId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [fxMode, setFxMode] = useState('snow');
  const [activeTrack, setActiveTrack] = useState('ambient'); 
  const [isChimeMenuOpen, setIsChimeMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [now, setNow] = useState(new Date());

  // Track previous time to detect natural zero tick for confetti
  const prevTimeRef = useRef(null);

  // Confetti waterfall state
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const confettiEndTimeRef = useRef(0);

  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const chimeTimerRef = useRef(null);
  const chimeMenuRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 120, isDown: false });
  const songStepRef = useRef(0);
  const toastTimeoutRef = useRef(null);

  const triggerToast = (msg) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => setToastMessage(''), 3000);
  };

  // Helper to trigger or toggle 1 minute (60,000ms) confetti waterfall
  const toggleConfettiWaterfall = (reason = "Celebration!") => {
    if (isConfettiActive || Date.now() < confettiEndTimeRef.current) {
      confettiEndTimeRef.current = 0;
      setIsConfettiActive(false);
      triggerToast('Confetti stopped');
    } else {
      confettiEndTimeRef.current = Date.now() + 60000;
      setIsConfettiActive(true);
      triggerToast(`🎉 Celebration! ${reason} (Confetti Active 1 min)`);
    }
  };

  const initAudioCtx = () => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch((err) => {
        console.warn("AudioContext resume interrupted:", err);
      });
    }
    return audioCtxRef.current;
  };

  const playNote = (freq, duration = 1.0, type = 'sine', vol = 0.2) => {
    try {
      const ctx = initAudioCtx();
      if (!ctx || freq <= 0.01) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration * 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration * 1.8);
    } catch (e) {
      console.warn("Audio note play failed:", e);
    }
  };

  const playPianoNote = (freq, duration = 0.5, volume = 0.3) => {
    try {
      const ctx = initAudioCtx();
      if (!ctx || freq <= 0.01) return;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(Math.min(freq * 4, 3200), ctx.currentTime);

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, ctx.currentTime);

      const nowTime = ctx.currentTime;
      gain1.gain.setValueAtTime(0.0001, nowTime);
      gain1.gain.linearRampToValueAtTime(volume, nowTime + 0.005);
      gain1.gain.exponentialRampToValueAtTime(0.0001, nowTime + duration * 2.2);

      osc1.connect(gain1);
      gain1.connect(filter);
      filter.connect(ctx.destination);

      osc1.start(nowTime);
      osc1.stop(nowTime + duration * 2.2);
    } catch (e) {
      console.warn("Piano sound failed:", e);
    }
  };

  const stopAudioLoop = () => {
    if (chimeTimerRef.current) {
      clearTimeout(chimeTimerRef.current);
      clearInterval(chimeTimerRef.current);
      chimeTimerRef.current = null;
    }
  };

  const startAmbientChimes = () => {
    stopAudioLoop();
    initAudioCtx();
    const ambientNotes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
    chimeTimerRef.current = setInterval(() => {
      const freq = ambientNotes[Math.floor(Math.random() * ambientNotes.length)];
      playNote(freq, 1.4, 'sine', 0.18);
    }, 600);
  };

  const startMerryChristmasSong = () => {
    stopAudioLoop();
    const ctx = initAudioCtx();
    if (!ctx) return;
    
    songStepRef.current = 0;
    const playNextSongStep = () => {
      const item = MERRY_CHRISTMAS_MELODY[songStepRef.current];
      if (item) {
        if (item.note > 10) {
          playNote(item.note, item.duration * 1.35, 'sine', 0.22);
        }
        songStepRef.current = (songStepRef.current + 1) % MERRY_CHRISTMAS_MELODY.length;
        chimeTimerRef.current = setTimeout(playNextSongStep, item.duration * 1000);
      }
    };
    playNextSongStep();
  };

  const startHalloweenSong = () => {
    stopAudioLoop();
    const ctx = initAudioCtx();
    if (!ctx) return;

    songStepRef.current = 0;
    const playNextHalloweenStep = () => {
      const item = SPOOKY_SKELETONS_MELODY[songStepRef.current];
      if (item) {
        if (item.note > 10) {
          playPianoNote(item.note, item.duration * 1.35, 0.28);
        }
        songStepRef.current = (songStepRef.current + 1) % SPOOKY_SKELETONS_MELODY.length;
        chimeTimerRef.current = setTimeout(playNextHalloweenStep, item.duration * 1000);
      }
    };
    playNextHalloweenStep();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chimeMenuRef.current && !chimeMenuRef.current.contains(e.target)) {
        setIsChimeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Resilient, unfreezable clock tick loop
  useEffect(() => {
    let lastTime = Date.now();
    
    const tick = () => {
      const current = Date.now();
      // Force update state every second regardless of tab backgrounding/focus changes
      if (current - lastTime >= 1000) {
        setNow(new Date());
        lastTime = current;
      }
    };

    const timer = setInterval(tick, 1000);
    const animFrame = requestAnimationFrame(function loop() {
      tick();
      requestAnimationFrame(loop);
    });

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Adjust base target date according to targetTimeMode (12:00 AM vs 12:00 PM)
  const getAdjustedTargetDate = (dateStr, eventObj = null) => {
    const target = new Date(dateStr);
    if (isNaN(target.getTime())) return new Date();
    
    const strVal = typeof dateStr === 'string' ? dateStr : (dateStr instanceof Date ? dateStr.toISOString() : String(dateStr || ''));

    // Preserve official 2:00 AM target time for Daylight Saving Time events regardless of AM/PM toggle
    const isDST = (eventObj && (eventObj.id === 'dst-start' || eventObj.id === 'dst-end')) || 
                  strVal.includes('T02:00:00') || 
                  (eventObj && eventObj.title && eventObj.title.includes('Daylight Saving'));

    if (isDST) {
      target.setHours(2, 0, 0, 0);
      return target;
    }

    // Default ISO date strings are T00:00:00 (12:00 AM)
    // If targetTimeMode is 'PM' (12 PM Noon), set hours to 12 PM
    if (targetTimeMode === 'PM') {
      target.setHours(12, 0, 0, 0);
    } else {
      target.setHours(0, 0, 0, 0);
    }
    return target;
  };

  const getNextTarget = (dateStr, eventObj = null) => {
    let target = getAdjustedTargetDate(dateStr, eventObj);
    while (target < now) {
      target.setFullYear(target.getFullYear() + 1);
      target = getAdjustedTargetDate(target.toISOString(), eventObj);
    }
    return target;
  };

  const calculateTimeLeft = (targetDateStr, eventObj = null) => {
    const target = getAdjustedTargetDate(targetDateStr, eventObj);
    const isToday = now.getFullYear() === target.getFullYear() &&
                    now.getMonth() === target.getMonth() &&
                    now.getDate() === target.getDate();

    if (isToday) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true };
    }

    const nextTarget = getNextTarget(targetDateStr, eventObj);
    const diff = nextTarget.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isToday: false
    };
  };

  const filteredEvents = useMemo(() => {
    return events
      .filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortOrder === 'alphabetical') {
          return a.title.localeCompare(b.title);
        } else if (sortOrder === 'earliest') {
          return (getNextTarget(a.date, a) - now) - (getNextTarget(b.date, b) - now);
        } else {
          return (getNextTarget(b.date, b) - now) - (getNextTarget(a.date, a) - now);
        }
      });
  }, [events, activeCategory, searchQuery, sortOrder, now, targetTimeMode]);

  const heroEvent = useMemo(() => {
    if (filteredEvents.length === 0) return null;
    const todayEvent = filteredEvents.find(e => {
      const d = new Date(e.date);
      return now.getMonth() === d.getMonth() && now.getDate() === d.getDate();
    });
    if (todayEvent && sortOrder === 'earliest') return todayEvent;
    return filteredEvents[0];
  }, [filteredEvents, sortOrder, now]);

  const fullscreenEvent = useMemo(() => {
    if (!fullscreenEventId) return null;
    return events.find(e => e.id === fullscreenEventId) || null;
  }, [fullscreenEventId, events]);

  const heroTime = calculateTimeLeft(heroEvent ? heroEvent.date : new Date(), heroEvent);
  const fullscreenTime = fullscreenEvent ? calculateTimeLeft(fullscreenEvent.date, fullscreenEvent) : null;

  // Monitor natural zero tick for confetti waterfall
  useEffect(() => {
    // Check if we naturally ticked from 1 second down to 0
    if (prevTimeRef.current) {
      const prev = prevTimeRef.current;
      const isNaturalZeroTick = prev.seconds === 1 && heroTime.seconds === 0 && heroTime.minutes === 0 && heroTime.hours === 0 && heroTime.days === 0;
      if (isNaturalZeroTick) {
        toggleConfettiWaterfall("Countdown hit 00:00:00:00!");
      }
    }
    prevTimeRef.current = heroTime;
  }, [heroTime.seconds, heroTime.minutes, heroTime.hours, heroTime.days]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let extraBurstParticles = [];

    // Confetti waterfall particle pool
    const confettiColors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#facc15', '#06b6d4'];
    const confettiParticles = Array.from({ length: 140 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * -window.innerHeight, // start above screen
      w: Math.random() * 8 + 6,
      h: Math.random() * 14 + 8,
      speedY: Math.random() * 3 + 2.5,
      speedX: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      oscillation: Math.random() * Math.PI * 2,
      oscSpeed: Math.random() * 0.05 + 0.02
    }));

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseDown = (e) => {
      mouseRef.current.isDown = true;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        extraBurstParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 4 + 2,
          life: 1,
          decay: Math.random() * 0.015 + 0.008,
          color: fxMode === 'stars' ? '#f59e0b' : (isDarkMode ? '#38bdf8' : '#1e293b')
        });
      }
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2.5 + 1,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.5,
      vx: 0,
      vy: 0
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render Confetti Waterfall if active
      if (Date.now() < confettiEndTimeRef.current) {
        confettiParticles.forEach((c) => {
          c.y += c.speedY;
          c.oscillation += c.oscSpeed;
          c.x += c.speedX + Math.sin(c.oscillation) * 1.5;
          c.rotation += c.rotSpeed;

          // Wrap around top once it falls past screen bottom
          if (c.y > canvas.height + 20) {
            c.y = -20;
            c.x = Math.random() * canvas.width;
          }

          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate((c.rotation * Math.PI) / 180);
          ctx.fillStyle = c.color;
          ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
          ctx.restore();
        });
      } else if (isConfettiActive) {
        setIsConfettiActive(false);
      }

      if (fxMode !== 'off') {
        const isStars = fxMode === 'stars';
        const mouse = mouseRef.current;

        particles.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            if (mouse.isDown) {
              p.vx += Math.cos(angle) * force * 0.8;
              p.vy += Math.sin(angle) * force * 0.8;
            } else {
              p.vx -= Math.cos(angle) * force * 0.4;
              p.vy -= Math.sin(angle) * force * 0.4;
            }
          }

          p.vx *= 0.95;
          p.vy *= 0.95;

          p.y += p.speedY + p.vy;
          p.x += p.speedX + p.vx;

          if (p.y > canvas.height + 10) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
          }
          if (p.x > canvas.width + 10) p.x = -10;
          if (p.x < -10) p.x = canvas.width + 10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = isStars 
            ? 'rgba(245, 158, 11, 0.75)' 
            : (isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 41, 59, 0.75)');
          ctx.fill();
        });

        for (let i = extraBurstParticles.length - 1; i >= 0; i--) {
          const bp = extraBurstParticles[i];
          bp.x += bp.vx;
          bp.y += bp.vy;
          bp.life -= bp.decay;

          if (bp.life <= 0) {
            extraBurstParticles.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(bp.x, bp.y, Math.max(0, bp.radius * bp.life), 0, Math.PI * 2);
          ctx.fillStyle = bp.color;
          ctx.globalAlpha = bp.life;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [fxMode, isDarkMode, isConfettiActive]);

  const selectTrack = (trackId, toastMsg) => {
    setActiveTrack(trackId);
    setIsChimeMenuOpen(false);
    triggerToast(toastMsg);
  };

  const ChimePopoverContent = () => (
    <div className={`absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl p-3 shadow-2xl border backdrop-blur-xl z-[9999] animate-in fade-in zoom-in-95 duration-150 ${
      isDarkMode ? 'bg-slate-900/95 border-slate-700 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800'
    }`}>
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 mb-1">
        Select Audio Track
      </div>

      <div className="space-y-1.5">
        <button
          onClick={() => selectTrack('ambient', 'Looping Ambient Chimes Active')}
          className={`w-full p-3 rounded-xl text-left transition flex items-center justify-between border ${
            activeTrack === 'ambient'
              ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold'
              : isDarkMode ? 'border-slate-800 hover:bg-slate-800/80' : 'border-slate-100 hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              activeTrack === 'ambient' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              <IconBell className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold">Looping Chimes</div>
              <div className="text-[10px] text-slate-400 font-normal">Ambient relaxation synth chords</div>
            </div>
          </div>
          {activeTrack === 'ambient' && <IconCheck className="w-4 h-4 text-amber-400" />}
        </button>

        <button
          onClick={() => selectTrack('song', 'Merry Christmas Melody Active')}
          className={`w-full p-3 rounded-xl text-left transition flex items-center justify-between border ${
            activeTrack === 'song'
              ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold'
              : isDarkMode ? 'border-slate-800 hover:bg-slate-800/80' : 'border-slate-100 hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              activeTrack === 'song' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              <IconMusic className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold">We Wish You A Merry Christmas</div>
              <div className="text-[10px] text-slate-400 font-normal">Full holiday melody synth loop</div>
            </div>
          </div>
          {activeTrack === 'song' && <IconCheck className="w-4 h-4 text-amber-400" />}
        </button>

        <button
          onClick={() => selectTrack('halloween', 'Halloween Piano Active')}
          className={`w-full p-3 rounded-xl text-left transition flex items-center justify-between border ${
            activeTrack === 'halloween'
              ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold'
              : isDarkMode ? 'border-slate-800 hover:bg-slate-800/80' : 'border-slate-100 hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              activeTrack === 'halloween' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}>
              <IconSparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold">Halloween Song (Piano)</div>
              <div className="text-[10px] text-slate-400 font-normal">"Spooky, Scary Skeletons" synth motif</div>
            </div>
          </div>
          {activeTrack === 'halloween' && <IconCheck className="w-4 h-4 text-amber-400" />}
        </button>

        <button
          onClick={() => selectTrack('off', 'Chimes Muted')}
          className={`w-full p-2.5 rounded-xl text-left transition flex items-center justify-between border ${
            activeTrack === 'off'
              ? 'bg-rose-500/15 border-rose-500/40 text-rose-400 font-bold'
              : isDarkMode ? 'border-slate-800 hover:bg-slate-800/80' : 'border-slate-100 hover:bg-slate-100'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              activeTrack === 'off' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400'
            }`}>
              <IconVolumeOff className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold">Mute / Off</span>
          </div>
          {activeTrack === 'off' && <IconCheck className="w-4 h-4 text-rose-400" />}
        </button>
      </div>
    </div>
  );
  // Auto-switch audio tracks based on current Spotlight / Active Hero Event
  useEffect(() => {
    if (heroEvent) {
      if (heroEvent.defaultTrack) {
        setActiveTrack(heroEvent.defaultTrack);
      } else if (CHRISTMAS_MELODY_EVENTS.includes(heroEvent.title) || heroEvent.title === "New Year's Eve" || heroEvent.title === "New Year's Day") {
        setActiveTrack('song');
      } else if (heroEvent.title === 'Halloween') {
        setActiveTrack('halloween');
      } else {
        setActiveTrack('ambient');
      }
    }
  }, [heroEvent]);

  // Audio track execution loop effect
  useEffect(() => {
    if (activeTrack === 'ambient') {
      startAmbientChimes();
    } else if (activeTrack === 'song') {
      startMerryChristmasSong();
    } else if (activeTrack === 'halloween') {
      startHalloweenSong();
    } else {
      stopAudioLoop();
    }

    return () => stopAudioLoop();
  }, [activeTrack]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans relative overflow-x-hidden ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      <style>{`
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#020617' : '#f1f5f9'};
          border-left: 1px solid ${isDarkMode ? '#1e293b' : '#e2e8f0'};
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? 'linear-gradient(to bottom, #f59e0b, #f43f5e)' : 'linear-gradient(to bottom, #d97706, #e11d48)'};
          border-radius: 9999px;
          border: 2px solid ${isDarkMode ? '#020617' : '#f1f5f9'};
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: ${isDarkMode ? '#f59e0b #020617' : '#d97706 #f1f5f9'};
        }
      `}</style>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[150]" />

      {/* Nav Header */}
      <nav className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 lg:px-8 py-3.5 transition-colors ${
        isDarkMode ? 'border-slate-800/80 bg-slate-950/80 text-slate-100' : 'border-slate-200/50 bg-white/70 text-slate-900'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
              <IconSparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-amber-500 via-rose-500 to-emerald-500 bg-clip-text text-transparent">
                Festive Pulse
              </h1>
              <p className="text-[11px] text-slate-400 font-medium">Holiday Countdown Dashboard</p>
            </div>
          </div>

          {/* Center/Right Controls including Target Time Toggle Bar */}
          <div className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-3">
            {/* Confetti Waterfall Toggle Button */}
            <button
              onClick={() => toggleConfettiWaterfall("Test Celebration!")}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs shadow-md transition flex items-center space-x-1.5 ${
                isConfettiActive
                  ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 hover:from-amber-600 hover:to-purple-600 text-white'
              }`}
            >
              <IconParty className={`w-4 h-4 ${isConfettiActive ? 'text-white' : 'text-white animate-bounce'}`} />
              <span className="text-white"> Confetti 🎉</span>
            </button>

            {/* Target Time Toggle Bar (12 AM vs 12 PM) */}
            <div className={`flex items-center p-1 rounded-xl border text-xs font-semibold ${
              isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              <span className="text-[10px] uppercase font-bold text-slate-400 px-2 hidden sm:inline">Finish:</span>
              <button
                onClick={() => {
                  setTargetTimeMode('AM');
                  triggerToast('Finish Countdown set to 12:00 AM (Midnight)');
                }}
                className={`px-2.5 py-1 rounded-lg transition ${
                  targetTimeMode === 'AM'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                12 AM
              </button>
              <button
                onClick={() => {
                  setTargetTimeMode('PM');
                  triggerToast('Finish Countdown set to 12:00 PM (Noon)');
                }}
                className={`px-2.5 py-1 rounded-lg transition ${
                  targetTimeMode === 'PM'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                12 PM
              </button>
            </div>

            {/* Particles Toggle Button */}
            <button
              onClick={() => {
                const modes = ['snow', 'stars', 'off'];
                const next = modes[(modes.indexOf(fxMode) + 1) % modes.length];
                setFxMode(next);
                triggerToast(`Particles: ${next.toUpperCase()}`);
              }}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition ${
                isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              <IconSparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="capitalize">{fxMode}</span>
            </button>

            {/* Chime Menu Dropdown */}
            <div className="relative" ref={chimeMenuRef}>
              <button 
                onClick={() => setIsChimeMenuOpen(!isChimeMenuOpen)}
                className={`p-2.5 rounded-xl transition flex items-center space-x-2 text-xs font-semibold border ${
                  activeTrack !== 'off' 
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/30' 
                    : isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                {activeTrack !== 'off' ? (
                  <IconVolume className="w-4 h-4 text-amber-500 animate-bounce" />
                ) : (
                  <IconVolumeOff className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">Chimes</span>
                <IconChevronDown className={`w-3.5 h-3.5 transition-transform ${isChimeMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isChimeMenuOpen && <ChimePopoverContent />}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button 
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                triggerToast(`Theme switched to ${!isDarkMode ? 'Dark' : 'Light'} Mode`);
              }}
              className={`p-2.5 rounded-xl transition ${
                isDarkMode ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <IconSun className="w-4 h-4 text-amber-400" /> : <IconMoon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-10">
        {/* Spotlight Banner */}
        {heroEvent && (
          <section className={`relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-amber-500/20 shadow-2xl bg-gradient-to-br ${heroEvent.themeBg || 'from-emerald-950 via-slate-900 to-rose-950'} text-white transition-all duration-500`}>
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <IconMapper name={heroEvent.icon} className="w-80 h-80" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
                  <IconSparkles className="w-3.5 h-3.5" />
                  <span>Upcoming Spotlight</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight drop-shadow-md">
                  {heroEvent.title}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {heroEvent.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <button 
                    onClick={() => {
                      setFullscreenEventId(heroEvent.id);
                      triggerToast(`Opened ${heroEvent.title} Fullscreen`);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition flex items-center space-x-2"
                  >
                    <IconMaximize className="w-4 h-4" />
                    <span>Fullscreen View</span>
                  </button>
                </div>
              </div>

              {heroTime.isToday ? (
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-amber-500/40 text-center w-full lg:w-auto shadow-2xl animate-pulse">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    IT'S TODAY! 🎉
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
                    Happy {heroEvent.title}!
                  </h3>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center w-full lg:w-auto">
                  {[
                    { label: 'Days', value: heroTime.days },
                    { label: 'Hours', value: heroTime.hours },
                    { label: 'Mins', value: heroTime.minutes },
                    { label: 'Secs', value: heroTime.seconds }
                  ].map((unit, i) => (
                    <div key={i} className="bg-slate-900/60 backdrop-blur-md p-3 sm:p-6 rounded-2xl min-w-[70px] sm:min-w-[105px] border border-white/10 shadow-inner">
                      <span className="block font-serif text-3xl sm:text-5xl font-extrabold text-amber-400">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 block">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={`flex items-center space-x-1.5 sm:space-x-2 p-1.5 rounded-2xl w-full md:w-auto overflow-x-auto ${
            isDarkMode ? 'bg-slate-900/90 border border-slate-800' : 'bg-slate-200/60'
          }`}>
            {[
              { id: 'all', label: 'All Events' },
              { id: 'global', label: 'Global' },
              { id: 'seasonal', label: 'Seasonal' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  triggerToast(`Filter: ${cat.label}`);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-slate-900 shadow-sm') 
                    : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <IconSearch className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search holiday..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDarkMode 
                    ? 'bg-slate-900/90 border-slate-800 text-slate-100 placeholder-slate-500' 
                    : 'bg-white/90 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={`px-3 py-2 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-slate-100' 
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <option value="earliest">Earliest First</option>
              <option value="latest">Latest First</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Holiday Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full py-16 text-center text-slate-400">
              <IconCalendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-base font-medium">No holiday events found matching your search.</p>
            </div>
          ) : (
            filteredEvents.map(item => {
              const itemTime = calculateTimeLeft(item.date, item);
              const formattedDateStr = new Date(item.date).toLocaleDateString(undefined, { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              });

              return (
                <div 
                  key={item.id} 
                  className={`rounded-3xl p-6 backdrop-blur-md border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                    isDarkMode 
                      ? 'bg-slate-900/80 border-slate-800/80 text-slate-100' 
                      : 'bg-white/80 border-slate-200/80 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                        <IconMapper name={item.icon} className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                        isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {item.category}
                      </span>
                    </div>

                    <h3 className={`font-serif font-bold text-xl mb-1 transition-colors group-hover:text-amber-500 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {itemTime.isToday ? (
                      <div className="py-4 text-center rounded-2xl border border-amber-500/40 bg-amber-500/10">
                        <span className="font-serif font-bold text-lg text-amber-400 block">
                          Happy {item.title}! 🎉
                        </span>
                      </div>
                    ) : (
                      <div className={`grid grid-cols-4 gap-1.5 text-center py-3 rounded-2xl border ${
                        isDarkMode 
                          ? 'bg-slate-950/80 border-slate-800/60' 
                          : 'bg-slate-100/80 border-slate-200/60'
                      }`}>
                        <div>
                          <span className={`font-serif font-bold text-lg block ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                            {String(itemTime.days).padStart(2, '0')}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Days</span>
                        </div>
                        <div>
                          <span className={`font-serif font-bold text-lg block ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                            {String(itemTime.hours).padStart(2, '0')}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Hrs</span>
                        </div>
                        <div>
                          <span className={`font-serif font-bold text-lg block ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                            {String(itemTime.minutes).padStart(2, '0')}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Mins</span>
                        </div>
                        <div>
                          <span className="font-serif font-bold text-lg text-amber-500 block">
                            {String(itemTime.seconds).padStart(2, '0')}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Secs</span>
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-1">
                      <span className="font-medium flex items-center space-x-1">
                        <IconClock className="w-3.5 h-3.5" />
                        <span>{formattedDateStr}</span>
                      </span>

                      <button 
                        onClick={() => {
                          setFullscreenEventId(item.id);
                          triggerToast(`Fullscreen: ${item.title}`);
                        }}
                        className="px-3 py-1 rounded-xl border border-amber-500/50 hover:bg-amber-500/10 text-amber-500 font-semibold text-xs transition flex items-center space-x-1"
                      >
                        <IconMaximize className="w-3 h-3" />
                        <span>Fullscreen</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </main>

      {/* Fullscreen Modal View */}
      {fullscreenEvent && fullscreenTime && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 bg-gradient-to-br ${fullscreenEvent.themeBg || 'from-emerald-950 via-slate-900 to-rose-950'} text-white overflow-y-auto`}>
          {/* Background Watermark Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <IconMapper name={fullscreenEvent.icon} className="w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem]" />
          </div>

          <div className="absolute top-6 right-6 flex items-center space-x-2 sm:space-x-3 z-[110]">
            {/* Particles Toggle in Fullscreen */}
            <button
              onClick={() => {
                const modes = ['snow', 'stars', 'off'];
                const next = modes[(modes.indexOf(fxMode) + 1) % modes.length];
                setFxMode(next);
                triggerToast(`Particles: ${next.toUpperCase()}`);
              }}
              className="px-3 py-2 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-semibold flex items-center space-x-1.5 transition shadow-lg"
            >
              <IconSparkles className="w-4 h-4 text-amber-400" />
              <span className="capitalize">{fxMode}</span>
            </button>

            {/* Confetti Waterfall Trigger in Fullscreen */}
            <button
              onClick={() => toggleConfettiWaterfall(`Celebration for ${fullscreenEvent.title}!`)}
              className={`px-3 py-2 rounded-2xl font-bold text-xs shadow-lg transition flex items-center space-x-1.5 ${
                isConfettiActive
                  ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 hover:from-amber-600 hover:to-purple-600 text-white'
              }`}
            >
              <IconParty className={`w-4 h-4 ${isConfettiActive ? 'text-white' : 'text-white animate-bounce'}`} />
              <span className="text-white">{isConfettiActive ? 'Stop Confetti' : 'Confetti 🎉'}</span>
            </button>

            <div className="relative" ref={chimeMenuRef}>
              <button 
                onClick={() => setIsChimeMenuOpen(!isChimeMenuOpen)}
                className="px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-semibold flex items-center space-x-2 transition shadow-lg"
              >
                {activeTrack !== 'off' ? (
                  <IconVolume className="w-4 h-4 text-amber-400 animate-bounce" />
                ) : (
                  <IconVolumeOff className="w-4 h-4" />
                )}
                <span>Chimes</span>
                <IconChevronDown className={`w-3.5 h-3.5 transition-transform ${isChimeMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isChimeMenuOpen && <ChimePopoverContent />}
            </div>

            <button 
              onClick={() => setFullscreenEventId(null)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition shadow-lg"
            >
              <IconMinimize className="w-6 h-6" />
            </button>
          </div>

          <div className="relative z-10 text-center space-y-6 max-w-2xl my-auto">
            {/* Main Center Event Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-2xl">
              <IconMapper name={fullscreenEvent.icon} className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-sm font-bold uppercase tracking-widest border border-white/20">
              {fullscreenEvent.category}
            </span>
            <h1 className="text-5xl sm:text-7xl font-serif font-extrabold tracking-tight">
              {fullscreenEvent.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg italic">
              "{fullscreenEvent.quote || ''}"
            </p>

            {fullscreenTime.isToday ? (
              <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-amber-500/40 text-center shadow-2xl animate-pulse">
                <span className="text-sm font-bold uppercase tracking-widest text-amber-400 block mb-2">
                  IT'S TODAY! 🎉
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl font-extrabold text-white">
                  Happy {fullscreenEvent.title}!
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-4 text-center py-8">
                {[
                  { label: 'Days', value: fullscreenTime.days },
                  { label: 'Hours', value: fullscreenTime.hours },
                  { label: 'Minutes', value: fullscreenTime.minutes },
                  { label: 'Seconds', value: fullscreenTime.seconds }
                ].map((u, idx) => (
                  <div key={idx} className="bg-slate-900/70 backdrop-blur-lg p-4 sm:p-8 rounded-3xl border border-white/10">
                    <span className="block font-serif text-4xl sm:text-6xl font-extrabold text-amber-400">
                      {String(u.value).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 block">
                      {u.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global Portal Toast Notifications */}
      <ToastPortal message={toastMessage} />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}