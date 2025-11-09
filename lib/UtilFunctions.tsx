export function formatDate(dateString: string) {
  if (!dateString) return 'Data Desconhecida';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}