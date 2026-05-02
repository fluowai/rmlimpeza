export const cities = [
  { id: 'florianopolis', name: 'Florianópolis', slug: 'florianopolis' },
  { id: 'sao-jose', name: 'São José', slug: 'sao-jose' },
  { id: 'palhoca', name: 'Palhoça', slug: 'palhoca' },
  { id: 'biguacu', name: 'Biguaçu', slug: 'biguacu' }
];

export const serviceCategories = ['Limpeza', 'Copeira', 'Portaria', 'Garçom'] as const;

export const serviceTypes = ['Limpeza', 'Copeira', 'Portaria', 'Garçom', 'Outro'] as const;

export function getCityNameBySlug(slug: string): string | undefined {
  const city = cities.find(c => c.slug === slug || c.id === slug);
  return city?.name;
}

export function getCitySlugByName(name: string): string | undefined {
  const city = cities.find(c => c.name === name);
  return city?.slug;
}
