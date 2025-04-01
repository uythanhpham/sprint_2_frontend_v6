'use client';

interface BodyUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BodyUpload({ onChange }: BodyUploadProps) {
  return (
    <div className="rectangle-body" id="body-box">
      <div className="body-inner">
        <input type="file" accept="image/*" onChange={onChange} />
        <img id="body-box-img" style={{ display: 'none' }} />
        <span style={{ fontSize: "28px", color: "deeppink" }}>⬆️</span>
      </div>
    </div>
  );
}
