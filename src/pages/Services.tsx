import { Search, FileEdit, Eye, BookOpen, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Notability Assessment',
      description: 'Comprehensive evaluation of whether your subject meets Wikipedia\'s notability criteria. We provide honest, detailed assessments before any work begins.',
      features: [
        'Thorough research of existing sources',
        'Detailed notability report',
        'Realistic success probability',
        'Strategic recommendations',
      ],
    },
    {
      icon: FileEdit,
      title: 'Article Creation',
      description: 'Professional Wikipedia article writing that follows all guidelines and policies. Remember: creation is not guaranteed and subject to community approval.',
      features: [
        'Well-researched content',
        'Neutral point of view (NPOV)',
        'Properly cited sources',
        'Policy-compliant formatting',
      ],
    },
    {
      icon: Eye,
      title: 'Article Monitoring',
      description: 'Ongoing monitoring of existing Wikipedia articles to track changes, ensure accuracy, and address potential issues while respecting editorial freedom.',
      features: [
        'Regular change tracking',
        'Vandalism alerts',
        'Content accuracy reports',
        'Community discussion monitoring',
      ],
    },
    {
      icon: BookOpen,
      title: 'Content Improvement',
      description: 'Enhancement of existing Wikipedia articles with better sourcing, improved writing, and updated information following Wikipedia standards.',
      features: [
        'Source quality improvement',
        'Content expansion',
        'Citation cleanup',
        'Structure optimization',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Wikipedia Strategy',
      description: 'Strategic consulting on Wikipedia presence, including best practices, policy guidance, and long-term planning within ethical boundaries.',
      features: [
        'Policy interpretation',
        'Best practice guidance',
        'Risk assessment',
        'Long-term planning',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Training & Workshops',
      description: 'Educational sessions for teams wanting to understand Wikipedia, its culture, and how to engage with the platform appropriately.',
      features: [
        'Wikipedia basics training',
        'Policy workshops',
        'Editing best practices',
        'Community guidelines',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional Wikipedia consulting services built on transparency,
            expertise, and respect for platform policies
          </p>
        </div>
      </section>

      <section className="py-16 bg-yellow-50 border-b-4 border-yellow-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
            <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Commitment to Transparency
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                We operate with complete honesty about what we can and cannot do.
                <strong className="text-yellow-700"> Wikipedia page creation is never guaranteed</strong> and depends on:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Your subject meeting Wikipedia's notability requirements</li>
                <li>Availability of reliable, independent sources</li>
                <li>Wikipedia community editorial decisions</li>
                <li>Compliance with all platform policies</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                We will never promise results we cannot guarantee or engage in
                practices that violate Wikipedia's terms of use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Let's Discuss Your Wikipedia Needs
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Contact us for an honest assessment of your Wikipedia prospects and
            how we can help within ethical guidelines
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
