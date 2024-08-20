import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitcher = () => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="flex space-x-4">
      {locales?.map((lng) => (
        <Link href={asPath} locale={lng} key={lng}>
          <button
            className={`px-4 py-2 text-white border ${
              locale === lng ? "border-blue-500" : "border-transparent"
            } hover:border-blue-500`}
          >
            {lng.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
