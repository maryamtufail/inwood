import { NavigationItem } from '../../types/navigation';

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#', current: true },
  { name: 'Products', href: '#exchange-section', current: false },
  { name: 'Categories', href: '#cateories-section', current: false },
  { name: 'About', href: '#about-section', current: false },
  { name: 'Contact Us', href: '#contact-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
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
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="mt-4"></div>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
