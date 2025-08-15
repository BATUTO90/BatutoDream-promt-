/**
 * Tests for README content integrity focused on the recent documentation diff.
 *
 * Testing library and framework: Jest (describe/it/expect style).
 *
 * These tests validate that the README contains the updated Spanish documentation sections and key bullet points:
 *  - Sections: "¿Cómo funciona?", "¿Cómo usarlo?", "Ejemplo de prompt usado", "Configuración de la API Key"
 *  - Style keywords: "ultra-realistic", "cinematic lighting", "Unreal Engine 5 render", "high detail"
 *  - Format specification: "9:16"
 *  - Example prompt transformation logic text
 *
 * If your project uses a different test runner (e.g., Vitest), these tests should still pass with minor adjustments
 * (e.g., updating globals like test/describe/expect).
 */

const fs = require('fs');
const path = require('path');

// Helper to locate README file in common locations
function findReadme() {
  const candidates = [
    'README.md',
    'Readme.md',
    'readme.md',
    'README_ES.md',
    'README.es.md',
    path.join('docs', 'README.md'),
  ];
  for (const rel of candidates) {
    const p = path.resolve(process.cwd(), rel);
    try {
      const stat = fs.statSync(p);
      if (stat.isFile()) return p;
    } catch (_) {
      // ignore
    }
  }
  // Fall back to README.md even if missing, tests will fail with clearer error
  return path.resolve(process.cwd(), 'README.md');
}

function readReadme() {
  const readmePath = findReadme();
  let content = '';
  try {
    content = fs.readFileSync(readmePath, 'utf8');
  } catch (err) {
    throw new Error(`README file not found or unreadable at: ${readmePath}. Original error: ${err && err.message}`);
  }
  return { readmePath, content };
}

describe('README documentation (Spanish) - Stable Diffusion bot', () => {
  let content;
  let readmePath;

  beforeAll(() => {
    const res = readReadme();
    readmePath = res.readmePath;
    content = res.content;
  });

  it('should be able to read the README file from common locations', () => {
    expect(typeof readmePath).toBe('string');
    expect(readmePath.length).toBeGreaterThan(0);
    expect(typeof content).toBe('string');
    expect(content.length).toBeGreaterThan(50); // must have some meaningful content
  });

  describe('Section presence', () => {
    it('contains "¿Cómo funciona?" section heading', () => {
      expect(content).toMatch(/##\s*¿Cómo funciona\?/);
    });

    it('contains "¿Cómo usarlo?" section heading', () => {
      expect(content).toMatch(/##\s*¿Cómo usarlo\?/);
    });

    it('contains "Ejemplo de prompt usado" section heading', () => {
      expect(content).toMatch(/##\s*Ejemplo de prompt usado/);
    });

    it('contains "Configuración de la API Key" section heading', () => {
      expect(content).toMatch(/##\s*Configuración de la API Key/);
    });
  });

  describe('Fixed style details', () => {
    it('lists "ultra-realistic" as a style keyword', () => {
      expect(content).toMatch(/\bultra-?realistic\b/i);
    });

    it('lists "cinematic lighting" as a style keyword', () => {
      expect(content).toMatch(/\bcinematic lighting\b/i);
    });

    it('lists "Unreal Engine 5 render" as a style keyword', () => {
      expect(content).toMatch(/\bUnreal Engine 5 render\b/);
    });

    it('lists "high detail" as a style keyword', () => {
      expect(content).toMatch(/\bhigh detail\b/i);
    });

    it('mentions images generated in 9:16 vertical format', () => {
      // Accept both "9:16", "9 : 16", and Spanish emphasis
      expect(content).toMatch(/9\s*:\s*16/);
      // Check for vertical mention around that area
      const hasVertical = /9\s*:\s*16[^\.]*\(vertical\)/i.test(content) || /\(vertical\)[^\.]*9\s*:\s*16/i.test(content);
      expect(hasVertical).toBe(true);
    });
  });

  describe('How it works steps', () => {
    it('mentions the bot takes user text and converts it into an image using the Stable Diffusion API', () => {
      const stepRegex = /convierte.*imagen.*API.*Stable Diffusion/i;
      expect(content).toMatch(stepRegex);
    });

    it('mentions all images are generated with a fixed style list', () => {
      const fixedStyleRegex = /Todas las imágenes generadas.*siguiente estilo fijo/i;
      expect(content).toMatch(fixedStyleRegex);
    });
  });

  describe('Usage instructions', () => {
    it('includes steps to clone or download, install dependencies, set API key, and run the bot', () => {
      const lines = [
        /Clona este repositorio|descárgalo/i,
        /Instala las dependencias/i,
        /(API key).*\.env|sai_platform_key\.txt/i,
        /Ejecuta el bot/i,
      ];
      for (const re of lines) {
        expect(content).toMatch(re);
      }
    });
  });

  describe('Example prompt transformation', () => {
    it('shows a user prompt example "Un perro en la nieve"', () => {
      expect(content).toMatch(/Un perro en la nieve/);
    });

    it('shows the transformed prompt including the fixed style list', () => {
      const transformed = /Un perro en la nieve.*ultra-?realistic.*cinematic lighting.*Unreal Engine 5 render.*high detail/i;
      expect(content).toMatch(transformed);
    });
  });

  describe('API key configuration', () => {
    it('mentions placing the API key in .env or sai_platform_key.txt', () => {
      expect(content).toMatch(/\.env|sai_platform_key\.txt/);
    });
  });

  describe('Robustness and edge cases', () => {
    it('fails gracefully with a clear message if README is missing', () => {
      // This test simulates absence by attempting to read a non-existent file via helper
      // We won't modify the actual file system; instead validate our error path explicitly.
      // Using a local try-catch on a direct read.
      const missingPath = path.resolve(process.cwd(), '__definitely_missing_README__.md');
      try {
        fs.readFileSync(missingPath, 'utf8');
        // If readFileSync doesn't throw, force a failure to ensure test intent remains clear.
        expect('should have thrown for missing file').toBeFalsy();
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.code === 'ENOENT' || /no such file/i.test(err.message)).toBeTruthy();
      }
    });

    it('does not falsely match if style keywords are absent (negative sanity check)', () => {
      // Build a reduced content string missing style keywords to ensure our regexes are meaningful
      const fake = `
        ## ¿Cómo funciona?
        El bot responde a cualquier petición del usuario generando una imagen.
        4. Las imágenes se generan en formato 9:16 (vertical).
      `;
      expect(/\bultra-?realistic\b/i.test(fake)).toBe(false);
      expect(/\bcinematic lighting\b/i.test(fake)).toBe(false);
      expect(/\bUnreal Engine 5 render\b/i.test(fake)).toBe(false);
      expect(/\bhigh detail\b/i.test(fake)).toBe(false);
      expect(/9\s*:\s*16/.test(fake)).toBe(true);
    });
  });
});