import { deliverables } from "@/data/mock-user";
import { DeliverableDetail } from "@/components/sostac/deliverables/deliverable-detail";

interface DeliverableDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DeliverableDetailPage({ params }: DeliverableDetailPageProps) {
  const { id } = await params;

  const deliverable = deliverables.find((d) => d.id === id);

  if (!deliverable) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-[#9CA3AF]">Entregable no encontrado.</p>
      </div>
    );
  }

  return <DeliverableDetail deliverable={deliverable} />;
}
