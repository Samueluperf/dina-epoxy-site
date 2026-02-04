
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  seoKeywords: string[];
  fullCaseStudy?: string;
}

export interface SEOData {
  title: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
