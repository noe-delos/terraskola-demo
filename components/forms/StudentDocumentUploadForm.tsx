/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */

// components/forms/StudentDocumentUploadForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
  FileText,
  Upload,
  Loader2,
  CheckCircle2,
  XCircle,
  Image,
  FileCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface StudentDocumentUploadFormProps {
  studentId: string;
  studentName: string;
}

export function StudentDocumentUploadForm({
  studentId,
  studentName,
}: StudentDocumentUploadFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileStatuses, setFileStatuses] = useState<{
    [filename: string]: "pending" | "success" | "error";
  }>({});
  const router = useRouter();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    onDrop: (acceptedFiles) => {
      // Count PDF and image files
      const pdfs = acceptedFiles.filter(
        (file) => file.type === "application/pdf"
      );
      const images = acceptedFiles.filter(
        (file) =>
          file.type === "image/jpeg" ||
          file.type === "image/jpg" ||
          file.type === "image/png"
      );

      // Check if we exceed limits
      if (pdfs.length > 2) {
        toast.error(
          "Vous ne pouvez pas télécharger plus de 2 fichiers PDF à la fois."
        );
        return;
      }

      if (images.length > 5) {
        toast.error(
          "Vous ne pouvez pas télécharger plus de 5 images à la fois."
        );
        return;
      }

      // Initialize status for each file
      const initialStatuses: {
        [filename: string]: "pending" | "success" | "error";
      } = {};
      acceptedFiles.forEach((file) => {
        initialStatuses[file.name] = "pending";
      });

      setFiles(acceptedFiles);
      setFileStatuses(initialStatuses);
    },
    multiple: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (files.length === 0) {
      toast.error("Veuillez ajouter au moins un fichier");
      return;
    }

    setIsUploading(true);
    setCurrentFileIndex(0);
    setUploadProgress(0);

    try {
      // Process each file one by one
      for (let i = 0; i < files.length; i++) {
        setCurrentFileIndex(i);
        const file = files[i];

        // Create a new FormData for each file
        const formData = new FormData();
        formData.append("studentId", studentId);
        formData.append("file", file);

        try {
          // Upload the file
          const response = await fetch("/api/student-documents", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            const error = await response.json();
            throw new Error(
              error.message || `Erreur lors de l'upload du fichier ${file.name}`
            );
          }

          // Update status for this file
          setFileStatuses((prev) => ({
            ...prev,
            [file.name]: "success",
          }));
        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error);

          // Update status for this file
          setFileStatuses((prev) => ({
            ...prev,
            [file.name]: "error",
          }));

          // Show error toast but continue with next file
          toast.error(
            `Problème avec le fichier ${file.name}: ${
              error instanceof Error ? error.message : "Erreur inconnue"
            }`
          );
        }

        // Update progress
        setUploadProgress(Math.round(((i + 1) / files.length) * 100));
      }

      // Final success message
      const successCount = Object.values(fileStatuses).filter(
        (status) => status === "success"
      ).length;
      toast.success(
        `${successCount} sur ${files.length} fichiers ont été traités avec succès.`
      );

      // Redirect after all files are processed
      router.push("/students");
      router.refresh();
    } catch (error) {
      console.error("Error in upload process:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue pendant le téléchargement"
      );
    } finally {
      setIsUploading(false);
    }
  };

  const getFileTypeCount = () => {
    const pdfs = files.filter((file) => file.type === "application/pdf").length;
    const images = files.filter(
      (file) =>
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png"
    ).length;

    return `${pdfs} PDF${pdfs !== 1 ? "s" : ""}, ${images} image${
      images !== 1 ? "s" : ""
    }`;
  };

  const getFileStatusIcon = (status: "pending" | "success" | "error") => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Copies pour {studentName}
            </h2>
            <p className="text-sm text-gray-500">
              Ajoutez les copies ou images de l'élève pour analyse. Maximum 2
              PDF et 5 images.
            </p>
          </div>

          <div
            {...getRootProps()}
            className={`mt-1 cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors
              ${
                isDragActive
                  ? "border-[#1C352A] bg-[#1C352A]/5"
                  : "border-gray-300 hover:bg-gray-50"
              }
              ${isUploading ? "pointer-events-none opacity-60" : ""}`}
          >
            <input {...getInputProps()} disabled={isUploading} />
            <div className="flex flex-col items-center">
              <FileText className="mb-2 h-10 w-10 text-gray-400" />
              {files.length > 0 ? (
                <div className="w-full">
                  <p className="mb-2 text-sm font-medium text-gray-900">
                    {files.length} fichier(s) sélectionné(s) (
                    {getFileTypeCount()})
                  </p>
                  <div className="max-h-40 overflow-y-auto text-left">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="mb-1 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center flex-1 truncate">
                          {file.type === "application/pdf" ? (
                            <FileCode className="mr-2 h-4 w-4 text-red-500" />
                          ) : (
                            <Image className="mr-2 h-4 w-4 text-blue-500" />
                          )}
                          {file.name} ({(file.size / 1024 / 1024).toFixed(2)}{" "}
                          MB)
                        </div>
                        {getFileStatusIcon(fileStatuses[file.name])}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-sm font-medium text-gray-900">
                    {isDragActive
                      ? "Déposez les fichiers ici"
                      : "Cliquez ou glissez des fichiers"}
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF (max. 2), JPG ou PNG (max. 5) - 32MB par fichier
                  </p>
                </>
              )}
            </div>
          </div>

          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>
                  Traitement en cours ({currentFileIndex + 1}/{files.length})
                </span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-xs text-gray-500">
                Traitement de: {files[currentFileIndex]?.name}
              </p>
            </div>
          )}
        </div>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/students")}
          disabled={isUploading}
        >
          Annuler
        </Button>
        <Button
          type="submit"
          className="bg-[#1C352A] hover:bg-[#152920]"
          disabled={isUploading || files.length === 0}
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Traitement en cours...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Télécharger {files.length > 0 ? `(${files.length})` : ""}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
