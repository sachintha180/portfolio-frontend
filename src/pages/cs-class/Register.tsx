import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import RegisterModal from "@/components/cs-class/RegisterModal";

export default function Register() {
  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header title="cs class" subtitle="notes, videos, and more" />

      {/* Seperator */}
      <Seperator />

      {/* Register Modal */}
      <div className="flex flex-1 items-center justify-center">
        <RegisterModal />
      </div>
    </section>
  );
}
