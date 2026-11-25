
Johan Lasin <nikoy05yt@gmail.com>	Wed, Nov 25, 2026 at 5:12 PM
To: "348419268@tdsb.ca" <348419268@tdsb.ca>
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';

/* ============================================================================
 * 1. ICON REGISTRY MODULE
 * ============================================================================ */

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
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

const IconKeyboard = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10" />
  </svg>
);

const IconSettings = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ICON_COMPONENTS = {
  Bell: IconBell,
  TreePine: IconTree,
  PartyPopper: IconParty,
  Flame: IconFlame,
  Sparkles: IconSparkles,
  Utensils: IconUtensils,
  Compass: IconCompass,
  Gift: IconGift,
  Heart: IconHeart,
  Globe: IconGlobe
};

const IconMapper = React.memo(({ name, className = "w-5 h-5" }) => {
  const Component = ICON_COMPONENTS[name] || IconSparkles;
  return <Component className={className} />;
});

/* ============================================================================
 * 2. ASTRONOMICAL & MULTI-YEAR CALENDAR ENGINE
 * ============================================================================ */

const getNthWeekdayOfMonth = (year, monthZeroIndexed, weekday, nth) => {
  const firstDay = new Date(year, monthZeroIndexed, 1).getDay();
  const offset = (weekday - firstDay + 7) % 7;
  return new Date(year, monthZeroIndexed, 1 + offset + (nth - 1) * 7, 0, 0, 0, 0);
};

// Anonymous Gregorian algorithm (Meeus/Jones/Butcher)
const getEasterSunday = (year) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day, 0, 0, 0, 0);
};

// Jean Meeus Astronomical Solstice Approximation
const getAstronomicalSolsticeDate = (year, isWinter) => {
  const y = (year - 2000) / 1000;
  const jde0 = isWinter
    ? 2451900.05952 + 365242.74049 * y - 0.06223 * y * y - 0.00823 * y * y * y
    : 2451716.56767 + 365241.62603 * y + 0.00325 * y * y + 0.00888 * y * y * y;
  const utcMillis = (jde0 - 2440587.5) * 86400000;
  const d = new Date(utcMillis);
  return new Date(year, d.getUTCMonth(), d.getUTCDate(), 0, 0, 0, 0);
};

// 1. Infinite Lunar New Year via Browser ICU Astronomical Chinese Calendar
const getInfiniteLunarNewYear = (year) => {
  try {
    const fmt = new Intl.DateTimeFormat('en-US-u-ca-chinese', { month: 'numeric', day: 'numeric' });
    for (let offset = 0; offset <= 45; offset++) {
      const d = new Date(year, 0, 20 + offset, 0, 0, 0, 0);
      const parts = fmt.formatToParts(d);
      if (parts.find(p => p.type === 'month')?.value === '1' && parts.find(p => p.type === 'day')?.value === '1') {
        return d;
      }
    }
  } catch (e) {}
  return new Date(year, 1, 10, 0, 0, 0, 0);
};

// 2. Infinite Diwali via Jean Meeus Astronomical New Moon (Kartika Amavasya)
const getMeeusNewMoonUTC = (k) => {
  const T = k / 1236.85;
  const T2 = T * T, T3 = T2 * T, T4 = T3 * T;
  const rad = Math.PI / 180;
  let JDE = 2451550.09766 + 29.530588861 * k + 0.00015437 * T2 - 0.000000150 * T3 + 0.00000000073 * T4;
  const M = (2.5534 + 29.10535670 * k - 0.0000014 * T2) * rad;
  const Mp = (201.5643 + 385.81693528 * k + 0.0107582 * T2) * rad;
  const F = (160.7108 + 390.67050284 * k - 0.0016118 * T2) * rad;
  JDE += -0.40720 * Math.sin(Mp) + 0.17241 * Math.sin(M) + 0.01608 * Math.sin(2 * Mp)
       + 0.01039 * Math.sin(2 * F) + 0.00739 * Math.sin(Mp - M) - 0.00514 * Math.sin(Mp + M);
  return new Date((JDE - 2440587.5) * 86400000);
};

const getInfiniteDiwali = (year) => {
  const kApprox = Math.round((year + 0.82 - 2000) * 12.3685);
  for (let dk = -1; dk <= 1; dk++) {
    const nm = getMeeusNewMoonUTC(kApprox + dk);
    const istDate = new Date(nm.getTime() + 5.5 * 3600000); // IST (UTC+5:30)
    const m = istDate.getUTCMonth(), d = istDate.getUTCDate();
    if (istDate.getUTCFullYear() === year && ((m === 9 && d >= 18) || (m === 10 && d <= 16))) {
      return new Date(year, m, d, 0, 0, 0, 0);
    }
  }
  return new Date(year, 10, 1, 0, 0, 0, 0);
};

const getDynamicHolidayDateForYear = (eventObj, year) => {
  if (!eventObj) return new Date(year, 0, 1);

  switch (eventObj.rule) {
    case 'lunar-ny':
      return getInfiniteLunarNewYear(year);
    case 'family-day':
      return getNthWeekdayOfMonth(year, 1, 1, 3); // 3rd Monday in Feb
    case 'dst-start': {
      const d = getNthWeekdayOfMonth(year, 2, 0, 2); // 2nd Sunday in March
      d.setHours(2, 0, 0, 0);
      return d;
    }
    case 'easter':
      return getEasterSunday(year);
    case 'mothers-day':
      return getNthWeekdayOfMonth(year, 4, 0, 2); // 2nd Sunday in May
    case 'victoria-day': {
      const may25 = new Date(year, 4, 25, 0, 0, 0, 0);
      const dayOfWeek = may25.getDay();
      const diff = dayOfWeek === 1 ? 7 : (dayOfWeek + 6) % 7;
      return new Date(year, 4, 25 - diff, 0, 0, 0, 0);
    }
    case 'fathers-day':
      return getNthWeekdayOfMonth(year, 5, 0, 3); // 3rd Sunday in June
    case 'summer-solstice':
      return getAstronomicalSolsticeDate(year, false);
    case 'thanksgiving-ca':
      return getNthWeekdayOfMonth(year, 9, 1, 2); // 2nd Monday in Oct
    case 'dst-end': {
      const d = getNthWeekdayOfMonth(year, 10, 0, 1); // 1st Sunday in Nov
      d.setHours(2, 0, 0, 0);
      return d;
    }
    case 'diwali':
      return getInfiniteDiwali(year);
    case 'thanksgiving-us':
      return getNthWeekdayOfMonth(year, 10, 4, 4); // 4th Thursday in Nov
    case 'winter-solstice':
      return getAstronomicalSolsticeDate(year, true);
    default: {
      if (typeof eventObj.month === 'number' && typeof eventObj.day === 'number') {
        return new Date(year, eventObj.month, eventObj.day, 0, 0, 0, 0);
      }
      return new Date(year, 0, 1);
    }
  }
};

