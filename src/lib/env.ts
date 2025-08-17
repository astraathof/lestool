import 'server-only';

export const env = {
  GEMINI_API_KEY: process.env.GEMINI_API_KEY ?? '',
};

export function requireEnv() {
  if (!env.GEMINI_API_KEY) {
    throw new Error('Missing GEMINI_API_KEY. Zet hem in .env (Bolt) of als environment variable op Netlify.');
  }
  return env;
}