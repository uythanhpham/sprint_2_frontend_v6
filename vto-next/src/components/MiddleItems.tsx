'use client';

export default function MiddleItems() {
  return (
    <div className="middle-items">
      <div className="square">
        <div className="item-inner">
          Item 1
          <input
            type="file"
            accept="image/*"
            onChange={(e) => previewImage(e, 'item1-img')}
          />
          <img id="item1-img" style={{ display: 'none' }} />
        </div>
      </div>

      <div className="square">
        <div className="item-inner">
          Item 2<br />(Optional)
          <input
            type="file"
            accept="image/*"
            onChange={(e) => previewImage(e, 'item2-img')}
          />
          <img id="item2-img" style={{ display: 'none' }} />
        </div>
      </div>

      <div
        className="square solid-border"
        onClick={() =>
          (window.location.href =
            'https://uythanhpham.github.io/sprint_1_frontend_v4/index.html')
        }
      >
        👚 Choose Clothes
      </div>
    </div>
  );
}

function previewImage(event: React.ChangeEvent<HTMLInputElement>, imgId: string) {
  const file = event.target.files?.[0];
  const img = document.getElementById(imgId) as HTMLImageElement;
  if (file && img) {
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
      img.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}
