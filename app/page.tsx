import HeroSection from '../components/home/HeroSection';
import FounderHighlights from '../components/home/FounderHighlights';
import InclusiveFocus from '../components/home/InclusiveFocus';
import TestimonialsPreview from '../components/home/TestimonialsPreview';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FounderHighlights />
      <InclusiveFocus />
      <TestimonialsPreview />
    </main>
  );
}
