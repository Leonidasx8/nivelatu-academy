import { SaasLayout } from "@/components/layouts/saas-layout";

export default function SaasRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SaasLayout>{children}</SaasLayout>;
}
