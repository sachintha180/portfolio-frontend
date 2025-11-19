import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import RegisterModal from "@/components/cs-class/RegisterModal";

export default function Register() {
  return (
    <section className="flex-1 flex flex-col gap-5 mx-5 md:mx-15 my-10">
      {/* Header */}
      <Header title="cs class" subtitle="notes, videos, and more" />

      {/* Seperator */}
      <Seperator />

      {/* Register Modal */}
      <div className="flex-1 flex items-center justify-center">
        <RegisterModal />
      </div>
    </section>
  );
}
