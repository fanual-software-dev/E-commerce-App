"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className=" text-gray-100">
      {/* Hero Section */}
      <section className="my-10 flex flex-col justify-center items-center text-center px-6 ">
        <motion.div
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Sheba Markets
        </motion.div>

        <motion.p
          className="text-xl max-w-2xl mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover trusted local products, delivered fast — right to your
          doorstep.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 transition">
            Shop Now
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-2xl hover:bg-gray-800 transition">
            Learn More
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Sheba?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Fast Local Delivery",
              desc: "Get products to your door quickly and reliably.",
            },
            {
              title: "Affordable Pricing",
              desc: "Unbeatable value from verified vendors.",
            },
            {
              title: "Secure Payments",
              desc: "Safe, protected, and stress-free checkout.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className=" py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Hanna M.",
              review:
                "Super fast delivery and excellent quality. Sheba Markets has become my go-to store!",
            },
            {
              name: "Samuel T.",
              review:
                "Affordable, trustworthy, and local. Love what you guys are doing!",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <p className="italic text-gray-300">“{testimonial.review}”</p>
              <p className="mt-4 font-semibold text-yellow-400">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA - Yellow Background */}
      <section className="py-20 bg-yellow-500 text-gray-900 text-center px-6">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Explore Sheba Markets?
        </motion.h2>
        <motion.p
          className="mb-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sign up now and browse through thousands of trusted products!
        </motion.p>
        <motion.button
          onClick={() => router.push("/login")}
          className="bg-gray-900 text-yellow-400 font-bold px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </section>
    </main>
  );
}