const HOLIDAY_CATALOG = [
  {
    id: 'nye-day',
    title: "New Year's Day",
    category: 'global',
    month: 0,
    day: 1,
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
    rule: 'lunar-ny',
    icon: 'Flame',
    defaultTrack: 'ambient',
    description: 'Spring Festival celebrating family reunions, red envelopes, lanterns, and good fortune.',
    quote: 'May prosperity and happiness follow you wherever you go.',
    themeBg: 'from-red-950 via-slate-900 to-amber-950'
  },
  {
    id: 'valentines',
    title: "Valentine's Day",
    category: 'global',
    month: 1,
    day: 14,
    icon: 'Heart',
    defaultTrack: 'ambient',
    description: 'A romantic day celebrating love, affection, chocolates, and appreciation.',
    quote: 'Where there is love there is life.',
    themeBg: 'from-rose-950 via-slate-900 to-pink-950'
  },
  {
    id: 'family-day',
    title: 'Family Day',
    category: 'global',
    rule: 'family-day',
    icon: 'Heart',
    defaultTrack: 'ambient',
    description: 'A dedicated holiday to celebrate togetherness, appreciation, and spending quality time with loved ones.',
    quote: 'Family is not an important thing. It’s everything.',
    themeBg: 'from-sky-950 via-slate-900 to-indigo-950'
  },
  {
    id: 'dst-start',
    title: 'Daylight Saving Time Begins',
    category: 'seasonal',
    rule: 'dst-start',
    isDST: true,
    icon: 'Compass',
    defaultTrack: 'ambient',
    description: 'Spring forward 1 hour at 2:00 AM! Enjoy an extra hour of evening daylight as summer approaches.',
    quote: 'Spring forward, fall back — step into brighter longer days.',
    themeBg: 'from-amber-950 via-orange-950 to-slate-950'
  },
  {
    id: 'st-patricks',
    title: "St. Patrick's Day",
    category: 'global',
    month: 2,
    day: 17,
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
    rule: 'easter',
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
    month: 3,
    day: 1,
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
    month: 3,
    day: 22,
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
    rule: 'mothers-day',
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
    rule: 'victoria-day',
    icon: 'PartyPopper',
    defaultTrack: 'ambient',
    description: "Celebrating Sovereign Queen Victoria's birthday, marking the unofficial kickoff of summer with fireworks, outdoor gatherings, and long weekend festivities.",
    quote: 'May the sun shine warm upon your face and laughter light your holiday.',
    themeBg: 'from-indigo-950 via-purple-900 to-slate-950'
  },
  {
    id: 'fathers-day',
    title: "Father's Day",
    category: 'global',
    rule: 'fathers-day',
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
    rule: 'summer-solstice',
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
    month: 6,
    day: 1,
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
    rule: 'thanksgiving-ca',
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
    month: 9,
    day: 31,
    icon: 'Sparkles',
    defaultTrack: 'halloween',
    description: 'Spooky costumes, pumpkin carving, and trick-or-treating fun.',
    quote: 'Double, double toil and trouble; Fire burn and caldron bubble.',
    themeBg: 'from-orange-950 via-slate-900 to-purple-950'
  },
  {
    id: 'dst-end',
    title: 'Daylight Saving Time Ends',
    category: 'seasonal',
    rule: 'dst-end',
    isDST: true,
    icon: 'Compass',
    defaultTrack: 'ambient',
    description: 'Fall back 1 hour at 2:00 AM! Enjoy an extra hour of sleep as winter approaches.',
    quote: 'An extra hour of restful sleep as autumn settles in.',
    themeBg: 'from-slate-950 via-indigo-950 to-blue-950'
  },
  {
    id: 'diwali',
    title: 'Diwali',
    category: 'global',
    rule: 'diwali',
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
    month: 10,
    day: 11,
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
    rule: 'thanksgiving-us',
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
    rule: 'winter-solstice',
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
    month: 11,
    day: 24,
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
    month: 11,
    day: 25,
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
    month: 11,
    day: 26,
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
    month: 11,
    day: 31,
    icon: 'Bell',
    defaultTrack: 'song',
    description: 'Countdowns, fireworks, toasts, and celebrating memories of the passing year as midnight approaches.',
    quote: 'Cheers to a new year and another chance for us to get it right.',
    themeBg: 'from-purple-950 via-amber-950 to-slate-950'
  }
];

const applyTargetTimeOfDay = (baseDate, eventObj, targetTimeMode) => {
  const target = new Date(baseDate.getTime());
  if (isNaN(target.getTime())) return new Date();

  const isDST = Boolean(
    eventObj &&
    (eventObj.isDST || eventObj.id === 'dst-start' || eventObj.id === 'dst-end' || eventObj.title?.includes('Daylight Saving'))
  );

  if (isDST) {
    target.setHours(2, 0, 0, 0);
    return target;
  }

  target.setHours(targetTimeMode === 'PM' ? 12 : 0, 0, 0, 0);
  return target;
};

const getNextTargetDate = (eventObj, now, targetTimeMode) => {
  if (!eventObj) return new Date();
  let year = now.getFullYear();
  let target = applyTargetTimeOfDay(getDynamicHolidayDateForYear(eventObj, year), eventObj, targetTimeMode);
  while (target < now) {
    year += 1;
    target = applyTargetTimeOfDay(getDynamicHolidayDateForYear(eventObj, year), eventObj, targetTimeMode);
  }
  return target;
};

const computeCountdown = (eventObj, now, targetTimeMode) => {
  if (!eventObj) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: false, targetDate: now };
  }

  const nowSecMs = Math.floor(now.getTime() / 1000) * 1000;
  const thisYearBase = getDynamicHolidayDateForYear(eventObj, now.getFullYear());
  const isSameCalendarDay =
    !isNaN(thisYearBase.getTime()) &&
    now.getMonth() === thisYearBase.getMonth() &&
    now.getDate() === thisYearBase.getDate();

  if (isSameCalendarDay) {
    const todayTarget = applyTargetTimeOfDay(thisYearBase, eventObj, targetTimeMode);
    const totalSecsToday = Math.round((todayTarget.getTime() - nowSecMs) / 1000);
    if (totalSecsToday > 0) {
      return {
        days: 0,
        hours: Math.floor((totalSecsToday % 86400) / 3600),
        minutes: Math.floor((totalSecsToday % 3600) / 60),
        seconds: totalSecsToday % 60,
        isToday: false,
        targetDate: todayTarget
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true, targetDate: todayTarget };
  }

  const nextTarget = getNextTargetDate(eventObj, now, targetTimeMode);
  const totalSecs = Math.round((nextTarget.getTime() - nowSecMs) / 1000);
  if (totalSecs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true, targetDate: nextTarget };
  }

  return {
    days: Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    minutes: Math.floor((totalSecs % 3600) / 60),
    seconds: totalSecs % 60,
    isToday: false,
    targetDate: nextTarget
  };
};

/* ============================================================================
 * 3. POLYPHONIC WEB AUDIO & MOBILE MEDIA SESSION ENGINE
 * ============================================================================ */

const PLAYABLE_TRACKS = ['ambient', 'song', 'halloween'];

const TRACK_LABELS = {
  ambient: 'Looping Chimes',
  song: 'We Wish You A Merry Christmas',
  halloween: 'Halloween Song (Piano)',
  off: 'Festive Pulse (Muted)'
};

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
  { note: 783.99, duration: 0.4 },
  { note: 392.00, duration: 0.4 },
  { note: 392.00, duration: 0.2 }, { note: 392.00, duration: 0.2 },
  { note: 440.00, duration: 0.4 }, { note: 587.33, duration: 0.4 }, { note: 493.88, duration: 0.4 }, { note: 523.25, duration: 0.8 }
];

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

const TRACK_DURATIONS = {
  ambient: 60.0,
  song: Number(MERRY_CHRISTMAS_MELODY.reduce((acc, n) => acc + n.duration, 0).toFixed(3)),
  halloween: Number(SPOOKY_SKELETONS_MELODY.reduce((acc, n) => acc + n.duration, 0).toFixed(3)),
  off: 10.0
};

let cachedCarrierWavUrl = null;
const getSilentWavUrl = () => {
  if (cachedCarrierWavUrl) return cachedCarrierWavUrl;
  if (typeof Blob === 'undefined' || typeof URL === 'undefined') return '';
  try {
    const sampleRate = 8000;
    const numSamples = sampleRate * 3600;
    const buffer = new ArrayBuffer(44 + numSamples);
    const view = new DataView(buffer);
    const writeString = (offset, str) => {
      for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + numSamples, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate, true);
    view.setUint16(32, 1, true);
    view.setUint16(34, 8, true);
    writeString(36, 'data');
    view.setUint32(40, numSamples, true);

    new Uint8Array(buffer, 44).fill(128);
    cachedCarrierWavUrl = URL.createObjectURL(new Blob([buffer], { type: 'audio/wav' }));
  } catch (e) {}
  return cachedCarrierWavUrl || '';
};

