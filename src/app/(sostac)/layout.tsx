import { SostacLayout } from "@/components/layouts/sostac-layout";

export default function SostacRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SostacLayout>{children}</SostacLayout>;
}
