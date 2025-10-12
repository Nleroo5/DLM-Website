'use client';

import { useState } from 'react';

export default function ImageUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });

      const data = await response.json();
      setUploadedUrl(data.url);
      console.log('Uploaded to:', data.url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
      {uploadedUrl && (
        <div>
          <p>Upload successful!</p>
          <img src={uploadedUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />
          <p>URL: {uploadedUrl}</p>
        </div>
      )}
    </div>
  );
}