let cachedPngArtwork = null;
const getPngArtworkUrl = () => {
  if (cachedPngArtwork) return cachedPngArtwork;
  if (typeof document === 'undefined') return '';
  try {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 512;
    const ctx = c.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, 512, 512);

      const pad = 76;
      const size = 512 - pad * 2;
      const radius = 96;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(pad + radius, pad);
      ctx.lineTo(pad + size - radius, pad);
      ctx.quadraticCurveTo(pad + size, pad, pad + size, pad + radius);
      ctx.lineTo(pad + size, pad + size - radius);
      ctx.quadraticCurveTo(pad + size, pad + size, pad + size - radius, pad + size);
      ctx.lineTo(pad + radius, pad + size);
      ctx.quadraticCurveTo(pad, pad + size, pad, pad + size - radius);
      ctx.lineTo(pad, pad + radius);
      ctx.quadraticCurveTo(pad, pad, pad + radius, pad);
      ctx.closePath();

      const logoGrad = ctx.createLinearGradient(pad, pad + size, pad + size, pad);
      logoGrad.addColorStop(0, '#f59e0b');
      logoGrad.addColorStop(0.5, '#f43f5e');
      logoGrad.addColorStop(1, '#10b981');
      ctx.fillStyle = logoGrad;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(256, 256);
      ctx.scale(9.5, 9.5);
      ctx.translate(-12, -12);

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(13, 3);
      ctx.quadraticCurveTo(13.8, 11.2, 21, 12);
      ctx.quadraticCurveTo(13.8, 12.8, 13, 21);
      ctx.quadraticCurveTo(12.2, 12.8, 5, 12);
      ctx.quadraticCurveTo(12.2, 11.2, 13, 3);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(5, 3);
      ctx.lineTo(5, 7);
      ctx.moveTo(3, 5);
      ctx.lineTo(7, 5);
      ctx.moveTo(6, 17);
      ctx.lineTo(6, 21);
      ctx.moveTo(4, 19);
      ctx.lineTo(8, 19);
      ctx.stroke();
      ctx.restore();

      cachedPngArtwork = c.toDataURL('image/png');
    }
  } catch (e) {}
  return cachedPngArtwork || '';
};

