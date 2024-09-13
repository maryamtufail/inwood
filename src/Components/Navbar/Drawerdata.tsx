import { NavigationItem } from '../../types/navigation';

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#', current: true },
  { name: 'Products', href: '#product', current: false },
  { name: 'Categories', href: '#cateories', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact Us', href: '#contact', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Data: React.FC = () => {
  return (
    <div className="rounded-md max-w-sm w-full">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'text-[#07484a] font-semibold underline underline-offset-2'
                    : 'text-[#07484a] hover:text-offwhite hover-underline',
                  'block py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
