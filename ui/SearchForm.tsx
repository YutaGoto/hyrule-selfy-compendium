'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useCallback, useMemo } from "react";

interface SearchFormProps {
  options: string[]
}

export const SearchForm = ({options}: SearchFormProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const selectedOptions = useMemo<URLSearchParams>(() => {
    const params = new URLSearchParams(searchParams);
    options.forEach((option) => {
      if (params.has(option)) {
        params.set("location", option);
      }
    })
    return params;
  }, [searchParams, options])

  const updateSearchParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      router.push(`${pathName}?${params.toString()}`);
    },
    [router, pathName, searchParams]
  )

  return (
    <div className='mb-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>
      <label>
        <span className='text-sky-300'>場所</span>
        <select
          onChange={(e) => updateSearchParams("location", e.target.value)}
          value={selectedOptions.get("location") || ""}
          className='w-full bg-zinc-900 text-sky-300 rounded-lg border border-sky-300 px-4 py-3 hover:border-white/20'
        >
          <option value="">選択してください</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
      )
}

