
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        title="High Entropy Output"
        description="Achieves 7.99998 bits/byte randomness, ensuring near-perfect unpredictability and eliminating patterns that could be exploited in cryptographic attacks."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        title="Avalanche Effect"
        description="With a 50.18% bit-change propagation, a single-bit modification in input results in a drastically different output, enhancing diffusion and security against differential cryptanalysis."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        title="Extreme Key Sensitivity"
        description="A 50.54% ciphertext difference per single-bit key change ensures minimal predictability, preventing attackers from deriving the original key even with minor variations."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        title="Secure Key Expansion"
        description="Utilizes HKDF (HMAC-based Key Derivation Function) with BLAKE2b to generate cryptographic keys that are resistant to brute-force attacks and key recovery techniques."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        title="XChaCha20 Stream Encryption"
        description="Employs XChaCha20 with a 192-bit nonce for enhanced resistance to replay attacks, coupled with HMAC-SHA256 for robust message authentication and integrity verification."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  title: string;
  description: string;
}

const GridItem = ({ area, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-[#030405]">
        <GlowingEffect
          spread={50} /* Keeps glow effect localized */
          glow={true}
          disabled={false}
          proximity={32} /* Reducing to make glow more concentrated */
          inactiveZone={0.01}
           /* Increasing glow brightness */
           /* Optional: Adjust glow color */
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/10 p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
                md:text-base/[1.375rem] text-white"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