function useFestiveAudioEngine(onNotify) {
  const [activeTrack, setActiveTrack] = useState('off');
  const activeTrackRef = useRef('off');
  const hasUserInteractedRef = useRef(false);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const mediaDestRef = useRef(null);
  const bgAudioElRef = useRef(null);
  const carrierAudioElRef = useRef(null);
  const activeOscillatorsRef = useRef([]);
  const keepAliveOscRef = useRef(null);
  const chimeTimerRef = useRef(null);
  const loopAnchorCtxTimeRef = useRef(0);
  const loopStartTimesRef = useRef([]);
  const nextNoteTimeRef = useRef(0);
  const songStepRef = useRef(0);

  const updateMediaPositionState = useCallback((trackId, resetToZero = false) => {
    if (!('mediaSession' in navigator) || typeof navigator.mediaSession.setPositionState !== 'function') return;
    if (trackId === 'off') return;
    try {
      const duration = TRACK_DURATIONS[trackId] || 60;
      let position = 0;
      if (!resetToZero && audioCtxRef.current && loopAnchorCtxTimeRef.current > 0) {
        const elapsed = Math.max(0, audioCtxRef.current.currentTime - loopAnchorCtxTimeRef.current);
        position = elapsed >= duration ? elapsed % duration : elapsed;
      }
      navigator.mediaSession.setPositionState({
        duration,
        playbackRate: 1.0,
        position: Math.min(position, Math.max(0, duration - 0.05))
      });
    } catch (e) {}
  }, []);

  const syncMediaMetadata = useCallback((trackId, resetPosition = false) => {
    const label = TRACK_LABELS[trackId] || 'Festive Pulse';
    if (typeof document !== 'undefined') {
      document.title = trackId === 'off' ? 'Festive Pulse — Holiday Dashboard' : `${label} — Festive Pulse`;
    }
    if ('mediaSession' in navigator) {
      try {
        const artUrl = getPngArtworkUrl();
        const artwork = artUrl
          ? [
              { src: artUrl, sizes: '96x96', type: 'image/png' },
              { src: artUrl, sizes: '256x256', type: 'image/png' },
              { src: artUrl, sizes: '512x512', type: 'image/png' }
            ]
          : [];

        if (typeof window !== 'undefined' && 'MediaMetadata' in window) {
          navigator.mediaSession.metadata = new window.MediaMetadata({
            title: label,
            artist: 'Festive Pulse',
            album: 'Holiday Chimes & Melodies',
            artwork
          });
        }
        navigator.mediaSession.playbackState = trackId === 'off' ? 'paused' : 'playing';
        updateMediaPositionState(trackId, resetPosition);
      } catch (e) {}
    }

    if (typeof Audio !== 'undefined') {
      try {
        if (!carrierAudioElRef.current) {
          const carrierEl = new Audio();
          carrierEl.setAttribute('playsinline', 'true');
          carrierEl.loop = true;
          carrierEl.volume = 0.01;
          carrierEl.src = getSilentWavUrl();
          carrierAudioElRef.current = carrierEl;
        }
        if (trackId !== 'off' && hasUserInteractedRef.current) {
          if (carrierAudioElRef.current.paused) {
            carrierAudioElRef.current.play().catch(() => {});
          }
        } else if (!carrierAudioElRef.current.paused) {
          carrierAudioElRef.current.pause();
        }
      } catch (e) {}
    }
  }, [updateMediaPositionState]);

  const stopAudioLoop = useCallback(() => {
    if (chimeTimerRef.current) {
      clearInterval(chimeTimerRef.current);
      chimeTimerRef.current = null;
    }

    const ctx = audioCtxRef.current;
    if (ctx && masterGainRef.current) {
      try {
        masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
        masterGainRef.current.gain.setValueAtTime(0, ctx.currentTime);
      } catch (e) {}
    }

    activeOscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    activeOscillatorsRef.current = [];

    if (activeTrackRef.current === 'off') {
      bgAudioElRef.current?.pause();
      carrierAudioElRef.current?.pause();
      if ('mediaSession' in navigator) {
        try {
          navigator.mediaSession.playbackState = 'paused';
        } catch (e) {}
      }
    }
  }, []);

  const selectTrack = useCallback((trackId, toastMsg, isAutoSwitch = false) => {
    if (!isAutoSwitch) {
      hasUserInteractedRef.current = true;
    }
    if (isAutoSwitch && !hasUserInteractedRef.current) {
      return;
    }
    activeTrackRef.current = trackId;
    syncMediaMetadata(trackId, true);
    if (trackId === 'off') {
      stopAudioLoop();
    }
    setActiveTrack(trackId);
    if (toastMsg && onNotify) onNotify(toastMsg);
  }, [onNotify, stopAudioLoop, syncMediaMetadata]);

  const initAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx && !masterGainRef.current) {
      const mGain = ctx.createGain();
      mGain.gain.setValueAtTime(activeTrackRef.current === 'off' ? 0 : 1, ctx.currentTime);

      if (typeof ctx.createMediaStreamDestination === 'function') {
        try {
          const dest = ctx.createMediaStreamDestination();
          mGain.connect(dest);
          mediaDestRef.current = dest;

          if (!bgAudioElRef.current) {
            const audioEl = new Audio();
            audioEl.setAttribute('playsinline', 'true');
            audioEl.loop = true;
            audioEl.addEventListener('play', () => syncMediaMetadata(activeTrackRef.current));
            bgAudioElRef.current = audioEl;
          }
          if (bgAudioElRef.current.srcObject !== dest.stream) {
            bgAudioElRef.current.srcObject = dest.stream;
          }
          if (activeTrackRef.current !== 'off') {
            bgAudioElRef.current.play().then(() => syncMediaMetadata(activeTrackRef.current)).catch(() => {});
          }
        } catch (e) {
          mGain.connect(ctx.destination);
        }
      } else {
        mGain.connect(ctx.destination);
      }
      masterGainRef.current = mGain;
    }

    if (ctx && masterGainRef.current && activeTrackRef.current !== 'off') {
      masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      masterGainRef.current.gain.setValueAtTime(1, ctx.currentTime);
      if (bgAudioElRef.current && bgAudioElRef.current.paused && hasUserInteractedRef.current) {
        bgAudioElRef.current.play().catch(() => {});
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    if (ctx && !keepAliveOscRef.current) {
      try {
        const silentOsc = ctx.createOscillator();
        const silentGain = ctx.createGain();
        silentOsc.frequency.setValueAtTime(10, ctx.currentTime);
        silentGain.gain.setValueAtTime(0.00001, ctx.currentTime);
        silentOsc.connect(silentGain);
        silentGain.connect(mediaDestRef.current || ctx.destination);
        silentOsc.start();
        keepAliveOscRef.current = silentOsc;
      } catch (e) {}
    }

    if ('mediaSession' in navigator) {
      try {
        syncMediaMetadata(activeTrackRef.current);
        navigator.mediaSession.setActionHandler('play', () => {
          if (activeTrackRef.current === 'off') {
            selectTrack('ambient', 'Looping Ambient Chimes Active');
          } else {
            ctx?.resume().catch(() => {});
            carrierAudioElRef.current?.play().catch(() => {});
            bgAudioElRef.current?.play().catch(() => {});
            syncMediaMetadata(activeTrackRef.current);
          }
        });
        navigator.mediaSession.setActionHandler('pause', () => selectTrack('off', 'Chimes Muted'));
        navigator.mediaSession.setActionHandler('stop', () => selectTrack('off', 'Chimes Muted'));
        navigator.mediaSession.setActionHandler('seekto', (details) => {
          if (details && typeof details.seekTime === 'number' && audioCtxRef.current) {
            loopAnchorCtxTimeRef.current = audioCtxRef.current.currentTime - details.seekTime;
            loopStartTimesRef.current = [];
            updateMediaPositionState(activeTrackRef.current, false);
          }
        });
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          const currentIdx = PLAYABLE_TRACKS.indexOf(activeTrackRef.current);
          const nextIdx = currentIdx === -1 ? 0 : (currentIdx + 1) % PLAYABLE_TRACKS.length;
          const nextTrack = PLAYABLE_TRACKS[nextIdx];
          selectTrack(nextTrack, `${TRACK_LABELS[nextTrack]} Active`);
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          const currentIdx = PLAYABLE_TRACKS.indexOf(activeTrackRef.current);
          const prevIdx = currentIdx <= 0 ? PLAYABLE_TRACKS.length - 1 : currentIdx - 1;
          const prevTrack = PLAYABLE_TRACKS[prevIdx];
          selectTrack(prevTrack, `${TRACK_LABELS[prevTrack]} Active`);
        });
      } catch (e) {}
    }

    return ctx;
  }, [selectTrack, syncMediaMetadata, updateMediaPositionState]);

  const scheduleVoice = useCallback((freq, startTime, duration, vol, harmonicRatio = 2, harmonicGain = 0.22, useLowpass = false) => {
    const ctx = initAudioCtx();
    const dest = masterGainRef.current || ctx?.destination;
    if (!ctx || !dest || freq <= 0.01) return;

    const targetNode = useLowpass ? ctx.createBiquadFilter() : dest;
    if (useLowpass) {
      targetNode.type = 'lowpass';
      targetNode.frequency.setValueAtTime(Math.min(freq * 4, 3200), startTime);
      targetNode.connect(dest);
    }

    const oscMain = ctx.createOscillator();
    const gainMain = ctx.createGain();
    oscMain.type = 'sine';
    oscMain.frequency.setValueAtTime(freq, startTime);

    gainMain.gain.setValueAtTime(0.0001, startTime);
    gainMain.gain.linearRampToValueAtTime(vol, startTime + 0.015);
    gainMain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 1.9);

    oscMain.connect(gainMain);
    gainMain.connect(targetNode);

    if (harmonicGain > 0) {
      const oscOvertone = ctx.createOscillator();
      const gainOvertone = ctx.createGain();
      oscOvertone.type = useLowpass ? 'triangle' : 'sine';
      oscOvertone.frequency.setValueAtTime(freq * harmonicRatio, startTime);

      gainOvertone.gain.setValueAtTime(0.0001, startTime);
      gainOvertone.gain.linearRampToValueAtTime(vol * harmonicGain, startTime + 0.01);
      gainOvertone.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 1.2);

      oscOvertone.connect(gainOvertone);
      gainOvertone.connect(targetNode);

      activeOscillatorsRef.current.push(oscMain, oscOvertone);
      oscMain.onended = () => {
        activeOscillatorsRef.current = activeOscillatorsRef.current.filter(o => o !== oscMain && o !== oscOvertone);
      };

      oscMain.start(startTime);
      oscMain.stop(startTime + duration * 1.9);
      oscOvertone.start(startTime);
      oscOvertone.stop(startTime + duration * 1.25);
    } else {
      activeOscillatorsRef.current.push(oscMain);
      oscMain.onended = () => {
        activeOscillatorsRef.current = activeOscillatorsRef.current.filter(o => o !== oscMain);
      };

      oscMain.start(startTime);
      oscMain.stop(startTime + duration * 1.9);
    }
  }, [initAudioCtx]);

  const startLookaheadAudioLoop = useCallback((trackType) => {
    stopAudioLoop();
    const ctx = initAudioCtx();
    if (!ctx) return;

    songStepRef.current = 0;
    const startCtxTime = ctx.currentTime + 0.05;
    nextNoteTimeRef.current = startCtxTime;
    loopAnchorCtxTimeRef.current = startCtxTime;
    loopStartTimesRef.current = [];
    let isFirstLoopNote = true;
    const ambientNotes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];

    const scheduler = () => {
      if (activeTrackRef.current !== trackType) return;
      const currentCtx = initAudioCtx();
      if (!currentCtx) return;

      if (nextNoteTimeRef.current < currentCtx.currentTime) {
        nextNoteTimeRef.current = currentCtx.currentTime + 0.05;
        loopAnchorCtxTimeRef.current = nextNoteTimeRef.current;
        loopStartTimesRef.current = [];
        isFirstLoopNote = true;
      }

      const scheduleAheadTime = 4.0;
      while (nextNoteTimeRef.current < currentCtx.currentTime + scheduleAheadTime) {
        if (trackType === 'ambient') {
          const freq = ambientNotes[Math.floor(Math.random() * ambientNotes.length)];
          scheduleVoice(freq, nextNoteTimeRef.current, 1.4, 0.16, 2, 0, false);
          nextNoteTimeRef.current += 0.65;
          if (currentCtx.currentTime - loopAnchorCtxTimeRef.current >= TRACK_DURATIONS.ambient) {
            loopAnchorCtxTimeRef.current = currentCtx.currentTime;
            updateMediaPositionState('ambient', true);
          }
        } else if (trackType === 'song') {
          const item = MERRY_CHRISTMAS_MELODY[songStepRef.current];
          if (item) {
            if (songStepRef.current === 0) {
              if (isFirstLoopNote) {
                loopAnchorCtxTimeRef.current = nextNoteTimeRef.current;
                isFirstLoopNote = false;
              } else {
                loopStartTimesRef.current.push(nextNoteTimeRef.current);
              }
            }
            if (item.note > 10) {
              const voiceDur = (item.sustain || item.duration) * 1.35;
              scheduleVoice(item.note, nextNoteTimeRef.current, voiceDur, item.vol || 0.2, 2, item.harmonicGain || 0, false);
            }
            nextNoteTimeRef.current += item.duration;
            songStepRef.current = (songStepRef.current + 1) % MERRY_CHRISTMAS_MELODY.length;
          }
        } else if (trackType === 'halloween') {
          const item = SPOOKY_SKELETONS_MELODY[songStepRef.current];
          if (item) {
            if (songStepRef.current === 0) {
              if (isFirstLoopNote) {
                loopAnchorCtxTimeRef.current = nextNoteTimeRef.current;
                isFirstLoopNote = false;
              } else {
                loopStartTimesRef.current.push(nextNoteTimeRef.current);
              }
            }
            if (item.note > 10) {
              scheduleVoice(item.note, nextNoteTimeRef.current, item.duration * 1.35, 0.26, 2, 0.28, true);
            }
            nextNoteTimeRef.current += item.duration;
            songStepRef.current = (songStepRef.current + 1) % SPOOKY_SKELETONS_MELODY.length;
          }
        }
      }
    };

    scheduler();
    chimeTimerRef.current = setInterval(scheduler, 500);
  }, [initAudioCtx, scheduleVoice, stopAudioLoop, updateMediaPositionState]);

  useEffect(() => {
    activeTrackRef.current = activeTrack;
    if (activeTrack !== 'off') {
      startLookaheadAudioLoop(activeTrack);
      syncMediaMetadata(activeTrack, true);
    } else {
      stopAudioLoop();
      syncMediaMetadata('off', true);
    }
    return () => stopAudioLoop();
  }, [activeTrack, startLookaheadAudioLoop, stopAudioLoop, syncMediaMetadata]);

  useEffect(() => {
    const keepAudioAlive = (e) => {
      if (e && e.type === 'pointerdown' && !hasUserInteractedRef.current) {
        hasUserInteractedRef.current = true;
        if (activeTrackRef.current === 'off') {
          selectTrack('ambient', null, false);
          return;
        }
      }
      if (activeTrackRef.current !== 'off' && hasUserInteractedRef.current) {
        const ctx = initAudioCtx();
        if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
        syncMediaMetadata(activeTrackRef.current);
        if (!chimeTimerRef.current) startLookaheadAudioLoop(activeTrackRef.current);
      }
    };

    const watchdog = setInterval(() => {
      if (activeTrackRef.current !== 'off') {
        if (audioCtxRef.current?.state === 'suspended') {
          audioCtxRef.current.resume().catch(() => {});
        }
        const ctx = audioCtxRef.current;
        if (ctx && loopStartTimesRef.current.length > 0 && ctx.currentTime >= loopStartTimesRef.current[0]) {
          loopAnchorCtxTimeRef.current = loopStartTimesRef.current.shift();
          updateMediaPositionState(activeTrackRef.current, true);
        }
      }
    }, 100);

    document.addEventListener('visibilitychange', keepAudioAlive);
    window.addEventListener('focus', keepAudioAlive);
    window.addEventListener('blur', keepAudioAlive);
    window.addEventListener('pagehide', keepAudioAlive);
    window.addEventListener('pointerdown', keepAudioAlive);

    return () => {
      clearInterval(watchdog);
      document.removeEventListener('visibilitychange', keepAudioAlive);
      window.removeEventListener('focus', keepAudioAlive);
      window.removeEventListener('blur', keepAudioAlive);
      window.removeEventListener('pagehide', keepAudioAlive);
      window.removeEventListener('pointerdown', keepAudioAlive);
    };
  }, [initAudioCtx, startLookaheadAudioLoop, syncMediaMetadata, updateMediaPositionState]);

  return { activeTrack, selectTrack };
}

