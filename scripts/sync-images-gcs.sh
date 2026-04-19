#!/bin/bash

# Google Cloud Storage Image Sync Script
# Usage: ./scripts/sync-images-gcs.sh <bucket-name>

BUCKET_NAME=$1

if [ -z "$BUCKET_NAME" ]; then
  echo "Usage: ./scripts/sync-images-gcs.sh <bucket-name>"
  exit 1
fi

echo "Syncing public/assets/images to GCS bucket: gs://$BUCKET_NAME..."

# Ensure we are in the root directory
# Sync public/assets/images to the bucket
# We prefix with assets/images so it matches the path expected by the loader
gcloud storage cp -r public/assets/images/* gs://$BUCKET_NAME/assets/images/

echo "Sync complete!"
echo "Make sure to set the bucket or objects to publicly readable, or use Cloud CDN."
