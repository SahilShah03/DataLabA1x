
import { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from './ui/card';

const generateData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    name: i,
    value: Math.floor(Math.random() * 100) + 30,
    value2: Math.floor(Math.random() * 80) + 20
  }));
};

const AnimatedGraph = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full h-[300px] bg-black/20 backdrop-blur-sm border-white/10">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A855F7" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0,0,0,0.8)', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#A855F7"
            fillOpacity={1}
            fill="url(#colorValue)"
            animationDuration={500}
          />
          <Area
            type="monotone"
            dataKey="value2"
            stroke="#6366F1"
            fillOpacity={1}
            fill="url(#colorValue2)"
            animationDuration={500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AnimatedGraph;
