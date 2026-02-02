import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Definimos la estructura del Store
interface LanguageState {
  language: 'es' | 'en';
  english: () => void;
  spanish: () => void;
}

// 2. Pasamos la interfaz a create<LanguageState>()
const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'es',
      english: () => set({ language: 'en' }),
      spanish: () => set({ language: 'es' }),
    }),
    {
      name: 'language-storage',
    },
  ),
);

export default useLanguageStore;
