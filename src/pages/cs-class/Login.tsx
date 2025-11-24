import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import LoginModal from "@/components/cs-class/LoginModal";

export default function Login() {
  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header title="cs class" subtitle="notes, videos, and more" />

      {/* Seperator */}
      <Seperator />

      {/* Login Modal */}
      <div className="flex flex-1 items-center justify-center">
        <LoginModal />
      </div>
    </section>
  );
}
