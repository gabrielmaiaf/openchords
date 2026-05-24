import { lazy, Suspense } from "react";

const Monaco = lazy(() => import("@monaco-editor/react"));

type Props = {
  value: string;
  onChange: (v: string) => void;
  height?: string | number;
};

export function ChordProEditor({ value, onChange, height = "60vh" }: Props) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center bg-muted text-sm text-muted-foreground"
            style={{ height }}
          >
            Loading editor…
          </div>
        }
      >
        <Monaco
          height={height}
          defaultLanguage="plaintext"
          theme="vs-dark"
          value={value}
          onChange={(v) => onChange(v ?? "")}
          options={{
            fontSize: 14,
            wordWrap: "on",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: "on",
            automaticLayout: true,
          }}
        />
      </Suspense>
    </div>
  );
}
