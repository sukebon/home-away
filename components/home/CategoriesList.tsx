import { categories } from '@/utils/categories';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function CategoriesList({ category, search }: {
  category?: string, search?: string;
}) {
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <section>
      <ScrollArea className='py-6'>
        <div className='flex gap-x-4 '>
          {categories.map(item => {
            const isActive = item.label === category;
            return (
              <Link key={item.label} href={`/?category=${item.label}${searchTerm}`}>
                <article className={cn(isActive ? 'text-primary' : "", `p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-]100px]`)}>
                  <item.icon className='w-8 h-8' />
                  <p className='capitalize text-sm mt-1'>{item.label}</p>
                </article>
              </Link>
            );
          })
          }
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  );
}
export default CategoriesList;