/* ============================================================================
 * 4. MEMOIZED UI SUBCOMPONENTS
 * ============================================================================ */

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

const ToastPortal = React.memo(({ message }) => {
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
});

const ChimePopover = React.memo(({ activeTrack, isDarkMode, onSelectTrack }) => (
  <div
    role="menu"
    aria-label="Audio track selection"
    className={`absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl p-3 shadow-2xl border backdrop-blur-xl z-[9999] animate-in fade-in zoom-in-95 duration-150 ${
      isDarkMode ? 'bg-slate-900/95 border-slate-700 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800'
    }`}
  >
    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 mb-1">
      Select Audio Track
    </div>

    <div className="space-y-1.5">
      <button
        role="menuitemradio"
        aria-checked={activeTrack === 'ambient'}
        onClick={() => onSelectTrack('ambient', 'Looping Ambient Chimes Active')}
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
        role="menuitemradio"
        aria-checked={activeTrack === 'song'}
        onClick={() => onSelectTrack('song', 'Merry Christmas Melody Active')}
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
        role="menuitemradio"
        aria-checked={activeTrack === 'halloween'}
        onClick={() => onSelectTrack('halloween', 'Halloween Piano Active')}
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
        role="menuitemradio"
        aria-checked={activeTrack === 'off'}
        onClick={() => onSelectTrack('off', 'Chimes Muted')}
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
));

const HolidayCard = React.memo(({ item, itemTime, isDarkMode, onOpenFullscreen }) => {
  const formattedDateStr = itemTime.targetDate.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div
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
            onClick={() => onOpenFullscreen(item)}
            className="px-3 py-1 rounded-xl border border-amber-500/50 hover:bg-amber-500/10 text-amber-500 font-semibold text-xs transition flex items-center space-x-1"
          >
            <IconMaximize className="w-3 h-3" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>
    </div>
  );
});

/* ============================================================================
 * 5. MAIN DASHBOARD APPLICATION
 * ============================================================================ */

