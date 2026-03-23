import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { getBrandImagesExcluding } from "@/lib/brandImages";

function BigTile({
  title,
  subtitle,
  imageSrc,
  accent,
}: {
  title: string;
  subtitle: string;
  imageSrc?: string;
  accent: "rose" | "mint";
}) {
  const bg =
    accent === "mint"
      ? "linear-gradient(160deg, rgba(16, 78, 70, 0.86) 0%, rgba(77, 137, 128, 0.88) 100%)"
      : "linear-gradient(160deg, rgba(219, 122, 155, 0.78) 0%, rgba(160, 95, 126, 0.84) 100%)";

  return (
    <article className="soft-panel overflow-hidden p-0">
      <div className="relative min-h-[280px] sm:min-h-[310px]">
        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rose-paper/10 via-transparent to-rose-paper/35" />
          </>
        ) : (
          <div className="absolute inset-0" style={{ background: bg }} />
        )}

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <p className="kicker">Collection</p>
          <h3 className="mt-2 font-display text-[2rem] leading-tight text-white drop-shadow-[0_2px_16px_rgba(20,15,18,0.35)]">
            {title}
          </h3>
          <p className="mt-3 max-w-[42ch] text-sm leading-6 text-white/90">
            {subtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" className="btn-primary">
              View
            </button>
            <button
              type="button"
              className="btn-ghost"
              style={{
                borderColor: "rgba(255,255,255,0.42)",
                color: "#ffffff",
                background: "rgba(255,255,255,0.14)",
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function CollectionsPage() {
  const panelImages = await getBrandImagesExcluding([
    "logo-bg.png",
    "reference-layout.png",
    "herosection.png",
  ]);

  const heroTiles = [
    {
      title: "Pipe Cleaner Creations",
      subtitle: "Playful, handcrafted pieces made for smile-worthy gifting.",
      imageSrc: panelImages[0],
      accent: "rose" as const,
    },
    {
      title: "Occasion Hampers",
      subtitle: "Thoughtful bundles for celebrations, weddings, and milestones.",
      imageSrc: panelImages[3],
      accent: "mint" as const,
    },
    {
      title: "Your Signature Phone Case",
      subtitle: "Turn your memories into a keepsake you’ll reach for every day.",
      imageSrc: panelImages[6],
      accent: "rose" as const,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-rose-paper">
      <Navbar />
      <main className="site-shell pb-16 pt-16 sm:pt-16">
        <SectionTitle
          title="Collections"
          subtitle="Curated categories with an elevated handcrafted feel."
          centered={false}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {heroTiles.map((tile) => (
            <BigTile
              key={tile.title}
              title={tile.title}
              subtitle={tile.subtitle}
              imageSrc={tile.imageSrc}
              accent={tile.accent}
            />
          ))}
        </div>

        <section className="mt-12">
          <div className="soft-panel p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center">
              <div>
                <p className="kicker">Signature styling</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-rose-ink">
                  Designed like a premium brand.
                </h2>
                <p className="mt-4 text-sm leading-7 text-rose-muted max-w-[62ch]">
                  Soft materials, refined spacing, and an editorial layout—so every collection
                  feels like it belongs on a modern luxury storefront.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[1rem] border border-rose-line/70 bg-white/60">
                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(253,238,245,1),transparent_55%),radial-gradient(500px_circle_at_90%_30%,rgba(222,238,232,0.9),transparent_55%)]" />
                <div className="relative p-6">
                  <p className="kicker">Bespoke</p>
                  <h3 className="mt-2 font-display text-3xl leading-tight text-rose-ink">
                    Mix & match.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-rose-muted">
                    Share a vibe—get a curated combination of pieces.
                  </p>
                  <button type="button" className="btn-primary mt-5">
                    Start a request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

