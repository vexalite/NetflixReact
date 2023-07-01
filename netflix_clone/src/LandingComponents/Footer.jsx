export default () => {

    const footerNavs = [
        {
            label: "",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'FAQs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Media Centers'
                },
                {
                    href: 'javascript:void()',
                    name: 'Ways to Watch'
                },
                {
                    href: 'javascript:void()',
                    name: 'Cookie Preferences'
                },
                {
                    href: 'javascript:void()',
                    name: 'Speedtest'
                }
            ],
        },
        {
            label: "",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Help Center'
                },
                {
                    href: 'javascript:void()',
                    name: 'Investor Relations'
                },
                {
                    href: 'javascript:void()',
                    name: 'Term of Use'
                },
                {
                    href: 'javascript:void()',
                    name: 'Corporate Information'
                },
                {
                    href: 'javascript:void()',
                    name: 'Legal Notices'
                }
            ]
        },
        {
            label: "",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Account'
                },
                {
                    href: 'javascript:void()',
                    name: 'Jobs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'Contact Us'
                },
                {
                    href: 'javascript:void()',
                    name: 'Only on Netflix'
                }
            ]
        }
               
        
    ]

    return (
        <footer className="pt-10 bg-black bottom position-relative">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="justify-between items-center gap-8 md:flex">
                    <div className="flex-1 max-w-lg">
                        <h3 className="text-white text-left text-2xl font-bold">
                        Questions? Call 000-800-919-1694
                        </h3>
                    </div>
                   
                </div>
                <div className="flex-1 mt-10 space-y-6 text-left justify-between sm:flex md:space-y-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-gray-300"
                                key={idx}
                            >
                                <h4 className="text-gray-200 font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={el.href}
                                                className="duration-150 hover:text-gray-400"

                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-gray-700 items-center justify-between sm:flex">
                    <p className="text-gray-300">Netflix India</p>
                    
                </div>
            </div>
        </footer>
    )
}