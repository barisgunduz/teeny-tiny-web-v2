"use client";

import Image from "next/image";
import jsQR from "jsqr";
import QRCode from "qrcode";
import { Download, Upload } from "lucide-react";
import { useEffect, useId, useMemo, useState } from "react";
import type { ChangeEvent } from "react";

import { CodeEditorTextarea } from "@/components/tools/CodeEditorTextarea";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolPanel, ToolShell } from "@/components/tools/ToolShell";

const SAMPLE_TEXT = "https://teenytinyweb.com/tools/qr-code-generator-reader";

type DecodedQrResult = {
  text: string;
  width: number;
  height: number;
};

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Unable to load the selected image."));
    image.src = src;
  });
}

async function decodeQrFromDataUrl(dataUrl: string) {
  const image = await loadImage(dataUrl);
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Unable to create a canvas context for QR reading.");
  }

  context.drawImage(image, 0, 0);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const decoded = jsQR(imageData.data, imageData.width, imageData.height);

  if (!decoded) {
    throw new Error("No QR code was detected in the uploaded image.");
  }

  return {
    text: decoded.data,
    width: imageData.width,
    height: imageData.height
  } satisfies DecodedQrResult;
}

function getDownloadFilename(text: string) {
  const slug = text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

  return `${slug || "ttw-qr-code"}.png`;
}

export function QRCodeGeneratorReaderTool() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [qrError, setQrError] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImageName, setUploadedImageName] = useState("");
  const [decodedText, setDecodedText] = useState("");
  const [readerError, setReaderError] = useState("");
  const [decodedMeta, setDecodedMeta] = useState<{ width: number; height: number } | null>(null);
  const uploadId = useId();

  useEffect(() => {
    let cancelled = false;

    async function generateQrCode() {
      const trimmed = text.trim();

      if (!trimmed) {
        setQrDataUrl("");
        setQrError("Enter text or a URL to generate a QR code.");
        return;
      }

      try {
        const nextDataUrl = await QRCode.toDataURL(trimmed, {
          errorCorrectionLevel: "M",
          margin: 1,
          scale: 8,
          color: {
            dark: "#0a0a0a",
            light: "#ffffff"
          }
        });

        if (!cancelled) {
          setQrDataUrl(nextDataUrl);
          setQrError("");
        }
      } catch (error) {
        if (!cancelled) {
          setQrDataUrl("");
          setQrError(error instanceof Error ? error.message : "Unable to generate QR code");
        }
      }
    }

    generateQrCode();

    return () => {
      cancelled = true;
    };
  }, [text]);

  useEffect(() => {
    return () => {
      if (uploadedImageUrl) {
        URL.revokeObjectURL(uploadedImageUrl);
      }
    };
  }, [uploadedImageUrl]);

  const stats = useMemo(() => ({
    characters: text.length,
    decodedLength: decodedText.length
  }), [decodedText.length, text.length]);

  async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl);
    }

    setUploadedImageUrl(objectUrl);
    setUploadedImageName(file.name);
    setReaderError("");

    try {
      const fileReader = new FileReader();
      const dataUrl = await new Promise<string>((resolve, reject) => {
        fileReader.onload = () => resolve(String(fileReader.result || ""));
        fileReader.onerror = () => reject(new Error("Unable to read the uploaded image."));
        fileReader.readAsDataURL(file);
      });
      const decoded = await decodeQrFromDataUrl(dataUrl);
      setDecodedText(decoded.text);
      setDecodedMeta({ width: decoded.width, height: decoded.height });
    } catch (error) {
      setDecodedText("");
      setDecodedMeta(null);
      setReaderError(error instanceof Error ? error.message : "Unable to read QR code from image");
    }
  }

  function handleDownload() {
    if (!qrDataUrl) {
      return;
    }

    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = getDownloadFilename(text);
    link.click();
  }

  return (
    <ToolShell
      title="QR Code Generator / Reader"
      description="Generate QR codes from text or URLs and read QR codes back from uploaded images without leaving the browser."
    >
      <div className="rounded-2xl border border-[#1b3046] bg-[#0b1018] p-4 text-sm text-[#bfdbfe]">
        QR generation and image reading happen locally in your browser. Uploaded images and encoded content are not sent to our servers.
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setText(SAMPLE_TEXT)}
          className="rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
        >
          Load sample
        </button>
        <CopyButton value={text} label="Copy content" />
        <button
          type="button"
          onClick={handleDownload}
          disabled={!qrDataUrl}
          className="inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#111113] px-3 py-2 text-xs font-medium text-[#d4d4d8] transition hover:border-[#3f3f46] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Download PNG</span>
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ToolPanel title="Generate QR" tone={qrError ? "rose" : "blue"}>
          <div className="space-y-4">
            <CodeEditorTextarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              heightClassName="h-[220px]"
              error={Boolean(qrError)}
              placeholder="Enter text, a URL, or any short value to encode"
            />
            {qrError ? <p className="text-sm text-[#fecaca]">{qrError}</p> : null}
            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <div className="flex items-center justify-center rounded-2xl border border-[#27272a] bg-white p-4">
                {qrDataUrl ? <Image src={qrDataUrl} alt="Generated QR code" width={176} height={176} unoptimized className="h-44 w-44" /> : <div className="text-sm text-[#71717a]">QR preview</div>}
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Character count</div>
                  <div className="mt-2 font-mono text-sm text-[#bfdbfe]">{stats.characters}</div>
                </div>
                <div className="rounded-xl border border-[#1b3046] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Status</div>
                  <div className="mt-2 text-sm text-[#bfdbfe]">{qrError ? "QR code is waiting for valid input." : "QR code generated locally and ready to download."}</div>
                </div>
              </div>
            </div>
          </div>
        </ToolPanel>

        <ToolPanel title="Read QR from image" tone={readerError ? "rose" : decodedText ? "green" : "default"}>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <label
                htmlFor={uploadId}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#27272a] bg-[#0d0d0f] px-4 py-2 text-sm text-[#c4c4cb] transition hover:border-[#3f3f46] hover:text-white"
              >
                <Upload className="h-4 w-4" />
                <span>Upload image</span>
              </label>
              <input
                id={uploadId}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/gif"
                onChange={handleImageUpload}
                className="hidden"
              />
              <CopyButton value={decodedText} label="Copy decoded text" />
            </div>

            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-[#27272a] bg-black/20 p-3">
                {uploadedImageUrl ? (
                  <Image src={uploadedImageUrl} alt="Uploaded QR code" width={196} height={196} unoptimized className="max-h-[196px] w-auto rounded-xl object-contain" />
                ) : (
                  <p className="px-4 text-center text-sm text-[#71717a]">Upload a QR image to decode its content.</p>
                )}
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-[#16341d] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Image</div>
                  <div className="mt-2 font-mono text-sm text-[#bbf7d0] break-all">{uploadedImageName || "No image uploaded yet"}</div>
                </div>
                <div className="rounded-xl border border-[#16341d] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Dimensions</div>
                  <div className="mt-2 font-mono text-sm text-[#bbf7d0]">{decodedMeta ? `${decodedMeta.width} x ${decodedMeta.height}` : "-"}</div>
                </div>
                <div className="rounded-xl border border-[#16341d] bg-black/10 p-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#71717a]">Decoded length</div>
                  <div className="mt-2 font-mono text-sm text-[#bbf7d0]">{stats.decodedLength}</div>
                </div>
              </div>
            </div>

            <CodeEditorTextarea
              readOnly
              value={readerError || decodedText}
              heightClassName="h-[220px]"
              error={Boolean(readerError)}
              placeholder="Decoded text will appear here"
            />
          </div>
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
