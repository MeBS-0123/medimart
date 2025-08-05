import Link from "next/link"

export default function Breadcrumb({ breadcrumb = [] }) {
    const lastIndex = breadcrumb.length - 1;

    return (
        <section className="page-title p_relative centred">
            <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }}></div>
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: 'url(/assets/images/shape/shape-14.png)' }}></div>
                <div className="pattern-2" style={{ backgroundImage: 'url(/assets/images/shape/shape-14.png)' }}></div>
                <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(/assets/images/shape/shape-15.png)' }}></div>
                <div className="pattern-4 float-bob-y" style={{ backgroundImage: 'url(/assets/images/shape/shape-16.png)' }}></div>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    {/* Título principal = el último elemento del breadcrumb */}
                    <h1>{breadcrumb[lastIndex]?.name}</h1>

                    <ul className="bread-crumb clearfix">
                        {breadcrumb.map((item, index) => (
                            <li key={index}>
                                {item.href && index !== lastIndex ? (
                                    <Link href={item.href}>{item.name}</Link>
                                ) : (
                                    <span>{item.name}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
