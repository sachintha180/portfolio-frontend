import UploadItem from "@/components/ui/upload-item";

export default function RecentUploads() {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-secondary text-2xl mb-5">recent uploads</h3>
      <div className="space-y-2">
        <UploadItem
          type="note"
          url="https://www.google.com"
          title="Syllabus Notes.pdf"
          itemCategoryLabel="Edexcel IGCSE CS (4CP0)"
          relativeUploadTime="2 hrs ago"
        />
        <UploadItem
          type="video"
          url="https://www.google.com"
          title="Lecture1.mp4"
          itemCategoryLabel="Cambridge OL CS (2210)"
          relativeUploadTime="4 hrs ago"
        />
        <UploadItem
          type="code"
          url="https://www.google.com"
          title="BubbleSort.py"
          itemCategoryLabel="Edexcel IGCSE ICT (41T1)"
          relativeUploadTime="1 day ago"
        />
        <UploadItem
          type="quiz"
          url="https://www.google.com"
          title="Mock Quiz"
          itemCategoryLabel="Edexcel IAL IT (X/YIT11)"
          relativeUploadTime="5 days ago"
        />
      </div>
    </section>
  );
}
