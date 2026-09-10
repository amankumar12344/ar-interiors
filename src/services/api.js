/**
 * Decoupled API Client for AR Interiors
 * Allows seamless switching between local mocked data and real backends
 * (Spring Boot, Node.js Express/Nest, PostgreSQL, Supabase, etc.)
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || null;
const SIMULATE_LATENCY = 150; // ms to simulate real network for realistic UX

export async function request(endpoint, options = {}) {
  // If a real backend URL is configured, forward real HTTP calls
  if (API_BASE_URL) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    return response.json();
  }

  // Otherwise simulate asynchronous latency for decoupled frontend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, SIMULATE_LATENCY);
  });
}