function MainApp() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('earliest');
  const [targetTimeMode, setTargetTimeMode] = useState(() => {
    try {
      const saved = localStorage.getItem('festive_pulse_target_time_mode');
      return saved === 'PM' ? 'PM' : 'AM';
    } catch (e) {
      return 'AM';
    }
  });
  const [is24HourTime, setIs24HourTime] = useState(() => {
    try {
      return localStorage.getItem('festive_pulse_24h_time') === 'true';
    } catch (e) {
      return false;
    }
  });
  const [fullscreenEventId, setFullscreenEventId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('festive_pulse_dark_mode');
      return saved === null ? true : saved === 'true';
    } catch (e) {
      return true;
    }
  });
  const [fxMode, setFxMode] = useState(() => {
    try {
      const saved = localStorage.getItem('festive_pulse_fx_mode');
      return ['snow', 'stars', 'off'].includes(saved) ? saved : 'snow';
    } catch (e) {
      return 'snow';
    }
  });
  const [openChimeMenuLocation, setOpenChimeMenuLocation] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [now, setNow] = useState(() => new Date());
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('festive_pulse_target_time_mode', targetTimeMode);
      localStorage.setItem('festive_pulse_24h_time', String(is24HourTime));
      localStorage.setItem('festive_pulse_dark_mode', String(isDarkMode));
      localStorage.setItem('festive_pulse_fx_mode', fxMode);
    } catch (e) {}
  }, [targetTimeMode, is24HourTime, isDarkMode, fxMode]);

  const confettiEndTimeRef = useRef(0);
  const dismissedHolidayWindowRef = useRef(null);
  const canvasRef = useRef(null);
  const settingsMenuRef = useRef(null);
  const navChimeMenuRef = useRef(null);
  const fsChimeMenuRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 120, isDown: false });
  const toastTimeoutRef = useRef(null);

  const triggerToast = useCallback((msg) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToastMessage(''), 3000);
  }, []);

  const { activeTrack, selectTrack } = useFestiveAudioEngine(triggerToast);

  const handleSelectTrack = useCallback((trackId, msg) => {
    selectTrack(trackId, msg);
    setOpenChimeMenuLocation(null);
  }, [selectTrack]);

  const toggleConfettiWaterfall = useCallback((customToastMsg = null) => {
    setIsConfettiActive((prev) => {
      if (prev) {
        confettiEndTimeRef.current = 0;
        const activeWindow = HOLIDAY_CATALOG.find((ev) => {
          const base = getDynamicHolidayDateForYear(ev, now.getFullYear());
          if (now.getMonth() !== base.getMonth() || now.getDate() !== base.getDate()) return false;
          const startHour = targetTimeMode === 'PM' ? 12 : 0;
          return now.getHours() >= startHour && now.getHours() < 15;
        });
        if (activeWindow) {
          dismissedHolidayWindowRef.current = `${activeWindow.id}-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${targetTimeMode}`;
        }
        triggerToast('Confetti stopped');
        return false;
      }
      dismissedHolidayWindowRef.current = null;
      confettiEndTimeRef.current = Date.now() + 8000;
      if (customToastMsg) triggerToast(customToastMsg);
      return true;
    });
  }, [now, targetTimeMode, triggerToast]);

  // Automatic holiday confetti window: 12:00 AM - 3:00 PM (when 12 AM selected) or 12:00 PM - 3:00 PM (when 12 PM selected)
  useEffect(() => {
    const startHour = targetTimeMode === 'PM' ? 12 : 0;
    const endHour = 15; // 3:00 PM

    const matchingHoliday = HOLIDAY_CATALOG.find((ev) => {
      const base = getDynamicHolidayDateForYear(ev, now.getFullYear());
      if (now.getMonth() !== base.getMonth() || now.getDate() !== base.getDate()) return false;
      const currentHour = now.getHours();
      return currentHour >= startHour && currentHour < endHour;
    });

    if (matchingHoliday) {
      const windowKey = `${matchingHoliday.id}-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${targetTimeMode}`;
      if (dismissedHolidayWindowRef.current !== windowKey) {
        const windowEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHour, 0, 0, 0).getTime();
        if (confettiEndTimeRef.current < windowEnd) {
          confettiEndTimeRef.current = windowEnd;
        }
        if (!isConfettiActive) {
          setIsConfettiActive(true);
        }
      }
    }
  }, [now, targetTimeMode, isConfettiActive]);

  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const WINTER_EVENT_IDS = new Set([
      'nye-day',
      'lunar-ny',
      'valentines',
      'family-day',
      'solstice',
      'xmas-eve',
      'xmas',
      'boxing-day',
      'nye-eve'
    ]);
    return HOLIDAY_CATALOG
      .filter((item) => {
        const matchesCategory =
          activeCategory === 'all' ||
          (activeCategory === 'winter' ? WINTER_EVENT_IDS.has(item.id) : item.category === activeCategory);
        const matchesSearch =
          !query ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortOrder === 'alphabetical') return a.title.localeCompare(b.title);
        const diffA = getNextTargetDate(a, now, targetTimeMode) - now;
        const diffB = getNextTargetDate(b, now, targetTimeMode) - now;
        return sortOrder === 'earliest' ? diffA - diffB : diffB - diffA;
      });
  }, [activeCategory, searchQuery, sortOrder, now, targetTimeMode]);

  const heroEvent = useMemo(() => {
    if (filteredEvents.length === 0) return null;
    const todayEvent = filteredEvents.find((e) => {
      const d = getDynamicHolidayDateForYear(e, now.getFullYear());
      return now.getMonth() === d.getMonth() && now.getDate() === d.getDate();
    });
    if (todayEvent && sortOrder === 'earliest') return todayEvent;
    return filteredEvents[0];
  }, [filteredEvents, sortOrder, now]);

  const fullscreenEvent = useMemo(() => {
    if (!fullscreenEventId) return null;
    return HOLIDAY_CATALOG.find((e) => e.id === fullscreenEventId) || null;
  }, [fullscreenEventId]);

  const heroTime = useMemo(
    () => computeCountdown(heroEvent, now, targetTimeMode),
    [heroEvent, now, targetTimeMode]
  );

  const fullscreenTime = useMemo(
    () => (fullscreenEvent ? computeCountdown(fullscreenEvent, now, targetTimeMode) : null),
    [fullscreenEvent, now, targetTimeMode]
  );

  // Auto-switch track when spotlight or fullscreen holiday changes
  useEffect(() => {
    const currentEvent = fullscreenEvent || heroEvent;
    if (currentEvent?.defaultTrack) {
      selectTrack(currentEvent.defaultTrack, null, true);
    }
  }, [heroEvent?.id, fullscreenEvent?.id, selectTrack]);

  // Outside click & keyboard shortcuts ('Escape', 'm' mute toggle, 'c' confetti)
  useEffect(() => {
    const handleClickOutside = (e) => {
      const inSettings = settingsMenuRef.current && settingsMenuRef.current.contains(e.target);
      const inNavChime = navChimeMenuRef.current && navChimeMenuRef.current.contains(e.target);
      const inFs = fsChimeMenuRef.current && fsChimeMenuRef.current.contains(e.target);
      if (!inSettings) setIsSettingsOpen(false);
      if (!inNavChime && !inFs) setOpenChimeMenuLocation(null);
    };

    const handleKeyDown = (e) => {
      if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      if (e.key === 'Escape') {
        setOpenChimeMenuLocation(null);
        setIsSettingsOpen(false);
        setFullscreenEventId(null);
      } else if (e.key.toLowerCase() === 'm') {
        if (activeTrack === 'off') {
          selectTrack('ambient', 'Looping Ambient Chimes Active');
        } else {
          selectTrack('off', 'Chimes Muted');
        }
      } else if (e.key.toLowerCase() === 'c') {
        toggleConfettiWaterfall('Celebration Confetti!');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTrack, selectTrack, toggleConfettiWaterfall]);

  // Exact wall-clock second-boundary aligned tick loop
  useEffect(() => {
    let timeoutId;
    let isCancelled = false;

    const getSnappedNow = () => new Date(Math.floor(Date.now() / 1000) * 1000);

    const scheduleNextTick = () => {
      const currentMs = Date.now();
      const msUntilNextSecond = 1000 - (currentMs % 1000) + 15;
      timeoutId = setTimeout(() => {
        if (isCancelled) return;
        setNow(getSnappedNow());
        scheduleNextTick();
      }, msUntilNextSecond);
    };

    setNow(getSnappedNow());
    scheduleNextTick();

    const handleVisibilitySync = () => {
      if (document.visibilityState === 'visible') {
        setNow(getSnappedNow());
        clearTimeout(timeoutId);
        scheduleNextTick();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilitySync);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
      document.removeEventListener('visibilitychange', handleVisibilitySync);
    };
  }, []);

  // Sync html & body background color with theme to prevent white rubber-band overscroll on mobile
  useEffect(() => {
    const bgHex = isDarkMode ? '#020617' : '#f8fafc';
    document.documentElement.style.backgroundColor = bgHex;
    document.body.style.backgroundColor = bgHex;
  }, [isDarkMode]);

  // Interactive Particle & Confetti Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const extraBurstParticles = [];
    const confettiColors = ['#f59e0b', '#f43f5e', '#10b981', '#38bdf8', '#a855f7', '#fbbf24'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const confettiParticles = Array.from({ length: 110 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * -window.innerHeight,
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      speedY: Math.random() * 3.5 + 2,
      speedX: (Math.random() - 0.5) * 1.5,
      oscillation: Math.random() * Math.PI * 2,
      oscSpeed: Math.random() * 0.08 + 0.03,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
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

      if (Date.now() < confettiEndTimeRef.current) {
        confettiParticles.forEach((c) => {
          c.y += c.speedY;
          c.oscillation += c.oscSpeed;
          c.x += c.speedX + Math.sin(c.oscillation) * 1.5;
          c.rotation += c.rotSpeed;

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

  const handleOpenFullscreen = useCallback((item) => {
    setFullscreenEventId(item.id);
    triggerToast(`Fullscreen: ${item.title}`);
  }, [triggerToast]);

  const formattedLiveTime = useMemo(
    () =>
      now.toLocaleTimeString(undefined, {
        hour: is24HourTime ? '2-digit' : 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24HourTime
      }),
    [now, is24HourTime]
  );

  const handleBlockClipboard = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans relative overflow-x-hidden ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      <style>{`
        html, body {
          background-color: ${isDarkMode ? '#020617' : '#f8fafc'};
          overscroll-behavior-y: none;
        }
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
        @media (orientation: landscape) and (max-height: 520px) {
          .fs-modal-root {
            padding: 0.4rem 1rem !important;
            justify-content: center !important;
          }
          .fs-toolbar {
            position: absolute !important;
            top: 0.45rem !important;
            right: 0.75rem !important;
            gap: 0.35rem !important;
          }
          .fs-toolbar-time-top {
            display: flex !important;
            padding: 0.25rem 0.55rem !important;
            font-size: 0.65rem !important;
            border-radius: 0.6rem !important;
          }
          .fs-bottom-time-mobile {
            display: none !important;
          }
          .fs-toolbar button {
            padding: 0.25rem 0.55rem !important;
            font-size: 0.65rem !important;
            border-radius: 0.6rem !important;
          }
          .fs-content-wrap {
            padding-top: 1.5rem !important;
            padding-bottom: 0.25rem !important;
            gap: 0.35rem !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .fs-content-wrap > * + * {
            margin-top: 0.3rem !important;
          }
          .fs-badge {
            padding: 0.15rem 0.6rem !important;
            font-size: 0.6rem !important;
          }
          .fs-title {
            font-size: 1.45rem !important;
            line-height: 1.15 !important;
          }
          .fs-grid {
            gap: 0.45rem !important;
            max-width: 24rem !important;
            width: 100% !important;
          }
          .fs-tile {
            padding: 0.35rem 0.4rem !important;
            border-radius: 0.75rem !important;
          }
          .fs-digit {
            font-size: 1.25rem !important;
            line-height: 1.15 !important;
          }
          .fs-unit {
            font-size: 0.55rem !important;
            margin-top: 0.1rem !important;
          }
          .fs-desc {
            font-size: 0.7rem !important;
            line-height: 1.25 !important;
            max-width: 34rem !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 1 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          .fs-quote {
            font-size: 0.65rem !important;
            line-height: 1.2 !important;
            max-width: 32rem !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 1 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          .fs-target {
            font-size: 0.6rem !important;
            padding-top: 0 !important;
          }
        }
      `}</style>

      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[150]" />

      {/* Nav Header */}
      <nav className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 lg:px-8 py-3.5 transition-colors ${
        isDarkMode ? 'border-slate-800/80 bg-slate-950/80 text-slate-100' : 'border-slate-200/50 bg-white/70 text-slate-900'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
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
            <div
              aria-label="Current local time"
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-xl border text-xs font-mono font-semibold tabular-nums ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 text-amber-400'
                  : 'bg-slate-100 border-slate-200 text-amber-600'
              }`}
            >
              <IconClock className="w-3.5 h-3.5 shrink-0" />
              <span>{formattedLiveTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-3">
            {/* Chimes Button */}
            <div className="relative" ref={navChimeMenuRef}>
              <button
                aria-expanded={openChimeMenuLocation === 'nav'}
                aria-haspopup="menu"
                onClick={() => setOpenChimeMenuLocation(openChimeMenuLocation === 'nav' ? null : 'nav')}
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
                <IconChevronDown className={`w-3.5 h-3.5 transition-transform ${openChimeMenuLocation === 'nav' ? 'rotate-180' : ''}`} />
              </button>

              {openChimeMenuLocation === 'nav' && (
                <ChimePopover
                  activeTrack={activeTrack}
                  isDarkMode={isDarkMode}
                  onSelectTrack={handleSelectTrack}
                />
              )}
            </div>

            {/* Settings Button */}
            <div className="relative" ref={settingsMenuRef}>
              <button
                type="button"
                aria-expanded={isSettingsOpen}
                aria-haspopup="dialog"
                onClick={() => setIsSettingsOpen((prev) => !prev)}
                className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center space-x-2 transition shadow-sm ${
                  isSettingsOpen
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                    : isDarkMode
                    ? 'bg-slate-900 border-slate-700 text-slate-100 hover:border-slate-600'
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                <IconSettings className={`w-4 h-4 text-amber-400 transition-transform duration-300 ${isSettingsOpen ? 'rotate-90' : ''}`} />
                <span>Settings</span>
                <IconChevronDown className={`w-3.5 h-3.5 transition-transform ${isSettingsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSettingsOpen && (
                <div
                  role="dialog"
                  aria-label="Dashboard settings"
                  className={`fixed inset-x-3 top-20 sm:inset-auto sm:absolute sm:right-0 sm:top-auto sm:mt-2 w-auto sm:w-96 max-h-[82vh] overflow-y-auto rounded-2xl p-4 shadow-2xl border backdrop-blur-xl z-[9999] space-y-4 animate-in fade-in zoom-in-95 duration-150 ${
                    isDarkMode
                      ? 'bg-slate-900/95 border-slate-700 text-slate-100'
                      : 'bg-white/95 border-slate-200 text-slate-800'
                  }`}
                >
                  {/* Appearance & Clock Format */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Display & Time
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsDarkMode(!isDarkMode);
                          triggerToast(`Theme switched to ${!isDarkMode ? 'Dark' : 'Light'} Mode`);
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition ${
                          isDarkMode
                            ? 'bg-slate-800/80 border-slate-700 text-slate-100 hover:border-amber-500/40'
                            : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-amber-500/40'
                        }`}
                      >
                        <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                        {isDarkMode ? <IconSun className="w-4 h-4 text-amber-400" /> : <IconMoon className="w-4 h-4 text-slate-700" />}
                      </button>

                      <button
                        type="button"
                        role="switch"
                        aria-checked={is24HourTime}
                        onClick={() => {
                          const next = !is24HourTime;
                          setIs24HourTime(next);
                          triggerToast(`Clock format: ${next ? '24-Hour' : '12-Hour'}`);
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition ${
                          isDarkMode
                            ? 'bg-slate-800/80 border-slate-700 text-slate-100 hover:border-amber-500/40'
                            : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-amber-500/40'
                        }`}
                      >
                        <span>24H Clock</span>
                        <span
                          className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${
                            is24HourTime ? 'bg-amber-500' : isDarkMode ? 'bg-slate-700' : 'bg-slate-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-3 w-3 transform rounded-full bg-white shadow transition-transform ${
                              is24HourTime ? 'translate-x-3.5' : 'translate-x-0.5'
                            }`}
                          />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Finish Countdown Target */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Countdown Finish Time
                    </div>
                    <div className={`grid grid-cols-2 gap-1.5 p-1 rounded-xl border text-xs font-semibold ${
                      isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
                    }`}>
                      <button
                        type="button"
                        onClick={() => {
                          setTargetTimeMode('AM');
                          triggerToast('Finish Countdown set to 12:00 AM (Midnight)');
                        }}
                        className={`py-1.5 rounded-lg transition ${
                          targetTimeMode === 'AM'
                            ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                            : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        12:00 AM
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTargetTimeMode('PM');
                          triggerToast('Finish Countdown set to 12:00 PM (Noon)');
                        }}
                        className={`py-1.5 rounded-lg transition ${
                          targetTimeMode === 'PM'
                            ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                            : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        12:00 PM
                      </button>
                    </div>
                  </div>

                  {/* Particles & Confetti */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Particles & Celebration
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`grid grid-cols-3 gap-1 p-1 rounded-xl border text-xs font-semibold flex-1 ${
                        isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
                      }`}>
                        {['snow', 'stars', 'off'].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => {
                              setFxMode(mode);
                              triggerToast(`Particles: ${mode.toUpperCase()}`);
                            }}
                            className={`py-1.5 rounded-lg capitalize transition ${
                              fxMode === mode
                                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                                : isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleConfettiWaterfall("Test Celebration!")}
                        className={`px-3 py-2 rounded-xl text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5 shrink-0 ${
                          isConfettiActive
                            ? 'bg-rose-500 hover:bg-rose-600 animate-pulse'
                            : 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 hover:from-amber-600 hover:to-purple-600'
                        }`}
                      >
                        <IconParty className="w-3.5 h-3.5 text-white" />
                        <span>{isConfettiActive ? 'Stop' : 'Confetti 🎉'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Shortcut Tips */}
                  <div className={`space-y-2 pt-3 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <IconKeyboard className="w-3.5 h-3.5 text-amber-400" />
                      <span>Shortcut Tips</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between py-0.5">
                        <span>Toggle Confetti</span>
                        <kbd className={`px-2 py-0.5 rounded-md font-mono font-bold text-[11px] border ${
                          isDarkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-300 text-amber-600'
                        }`}>C</kbd>
                      </div>
                      <div className="flex items-center justify-between py-0.5">
                        <span>Mute / Unmute Chimes</span>
                        <kbd className={`px-2 py-0.5 rounded-md font-mono font-bold text-[11px] border ${
                          isDarkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-300 text-amber-600'
                        }`}>M</kbd>
                      </div>
                      <div className="flex items-center justify-between py-0.5">
                        <span>Close Fullscreen / Menus</span>
                        <kbd className={`px-2 py-0.5 rounded-md font-mono font-bold text-[11px] border ${
                          isDarkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-300 text-amber-600'
                        }`}>Esc</kbd>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
                    onClick={() => handleOpenFullscreen(heroEvent)}
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
              { id: 'seasonal', label: 'Seasonal' },
              { id: 'winter', label: 'Winter' }
            ].map((cat) => (
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
              aria-label="Sort holidays"
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
            filteredEvents.map((item) => (
              <HolidayCard
                key={item.id}
                item={item}
                itemTime={computeCountdown(item, now, targetTimeMode)}
                isDarkMode={isDarkMode}
                onOpenFullscreen={handleOpenFullscreen}
              />
            ))
          )}
        </section>
      </main>

      {/* Fullscreen Modal View */}
      {fullscreenEvent && fullscreenTime && (
        <div
          onCopy={handleBlockClipboard}
          onCut={handleBlockClipboard}
          onPaste={handleBlockClipboard}
          onContextMenu={handleBlockClipboard}
          className={`fs-modal-root select-none fixed inset-0 z-[100] flex flex-col items-center justify-between px-4 py-3 sm:p-6 bg-gradient-to-br ${fullscreenEvent.themeBg || 'from-emerald-950 via-slate-900 to-rose-950'} text-white overflow-y-auto`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <IconMapper name={fullscreenEvent.icon} className="w-[16rem] h-[16rem] sm:w-[30rem] sm:h-[30rem] md:w-[40rem] md:h-[40rem]" />
          </div>

          <div className="fs-toolbar w-full flex items-center justify-end space-x-1.5 sm:space-x-3 z-[110] shrink-0">
            <div
              aria-label="Current local time"
              className="fs-toolbar-time-top hidden sm:flex px-3.5 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-mono font-semibold tabular-nums items-center space-x-1.5 shadow-lg"
            >
              <IconClock className="w-4 h-4 shrink-0" />
              <span>{formattedLiveTime}</span>
            </div>

            <button
              onClick={() => {
                const modes = ['snow', 'stars', 'off'];
                const next = modes[(modes.indexOf(fxMode) + 1) % modes.length];
                setFxMode(next);
                triggerToast(`Particles: ${next.toUpperCase()}`);
              }}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-semibold flex items-center space-x-1 sm:space-x-1.5 transition shadow-lg"
            >
              <IconSparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span className="capitalize">{fxMode}</span>
            </button>

            <button
              onClick={() => toggleConfettiWaterfall(`Celebration for ${fullscreenEvent.title}!`)}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl text-white font-bold text-[11px] sm:text-xs shadow-lg transition flex items-center space-x-1 sm:space-x-1.5 ${
                isConfettiActive
                  ? 'bg-rose-500 hover:bg-rose-600 animate-pulse'
                  : 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 hover:from-amber-600 hover:to-purple-600'
              }`}
            >
              <IconParty className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-white ${!isConfettiActive ? 'animate-bounce' : ''}`} />
              <span>{isConfettiActive ? 'Stop' : 'Confetti 🎉'}</span>
            </button>

            <div className="relative" ref={fsChimeMenuRef}>
              <button
                aria-expanded={openChimeMenuLocation === 'fullscreen'}
                aria-haspopup="menu"
                onClick={() => setOpenChimeMenuLocation(openChimeMenuLocation === 'fullscreen' ? null : 'fullscreen')}
                className="px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-semibold flex items-center space-x-1.5 sm:space-x-2 transition shadow-lg"
              >
                {activeTrack !== 'off' ? (
                  <IconVolume className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-bounce" />
                ) : (
                  <IconVolumeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
                <span>Chimes</span>
                <IconChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform ${openChimeMenuLocation === 'fullscreen' ? 'rotate-180' : ''}`} />
              </button>

              {openChimeMenuLocation === 'fullscreen' && (
                <ChimePopover
                  activeTrack={activeTrack}
                  isDarkMode={true}
                  onSelectTrack={handleSelectTrack}
                />
              )}
            </div>

            <button
              aria-label="Exit fullscreen"
              onClick={() => setFullscreenEventId(null)}
              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition shadow-lg"
            >
              <IconMinimize className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="fs-content-wrap max-w-4xl w-full text-center space-y-2.5 sm:space-y-5 relative z-10 my-auto py-1 sm:py-2">
            <div className="fs-badge inline-flex items-center space-x-1.5 sm:space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-[10px] sm:text-sm font-bold uppercase tracking-widest border border-white/20">
              <IconMapper name={fullscreenEvent.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{fullscreenEvent.category} Celebration</span>
            </div>

            <h2 className="fs-title text-3xl sm:text-5xl md:text-7xl font-serif font-extrabold tracking-tight drop-shadow-2xl leading-tight">
              {fullscreenEvent.title}
            </h2>

            {fullscreenTime.isToday ? (
              <div className="fs-tile py-4 px-4 sm:py-8 sm:px-6 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-xl border border-amber-400/40 shadow-2xl animate-pulse">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 block mb-1 sm:mb-2">
                  CELEBRATING TODAY 🎉
                </span>
                <p className="fs-digit font-serif text-2xl sm:text-5xl md:text-6xl font-extrabold text-white">
                  Happy {fullscreenEvent.title}!
                </p>
              </div>
            ) : (
              <div className="fs-grid grid grid-cols-4 gap-2 sm:gap-5 max-w-3xl mx-auto">
                {[
                  { label: 'Days', shortLabel: 'Days', value: fullscreenTime.days },
                  { label: 'Hours', shortLabel: 'Hrs', value: fullscreenTime.hours },
                  { label: 'Minutes', shortLabel: 'Mins', value: fullscreenTime.minutes },
                  { label: 'Seconds', shortLabel: 'Secs', value: fullscreenTime.seconds }
                ].map((unit, idx) => (
                  <div key={idx} className="fs-tile bg-slate-950/60 backdrop-blur-xl py-2.5 px-2 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl">
                    <span className="fs-digit block font-serif text-2xl sm:text-5xl md:text-6xl font-extrabold text-amber-400">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="fs-unit text-[10px] sm:text-sm font-bold text-slate-300 uppercase tracking-wider sm:tracking-widest mt-1 sm:mt-1.5 block">
                      <span className="sm:hidden">{unit.shortLabel}</span>
                      <span className="hidden sm:inline">{unit.label}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}

            <p className="fs-desc text-slate-200 text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              {fullscreenEvent.description}
            </p>

            {fullscreenEvent.quote && (
              <blockquote className="fs-quote italic text-amber-200/85 text-xs sm:text-base font-serif max-w-xl mx-auto px-2">
                “{fullscreenEvent.quote}”
              </blockquote>
            )}

            <div className="pt-0.5 sm:pt-1">
              <div className="fs-target inline-flex items-center space-x-1.5 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 text-[11px] sm:text-sm font-semibold text-amber-200 tracking-wide shadow-md">
                <IconCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>
                  Target Date: {fullscreenTime.targetDate.toLocaleDateString(undefined, {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>

          <div
            aria-label="Current local time"
            className="fs-bottom-time-mobile sm:hidden shrink-0 z-[110] mb-1 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-mono font-semibold tabular-nums flex items-center space-x-1.5 shadow-lg"
          >
            <IconClock className="w-3.5 h-3.5 shrink-0" />
            <span>{formattedLiveTime}</span>
          </div>
        </div>
      )}

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
