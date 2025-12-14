import { services } from '@/lib/data'
import Hero from '@/components/sections/Hero'
import ServiceCard from '@/components/sections/ServiceCard'
import CTA from '@/components/sections/CTA'
import { Flame, Wrench, Truck, Shield } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Welding Services | MIG/TIG, Structural, Fabrication | Darsco Welding',
    description: 'Full range of welding services including MIG/TIG, structural welding, mobile services, fabrication, repairs, and custom metalwork for Edmonton businesses.',
}

const serviceIcons: Record<string, React.ReactNode> = {
    'mig-tig-welding': <Flame className="w-7 h-7" />,
    'structural-welding': <Wrench className="w-7 h-7" />,
    'mobile-welding': <Truck className="w-7 h-7" />,
    'fabrication': <Wrench className="w-7 h-7" />,
    'repairs-maintenance': <Shield className="w-7 h-7" />,
    'custom-metalwork': <Flame className="w-7 h-7" />,
}

export default function ServicesPage() {
    return (
        <>
            <Hero
                badge="Our Services"
                title="Professional Welding & Fabrication Services"
                subtitle="From precision MIG/TIG welding to custom fabrication, we deliver quality workmanship for every project."
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <ServiceCard
                                key={service.id}
                                title={service.name}
                                description={service.description}
                                href={`/services/${service.slug}/`}
                                icon={serviceIcons[service.id]}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Why Choose Darsco Welding?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Service</h3>
                            <p className="text-gray-600">
                                Our fully-equipped mobile welding units come to your location. No need to transport heavy materials or equipment – we bring the shop to you.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Emergency Response</h3>
                            <p className="text-gray-600">
                                When equipment breaks down, every hour counts. Our emergency welding services are available around the clock to get you back up and running.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Professionals</h3>
                            <p className="text-gray-600">
                                All welding is performed by certified welders with years of experience across multiple industries and applications.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
                            <p className="text-gray-600">
                                We stand behind every weld. Our commitment to quality means you can trust the work will be done right the first time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    )
}
