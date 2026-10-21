import {topics} from '@/lib/content';
export default function sitemap(){const base='https://galeohm.com';return ['','/guides','/projet','/devis',...topics.map(t=>'/guides/'+t.slug)].map(path=>({url:base+path,lastModified:'2026-10-20'}))}
