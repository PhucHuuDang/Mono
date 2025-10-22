// import { PlateEditor } from "@/components/editor/plate-editor";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () =>
    import("@/components/editor/plate-editor").then((mod) => mod.PlateEditor),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Page() {
  return (
    <div className="h-screen w-full">
      <Editor />
    </div>
  );
}
