import { motion } from 'framer-motion';

const stats = [
  { label: 'Meals Served', value: '160M+' },
  { label: 'Cities', value: '400+' },
  { label: 'Volunteers', value: '200K+' },
];

export default function Stats() {
  return (
    <div className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-lg mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}