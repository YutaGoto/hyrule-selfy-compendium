'use client';

import { categories } from '@/lib/categories';
import { locations } from '@/lib/locations';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const locationOptions = locations;
  const categoryOptions = categories;

  const selectedOptions = useMemo<URLSearchParams>(() => {
    const params = new URLSearchParams(searchParams);
    locationOptions.forEach((option) => {
      if (params.has(option)) {
        params.set('location', option);
      }
    });
    categoryOptions.forEach((option) => {
      if (params.has(option.key)) {
        params.set('category', option.key);
      }
    });
    return params;
  }, [searchParams, locationOptions, categoryOptions]);

  const updateSearchParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      router.push(`${pathName}?${params.toString()}`);
    },
    [router, pathName, searchParams],
  );

  return (
    <div className="mb-3 px-4 py-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center border border-white/10">
      <label>
        <span className="text-sky-300">種類</span>
        <select
          onChange={(e) => updateSearchParams('category', e.target.value)}
          value={selectedOptions.get('category') || ''}
          className="w-full bg-zinc-900 text-sky-300 rounded-lg border border-sky-300 px-4 py-3 hover:border-white/20"
        >
          <option value=""></option>
          {categoryOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="text-sky-300">場所</span>
        <select
          onChange={(e) => updateSearchParams('location', e.target.value)}
          value={selectedOptions.get('location') || ''}
          className="w-full bg-zinc-900 text-sky-300 rounded-lg border border-sky-300 px-4 py-3 hover:border-white/20"
        >
          <option value=""></option>
          {locationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
