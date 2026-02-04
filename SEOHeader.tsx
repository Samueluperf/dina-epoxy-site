
import React, { useEffect } from 'react';
import { SEOData } from '../types';

interface SEOHeaderProps {
  data: SEOData | null;
  defaultTitle: string;
}

const SEOHeader: React.FC<SEOHeaderProps> = ({ data, defaultTitle }) => {
  useEffect(() => {
    if (data) {
      document.title = data.title;
      // In a real SPA, you'd use react-helmet, but here we update DOM manually for simplicity
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', data.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = data.metaDescription;
        document.head.appendChild(meta);
      }
    } else {
      document.title = defaultTitle;
    }
  }, [data, defaultTitle]);

  return null;
};

export default SEOHeader;
