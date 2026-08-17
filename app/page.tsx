import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ValueStrip } from "@/components/value-strip";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Privacy } from "@/components/privacy";
import { Faq } from "@/components/faq";
import { DownloadCta } from "@/components/download-cta";
import { Footer } from "@/components/footer";
import { getRelease } from "@/lib/release";
import { GITHUB_REPO } from "@/lib/site";

export default async function Home() {
  const release = await getRelease();
  const githubRepo = GITHUB_REPO || undefined;

  return (
    <>
      <Nav downloadUrl={release.url} />
      <main>
        <Hero downloadUrl={release.url} />
        <ValueStrip />
        <HowItWorks />
        <Features />
        <Privacy />
        <Faq />
        <DownloadCta release={release} githubRepo={githubRepo} />
      </main>
      <Footer githubRepo={githubRepo} />
    </>
  );
}
