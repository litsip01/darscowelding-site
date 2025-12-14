import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Work | Welding Portfolio | Darsco Welding',
    description: 'View our portfolio of welding and fabrication projects. From industrial welding to custom residential metalwork across Alberta.',
}

const projects = [
    {
        title: 'Industrial Fabrication',
        category: 'Manufacturing',
        description: 'Custom steel frames and equipment mounts for a manufacturing facility.',
    },
    {
        title: 'Farm Equipment Repair',
        category: 'Agricultural',
        description: 'Emergency repair of a combine harvester during harvest season.',
    },
    {
        title: 'Custom Gate Design',
        category: 'Residential',
        description: 'Decorative driveway gate with custom scrollwork and automation.',
    },
    {
        title: 'Structural Steel Welding',
        category: 'Construction',
        description: 'Beam connections and structural reinforcement for commercial building.',
    },
    {
        title: 'Pipeline Repair',
        category: 'Oil & Gas',
        description: 'Emergency pipeline weld repair for an oil and gas operation.',
    },
    {
        title: 'Staircase Railings',
        category: 'Commercial',
        description: 'Modern steel and glass railings for an office building renovation.',
    },
]

export default function GalleryPage() {
    return (
        <>
            <Hero
                badge="Our Work"
                title="Quality Craftsmanship in Every Project"
                subtitle="Explore our portfolio of welding and fabrication projects across various industries."
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                            >
                                {/* Placeholder for project image */}
                                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <span className="text-6xl">🔥</span>
                                </div>
                                <div className="p-6">
                                    <span className="text-amber-600 text-sm font-semibold">{project.category}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-amber-600 transition">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
                    <p className="text-gray-600 mb-6">
                        Whether it's a small repair or a large-scale fabrication project, we'd love to hear about it.
                        Contact us for a free quote and let us show you what quality welding looks like.
                    </p>
                </div>
            </section>

            <CTA />
        </>
    )
}
