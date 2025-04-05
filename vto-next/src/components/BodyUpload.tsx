'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface BodyUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BodyUpload({ onChange }: BodyUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewUrl(fileUrl);
    }
    onChange(e);
  };

  return (
    <div className="rectangle-body" id="body-box">
      <div className="body-inner">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          ref={fileInputRef}
        />

        {previewUrl ? (
          <div className="relative w-40 h-40 mt-2">
            <Image
              src={previewUrl}
              alt="Uploaded body"
              fill
              className="object-cover rounded"
            />
          </div>
        ) : (
          <span style={{ fontSize: '28px', color: 'deeppink' }}>⬆️</span>
        )}
      </div>
    </div>
  );
}
