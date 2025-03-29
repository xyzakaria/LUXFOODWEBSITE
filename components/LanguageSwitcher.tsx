'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    router.refresh()
  }

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ]

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-100">
        <span>{languages.find(l => l.code === locale)?.flag}</span>
        <span className="hidden sm:inline">{languages.find(l => l.code === locale)?.code.toUpperCase()}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`block w-full text-left px-4 py-2 text-sm ${locale === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </button>
        ))}
      </div>
    </div>
  )
}