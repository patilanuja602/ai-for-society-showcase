
import { MainCategory } from './types';

export const CATEGORIES: MainCategory[] = [
  {
    id: 'home',
    title: 'AI in Home',
    gradient: 'from-blue-500 to-cyan-400',
    icon: '🏠',
    topics: [
      {
        id: 'home-1',
        title: 'Smart Kitchen and Food Waste Reduction',
        description: 'AI checks food expiry dates and suggests recipes using available food so that food is not wasted.'
      },
      {
        id: 'home-2',
        title: 'AI for Elder Care and Health Monitoring',
        description: 'AI reminds elderly people to take medicines on time and sends alerts to family members in case of emergency.'
      },
      {
        id: 'home-3',
        title: 'AI Security Systems',
        description: 'AI cameras can recognize unknown people and send warning messages to the house owner.'
      },
      {
        id: 'home-4',
        title: 'AI Energy Management',
        description: 'AI studies daily electricity use and automatically switches off unused devices to save power.'
      },
      {
        id: 'home-5',
        title: 'AI Learning Assistants for Children',
        description: 'AI helps children study by giving personal lessons and answering their questions at home.'
      }
    ]
  },
  {
    id: 'agriculture',
    title: 'AI in Agriculture',
    gradient: 'from-green-500 to-emerald-400',
    icon: '🌾',
    topics: [
      {
        id: 'ag-1',
        title: 'AI-based Fair Crop Pricing Platform (No Middleman)',
        description: 'AI connects farmers directly with buyers and shows real market prices so farmers are not cheated by middlemen.'
      },
      {
        id: 'ag-2',
        title: 'AI Weight and Quality Detection for Crops',
        description: 'AI uses cameras and sensors to measure crop weight and quality correctly so farmers get fair payment.'
      },
      {
        id: 'ag-3',
        title: 'AI Fertilizer and Crop Recommendation System',
        description: 'AI suggests which crop and fertilizer to use based on soil and weather conditions.'
      },
      {
        id: 'ag-4',
        title: 'AI Chatbot in Local Languages for Farmers',
        description: 'Farmers can ask farming questions in Kannada and get instant answers.'
      },
      {
        id: 'ag-5',
        title: 'AI Supply Chain and Storage Management',
        description: 'AI helps farmers store crops safely and choose the best time to sell them.'
      }
    ]
  },
  {
    id: 'karnataka',
    title: 'AI for Karnataka (AI-enabled State)',
    gradient: 'from-red-500 to-orange-400',
    icon: '🏛️',
    topics: [
      {
        id: 'ka-1',
        title: 'AI Healthcare Kiosks in Rural Karnataka',
        description: 'Small health centers with AI can check basic health problems in villages using simple language.'
      },
      {
        id: 'ka-2',
        title: 'AI Skill Training Centers in Colleges and ITIs',
        description: 'Students and youth can learn AI and digital skills for future jobs.'
      },
      {
        id: 'ka-3',
        title: 'AI for Women Safety and Crime Detection',
        description: 'AI cameras and alert systems help prevent crimes and protect women in public places.'
      },
      {
        id: 'ka-4',
        title: 'AI Tourism Guide App for Karnataka',
        description: 'AI helps tourists by giving information about places, language, and culture of Karnataka.'
      },
      {
        id: 'ka-5',
        title: 'Government AI Innovation Labs and Startup Support',
        description: 'Government supports students and startups to build new AI solutions.'
      }
    ]
  },
  {
    id: 'bharat',
    title: 'AI for Viksit Bharat',
    gradient: 'from-indigo-600 to-purple-500',
    icon: '🇮🇳',
    topics: [
      {
        id: 'vb-1',
        title: 'AI Healthcare for Rural India',
        description: 'AI helps doctors treat patients in villages using online health services.'
      },
      {
        id: 'vb-2',
        title: 'AI for Women Safety and Smart Surveillance',
        description: 'AI monitors public areas and sends alerts during danger situations.'
      },
      {
        id: 'vb-3',
        title: 'AI for Environmental Protection and Pollution Control',
        description: 'AI checks air and water pollution and helps protect nature.'
      },
      {
        id: 'vb-4',
        title: 'AI-powered Smart Transportation System',
        description: 'AI controls traffic and reduces accidents.'
      },
      {
        id: 'vb-5',
        title: 'AI-based Smart Manufacturing and Industry Growth',
        description: 'AI improves factory production and creates more jobs.'
      }
    ]
  }
];
