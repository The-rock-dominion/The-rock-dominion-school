import HeroSection from "@/components/heroSection"
import SchoolSection from "@/components/schoolSection"
import WaveDivider from "@/components/waveDivider"
import EPortal from "@/components/e-Portal"
import Testimonial from "@/components/Testimonial"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SchoolSection />
      <WaveDivider inverted />
      <EPortal/>
      <Testimonial/>
    </>
  )
}

