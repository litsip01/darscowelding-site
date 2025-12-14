import Hero from '@/components/sections/Hero'
import ServiceCard from '@/components/sections/ServiceCard'
import CTA from '@/components/sections/CTA'
import { services, industries, cities, brandName, tagline } from '@/lib/data'
import { Flame, Wrench, Truck, Shield, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

const serviceIcons: Record<string, React.ReactNode> = {
  'mig-tig-welding': <Flame className="w-7 h-7" />,
  'structural-welding': <Wrench className="w-7 h-7" />,
  'mobile-welding-services': <Truck className="w-7 h-7" />,
  'fabrication': <Wrench className="w-7 h-7" />,
  'repairs-maintenance': <Shield className="w-7 h-7" />,
  'custom-metalwork': <Flame className="w-7 h-7" />,
}

const serviceImages: Record<string, string> = {
  'mig-tig-welding': '/images/services/mig-tig-welding.png',
  'structural-welding': '/images/services/structural-welding.png',
  'mobile-welding-services': '/images/services/mobile-welding.png',
  'fabrication': '/images/services/fabrication.png',
  'repairs-maintenance': '/images/services/repairs-maintenance.png',
  'custom-metalwork': '/images/services/custom-metalwork.png',
}

export default function Home() {
  return (
    <>
      <Hero
        badge="Mobile Welding Experts"
        title="Professional Mobile Welding & Fabrication Services"
        subtitle={tagline}
        primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
        secondaryCTA={{ text: "Call Now", href: "#" }}
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Welding Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From precision MIG/TIG welding to custom fabrication, we bring professional welding services directly to your location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.description}
                href={`/services/${service.slug}/`}
                icon={serviceIcons[service.slug]}
                image={serviceImages[service.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">The Darsco Difference</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Service</h3>
              <p className="text-gray-600">We come to you anywhere in the Greater Edmonton Area with our fully-equipped mobile units.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock availability for urgent welding repairs when you need them most.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Welders</h3>
              <p className="text-gray-600">All work performed by certified professionals with years of experience.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every weld backed by our quality promise. We stand behind our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Industries Served</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Welding Solutions for Every Industry</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From construction sites to residential properties, we provide specialized welding services tailored to your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(industry => (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}/`}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition border border-gray-700 hover:border-amber-500/50 group"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">We Come to You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mobile welding services across the Greater Edmonton Area and surrounding communities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {cities.map(city => (
              <Link
                key={city.id}
                href={`/locations/${city.slug}/`}
                className="flex items-center gap-2 bg-gray-100 hover:bg-amber-100 px-6 py-3 rounded-full transition group"
              >
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="font-medium group-hover:text-amber-700">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
