export function navLinkClass(isActive: boolean): string {
  return [
  'relative whitespace-nowrap px-2 py-2 text-[13px] font-medium 2xl:px-3.5 2xl:text-sm transition-colors duration-150',
  'after:absolute after:inset-x-2 2xl:after:inset-x-3.5 after:-bottom-[17px] after:h-0.5 after:transition-colors after:duration-150',
  isActive ?
  'text-navy-900 after:bg-brand-600' :
  'text-muted hover:text-navy-900 after:bg-transparent'].
  join(' ');
}