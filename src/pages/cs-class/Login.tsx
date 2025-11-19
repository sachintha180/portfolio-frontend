import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import LoginModal from "@/components/cs-class/LoginModal";

export default function Login() {
  return (
    <section className="flex-1 flex flex-col gap-5 mx-5 md:mx-15 my-10">
      {/* Header */}
      <Header title="cs class" subtitle="notes, videos, and more" />

      {/* Seperator */}
      <Seperator />

      {/* Login Modal */}
      <div className="flex-1 flex items-center justify-center">
        <LoginModal />
      </div>
    </section>
  );
}
