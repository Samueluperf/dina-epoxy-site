
import React from 'react';
import { Layers, Shield, Droplets, Zap, Factory, Construction, Truck, Settings, CircleDot, Wind, Hammer, Eraser } from 'lucide-react';
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'microbillage',
    title: 'Microbillage',
    description: 'Nettoyage de précision et finition satinée pour pièces délicates (Alu, Inox).',
    icon: 'CircleDot'
  },
  {
    id: 'thermolaquage',
    title: 'Thermolaquage',
    description: 'Peinture poudre haute résistance cuite au four pour une longévité maximale.',
    icon: 'Zap'
  },
  {
    id: 'sablage',
    title: 'Sablage',
    description: 'Décapage par projection d\'abrasifs pour éliminer rouille et anciennes peintures.',
    icon: 'Wind'
  },
  {
    id: 'grenaillage',
    title: 'Grenaillage',
    description: 'Préparation de surface haute performance pour structures industrielles lourdes.',
    icon: 'Hammer'
  },
  {
    id: 'decapage',
    title: 'Décapage & Anticorrosion',
    description: 'Élimination des revêtements et protection renforcée contre l\'oxydation.',
    icon: 'Eraser'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Charpentes Métalliques Industrielles',
    category: 'Industrie',
    description: 'Traitement anticorrosion complet et peinture liquide sur structures de grande portée.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    seoKeywords: ['peinture industrielle', 'anticorrosion', 'charpente métallique']
  },
  {
    id: '2',
    title: 'Restauration Mobilier Urbain',
    category: 'Collectivités',
    description: 'Thermolaquage haute résistance sur bancs et barrières pour une durabilité maximale.',
    image: 'https://images.unsplash.com/photo-1544390544-77a8344e137b?auto=format&fit=crop&q=80&w=800',
    seoKeywords: ['thermolaquage', 'mobilier urbain', 'rénovation métal']
  },
  {
    id: '3',
    title: 'Pièces de Serrurerie Fine',
    category: 'Bâtiment',
    description: 'Finition esthétique homogène sur garde-corps et portails en aluminium.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    seoKeywords: ['serrurerie', 'peinture poudre', 'finition métal']
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'Layers': return <Layers className="w-6 h-6" />;
    case 'Droplets': return <Droplets className="w-6 h-6" />;
    case 'Shield': return <Shield className="w-6 h-6" />;
    case 'Factory': return <Factory className="w-6 h-6" />;
    case 'CircleDot': return <CircleDot className="w-6 h-6" />;
    case 'Wind': return <Wind className="w-6 h-6" />;
    case 'Hammer': return <Hammer className="w-6 h-6" />;
    case 'Eraser': return <Eraser className="w-6 h-6" />;
    default: return <Settings className="w-6 h-6" />;
  }
};
