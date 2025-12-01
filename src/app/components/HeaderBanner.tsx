import Image from "next/image";

type HeaderBannerProps = {
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export default function HeaderBanner({
  className,
  children,
}: HeaderBannerProps) {
  return (
    <section className={`flex-col px-8 md:px-32 lg:px-42 w-full h-[100svh] items-start justify-center flex ${className}`}>
        <Image src="/brand-icons/three-icons.svg" alt="Spark Brand Icons" width={144} height={42} className="mb-4" />
      {children}
    </section>
  );
}
