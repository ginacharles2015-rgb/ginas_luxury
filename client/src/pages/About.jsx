import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Crown,
  Heart,
  ShoppingBag,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Gem,
} from 'lucide-react';

const About = () => {
  const floatingItems = [
    { icon: Sparkles, top: '15%', left: '8%', delay: 0 },
    { icon: Star, top: '30%', right: '8%', delay: 1 },
    { icon: Gem, top: '65%', left: '5%', delay: 2 },
    { icon: Crown, top: '72%', right: '6%', delay: 1.5 },
  ];

  const values = [
    {
      icon: Crown,
      title: 'Elegance',
      text: 'We believe fashion should make you feel confident, beautiful and completely yourself.',
    },
    {
      icon: Gem,
      title: 'Quality',
      text: 'Every piece is thoughtfully selected with attention to style, quality and lasting appeal.',
    },
    {
      icon: Heart,
      title: 'Confidence',
      text: 'Our collections are created for women who want to express their individuality with confidence.',
    },
    {
      icon: Sparkles,
      title: 'Affordability',
      text: 'Luxury should feel accessible. We aim to provide beautiful fashion without unnecessary prices.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-black overflow-hidden">

      {/* Floating Decorative Elements */}
      {floatingItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className="fixed z-0 text-yellow-600/20 pointer-events-none"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            <Icon size={index === 0 ? 35 : 28} />
          </motion.div>
        );
      })}

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6 py-24">

        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0] via-[#f7f5f0] to-[#eee9dc]" />

        <motion.div
          className="absolute w-72 h-72 rounded-full bg-yellow-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-full border border-yellow-600 flex items-center justify-center">
              <Crown className="text-yellow-600" size={30} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xs md:text-sm font-semibold text-yellow-700 uppercase mb-6"
          >
            Welcome to Gina's Luxury
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight"
          >
            Fashion.
            <span className="block text-yellow-700 italic">
              Confidence.
            </span>
            <span className="block">You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl mx-auto mt-8 text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Gina's Luxury is a fashion brand created to celebrate
            individuality, elegance and the confidence that comes from
            wearing something that truly feels like you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-yellow-600 hover:text-black transition-all duration-300"
              >
                Explore Our Collection
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >

            <div>
              <p className="text-yellow-700 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                More than fashion.
                <span className="block text-yellow-700 italic">
                  It's a feeling.
                </span>
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Gina's Luxury was created from a love for fashion,
                  creativity and the desire to help women feel beautiful
                  in what they wear.
                </p>

                <p>
                  We believe clothing is more than something you put on.
                  It can express your personality, tell your story and
                  give you that extra confidence when you walk into a room.
                </p>

                <p>
                  From carefully selected dresses and tops to stylish
                  bottoms and accessories, every collection is chosen
                  with the modern woman in mind.
                </p>

                <p>
                  Our goal is simple: to make beautiful fashion accessible
                  while giving every customer an experience that feels
                  personal, elegant and special.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-black rounded-2xl flex items-center justify-center overflow-hidden">

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute w-72 h-72 border border-yellow-600/30 rounded-full"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute w-52 h-52 border border-yellow-600/20 rounded-full"
                />

                <div className="relative text-center text-white px-8">
                  <Crown
                    className="mx-auto text-yellow-600 mb-6"
                    size={55}
                  />

                  <p className="text-sm uppercase tracking-[0.35em] text-yellow-600 mb-3">
                    Gina's Luxury
                  </p>

                  <h3 className="text-4xl font-serif font-bold">
                    Designed
                  </h3>

                  <h3 className="text-4xl font-serif font-bold text-yellow-600 italic">
                    For You.
                  </h3>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-yellow-700 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Our Values
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              What We Stand For
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600">
              Everything we do is guided by our commitment to beautiful
              fashion, confidence and a memorable customer experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-yellow-600/10 flex items-center justify-center mb-6"
                  >
                    <Icon className="text-yellow-700" size={25} />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-yellow-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              The Gina's Luxury Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Fashion Made For
              <span className="text-yellow-600 italic"> Your Lifestyle</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: ShoppingBag,
                title: 'Curated Collections',
                text: 'Discover carefully selected fashion pieces designed to help you create effortless and stylish looks.',
              },
              {
                icon: Star,
                title: 'Personal Style',
                text: 'Whether you are dressing for everyday life, a special occasion or a night out, we have pieces to complement your style.',
              },
              {
                icon: Heart,
                title: 'Customer Experience',
                text: "We value every customer and strive to make shopping with Gina's Luxury simple, enjoyable and memorable.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  className="border border-gray-800 rounded-xl p-8 hover:border-yellow-600 transition-colors duration-500"
                >
                  <Icon className="text-yellow-600 mb-6" size={32} />

                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black mb-6">
              <Crown className="text-yellow-600" size={30} />
            </div>

            <p className="text-yellow-700 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Meet The Founder
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              KINFUL GINA
            </h2>

            <p className="text-yellow-700 font-semibold mt-3 uppercase tracking-widest">
              Founder & CEO • Fashion Designer
            </p>

            <div className="max-w-3xl mx-auto mt-8 text-gray-600 leading-relaxed space-y-5">
              <p>
                KINFUL GINA is the founder and creative force behind
                Gina's Luxury, bringing together a passion for fashion,
                creativity and modern feminine style.
              </p>

              <p>
                Through Gina's Luxury, she aims to create a fashion
                experience where women can discover pieces that make them
                feel confident, elegant and uniquely themselves.
              </p>

              <p>
                The brand reflects her belief that fashion does not have
                to be complicated. Sometimes, the right piece is all you
                need to feel like the best version of yourself.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white rounded-2xl p-10 md:p-16 text-center"
          >
            <Sparkles
              className="mx-auto text-yellow-600 mb-6"
              size={35}
            />

            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a question about an order, a product or anything
              concerning Gina's Luxury? Our customers are important to us,
              and we're always happy to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-8">

              <a
                href="mailto:gina.charles2015@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-600 transition"
              >
                <Mail size={19} />
                gina.charles2015@gmail.com
              </a>

              <a
                href="tel:07045889566"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-600 transition"
              >
                <Phone size={19} />
                07045889566
              </a>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-white text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-700 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Your Style. Your Story.
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Ready To Find Your
            <span className="text-yellow-700 italic"> Luxury?</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Explore our collection and discover pieces made to become
            part of your story.
          </p>

          <Link to="/products">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-yellow-600 text-black px-8 py-4 rounded-md font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              Shop Gina's Luxury
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>

      </section>

    </div>
  );
};

export default About;

