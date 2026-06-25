/**
 * Utility to convert Hex color to HSL and generate shades (50-950)
 * matching Tailwind/UnoCSS palette structure.
 */

interface HSL {
  h: number;
  s: number;
  l: number;
}

export function hexToHsl(hex: string): HSL {
  hex = hex.replace(/^#/, '');
  
  // Parse shorthand hex (e.g. "03F") to full (e.g. "0033FF")
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function hslToHex({ h, s, l }: HSL): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function generateShades(hexColor: string): Record<number, string> {
  const baseHsl = hexToHsl(hexColor);
  
  // Curated lightness scale mapping for 50-950 shades
  const lightnessMap: Record<number, number> = {
    50: 97,
    100: 92,
    200: 84,
    300: 74,
    400: 62,
    500: baseHsl.l, // Base color's lightness
    600: Math.max(10, Math.min(baseHsl.l - 8, 48)),
    700: Math.max(8, Math.min(baseHsl.l - 16, 38)),
    800: Math.max(6, Math.min(baseHsl.l - 24, 28)),
    900: Math.max(4, Math.min(baseHsl.l - 32, 18)),
    950: Math.max(2, Math.min(baseHsl.l - 38, 10))
  };

  const shades: Record<number, string> = {};
  for (const [shade, targetL] of Object.entries(lightnessMap)) {
    const key = Number(shade);
    shades[key] = hslToHex({ h: baseHsl.h, s: baseHsl.s, l: targetL });
  }

  return shades;
}

export function hexToRgb(hex: string): string {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

export function generateCssVariables(primaryHex: string, accentHex: string): string {
  const primaryShades = generateShades(primaryHex);
  const accentShades = generateShades(accentHex);

  let css = ':root {\n';
  
  for (const [shade, hex] of Object.entries(primaryShades)) {
    css += `  --color-primary-${shade}: ${hex};\n`;
    css += `  --color-primary-${shade}-rgb: ${hexToRgb(hex)};\n`;
  }
  
  for (const [shade, hex] of Object.entries(accentShades)) {
    css += `  --color-accent-${shade}: ${hex};\n`;
    css += `  --color-accent-${shade}-rgb: ${hexToRgb(hex)};\n`;
  }

  css += '}\n';
  
  return css;
}
